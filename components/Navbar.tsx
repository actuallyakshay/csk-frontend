import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerRoot, DrawerTrigger } from '@/components/ui/drawer';
import { LOGO_URL, navLinks } from '@/utils';
import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
   return (
      <Box className="navbar" padding={[2, 2, 8]} px={['20px', '40px', '100px']}>
         <Flex justify="space-between" align="center" width={'100%'}>
            {/* Logo Section */}
            <Box h={['40px', '40px', '50px']}>
               <Image h="40px" src={LOGO_URL} />
            </Box>

            <DrawerRoot placement={'top'} size={'md'}>
               <DrawerBackdrop />
               <DrawerTrigger asChild>
                  <Box
                     display={['flex', 'flex', 'none']}
                     onClick={() => {
                        console.log('clicked');
                     }}
                  >
                     <Button>
                        <GiHamburgerMenu size={30} />
                     </Button>
                  </Box>
               </DrawerTrigger>
               <DrawerContent>
                  <DrawerBody>
                     <Flex direction="column" gap={8} h={'150px'} mt={10}>
                        {navLinks.map((link) => (
                           <Link key={link.name} as={NextLink} href={link.href} fontSize={15} fontWeight={600} color="#757575">
                              {link.name}
                           </Link>
                        ))}
                     </Flex>
                  </DrawerBody>
                  <DrawerCloseTrigger />
               </DrawerContent>
            </DrawerRoot>

            {/* Navigation Links */}
            <Flex display={['none', 'none', 'flex']} justify={'space-between'} align={'center'} gap={4}>
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
