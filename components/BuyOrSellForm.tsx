import useAPI from '@/hooks/useAPI';
import { EQueryPurpose, IQueryDto } from '@/types';
import { formSchema, WHATSAPP_LOGO } from '@/utils';
import { Box, Button, Flex, Image, Input, NumberInputRoot, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NumberInputField } from './ui/number-input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const BuyOrSellForm = () => {
   return (
      <Box w="full" h="full">
         <Tabs.Root className="border" rounded={'15px'} defaultValue={'Buy'}>
            <Tabs.List borderBottom={'2px solid #ddd'}>
               {['Buy', 'Sell'].map((item, index) => (
                  <Tabs.Trigger
                     fontSize={22}
                     fontWeight={500}
                     key={index}
                     py={8}
                     px={10}
                     value={item}
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
            <Tabs.Content value="Buy" py={10} px={7}>
               <Form btnTxt={EQueryPurpose.BUY} />
            </Tabs.Content>
            <Tabs.Content value="Sell" py={10} px={7}>
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
   const { register, handleSubmit, formState } = useForm<any>({
      resolver: yupResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         message: '',
         phoneNumber: '',
         quantity: 0,
         purposeOfQuery: btnTxt
      }
   });
   const [loading, setLoading] = useState(false);
   const { postQuery } = useAPI();

   const onSubmit = async (data: IQueryDto) => {
      setLoading(true);
      try {
         await postQuery(data);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <VStack spaceY={4} as="form" onSubmit={handleSubmit(onSubmit)}>
         <Flex w={'100%'} flexDirection={'column'}>
            <Text fontSize="xl" fontWeight={500} mb={4}>
               Chennai Super Kings (CSK) Shares
            </Text>
            <Text fontSize="xl" fontWeight={500} mb={4} color={'#757575'}>
               {btnTxt === EQueryPurpose.BUY ? '₹ 188' : '* Best In Industry'}
            </Text>
         </Flex>

         <Input pl={3} className="custom-input" size="xl" px={2} py={2} placeholder="Name" {...register('name')} />
         <Input
            {...register('email')}
            className="custom-input"
            size="xl"
            px={2}
            pl={3}
            py={2}
            placeholder="Email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
         />

         <PhoneInput
            country={'in'}
            value={'9568950421'}
            inputProps={{
               width: '100%',
               required: true,
               placeholder: 'Phone Number',
               ...register('phoneNumber')
            }}
         />

         <NumberInputRoot size={'md'} width="full">
            <NumberInputField
               min={0}
               max={1000000}
               className="custom-input"
               p={2}
               py={6}
               pl={3}
               placeholder="Qunatity"
               {...register('quantity')}
            />
         </NumberInputRoot>
         <Textarea
            size={'xl'}
            minH={130}
            resize="vertical"
            className="custom-input"
            px={2}
            py={2}
            placeholder="Message"
            {...register('message')}
         />
         <Button
            variant={'solid'}
            backgroundColor={'#34c759'}
            w={'100%'}
            color={'#fff'}
            fontSize={'20px'}
            fontWeight={600}
            py={8}
            rounded={'99px'}
            loading={loading}
            type={'submit'}
            loadingText={btnTxt === EQueryPurpose.BUY ? 'Buying...' : 'Selling...'}
         >
            {btnTxt}
         </Button>
         <Button
            variant={'solid'}
            w={'100%'}
            fontSize={'20px'}
            fontWeight={600}
            py={8}
            rounded={'99px'}
            border={'1px solid #0000001a'}
            _hover={{ backgroundColor: '#075E54', color: '#fff' }}
         >
            <Box h={8} w={8}>
               <Image src={WHATSAPP_LOGO} />
            </Box>
            Get Connected Now
         </Button>
      </VStack>
   );
};

export default BuyOrSellForm;
