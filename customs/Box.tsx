import { BoxProps } from 'interfaces/customs';

const Box: React.FC<BoxProps> = ({ className, wrapper }) => {
  return <div className={className}>{wrapper}</div>;
};
export default Box;
