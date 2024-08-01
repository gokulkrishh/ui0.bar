'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Copy01Icon = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    color={'currentColor'}
    fill={'none'}
    {...props}
  >
    <path
      d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const Tick02Icon = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    color={'currentColor'}
    fill={'none'}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5001 6.39667L8.48133 19.0002L3.50009 14.0141L4.92876 12.584L8.44771 16.1064L19.0386 5.00023L20.5001 6.39667Z"
      fill="currentColor"
    />
  </motion.svg>
);

export default function CopyButton({ doc }: { doc: string }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.button
        className="text-zinc-400 group p-1.5 hover:bg-zinc-900 outline-none rounded-lg transition-all border border-zinc-600 hover:border-neutral-300"
        onClick={async () => {
          setShouldAnimate(true);
          await navigator.clipboard.writeText(doc);
          setTimeout(() => setShouldAnimate(false), 2000);
        }}
      >
        <AnimatePresence>
          {!shouldAnimate ? (
            <Copy01Icon
              transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0.1,
              }}
              initial={false}
              animate={{
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              className="group-hover:text-neutral-300"
            />
          ) : (
            <Tick02Icon
              transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0.1,
              }}
              initial={false}
              animate={{
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              className="group-hover:text-neutral-300"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
