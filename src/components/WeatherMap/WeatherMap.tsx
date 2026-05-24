import { useEffect, useRef } from "react";
import axios from "axios";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./weatherMap.module.scss";
import {
  DEFAULT_LAT,
  DEFAULT_LON,
  DEFAULT_ZOOM,
  DEFAULT_TILE_SIZE,
  DEFAULT_MIN_ZOOM,
  DEFAULT_MAX_ZOOM,
  DEFAULT_OPACITY,
} from "./constants";

const WeatherMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [DEFAULT_LON, DEFAULT_LAT],
      zoom: DEFAULT_ZOOM,
    });

    const addLayer = async () => {
      const res = await axios.get(
        "https://api.rainviewer.com/public/weather-maps.json",
      );

      const lastTimestamp = res.data.radar.past[res.data.radar.past.length - 1];

      const tileUrl =
        res.data.host + lastTimestamp.path + "/256/{z}/{x}/{y}/2/1_1.png";

      if (!map.current) return;

      map.current.addSource("rainviewer-radar", {
        type: "raster",
        tiles: [tileUrl],
        tileSize: DEFAULT_TILE_SIZE,
      });

      map.current.addLayer({
        id: "rainviewer-radar",
        type: "raster",
        source: "rainviewer-radar",
        minzoom: DEFAULT_MIN_ZOOM,
        maxzoom: DEFAULT_MAX_ZOOM,
        paint: { "raster-opacity": DEFAULT_OPACITY },
      });

      console.log(lastTimestamp);
    };

    map.current.on("load", addLayer);

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <section>
      <div ref={mapContainer}></div>
      <button>Карта осадков</button>
    </section>
  );
};

export default WeatherMap;
