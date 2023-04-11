import styles from './Stepper.module.scss';

const Stepper = ({ activeStep = 'config', steps }) => {
  return (
    <div className={`${styles.wrapper} ${styles.option1} ${styles.option11} mb-5`}>
      <ol className={styles.cstepper}>
        {steps.map(({ id, label }, index) => {
          const shouldActive = steps?.map(e => e.id).indexOf(activeStep) >= index;

          
          return (
            <li key={id} className={`${styles.cstepperItem} ${shouldActive ? styles.active : ''}`}>
              <h3 className={styles.cstepperTitle}>{label}</h3>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Stepper;
