import type { MobileGroundBarComponentType } from '@components/app.interface';
import { Language } from '@components/contexts/Language';
import { Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import Link from 'next/link';
import React, { useContext } from 'react';
import { BiDevices } from 'react-icons/bi';
import { BsCodeSquare, BsChatDots } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
const MobileGroundBarData = [
  {
    text: 'About',
    icon: <BsCodeSquare className="text-2xl" />,
    href: '/about',
  },
  {
    text: 'Products',
    icon: <BiDevices className="text-2xl" />,
    href: '/products',
  },
  {
    text: 'Contact',
    icon: <IoMdContact className="text-2xl" />,
    href: '/contact',
  },
  { text: 'Chat', icon: <BsChatDots className="text-2xl" />, href: '/chats' },
];

const MobileGroundBar: MobileGroundBarComponentType = ({ setLanugage }) => {
  const language = useContext(Language);
  const theme = useContext(Theme);
  return (
    <React.Fragment>
      <button
        onClick={() =>
          setLanugage((cur) => (cur === 'English' ? 'Korean' : 'English'))
        }
      >
        {language}
      </button>
      <nav
        className={cls(
          'w-full md:hidden fixed bottom-0 bg-gradient-to-b backdrop-blur-md z-50 transition-all border-t rounded-t-2xl',
          theme === 'dark'
            ? 'from-black/80 to-slate-800 border-slate-800 text-slate-200'
            : 'from-white/80 to-cyan-200 border-cyan-200 text-slate-600',
        )}
      >
        <section className="w-full grid grid-cols-4 gap-0">
          {MobileGroundBarData.map((item, index) => (
            <Link href={item.href} key={index}>
              <a className="flex flex-col justify-center items-center p-4 space-y-2 text-xl">
                {item.icon}
                <span className="text-base text-center font-medium">
                  {item.text}
                </span>
              </a>
            </Link>
          ))}
        </section>
      </nav>
    </React.Fragment>
  );
};

export default MobileGroundBar;
