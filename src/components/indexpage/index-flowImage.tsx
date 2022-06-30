/**
 * components
 */
import TransitionLink from '@/reuse/link.reuse';
/**
 * motion
 */
import { motion, Variants } from 'framer-motion';
const imgVariantsEven: Variants = {
  offscreen: {
    rotate: 5,
  },
  onscreen: {
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.4,
    },
  },
};
const imgVariantsOdd: Variants = {
  offscreen: {
    rotate: -5,
  },
  onscreen: {
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

const FlowImage: React.FC = () => {
  return (
    <motion.div className="relative shadow-inner w-full overflow-x-scroll h-[30vh] flex flex-col justify-center ">
      <section className="min-w-full h-full px-8 py-8 lg:px-24 max-w-max flex items-center justify-start space-x-8 overflow-y-hidden">
        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((eachNumber, numberIndex) => (
          <motion.img
            initial="offscreen"
            whileInView="onscreen"
            variants={numberIndex % 2 === 0 ? imgVariantsEven : imgVariantsOdd}
            key={numberIndex}
            viewport={{ once: true, amount: 0 }}
            className="w-full h-full opacity-75"
            src={`haneulab_image_${eachNumber}.png`}
          />
        ))}
      </section>

      <div className="absolute top-12 left-0 transform -translate-y-1/2 w-max h-max">
        <TransitionLink href="/photos" textContent="View More Photos" />
      </div>
    </motion.div>
  );
};
export default FlowImage;
