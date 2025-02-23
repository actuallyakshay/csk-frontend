import { WHATSAPP_LOGO, WHATSAPP_URL } from '@/utils';
import { Box, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const StaticButton = () => {
   return (
      <Link href={WHATSAPP_URL} target="_blank">
         <Button
            variant={'solid'}
            w={'100%'}
            fontSize={'18px'}
            fontWeight={600}
            px={6}
            py={7}
            rounded={'99px'}
            backgroundColor={'#34c759'}
            color={'#fff'}
            border={'1px solid #0000001a'}
            _hover={{ backgroundColor: '#075E54' }}
         >
            <Box h={5} w={5}>
               <Image src={WHATSAPP_LOGO} />
            </Box>
            Get Connected Now
         </Button>
      </Link>
   );
};

export default StaticButton;
