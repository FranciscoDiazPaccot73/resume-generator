import styles from './Stepper.module.scss';

const Stepper = ({ activeStep = 'config' }) => {
  return (
    <div className={`${styles.wrapper} ${styles.option1} ${styles.option11} mb-5`}>
      <ol className={styles.cstepper}>
        <li className={`${styles.cstepperItem} ${activeStep === 'config' ? styles.active : ''}`}>
          <h3 className={styles.cstepperTitle}>Configuration</h3>
        </li>
        <li className={`${styles.cstepperItem} ${activeStep === 'head' ? styles.active : ''}`}>
          <h3 className={styles.cstepperTitle}>Heading</h3>
        </li>
        <li className={`${styles.cstepperItem} ${activeStep === 'work' ? styles.active : ''}`}>
          <h3 className={styles.cstepperTitle}>Work History</h3>
        </li>
        <li className={`${styles.cstepperItem} ${activeStep === 'education' ? styles.active : ''}`}>
          <h3 className={styles.cstepperTitle}>Education</h3>
        </li>
        <li className={`${styles.cstepperItem} ${activeStep === 'skills' ? styles.active : ''}`}>
          <h3 className={styles.cstepperTitle}>Skills</h3>
        </li>
      </ol>
    </div>
  )
}

export default Stepper;
