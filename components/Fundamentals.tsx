import { ISection } from '@/types';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

interface IProps {
   data: any;
}

const Fundamentals: React.FC<IProps> = ({}) => {
   const data = [
      { label: 'Chennai Super Kings (CSK) Shares', value: '₹ 188' },
      { label: 'Market Cap (in cr)', value: '₹ 8271' },
      { label: 'Lot Size', value: '-' },
      { label: 'P/E Ratio', value: '41.05' },
      { label: '52 Week High', value: '₹ 225' },
      { label: 'P/B Ratio', value: '15.65' },
      { label: '52 Week Low', value: '₹ 158' },
      { label: 'Debt to Equity', value: '-' },
      { label: 'Depository', value: '-' },
      { label: 'ROE (%)', value: '38.16' },
      { label: 'PAN Number', value: 'AAFCC8730K' },
      { label: 'Book Value', value: '13.92' },
      { label: 'ISIN Number', value: 'INE852S01026' },
      { label: 'Face Value', value: '0.1' },
      { label: 'CIN', value: 'U74900TN2014PLC098517' },
      { label: 'Valuation', value: 'High' },
      { label: 'RTA', value: '-' },
      { label: 'Total Shares', value: '379425004' }
   ];

   return (
      <Box p={5} bg="white">
         <Text fontSize="3xl" fontWeight={500} mb={4}>
            Fundamentals
         </Text>
         <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gapX={20} gapY={6} fontSize={15} fontWeight={500}>
            {data.map((item, index) => (
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
