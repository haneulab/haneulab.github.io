import { reactClassNames } from '@motioned-official/react-functions';
interface MobileToggleButtonProps {
  mobileToggleNavView: boolean;
  onClick: () => void;
}
const MobileToggleButton: React.FC<MobileToggleButtonProps> = ({
  onClick,
  mobileToggleNavView,
}) => {
  return (
    <div className="flex flex-col items-center lg:hidden">
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center"
      >
        <span
          className={reactClassNames(
            'w-10 h-0.5 rounded-full  transition-all',
            mobileToggleNavView ? 'bg-dark-blue' : 'bg-dark-light',
          )}
        />
        <span
          className={reactClassNames(
            ' h-0.5 my-1.5 rounded-full transition-all',
            mobileToggleNavView
              ? 'bg-dark-blue w-5 mx-auto'
              : 'w-10 bg-dark-light',
          )}
        />
        <span
          className={reactClassNames(
            'w-10 h-0.5 rounded-full transition-all',
            mobileToggleNavView ? 'bg-dark-blue' : 'bg-light-primary',
          )}
        />
      </button>
    </div>
  );
};

export default MobileToggleButton;
