'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Stepper from "../Stepper";
import Header from "./Header";
import TemplatesSection from "./Templates";
import ResumeContainer from "../ResumeContainer";

import { initialTabs as tabs } from "@/utils/templates";

const colors = [
  {hex: '#000', label: 'black'},
  {hex: '#e30812', label: 'red'},
  {hex: '#9c1edd', label: 'purple'},
  {hex: '#e730d9', label: 'pink'},
  {hex: '#1e24dd', label: 'blue'},
  {hex: '#dd651e', label: 'orange'},
]

export const steps = [
  { id: 'config', label: "Configuration" },
  { id: 'heading', label: "Heading" },
  { id: 'work', label: "Work Hostory" },
  { id: 'education', label: "Education" },
  { id: 'skills', label: "Skills" },
  { id: 'confirm', label: "Confirmation" },
]

export default function Templates() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeStep, setActiveStep] = useState('config');

  const templateProps = { selectedColor, tabs, selectedTab, setSelectedTab: (val) => setSelectedTab(val)};

  const components = {
    config: () => <TemplatesSection {...templateProps} />,
    heading: () => <ResumeContainer imageSrc={`${selectedTab.link}-${selectedColor}.png`} />,
    work: () => <ResumeContainer imageSrc={`${selectedTab.link}-${selectedColor}.png`} />,
  }

  const Component = components[activeStep] || (() => <></>);

  const handleSelectColor = newColor => {
    setSelectedColor(newColor)
  }

  const handlePrevStep = (step) => {
    if (step !== 'config') {
      const prevIndex = steps?.map(e => e.id).indexOf(step) - 1;
  
      setActiveStep(steps[prevIndex].id)
    }
  }

  const handleNextStep = (step) => {
    if (step !== 'confirm') {
      const nextIndex = steps?.map(e => e.id).indexOf(step) + 1;
  
      setActiveStep(steps[nextIndex].id)
    }
  }

  return (
    <div>
      <Stepper activeStep={activeStep} steps={steps} />
      <Header
        colors={colors}
        selectedColor={selectedColor}
        handleSelectColor={handleSelectColor}
        activeStep={activeStep}
        nextStep={handleNextStep}
        prevStep={handlePrevStep}
      />
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeStep}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
