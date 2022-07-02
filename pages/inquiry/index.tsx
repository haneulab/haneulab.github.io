/**
 * react
 */
import React, { SyntheticEvent, useEffect, useState } from 'react';
/**
 * next
 */
import Link from 'next/link';
/**
 * types
 */
import type { NextPage } from 'next';
/**
 * lib
 */
import reactClassname from '@/libs/reactClassname';
/**
 * components
 */
import Layout from '@/layouts/layout';
import Transition from '@/reuse/transition.reuse';
import PageSEO from '@/seo/page.seo';
/**
 * motion
 */
import { motion } from 'framer-motion';
import Loading from '@/reuse/loading.reuse';

const Inquirypage: NextPage = () => {
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [sendError, setSendError] = useState<
    boolean | { isError: boolean; error: number; message: string }
  >(false);
  const [formStatus, setFormStatus] = useState<
    'before' | 'sending' | 'fetching' | 'after'
  >('before');
  useEffect(() => {
    if (formStatus === 'after') {
      window.scrollTo(0, 0);
      setFormStatus('before');
    }
  }, [formStatus]);
  const onEmailSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // validation here
    if (!fullname || !email || !message) {
      setSendError({
        isError: true,
        error: -2,
        message: 'Unable to send the email | Invalid Input(s)',
      });
      setFormStatus('after');
      return;
    }
    // then

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email,
        fullname,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setFormStatus('fetching');

    if (!res?.ok) {
      setSendError({
        isError: true,
        error: -1,
        message: 'Unable to send the email | Internal Response Error',
      });
      setFormStatus('after');
      return;
    } else {
      setSendError({
        isError: false,
        error: 0,
        message: '',
      });
    }
    setFormStatus('after');
    setEmail('');
    setFullname('');
    setSubject('');
    setMessage('');
  };
  const onTryAgainClick = () => {
    setSendError(false);
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <PageSEO
        title="Inquiry"
        description="HaneuLab provides web design & engineering services needed to maintain businesses & enterprises."
        keywords={[
          'Web Development',
          'Web Design',
          'Web Service',
          'SEO',
          'Business',
          'Business Website',
          'Marketing',
          'Business Marketing',
        ]}
      />
      <Layout.page>
        <>
          <Loading
            loadingText={
              formStatus === 'before' || formStatus === 'sending'
                ? 'Email Resolving...'
                : 'Getting Response...'
            }
            viewIf={formStatus === 'sending' || formStatus == 'fetching'}
          />
          <Transition id="inquiry-form" className="">
            <form
              onSubmit={(e) => onEmailSubmit(e)}
              className={reactClassname(
                'transform my-24 w-10/12 md:w-full max-w-md mx-auto rounded-lg border border-blue-500 flex-col px-8 py-8 bg-gradient-to-br backdrop-blur-sm transition-all',
                typeof sendError !== 'boolean' ? 'hidden' : 'flex',
              )}
            >
              <h1 className="text-2xl font-bold text-gray-500">
                Send an Inquiry
              </h1>

              <label
                htmlFor="fullname"
                className="text-gray-700 font-light mt-8 mb-2"
              >
                Full name<span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none rounded-none focus:ring-1 ring-blue-500 font-light text-gray-700"
              />

              <label
                htmlFor="email"
                className="text-gray-700 font-light mt-4 mb-2"
              >
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none rounded-none focus:ring-1 ring-blue-500 font-light text-gray-700"
              />

              <label
                htmlFor="subject"
                className="text-gray-700 font-light mt-4 mb-2"
              >
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none rounded-none focus:ring-1 ring-blue-500 font-light text-gray-700"
              />

              <label
                htmlFor="message"
                className="text-gray-700 font-light mt-4 mb-2"
              >
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none rounded-none focus:ring-1 ring-blue-500 font-light text-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex flex-row items-center justify-start">
                <button className="px-10 mt-8 py-2 bg-blue-600/80 text-white transition-all hover hover:bg-blue-500/50 transform hover:translate-x-2 font-medium rounded-md text-lg flex flex-row items-center">
                  Send
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-white ml-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </Transition>
          {typeof sendError !== 'boolean' && sendError.isError && (
            <Transition id="inquiry-error" className="">
              <div className="w-full h-screen z-50 flex flex-col justify-center items-center p-8">
                <p className="font-medium text-red-500 mb-2 lg:text-lg xl:text-xl">
                  {sendError.message}
                </p>
                <motion.button
                  onClick={onTryAgainClick}
                  whileHover={{
                    scale: 1.05,
                    color: 'dodgerblue',
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 0.5,
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 text-black/90 cursor-pointer font-medium text-lg border-black/90"
                >
                  Try Again
                </motion.button>
              </div>
            </Transition>
          )}
          {typeof sendError !== 'boolean' && !sendError.isError && (
            <Transition id="inquiry-success" className="">
              <div className="h-screen flex flex-col justify-center items-center p-8">
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-lg font-medium text-blue-400">
                    Email was succcesfully sent,
                  </p>
                  <span className="text-blue-400 font-bold text-2xl transform rotate-[22.5deg] animate-pulse">
                    OK!
                  </span>
                </div>
                <p className="font-light text-lg mt-6 mb-8 text-stone-400 text-center">
                  <strong className="text-stone-600 font-medium">
                    Thank you for email submission!
                  </strong>{' '}
                  <span className="inline-block">
                    I will respond to your email as soon as possible, thank you
                    🙏
                  </span>
                </p>
                <Link href="/">
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: 'spring',
                        bounce: 0.4,
                        duration: 0.5,
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-3 rounded-full bg-black/80 text-white cursor-pointer"
                  >
                    Go back to main
                  </motion.a>
                </Link>
              </div>
            </Transition>
          )}
        </>
      </Layout.page>
    </React.Fragment>
  );
};

export default Inquirypage;
