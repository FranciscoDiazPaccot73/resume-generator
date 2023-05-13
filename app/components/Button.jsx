'use client';

import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = ({ id, label, onClick, type = 'default', disabled = false, size = 'md' }) => {
  const buttonClasses = clsx('p-2 mx-1 rounded-full font-bold text-xs cursor-pointer', styles.button, {
    [`${styles[type]}`]: type,
    [`${styles.full}`]: size === 'full',
    'cursor-not-allowed opacity-50': disabled,
  });
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button className={buttonClasses} disabled={disabled} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
