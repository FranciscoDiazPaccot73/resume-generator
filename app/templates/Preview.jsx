import { motion, AnimatePresence } from "framer-motion";

import styles from './page.module.scss';

const Preview = ({ imageSrc }) => {
  return (
      <AnimatePresence mode="wait">
        <motion.div
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          style={{
            height: "200px",
            width: "159px",
            position: "relative",
            cursor: "pointer",
            borderRadius: '20px',
            overflow: 'hidden',
            marginTop: '3rem',
          }}
        >
          <img src={imageSrc} alt="Preview" />
          <div className={styles.previewButton}>Preview</div>
        </motion.div>
      </AnimatePresence>
  );
};

export default Preview;
