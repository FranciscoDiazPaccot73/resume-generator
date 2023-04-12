import { steps } from '@/utils/constants';

import styles from '../templates/page.module.scss';

const Header = ({colors, selectedColor, handleSelectColor, activeStep }) => {
  const { label } = steps?.find(step => step.id === activeStep);

  return (
    <section className="mt-40 flex items-center max-w-3xl mx-auto gap-6">
      <p className={`font-bold ${styles.headerTitle}`}>{label}</p>
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
    </section>
  )
}

export default Header;
