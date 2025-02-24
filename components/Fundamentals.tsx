import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

interface IProps {
   sectionData: Record<string, any>[];
}

const Fundamentals: React.FC<IProps> = ({ sectionData }) => {
   return (
      <Box py={5} mb={10} bg="white" w={'60%'}>
         <Text fontSize="3xl" fontWeight={500} mb={4}>
            Fundamentals
         </Text>
         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gapX={20} gapY={6} fontSize={15} fontWeight={500}>
            {sectionData?.map((item, index) => (
               <GridItem key={index} display="flex" justifyContent="space-between" py={1}>
                  <Text>{item.label}</Text>
                  <Text>{item.value}</Text>
               </GridItem>
            ))}
         </Grid>
      </Box>
   );
};

export default Fundamentals;
