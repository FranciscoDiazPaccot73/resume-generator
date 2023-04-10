'use client'

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import styles from './page.module.scss';

const TemplatesSection = ({ setSelectedTab, selectedTab, tabs, selectedColor }) => {


  return (
  <main className="m-0 p-0 mb-10 relative">
      <section className='p-8 relative flex items-center justify-center text-black w-full'>
        <div className={styles.container}>
          <nav>
            <ul>
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? styles.selected : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.label}
                  {item === selectedTab ? (
                    <motion.div className={styles.underline} layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <div className="p-2 rounded-lg border shadow-xl">
                    <Image src={`${selectedTab.link}-${selectedColor}.png`} width={350} height={600} />
                  </div>
                ) : "😋"}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </section>
    </main>
  )
}

export default TemplatesSection;
