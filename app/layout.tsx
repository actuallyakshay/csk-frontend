'use client';

import './globals.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html suppressHydrationWarning={true} lang="en">
         <head />
         <body>
            <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
         </body>
      </html>
   );
}
