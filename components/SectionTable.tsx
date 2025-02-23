import { Box, Table, Text } from '@chakra-ui/react';

interface IProps {
   headers: string[];
   sectionHeader?: string;
}

const SectionTable: React.FC<IProps> = ({ headers, sectionHeader }) => {
   return (
      <>
         {sectionHeader && (
            <Text fontSize={24} fontWeight={600} mb={10} color={'#181818'} pb={2}>
               {sectionHeader}
            </Text>
         )}

         <Table.Root size={'lg'} fontSize={22} fontWeight={600} border={'1px solid #ddd'}>
            <Table.Header>
               <Table.Row>
                  {headers.map((header, index) => (
                     <Table.ColumnHeader
                        padding={'10px'}
                        borderBottom={'1px solid #ddd'}
                        color={'#757575'}
                        fontWeight={500}
                        py={6}
                        textAlign={index === headers.length - 1 ? 'end' : 'start'}
                        key={header}
                     >
                        {header}
                     </Table.ColumnHeader>
                  ))}
               </Table.Row>
            </Table.Header>
            <Table.Body>
               {items.map((item) => (
                  <Table.Row key={item.id} border={'1px solid #ddd'} color={'#181818'}>
                     <Table.Cell py={6}>{item.name}</Table.Cell>
                     <Table.Cell>{item.category}</Table.Cell>
                     <Table.Cell>{item.temp}</Table.Cell>
                     <Table.Cell textAlign="end">{item.price}</Table.Cell>
                  </Table.Row>
               ))}
            </Table.Body>
         </Table.Root>
      </>
   );
};

const items = [
   { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, temp: 'wewq' },
   { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99, temp: 'wewq' },
   { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0, temp: 'wewq' },
   { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99, temp: 'wewq' },
   { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99, temp: 'wewq' }
];

export default SectionTable;
