import MagneticForecastChart from '../MagneticForecastChart/MagneticForecastChart'
import styles from './forecastMagneticSection.module.scss'

const ForecastMagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <MagneticForecastChart />
    </section>
  )
}

export default ForecastMagneticSection