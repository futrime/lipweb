import { type JSX } from 'react';

import { inter } from '@/app/ui/fonts';
import './ui/global.css';
import Header from './ui/header';

import { ThemeProvider } from './ui/themeProvider';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased h-screen flex flex-col`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className='py-3' />
        </ThemeProvider>
      </body>
    </html>
  );
}
