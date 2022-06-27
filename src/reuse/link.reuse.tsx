/**
 * next
 */
import Link from 'next/link';
/**
 * motion
 */
import { motion } from 'framer-motion';
/**
 * local interfaces & types
 */
interface TransitionLinkProps {
  textContent: string | JSX.Element;
  href: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  textContent,
}) => {
  return (
    <Link href={href}>
      <motion.a className="cursor-pointer transition-all px-8 py-4 bg-black/40 backdrop-blur-sm hover hover:bg-black/80 hover:text-white lg:shadow-xl hover:shadow-md text-white text-base lg:text-lg">
        {typeof textContent === 'string' && `${textContent}`}
        {typeof textContent !== 'string' && textContent}
      </motion.a>
    </Link>
  );
};
export default TransitionLink;
