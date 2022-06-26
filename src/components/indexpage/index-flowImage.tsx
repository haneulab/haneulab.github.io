/**
 * components
 */
import TransitionLink from '@/reuse/link.reuse';
/**
 * motion
 */
import { motion, Variants } from 'framer-motion';
const imgVariants: Variants = {
  offscreen: {
    rotate: 0,
  },
  onscreen: {
    rotate: 5,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const FlowImage: React.FC = () => {
  return (
    <motion.div className="relative shadow-inner w-full overflow-x-scroll h-[42vh] flex flex-col justify-center ">
      <section className="min-w-full h-full px-8 md:px-16 lg:px-24 max-w-max flex items-center justify-start space-x-12 overflow-y-hidden">
        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((eachNumber, numberIndex) => (
          <motion.img
            initial="offscreen"
            whileInView="onscreen"
            variants={imgVariants}
            key={numberIndex}
            viewport={{ once: true, amount: 0 }}
            className="w-full h-full opacity-50"
            src={`haneulab_image_${eachNumber}.png`}
          />
        ))}
      </section>

      <div className="absolute top-1/2 left-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2 w-max h-max">
        <TransitionLink href="/photos" textContent="View More Photos" />
      </div>
    </motion.div>
  );
};
export default FlowImage;
