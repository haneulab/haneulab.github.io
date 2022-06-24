import { motion } from 'framer-motion';

interface TransitionProps {
  children: JSX.Element;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      animate="enter"
      exit="exit"
      transition={{ type: 'spring' }}
    >
      {children}
    </motion.main>
  );
};
export default Transition;
