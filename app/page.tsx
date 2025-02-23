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
import { ISection } from '@/types';
import { SectionObj } from '@/utils';
import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
   const { getSections } = useAPI();
   const [sections, setSections] = useState<any>();

   useEffect(() => {
      _getSections();
   }, []);

   const _getSections = async () => {
      try {
         console.log('hello');
         const resp = await getSections();
         const sectionMap = new Map(
            resp.map((section: ISection) => {
               return [section.sectionName, section.data];
            })
         );

         setSections(sectionMap);
      } catch (error) {
      } finally {
      }
   };

   return (
      <Box position={'relative'}>
         <Navbar />
         <CSKHead />
         <Box w={'80%'} m={'auto'}>
            {/* SHARE_PRICE_SECTION */}
            <Grid gridTemplateColumns={{ base: '1fr', md: '1.9fr 1.1fr' }} gapX={20} mt={20}>
               <LineChart data={sections?.[SectionObj.SHARE_PRICE_SECTION]} />
               <BuyOrSellForm />
            </Grid>

            {/* FUNDAMENTALS_SECTION */}
            {sections?.[SectionObj.FUNDAMENTALS_SECTION] && (
               <Box w="70%">
                  <Fundamentals data={sections?.[SectionObj.FUNDAMENTALS_SECTION]} />
               </Box>
            )}

            {/* FINANTIALS_SECTION */}
            <Finantials
               incomeStatement={sections?.[SectionObj.INCOME_STATEMENT_SECTION]}
               investment={sections?.[SectionObj.INVESTMENT_SECTION]}
               balanceSheet={sections?.[SectionObj.BALANCE_SHEET_SECTION]}
            />

            {/* SAHREHOLDING_PATTERN_SECTION  */}
            {sections?.[SectionObj.SAHREHOLDING_PATTERN_SECTION] && (
               <Box w="70%">
                  <SectionTable headers={['Shareholding Pattern', '2021', '2022', 'temp']} />
               </Box>
            )}

            {/* PROMOTERS_AND_MANAGEMENT_SECTION */}
            {sections?.[SectionObj.PROMOTERS_AND_MANAGEMENT_SECTION] && (
               <Box w="70%">
                  <SectionTable headers={['Promoters & Management', '2021', '2022', 'temp']} />
               </Box>
            )}

            {/* OTHER_SECTIONS */}
            <Box mt={10} w="70%">
               <SectionTable headers={['Shareholding Pattern', '2021', '2022', 'temp']} />
            </Box>
         </Box>

         {/* FAQ_SECTION */}
         <Box w={['100%', '80%', '60%']} mx="auto" mt={20}>
            <FAQ />
         </Box>

         {/* BLOG_SECTION */}
         <BlogSection />

         {/* FOOOTER_SECTION */}
         <Footer />

         {/* STATIC_BUTTON_SECTION */}
         <Box className="absolute" position={'fixed'} bottom={20} right={10}>
            <StaticButton />
         </Box>
      </Box>
   );
}
