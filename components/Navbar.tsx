'use client';

import { INavLinks } from '@/types';
import { LOGO_URL } from '@/utils';
import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const navLinks: INavLinks[] = [
   { name: 'Unlisted Shares', href: '/' },
   { name: 'Our Blogs', href: '/' },
   { name: 'Contact Us', href: '/' }
];

export default function Navbar() {
   return (
      <Box className="navbar" padding={10}>
         <Flex justify="space-between" align="center" width={'100%'}>
            {/* Logo Section */}
            <HStack spaceX={2} spaceY={2}>
               <Image src={LOGO_URL} />
            </HStack>

            {/* Navigation Links */}
            <Flex justify={'space-between'} align={'center'} gap={4}>
               {navLinks.map((link) => (
                  <Link key={link.name} as={NextLink} href={link.href} fontSize={'20px'} fontWeight="medium" color="var(--secondary-color)">
                     {link.name}
                  </Link>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
}
