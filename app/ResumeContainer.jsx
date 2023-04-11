'use client'

import { useState } from "react";

import Form from "./From";
import Preview from "./templates/Preview";

const ResumeContainer = ({ imageSrc }) => {
  const [resumeInfo, setInfo] = useState({})

  const handleChange = e => {
    const { name, value } = e.target;

    setInfo(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="relative md:mx-auto md:max-w-6xl md:min-w-2xl">
      <section className="flex justify-center my-8 gap-6">
        <Form onChange={handleChange} info={resumeInfo} />
        <Preview imageSrc={imageSrc} />
      </section>
    </div>
  )
}

export default ResumeContainer;
