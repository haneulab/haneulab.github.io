/**
 * motion
 */
import { motion } from 'framer-motion';
/**
 * local interfaces & types
 */
interface TransitionProps {
  id: string;
  className: string;
  children: JSX.Element;
}
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Transition: React.FC<TransitionProps> = ({ id, children, className }) => {
  return (
    <motion.main
      id={id}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'spring' }}
      className={className}
    >
      {children}
    </motion.main>
  );
};
export default Transition;
