import { useState } from "react";
import { motion } from "framer-motion";

import Button from './Button';

import { steps } from "@/utils/constants";

import styles from './Stepper.module.scss';

const getButtonNextLabel = (current) => {
  if (current === 'confirm' || !steps) return '';

  const nextIndex = steps?.map(e => e.id).indexOf(current) + 1;

  return steps[nextIndex].label;
}

const Stepper = ({ activeStep, onAction, disabled }) => {
  const [animate, setActivate] = useState(false)
  const [stepLabel, setLabel] = useState(1);

  const handleStepper = (nextStep) => {
    setActivate(prevValue => !prevValue);
    
    setTimeout(() => {
      setActivate(prevValue => !prevValue);
      setLabel(nextStep);
    }, 800);
  }

  const handlePrevStep = (step) => {
    if (step !== 'config') {
      const prevIndex = steps?.map(e => e.id).indexOf(step) - 1;
  
      handleStepper(prevIndex + 1)
      onAction(steps[prevIndex].id)
    }
  }

  const handleNextStep = (step) => {
    if (step !== 'confirm') {
      const nextIndex = steps?.map(e => e.id).indexOf(step) + 1;

      handleStepper(nextIndex + 1)
      onAction(steps[nextIndex].id)
    }
  }

  return (
    <header className={`${styles.wrapper} flex justify-center items-center gap-6 ${disabled ? styles.disabled : ''}`}>
      <motion.div
        className={styles.box}
        animate={animate ? {
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["50%", "50%", "5%", "5%", "50%"]
        } : {}}
        transition={{
          duration: .8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <p>{stepLabel}</p>
      </motion.div>
      <div className='text-white flex items-center'>
        <Button id={activeStep} onClick={handlePrevStep} disabled={activeStep === 'config' || disabled} label='Back' type='transparent' />
        <Button id={activeStep} onClick={handleNextStep} label={`Next: ${getButtonNextLabel(activeStep)}`} disabled={activeStep === 'confirm' || disabled} />
      </div>
    </header>
  )
}

export default Stepper;
