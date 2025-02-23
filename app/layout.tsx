'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import './globals.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html suppressHydrationWarning={true}>
         <head />
         <body>
            <ToastContainer position="top-right" style={{ zIndex: 999999 }} />
            <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
         </body>
      </html>
   );
}
