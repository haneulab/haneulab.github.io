import { BoxWrapProps } from 'interfaces/customs';

const BoxWrap: React.FC<BoxWrapProps> = ({ className, element }) => {
  return <section className={className}>{element}</section>;
};
export default BoxWrap;
