import { LOGO_URL, PRIVACY_URL, TNC_URL } from '@/utils';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
   return (
      <Box borderTop={'1px solid #E2E8F0'} backgroundColor={'#f9fafb'} paddingY={20} color={'#757575'} width={'100%'}>
         <Flex mb={10} justify="space-between" align="center" gap={[2, 4, 0]} width={['98%', '90%', '80%']} mx={'auto'}>
            <Box h={['20px', '30px', '40px']}>
               <Image src={LOGO_URL} />
            </Box>
            <Flex
               justify={'space-between'}
               align={'center'}
               alignContent={'center'}
               gap={[2, 4, 8]}
               fontSize={[12, 14, 15]}
               fontWeight={600}
            >
               <Link target="_blank" href={TNC_URL}>
                  Terms & Condition
               </Link>
               <Link target="_blank" href={PRIVACY_URL}>
                  Privacy Policy
               </Link>
            </Flex>
         </Flex>
         <Flex
            justify="center"
            align="center"
            width={'80%'}
            mx={'auto'}
            borderTop={'1px solid #757575'}
            pt={10}
            fontSize={[12, 14, 15]}
            fontWeight={500}
         >
            <Text>© 2024. Unlisted Shares India. All rights reserved.</Text>
         </Flex>
      </Box>
   );
};

export default Footer;
