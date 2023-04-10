'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Stepper from "../Stepper";
import TemplatesSection from "./Templates";

import { initialTabs as tabs } from "@/utils/templates";

import styles from './page.module.scss';

const colors = [
  {hex: '#000', label: 'black'},
  {hex: '#e30812', label: 'red'},
  {hex: '#9c1edd', label: 'purple'},
  {hex: '#e730d9', label: 'pink'},
  {hex: '#1e24dd', label: 'blue'},
  {hex: '#dd651e', label: 'orange'},
]

export default function Templates() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeStep, setActiveStep] = useState('config');

  const handleSelectColor = newColor => {
    setSelectedColor(newColor)
  }

  return (
    <div>
      <Stepper activeStep={activeStep} />
      <section className="flex justify-center gap-2">
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
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeStep}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <TemplatesSection
            selectedColor={selectedColor}
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={(val) => setSelectedTab(val)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
