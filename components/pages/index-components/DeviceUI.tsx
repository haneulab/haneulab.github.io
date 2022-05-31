import type { DeviceUIComponentType } from '@components/app.interface';
import { Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import { useContext, useState } from 'react';
import Device from './Device';
import DeviceOption from './DeviceOption';

const DeviceUI: DeviceUIComponentType = ({ deviceUIOpen }) => {
  const theme = useContext(Theme);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop' | 'tablet'>(
    'mobile',
  );
  return (
    <div
      className={cls(
        'px-4 lg:px-8 md:py-20 pb-20 lg:py-28 w-full md:h-screen flex flex-col justify-center items-center relative transition-all transform',
        theme === 'dark' ? 'bg-black/90' : 'bg-white/80',
        deviceUIOpen === 'design' ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <Device type={deviceType} />
      <DeviceOption setDeviceType={setDeviceType} />
    </div>
  );
};

export default DeviceUI;
