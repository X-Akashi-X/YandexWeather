import CurrentFeelings from './components/CurrentFeelingsMagnetic/CurrentFeelingsMagnetic'
import styles from './mainInfoMagneticSection.module.scss'

const MainInfoMagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentFeelings />
    </section>
  )
}

export default MainInfoMagneticSection