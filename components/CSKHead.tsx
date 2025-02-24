import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CSKHead = () => {
   return (
      <Box textAlign="center" bg="#f9faf9" py={[5, 12, 20]}>
         <Text fontSize={{ base: 'xl', md: '4xl', lg: '6xl' }} fontWeight={[500, 500, 600]}>
            Chennai Super Kings (CSK) Shares
         </Text>
      </Box>
   );
};

export default CSKHead;
