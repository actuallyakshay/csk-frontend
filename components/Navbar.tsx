import { LOGO_URL, navLinks } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Navbar() {
   return (
      <Box className="navbar" padding={8} px={'100px'}>
         <Flex justify="space-between" align="center" width={'100%'}>
            {/* Logo Section */}
            <Box h={'50px'}>
               <Image h="40px" src={LOGO_URL} />
            </Box>

            {/* Navigation Links */}
            <Flex justify={'space-between'} align={'center'} gap={4}>
               {navLinks.map((link) => (
                  <Link key={link.name} as={NextLink} href={link.href} fontSize={15} fontWeight={600} color="#757575">
                     {link.name}
                  </Link>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
}
