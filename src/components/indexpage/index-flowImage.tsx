import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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

      <Link href="/photos">
        <a className="absolute w-max h-max px-8 py-4 rounded-full bg-black/80 backdrop-blur-sm hover hover:bg-amber-400/80 hover:text-black/80 shadow-2xl text-white text-xl top-1/2 left-1/2 transform transition-all -translate-x-1/2  -translate-y-1/2">
          View More Photos
        </a>
      </Link>
    </motion.div>
  );
};
export default FlowImage;
