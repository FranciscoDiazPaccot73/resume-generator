'use client'

import { useState } from "react";

import Form from "./From";
import Preview from "./templates/Preview";

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
      <section className="flex justify-center">
        <Form onChange={handleChange} info={resumeInfo} />
        <Preview />
      </section>
      <button className="text-white" onClick={handlePreview}>
        EL BOTON
      </button>
    </div>
  )
}

export default ResumeContainer;
