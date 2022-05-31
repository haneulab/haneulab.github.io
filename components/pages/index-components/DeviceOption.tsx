import type { DeviceOptionsComponentType } from '@components/app.interface';
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from 'react-icons/ai';
const DeviceOption: DeviceOptionsComponentType = ({ setDeviceType }) => {
  return (
    <div className="absolute w-full bottom-4 md:bottom-16 max-w-md mx-auto  bg-gradient-to-br from-white/0 via-white/0 to-white/0  rounded-md text-indigo-500">
      <section className="px-8 py-4 w-full grid grid-cols-3 gap-4 items-center">
        <div
          onClick={() => setDeviceType('desktop')}
          className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105"
        >
          <AiOutlineDesktop className="text-2xl" />
          <span>Desktop</span>
        </div>
        <div
          onClick={() => setDeviceType('tablet')}
          className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105"
        >
          <AiOutlineTablet className="text-2xl" />
          <span>Tablet</span>
        </div>
        <div
          onClick={() => setDeviceType('mobile')}
          className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105"
        >
          <AiOutlineMobile className="text-2xl" />
          <span>Mobile</span>
        </div>
      </section>
    </div>
  );
};

export default DeviceOption;
