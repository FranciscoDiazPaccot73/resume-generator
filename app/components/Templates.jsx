'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../templates/page.module.scss';

const TemplatesSection = ({ setSelectedTab, selectedTab, tabs, selectedColor }) => {
  return (
    <main className="m-0 p-0 mb-10 relative">
      <section className="p-8 relative flex items-center justify-center text-black w-full">
        <div className={styles.container}>
          <nav>
            <ul>
              {tabs.map((item) => (
                <li key={item.label} className={item === selectedTab ? styles.selected : ''} onClick={() => setSelectedTab(item)}>
                  {item.label}
                  {item === selectedTab ? <motion.div className={styles.underline} layoutId="underline" /> : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <div className="p-2 shadow-xl">
                    <Image height={600} src={`${selectedTab.link}-${selectedColor}.png`} width={350} />
                  </div>
                ) : (
                  '😋'
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </section>
    </main>
  );
};

export default TemplatesSection;
