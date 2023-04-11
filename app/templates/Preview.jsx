import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preview = ({ src = '/formal-black.png' }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
      <AnimatePresence mode="wait">
        <motion.div
          key={isFullscreen}
          onClick={handleClick}
          animate={isFullscreen ? { width: "80%", height: "80%" } : { height: '200px', width: "150px" }}
          transition={{ duration: 0.2 }}
          whileHover={isFullscreen ? { scale: 1 } : { scale: 1.1 }}
          style={{
            position: "relative",
            cursor: "pointer",
            borderRadius: '20px',
            overflow: 'hidden',
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
        >
          <img
            src={src}
            alt="Preview"
          />
        </motion.div>
      </AnimatePresence>
  );
};

export default Preview;
