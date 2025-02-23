'use client';

import BlogSection from '@/components/Blogs';
import BuyOrSellForm from '@/components/BuyOrSellForm';
import CSKHead from '@/components/CSKHead';
import FAQ from '@/components/FAQ';
import Finantials from '@/components/Finantials';
import Footer from '@/components/Footer';
import Fundamentals from '@/components/Fundamentals';
import LineChart from '@/components/LineChart';
import Navbar from '@/components/Navbar';
import SectionTable from '@/components/SectionTable';
import StaticButton from '@/components/StaticButton';
import useAPI from '@/hooks/useAPI';
import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
   const { getSections } = useAPI();
   const [sections, setSections] = useState<any[]>([]);

   useEffect(() => {
      // _getSections();
   }, []);

   const _getSections = async () => {
      try {
         const resp = await getSections();
         setSections(resp);
      } catch (error) {
      } finally {
      }
   };

   return (
      <Box position={'relative'}>
         <Navbar />
         <CSKHead />
         <Box w={'80%'} m={'auto'}>
            <Grid gridTemplateColumns={{ base: '1fr', md: '1.9fr 1.1fr' }} gapX={20} mt={20}>
               <LineChart />
               <BuyOrSellForm />
            </Grid>
            <Fundamentals />
            <Finantials />
            <Box mt={10} w="70%">
               <SectionTable headers={['Shareholding Pattern', '2021', '2022', 'temp']} />
            </Box>
         </Box>

         <Box w={['100%', '80%', '60%']} mx="auto" mt={20}>
            <FAQ />
         </Box>
         <BlogSection />
         <Footer />
         <Box className="absolute" position={'fixed'} bottom={20} right={10}>
            <StaticButton />
         </Box>
      </Box>
   );
}
