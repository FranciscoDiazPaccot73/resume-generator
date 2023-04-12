'use client'

import styles from './Button.module.scss';

const Button = ({ id, label, onClick, type = 'default', disabled = false }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <button
      onClick={handleClick}
      className={`p-2 mx-1 rounded-full font-bold text-xs ${styles.button} ${styles[type]}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;
