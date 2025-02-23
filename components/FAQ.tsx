import { FAQItems } from '@/utils';
import {
   AbsoluteCenter,
   AccordionItem,
   AccordionItemContent,
   AccordionItemTrigger,
   AccordionRoot,
   Box,
   Heading,
   VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosAddCircleOutline, IoIosArrowDropup } from 'react-icons/io';

const FAQ = () => {
   const [activeItem, setActiveItem] = useState<string | null>(null);

   return (
      <Box>
         <Heading as="h1" fontSize={42} textAlign="center" mb={10}>
            <strong>FAQ's</strong>
         </Heading>
         <VStack>
            <AccordionRoot variant="plain" collapsible defaultValue={['b']} onValueChange={({ value }) => setActiveItem(value[0])}>
               {FAQItems.map((item, index) => (
                  <AccordionItem
                     borderBottomRadius={0}
                     borderBottom={'1px solid #757575'}
                     key={index}
                     value={item.question}
                     borderColor="gray.200"
                     paddingY={6}
                  >
                     <Box position="relative">
                        <AccordionItemTrigger fontSize={18} fontWeight={500}>
                           {item.question}
                        </AccordionItemTrigger>
                        <AbsoluteCenter axis="vertical" insetEnd="0">
                           {activeItem === item.question ? (
                              <IoIosArrowDropup style={{ strokeWidth: 4 }} size={26} color="#98a2b3" />
                           ) : (
                              <IoIosAddCircleOutline style={{ strokeWidth: 4 }} size={26} color="#98a2b3" />
                           )}
                        </AbsoluteCenter>
                     </Box>
                     <AccordionItemContent paddingY={6} borderBottomRadius={0} fontSize={16} color={'#757575'} fontWeight={500}>
                        {item.answer}
                     </AccordionItemContent>
                  </AccordionItem>
               ))}
            </AccordionRoot>
         </VStack>
      </Box>
   );
};

export default FAQ;
