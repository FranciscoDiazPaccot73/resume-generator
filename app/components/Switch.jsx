'use client'

import { motion } from "framer-motion";

import styles from './Switch.module.scss';

const Switch = ({ checked, onCheck, label, disabled }) => {
  const toggleSwitch = (e) => {
    onCheck(e);
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`${styles.switch} ${checked ? styles.active : ''}`} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
}
	
export default Switch;
