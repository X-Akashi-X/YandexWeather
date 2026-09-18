import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  DEFAULT_MAX_ZOOM,
  DEFAULT_MIN_ZOOM,
  DEFAULT_OPACITY,
  DEFAULT_TILE_SIZE,
  DEFAULT_ZOOM,
} from "@constants/hooks/map";
import { useGetRadarQuery } from "@store/apis/rainViewerApi";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

function useMap(interactive: boolean, classNamePointer: string) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);

  const { data: rainViewerData, isSuccess } = useGetRadarQuery();
  const { lat, lon } = useSelector((state: RootState) => state.geo);

  const lastTimestamp =
    rainViewerData?.radar.past[rainViewerData.radar.past.length - 1];
  const tileUrl = lastTimestamp
    ? rainViewerData.host + lastTimestamp.path + "/256/{z}/{x}/{y}/2/1_1.png"
    : undefined;

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [lon, lat],
      zoom: DEFAULT_ZOOM,
      interactive: interactive,
    });

    const pointerElement = document.createElement("div");

    pointerElement.className = classNamePointer;

    marker.current = new maplibregl.Marker({
      element: pointerElement,
      anchor: "bottom",
    })
      .setLngLat([lon, lat])
      .setOffset([0, 75])
      .addTo(map.current);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [interactive, classNamePointer]);

  useEffect(() => {
    const currentMap = map.current;
    if (!currentMap || !isSuccess || !tileUrl) return;
    const addRadarLayer = () => {
      if (currentMap.getSource("rainviewer-radar")) return;

      currentMap.addSource("rainviewer-radar", {
        type: "raster",
        tiles: [tileUrl],
        tileSize: DEFAULT_TILE_SIZE,
      });

      currentMap.addLayer({
        id: "rainviewer-radar",
        type: "raster",
        source: "rainviewer-radar",
        minzoom: DEFAULT_MIN_ZOOM,
        maxzoom: DEFAULT_MAX_ZOOM,
        paint: { "raster-opacity": DEFAULT_OPACITY },
      });
    };

    if (currentMap.isStyleLoaded()) {
      addRadarLayer();
    } else {
      currentMap.on("load", addRadarLayer);
    }
  }, [tileUrl, isSuccess]);

  useEffect(() => {
    if (!map.current || !lat || !lon) return;

    map.current.flyTo({ center: [lon, lat] });

    if (marker.current) {
      marker.current.setLngLat([lon, lat]);
    }
  }, [lat, lon]);

  return { mapContainer };
}

export default useMap;
