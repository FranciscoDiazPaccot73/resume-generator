import { AnimatePresence, motion } from 'framer-motion';

import Resume from './Resume';

import styles from '../templates/page.module.scss';

const Modal = ({ modal, setModal, info, selectedColor }) => {
  return (
    <AnimatePresence>
      {modal && (
        <div className="z-10 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="absolute t-0 z-10 p-7 bg-white h-auto w-full max-w-3xl rounded my-7"
            exit={{
              y: -50,
              opacity: 0,
            }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <button
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-slate-600 border border-slate-600 h-8 w-8 block mb-2 rounded-full"
              onClick={() => setModal((oldModal) => !oldModal)}
            >
              &times;
            </button>
            <div className="relative overflow-hidden h-auto" style={{ maxHeight: '592px' }}>
              <div className={`relative overflow-scroll ${styles.dialog}`}>
                <Resume {...{ info }} selectedColor={selectedColor} />
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{
              opacity: 1,
            }}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
            exit={{
              opacity: 0,
            }}
            initial={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            onClick={() => setModal((oldModal) => !oldModal)}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
