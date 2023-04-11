'use client'

import Button from '../Button';

import { steps } from './page';

import styles from './page.module.scss';

const getButtonNextLabel = (current) => {
  if (current === 'confirm' || !steps) return '';

  const nextIndex = steps?.map(e => e.id).indexOf(current) + 1;

  return steps[nextIndex].label;
}

const Header = ({ prevStep, nextStep, colors, selectedColor, handleSelectColor, activeStep }) =>{
  console.log(activeStep, "activeStep")
  return (
    <section className="flex justify-center gap-3 mt-6">
      <ul className={`flex items-center justify-center gap-1 rounded-full ${styles.colors}`}>
        {colors.map(({ hex, label }) => (
          <li
            key={hex}
            className={`${styles.color} ${selectedColor === label ? styles.active : ''}`}
            style={{ backgroundColor: hex }}
            onClick={() => handleSelectColor(label)}
          />
        ))}
      </ul>
      <div className='text-white flex items-center'>
        <Button id={activeStep} onClick={prevStep} disabled={activeStep === 'config'} label='Back' type='transparent' />
        <Button id={activeStep} onClick={nextStep} label={`Next: ${getButtonNextLabel(activeStep)}`} disabled={activeStep === 'confirm'} />
      </div>
    </section>
  )
}

export default Header;
