import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <motion.a className="cursor-pointer transition-all px-8 py-4 bg-black/80 backdrop-blur-sm hover hover:bg-black/40 hover:text-white lg:shadow-xl hover:shadow-md text-white text-xl">
        {typeof textContent === 'string' && `${textContent}`}
        {typeof textContent !== 'string' && textContent}
      </motion.a>
    </Link>
  );
};
export default TransitionLink;
