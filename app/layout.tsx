import type { Metadata } from 'next';

import '@/app/globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
