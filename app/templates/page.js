'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";

import Stepper from "../components/Stepper";
import Header from "../components/Header";
import Modal from "../components/Modal";
import TemplatesSection from "../components/Templates";
import ResumeContainer from "../components/ResumeContainer";
import JobContainer from "../components/JobContainer";

import { store } from "@/store";
import { initialTabs as tabs } from "@/utils/templates";
import { colors } from "@/utils/constants";

export default function Templates() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeStep, setActiveStep] = useState('config');
  const [modal, setModal] = useState(false);
  const { globalInfo } = store.getState().state || {};

  const templateProps = { selectedColor, tabs, selectedTab, setSelectedTab: (val) => setSelectedTab(val)};
  const resumeProps = { previewClick: () => setModal(!modal), imageSrc: `${selectedTab.link}-${selectedColor}.png` } 

  const components = {
    config: () => <TemplatesSection {...templateProps} />,
    heading: () => <ResumeContainer {...resumeProps} />,
    work: () => <JobContainer {...resumeProps} />,
  }

  const Component = components[activeStep] || (() => <></>);

  const handleSelectColor = newColor => {
    setSelectedColor(newColor)
  }

  return (
    <Provider store={store}>
      <main>
        <Stepper
          activeStep={activeStep}
          onAction={newValue => setActiveStep(newValue)}
          disabled={modal}
        />
        <motion.div
          animate={{
            scale: modal ? 0.95 : 1,
            opacity: modal ? 0.5 : 1
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <Header
            colors={colors}
            selectedColor={selectedColor}
            handleSelectColor={handleSelectColor}
            activeStep={activeStep}
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
        </motion.div>
        <Modal {...{ modal, setModal, info: globalInfo }} />
      </main>
    </Provider>
  );
}
