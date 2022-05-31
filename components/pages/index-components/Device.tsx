/* eslint-disable @next/next/no-img-element */
import type { DeviceComponentType } from '@components/app.interface';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
const Device: DeviceComponentType = ({ type }) => {
  console.log(type);
  return (
    <div className="w-full max-w-xs h-full max-h-[680px] p-2 bg-gradient-to-r from-black/90 via-zinc-800 to-black/90 mx-auto border border-slate-50/10 shadow-2xl rounded-2xl shadow-blue-900/25">
      <div className="relative w-full h-full flex flex-col justify-center border p-2 bg-black/50 rounded-xl border-slate-50/10">
        <span className="absolute left-1/2 transform -translate-x-1/2 top-2 w-10 h-2 rounded-full bg-white/10 border border-slate-500/50" />
        <div className="w-full overflow-hidden h-5/6 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white/90 relative">
          <div className="p-4 flex justify-between items-center">
            <h5 className="font-bold text-lg">Shoppest</h5>
            <FiMenu className="text-xl" />
          </div>
          <div className="w-full h-full flex flex-col items-center overflow-hidden">
            <section className="w-11/12 mx-auto mb-4 rounded-full border-2 border-blue-400/50 px-4 py-2 flex items-center overflow-hidden">
              <span className="text-xs text-slate-400">Search the product</span>
            </section>
            <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-blue-900/90  ">
              <section className="px-4 py-8">
                <div className="w-full grid grid-cols-3 gap-2 mb-6">
                  <span className="text-xs text-center p-1 px-3 rounded-full border">
                    IT
                  </span>
                  <span className="text-xs text-center p-1 px-3 rounded-full border">
                    Food
                  </span>
                  <span className="text-xs text-center p-1 px-3 rounded-full border">
                    School
                  </span>
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4k-monitors-1536780774.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                      alt=""
                    />
                    <h5 className="text-sm font-medium mt-4 mb-2">
                      4K Display Workstation Monitor
                    </h5>
                    <p className="font-light text-xs text-slate-300">
                      Workstation external monitor suitable for daily office
                      work.
                    </p>
                    <div className="w-full mt-2 flex justify-between items-center">
                      <span className="font-bold text-base">$329.99</span>
                      <button className="px-4 py-1 text-sm rounded-md shadow-md bg-orange-500 text-white font-medium">
                        <span className="flex items-center space-x-2">
                          <span>Add</span> <AiOutlineShoppingCart />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
