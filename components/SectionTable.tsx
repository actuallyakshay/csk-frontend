import { Box, Table, Text } from '@chakra-ui/react';

interface IProps {
   sectionHeader?: string;
   tableData?: Record<string, any>[];
   showNoData?: boolean;
}

const SectionTable: React.FC<IProps> = ({ sectionHeader, tableData, showNoData }) => {
   const headers = tableData?.length ? Object.keys(tableData[0]) : [];

   return headers?.length ? (
      <>
         {sectionHeader && (
            <Text fontSize={20} fontWeight={600} mt={8} mb={4} color={'#181818'}>
               {sectionHeader}
            </Text>
         )}
         <Box className="table-radius" overflow={'hidden'}>
            <Table.Root size={'lg'} fontSize={16} fontWeight={500}>
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
                  {tableData?.map((item) => (
                     <Table.Row key={item.id} borderBottom={'1px solid #ddd'} color={'#181818'}>
                        {headers.map((header, index) => (
                           <Table.Cell textAlign={index === headers.length - 1 ? 'end' : 'start'} py={4} key={index}>
                              {item[header]}
                           </Table.Cell>
                        ))}
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table.Root>
         </Box>
      </>
   ) : showNoData ? (
      <Box>
         <Text fontSize={16} fontWeight={500} color={'#757575'} textAlign={'center'} mt={4}>
            No data available
         </Text>
      </Box>
   ) : (
      <></>
   );
};

export default SectionTable;
