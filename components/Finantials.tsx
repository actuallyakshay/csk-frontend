import { Box, Flex, Tabs, Text } from '@chakra-ui/react';
import SectionTable from './SectionTable';

interface IProps {
   incomeStatement: Record<string, any>[];
   investment: Record<string, any>[];
   balanceSheet: Record<string, any>[];
}

const Finantials: React.FC<IProps> = ({ balanceSheet, investment, incomeStatement }) => {
   return (
      <Box w="60%">
         <Text fontSize={20} fontWeight={600} mb={4} color={'#181818'} pb={2}>
            Financials (In Cr)
         </Text>
         <Tabs.Root rounded={'15px'} defaultValue={'Income Statement'}>
            <Tabs.List w="full" as={Flex} justifyContent="space-between">
               {['Income Statement', 'Balance Sheet', 'Cash Flow'].map((item, index) => (
                  <Tabs.Trigger
                     w="full"
                     as={Flex}
                     justifyContent={'center'}
                     fontSize={17}
                     fontWeight={500}
                     key={index}
                     py={8}
                     px={10}
                     value={item}
                     color={'#757575'}
                     _selected={{
                        color: '#34c759'
                     }}
                  >
                     {item}
                  </Tabs.Trigger>
               ))}
            </Tabs.List>
            <Tabs.Content value="Income Statement">
               <SectionTable tableData={investment} showNoData />
            </Tabs.Content>
            <Tabs.Content value="Balance Sheet">
               <SectionTable tableData={balanceSheet} showNoData />
            </Tabs.Content>
            <Tabs.Content value="Cash Flow">
               <SectionTable tableData={incomeStatement} showNoData />
            </Tabs.Content>
         </Tabs.Root>
      </Box>
   );
};

export default Finantials;
