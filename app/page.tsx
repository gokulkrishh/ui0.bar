import Image from 'next/image';
import Editor from './components/editor';

import icon from './icon.svg';

const doc = `'use client';

import { useState } from 'react';

export default function App({ doc }: { doc: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center h-[300px] w-full justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p className="ml-4">{count}</p>
    </div>
  );
}`;

export default function Home() {
  return (
    <>
      <header className="w-full max-w-5xl mt-2 m-auto">
        <h1 className="font-black h-8 tracking-tighter flex items-center gap-1 text-2xl">
          <Image width={30} height={30} src={icon} alt="UI Bar Logo" />
          <span className="relative top-1">UI Bar</span>
        </h1>
      </header>
      <main className="flex flex-col max-w-5xl m-auto w-full items-center justify-between my-20">
        <Editor doc={doc} />
      </main>
    </>
  );
}
