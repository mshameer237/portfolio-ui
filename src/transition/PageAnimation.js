import { motion } from "framer-motion";

const animations = (color) => {
  return {
    initial: { opacity: 0.4, background: color },
    animate: { opacity: 1, background: color },
    exit: { opacity: 0.4, background: color },
  };
};

const PageAnimation = ({ children, color }) => {
  return (
    <motion.div
      variants={animations(color)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;
