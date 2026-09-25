import { useSyncCity } from "@hooks/useSyncCity"
import { Outlet } from "react-router"

const CityLayout = () => {
  useSyncCity()
  return <Outlet />
}

export default CityLayout