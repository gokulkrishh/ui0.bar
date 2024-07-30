import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EditorStyles } from './components/editor/styles';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ui0.bar',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <EditorStyles />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
