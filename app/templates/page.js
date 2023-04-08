'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import Stepper from "../Stepper";

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

  return (
    <div>
      <Stepper />
      <section className="flex justify-center gap-2">
        <ul className="flex items-center gap-3">
          {colors.map(({ hex, label }) => <li key={hex} className={styles.color} style={{ backgroundColor: hex }} />)}
        </ul>
      </section>
      <main className="m-0 p-0 mb-10 relative">
        <section className='px-8 py-12 relative flex items-center justify-center text-black w-full'>
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
                      <Image src={selectedTab.link} width={350} height={600} />
                    </div>
                  ) : "😋"}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </section>
      </main>
    </div>
  );
}
