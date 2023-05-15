'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import JobContainer from '../components/JobContainer';
import Modal from '../components/Modal';
import ResumeContainer from '../components/ResumeContainer';
import Stepper from '../components/Stepper';
import TemplatesSection from '../components/Templates';

import { store } from '@/store';
import { colors } from '@/utils/constants';
import { initialTabs as tabs } from '@/utils/templates';

export default function Templates() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeStep, setActiveStep] = useState('config');
  const [modal, setModal] = useState(false);
  const { globalInfo } = store.getState().state || {};

  const templateProps = { selectedColor, tabs, selectedTab, setSelectedTab: (val) => setSelectedTab(val) };
  const resumeProps = { previewClick: () => setModal(!modal), imageSrc: `${selectedTab.link}-${selectedColor}.png` };

  const components = {
    config: () => <TemplatesSection {...templateProps} />,
    heading: () => <ResumeContainer {...resumeProps} />,
    work: () => <JobContainer {...resumeProps} />,
  };

  const Component = components[activeStep] || (() => <></>);

  const handleSelectColor = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <Provider store={store}>
      <main>
        <Stepper activeStep={activeStep} disabled={modal} onAction={(newValue) => setActiveStep(newValue)} />
        <motion.div
          animate={{
            scale: modal ? 0.95 : 1,
            opacity: modal ? 0.5 : 1,
          }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <Header activeStep={activeStep} colors={colors} handleSelectColor={handleSelectColor} selectedColor={selectedColor} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              initial={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <Modal {...{ modal, setModal, info: globalInfo, selectedColor }} />
      </main>
    </Provider>
  );
}
