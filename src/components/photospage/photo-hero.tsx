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
      bounce: 1,
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
      bounce: 1,
      duration: 0.4,
    },
  },
};
const Hero: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <section className="w-full pt-32 pb-28 p-8 md:px-12 lg:px-24">
        <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-gray-500">
          HaneuLab{' '}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200">
            Photos
          </span>
        </h3>
        <ul className="mt-12 py-8 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map(
            (eachNumber, numberIndex) => (
              <motion.img
                initial="offscreen"
                whileInView="onscreen"
                variants={
                  numberIndex % 2 === 0 ? imgVariantsEven : imgVariantsOdd
                }
                key={numberIndex}
                viewport={{ once: true, amount: 0 }}
                className="w-full h-full opacity-80 transition-all hover hover:opacity-100 hover:shadow-xl hover:shadow-gray-500/50 max-w-md mx-auto"
                src={`haneulab_image_${eachNumber}.png`}
              />
            ),
          )}
        </ul>
      </section>
    </div>
  );
};
export default Hero;
