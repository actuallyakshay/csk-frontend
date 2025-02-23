import { Box, Flex, Tabs, Text } from '@chakra-ui/react';
import SectionTable from './SectionTable';

interface IProps {
   incomeStatement: any;
   investment: any;
   balanceSheet: any;
}

const Finantials: React.FC<IProps> = ({ balanceSheet, investment, incomeStatement }) => {
   return (
      <Box w="70%">
         <Text fontSize={24} fontWeight={600} mb={10} color={'#181818'} pb={2}>
            Financials (In Cr)
         </Text>
         <Tabs.Root rounded={'15px'} defaultValue={'Income Statement'}>
            <Tabs.List w="full" as={Flex} justifyContent="space-between">
               {['Income Statement', 'Balance Sheet', 'Cash Flow'].map((item, index) => (
                  <Tabs.Trigger
                     w="full"
                     as={Flex}
                     justifyContent={'center'}
                     fontSize={18}
                     fontWeight={500}
                     key={index}
                     py={8}
                     px={10}
                     value={item}
                     color={'#757575'}
                     _selected={{
                        color: '#34c759',
                        borderBottomWidth: '3px',
                        borderBottomColor: '#34c759' // ✅ Works better than `borderBottom`
                     }}
                  >
                     {item}
                  </Tabs.Trigger>
               ))}
            </Tabs.List>
            <Tabs.Content value="Income Statement">
               <SectionTable headers={['Shareholding Pattern', '2021', '2022', 'temp']} />
            </Tabs.Content>
            <Tabs.Content value="Balance Sheet">
               <SectionTable headers={['a', 'b', 'c', 'd']} />
            </Tabs.Content>
            <Tabs.Content value="Cash Flow">
               <SectionTable headers={['e', 'f', 'g', 'h']} />
            </Tabs.Content>
         </Tabs.Root>
      </Box>
   );
};

export default Finantials;
