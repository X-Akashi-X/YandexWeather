import DetailedForecast from "@components/DetailedForecast/DetailedForecast"
import styles from "./mainTenDaysSection.module.scss"

const TenDaysForecastSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <DetailedForecast />
    </section>
  )
}

export default TenDaysForecastSection