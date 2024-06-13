import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <motion.div
      className="slide-in"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{
        type: "spring",
        stiffness: 30,
        duration: 2,
      }}
    >
      <OgComponent />
    </motion.div>
  );
};

export default transition;
