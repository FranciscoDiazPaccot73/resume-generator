import { motion } from 'framer-motion';
import { useState } from 'react';

import Form from './FormWork';
import Preview from './Preview';

import { store } from '@/store';

import styles from './Resume.module.scss';

const JobContainer = ({ imageSrc, previewClick }) => {
  const [showCard, setShowCard] = useState(true);
  const { globalInfo } = store.getState().state;

  const handlePreviewClick = () => {
    if (globalInfo.jobs) previewClick();
  };

  return (
    <div className="relative md:mx-auto md:max-w-6xl md:min-w-2xl">
      <section className="flex justify-center my-8 gap-6">
        <div>
          <motion.div
            layout
            className="max-w-4xl"
            style={{
              background: '#313131',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
            transition={{
              layout: {
                duration: 1,
                type: 'spring',
              },
            }}
            whileHover={{
              scale: !showCard ? 1.02 : 1,
              boxShadow: '0 0 10px rgba(0,0,0,0.4)',
            }}
            onClick={() => setShowCard(!showCard)}
          >
            {showCard ? (
              <motion.div
                animate={{
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                style={{ width: '600px' }}
              >
                <Form />
              </motion.div>
            ) : (
              <motion.h4 className="min-w-[600px] p-6 cursor-pointer text-white" layout="position">
                Add new job
              </motion.h4>
            )}
          </motion.div>
        </div>
        <article className={`rounded-2xl overflow-hidden relative mt-12 ${styles.article}`} onClick={handlePreviewClick}>
          <Preview imageSrc={imageSrc} shouldShow={Boolean(globalInfo.jobs)} />
        </article>
      </section>
    </div>
  );
};

export default JobContainer;
