import { TimeFrame } from '@/types';
import { CSK_LOGO } from '@/utils';
import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const rawData = [
   {
      Type: 'Daily',
      Labels: 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
      Price: '20, 215, 210, 205, 200, 195, 190'
   },
   {
      Type: 'Weekly',
      Labels: 'Week 1, Week 2, Week 3, Week 4',
      Price: '220, 210, 200, 185'
   },
   {
      Type: 'Monthly',
      Labels: 'Oct, Nov, Dec, Jan',
      Price: '220, 210, 195, 185'
   }
];

interface IProps {}

const LineChart: React.FC<IProps> = () => {
   const [timeFrame, setTimeFrame] = useState<TimeFrame>('daily');

   const formattedData = rawData.reduce(
      (acc, item) => {
         acc[item.Type.toLowerCase()] = {
            labels: item.Labels.split(', ').map((label) => label.trim()),
            data: item.Price.split(', ').map((price) => parseFloat(price))
         };
         return acc;
      },
      {} as Record<string, { labels: string[]; data: number[] }>
   );

   const data = {
      labels: formattedData[timeFrame].labels,
      datasets: [
         {
            label: 'Stock Price',
            data: formattedData[timeFrame].data,
            borderColor: '#34c759',
            backgroundColor: '#34c759',
            pointBackgroundColor: '#34c759',
            pointBorderColor: '#fff',
            pointRadius: 5,
            borderWidth: 3,
            tension: 0.3
         }
      ]
   };

   const options = {
      responsive: true,
      plugins: {
         legend: {
            display: true,
            position: 'top' as const,
            labels: {
               color: 'gray',
               usePointStyle: true
            }
         }
      },
      scales: {
         x: {
            ticks: { color: 'gray' }
         },
         y: {
            ticks: { color: 'gray', beginAtZero: false }
         }
      }
   };

   return (
      <Box w="full" h="full">
         <Flex flexDirection={'column'} justify={'start'}>
            <Box boxSize="120px" flexShrink={0}>
               <Image src={CSK_LOGO} alt="Chennai Super Kings Logo" borderRadius="md" />
            </Box>
            <Box>
               <Text fontSize={'2xl'} fontWeight="bold">
                  Chennai Super Kings (CSK) Share Price
               </Text>

               <Flex align="center" gap={4} mt={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                     ₹ 188
                  </Text>
                  <Text fontSize="md" color={'#980003'}>
                     -30
                  </Text>
                  <Text fontSize="md" color={'#980003'}>
                     -13.8%
                  </Text>
                  <Text fontSize="sm" color={'#757575'}>
                     4M
                  </Text>
               </Flex>
            </Box>
         </Flex>
         <Box>
            <HStack wrap="wrap" gap="6" justify={'center'} mb={4}>
               {(['daily', 'weekly', 'monthly'] as TimeFrame[]).map((el) => (
                  <Text
                     cursor={'pointer'}
                     colorPalette="green"
                     key={el}
                     onClick={() => setTimeFrame(el)}
                     color={el === timeFrame ? 'white' : '#757575'}
                     backgroundColor={el === timeFrame ? '#34c759' : 'transparent'}
                     px={4}
                     py={1}
                     fontSize={16}
                     rounded={'full'}
                  >
                     {el.charAt(0).toUpperCase() + el.slice(1)}
                  </Text>
               ))}
            </HStack>
            <Line data={data} options={options} />
         </Box>
      </Box>
   );
};

export default LineChart;
