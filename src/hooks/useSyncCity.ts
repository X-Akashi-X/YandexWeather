import { cities } from "@configs/cities";
import { setCityFromUrl, setGeoData } from "@store/slices/geoSlice";
import type { RootState } from "@store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export const useSyncCity = () => {
  const { cityName } = useParams();
  const { cityUrl } = useSelector((state: RootState) => state.geo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cityName !== cityUrl) {
      dispatch(setCityFromUrl(cityName));
    }
  }, [cityName, cityUrl, dispatch]);

  useEffect(() => {
    if (cityUrl) {
      const targetCity = cities.find((c) => c.id === cityUrl);

      if (targetCity) {
        dispatch(
          setGeoData({
            lat: targetCity.lat,
            lon: targetCity.lon,
            cityUrl: targetCity.id,
            cityName: targetCity.title,
            stationDistance: targetCity.stationDistance,
          }),
        );
      }
    }
  }, [cityUrl, dispatch]);
};
