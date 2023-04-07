'use client'

import { useState } from "react";

import Resume from "./Resume";
import Form from "./From";
import Stepper from "./Stepper";

import styles from './page.module.scss';

const ResumeContainer = () => {
  const [preview, setPreview] = useState(false)
  const [resumeInfo, setInfo] = useState({})

  const handlePreview = () => setPreview(prevState => !prevState);

  const handleChange = e => {
    const { name, value } = e.target;

    setInfo(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="relative md:mx-auto md:max-w-6xl md:min-w-2xl">
      <Stepper />
      <Form onChange={handleChange} info={resumeInfo} />
      <button className="text-white" onClick={handlePreview}>
        EL BOTON
      </button>
      <div className={`${styles.moved} ${preview ? styles.preview : ''}`}>
        <Resume info={resumeInfo} />
      </div>
    </div>
  )
}

export default ResumeContainer;
