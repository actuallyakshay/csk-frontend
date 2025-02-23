import useAPI from '@/hooks/useAPI';
import { EQueryPurpose, IQueryDto } from '@/types';
import { validateFileds, validatePhone, WHATSAPP_LOGO } from '@/utils';
import { Box, Button, Flex, Image, Input, NumberInputRoot, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { NumberInputField } from './ui/number-input';
import { toast } from 'react-toastify';

const BuyOrSellForm = () => {
   return (
      <Box w="full" h="full">
         <Tabs.Root
            className="border"
            rounded={'15px'}
            defaultValue={'Buy'}
            _focus={{
               boxShadow: 'none'
            }}
         >
            <Tabs.List borderBottom={'2px solid #ddd'}>
               {['Buy', 'Sell'].map((item, index) => (
                  <Tabs.Trigger
                     className="temp"
                     fontSize={22}
                     fontWeight={500}
                     key={index}
                     py={8}
                     px={10}
                     value={item}
                     _selected={{
                        color: '#34c759'
                     }}
                  >
                     {item}
                  </Tabs.Trigger>
               ))}
            </Tabs.List>
            <Tabs.Content value="Buy" py={6} px={7}>
               <Form btnTxt={EQueryPurpose.BUY} />
            </Tabs.Content>
            <Tabs.Content value="Sell" py={6} px={7}>
               <Form btnTxt={EQueryPurpose.SELL} />
            </Tabs.Content>
         </Tabs.Root>
      </Box>
   );
};

interface IProps {
   btnTxt: EQueryPurpose;
}

const Form: React.FC<IProps> = ({ btnTxt }) => {
   const [input, setInput] = useState<IQueryDto>({
      name: '',
      email: '',
      message: '',
      phoneNumber: '',
      quantity: 0,
      purposeOfQuery: btnTxt
   });
   const [loading, setLoading] = useState(false);
   const [phoneInvalid, setPhoneInvalid] = useState(false);
   const { postQuery } = useAPI();
   const _validatePhone = (number: string, format: string) => {
      setPhoneInvalid(!validatePhone(number, format));
      setInput({ ...input, phoneNumber: number });
   };

   const onSubmit = async () => {
      console.log({ phoneInvalid });
      if (!validateFileds(input) || phoneInvalid) return;

      setLoading(true);
      try {
         await postQuery(input);
         toast.success('Query Submitted Successfully');
      } catch (error) {
      } finally {
         setLoading(false);
      }
   };

   return (
      <VStack spaceY={4} as="form">
         <Flex w={'100%'} flexDirection={'column'}>
            <Text fontSize="xl" fontWeight={500} mb={4}>
               Chennai Super Kings (CSK) Shares
            </Text>
            <Text fontSize="xl" fontWeight={500} mb={4} color={'#757575'}>
               {btnTxt === EQueryPurpose.BUY ? '₹ 188' : '* Best In Industry'}
            </Text>
         </Flex>

         <Input
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            pl={3}
            className="custom-input"
            size="xl"
            px={2}
            py={2}
            placeholder="Name"
            required
         />
         <Input
            className="custom-input"
            size="xl"
            px={2}
            pl={3}
            py={2}
            placeholder="Email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
         />

         <PhoneInput
            inputProps={{ required: true, autoFocus: true, autoComplete: 'tel', inputMode: 'tel' }}
            onChange={(_, data: CountryData, e) => _validatePhone(e.target.value, data.format)}
            specialLabel={''}
            enableSearch={true}
            country={'in'}
            value={'9568950421'}
         />

         <NumberInputRoot size={'md'} width="full">
            <NumberInputField
               onChange={(e) => setInput({ ...input, quantity: +e.target.value })}
               min={0}
               max={1000000}
               className="custom-input"
               p={2}
               py={6}
               pl={3}
               placeholder="Qunatity"
            />
         </NumberInputRoot>
         <Textarea
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            size={'xl'}
            minH={100}
            resize="vertical"
            className="custom-input"
            px={2}
            py={2}
            placeholder="Message"
         />
         <Button
            variant={'solid'}
            backgroundColor={'#34c759'}
            w={'100%'}
            color={'#fff'}
            fontSize={16}
            fontWeight={500}
            py={6}
            rounded={'99px'}
            loading={loading}
            loadingText={btnTxt === EQueryPurpose.BUY ? 'Buying...' : 'Selling...'}
            onClick={onSubmit}
         >
            {btnTxt}
         </Button>
         <Button
            variant={'solid'}
            w={'100%'}
            fontSize={16}
            fontWeight={500}
            py={6}
            rounded={'99px'}
            border={'1px solid #0000001a'}
            _hover={{ backgroundColor: '#075E54', color: '#fff' }}
         >
            <Box h={6} w={6}>
               <Image src={WHATSAPP_LOGO} />
            </Box>
            Get Connected Now
         </Button>
      </VStack>
   );
};

export default BuyOrSellForm;
