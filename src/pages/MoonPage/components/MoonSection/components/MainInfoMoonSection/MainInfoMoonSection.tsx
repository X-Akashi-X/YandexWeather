import CurrentMoonSection from './components/CurrentMoonSection/CurrentMoonSection'
import styles from './MainInfoMoonSection.module.scss'

const MainInfoMoonSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <CurrentMoonSection />
    </section>
  )
}

export default MainInfoMoonSection