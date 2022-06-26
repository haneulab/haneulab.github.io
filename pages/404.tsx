/**
 * react
 */
import React from 'react';
/**
 * next
 */
import Link from 'next/link';
/**
 * types
 */
import type { NextPage } from 'next';
/**
 * components
 */
import Transition from '@/reuse/transition.reuse';
/**
 * icons
 */
import { IoArrowBack } from 'react-icons/io5';
/**
 * motion
 */
import { motion } from 'framer-motion';

const Custom404: NextPage = () => {
  return (
    <Transition id="Page_Not_Found" className="relative">
      <>
        <motion.h1
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute cursor-pointer w-max top-0 left-0 p-8 font-bold text-4xl animate-pulse transition hover hover:text-gray-400"
        >
          <Link href="/">
            <IoArrowBack />
          </Link>
        </motion.h1>
        <div className="h-screen flex flex-col justify-center items-center">
          <h3 className="font-normal text-2xl lg:text-3xl xl:text-4xl mb-2 xl:mb-4 text-red-500">
            404 | Page Not Found
          </h3>
          <p className="text-base lg:text-lg xl:text-2xl mb-6 xl:mb-12">
            The page you were trying to reach is <strong>not found.</strong>
          </p>
          <Link href="/">
            <motion.a
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', bounce: 0.4, duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 rounded-full bg-black/80 text-white cursor-pointer"
            >
              Go back to main
            </motion.a>
          </Link>
        </div>
      </>
    </Transition>
  );
};
export default Custom404;
