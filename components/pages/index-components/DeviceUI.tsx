import type { DeviceUIComponentType } from '@components/app.interface';
import { cls } from '@libs/index.helper';
import { useState } from 'react';
import Device from './Device';
import DeviceOption from './DeviceOption';

const DeviceUI: DeviceUIComponentType = ({ deviceUIOpen }) => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop' | 'tablet'>(
    'mobile',
  );
  return (
    <div
      className={cls(
        'py-28 lg:col-span-3 px-8 w-full lg:h-screen flex flex-col justify-center items-center relative transition-all transform',
        deviceUIOpen === 'design' ? 'opacity-100' : 'opacity-0',
      )}
    >
      <Device type={deviceType} />
      <DeviceOption setDeviceType={setDeviceType} />
    </div>
  );
};

export default DeviceUI;
