/**
 * libs
 */
import reactClassname from '@/libs/reactClassname';
/**
 * motion
 */
import { motion } from 'framer-motion';
/**
 * local interfaces & types
 */
interface LoadingProps {
  loadingText: string;
  viewIf: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loadingText, viewIf }) => {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1.25,
          type: 'spring',
          bounce: 0.4,
        },
      }}
      className={reactClassname(
        'fixed top-0 bg-black/10 backdrop-blur-sm w-full h-screen z-50 flex flex-col justify-center transition-all transform',
        viewIf ? 'flex' : 'hidden',
      )}
    >
      <article className="px-8 py-3 text-center w-max mx-auto bg-transparent">
        <h3 className="flex items-center space-x-4 justify-center animate-pulse transition-all">
          <span className="font-bold text-xl text-teal-400 transition-all">
            {loadingText}
          </span>
          <span className="animate-spin w-10 h-10 border-4 rounded-full bg-clip-border border-y-transparent border-l-amber-400 border-r-teal-400" />
        </h3>
      </article>
    </motion.div>
  );
};
export default Loading;
