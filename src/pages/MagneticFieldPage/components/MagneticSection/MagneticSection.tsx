import styles from './magneticSection.module.scss'
import MainInfoMagneticSection from './MainInfoMagneticSection/MainInfoMagneticSection'

const MagneticSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <MainInfoMagneticSection />
    </section>
  )
}

export default MagneticSection