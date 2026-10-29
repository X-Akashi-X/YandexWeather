import CurrentFeelingsPressure from './components/CurrentFeelingsPressure/CurrentFeelingsPressure'
import styles from './mainInfoPressureSection.module.scss'

const MainInfoPressureSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelingsPressure />
    </section>
  )
}

export default MainInfoPressureSection