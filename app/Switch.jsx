'use client'

import styles from './Switch.module.scss';

const Switch = ({ checked, onCheck, label, disabled }) =>
  <label className={styles.switch}>
    <input disabled={disabled} type="checkbox" checked={checked} onChange={onCheck} />
    <span className={`${styles.slider} ${styles.round}`} />
    {label ? <span className={styles.switchLabel}>{label}</span> : null}
  </label>
	
export default Switch;
