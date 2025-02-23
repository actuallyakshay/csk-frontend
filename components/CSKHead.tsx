import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CSKHead = () => {
   return (
      <Box textAlign="center" bg="#f9faf9" py={24}>
         <Text fontSize={{ base: '2xl', md: '4xl', lg: '7xl' }} fontWeight="bold">
            Chennai Super Kings (CSK) Shares
         </Text>
      </Box>
   );
};

export default CSKHead;
