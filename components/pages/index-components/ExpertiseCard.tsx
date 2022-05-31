import { ExpertiesCardComponentType } from '@components/app.interface';
import { Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import { useContext } from 'react';

const ExpertiesCard: ExpertiesCardComponentType = ({ title, icon }) => {
  const theme = useContext(Theme);
  return (
    <div
      className={cls(
        'flex justify-between hover space-x-4 md:space-x-6 items-center p-4 rounded-full border transition-all cursor-pointer',
        theme === 'dark'
          ? 'bg-transparent border-transparent text-white/80 hover:text-cyan-200/50 '
          : 'bg-slate-100/5 border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-700',
      )}
    >
      {icon}
      <span className="w-full text-lg lg:text-xl">{title}</span>
    </div>
  );
};
export default ExpertiesCard;
