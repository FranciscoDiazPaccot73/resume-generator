'use client'

import { useState } from "react";

import Resume from "./Resume";

import styles from './page.module.scss';

const ResumeContainer = () => {
  const [preview, setPreview] = useState(false)

  const handlePreview = () => setPreview(prevState => !prevState);

  return (
    <div className="relative">
      <button className="text-white" onClick={handlePreview}>
        EL BOTON
      </button>
      <div className={`${styles.moved} ${preview ? styles.preview : ''}`}>
        <Resume />
      </div>
    </div>
  )
}

export default ResumeContainer;
