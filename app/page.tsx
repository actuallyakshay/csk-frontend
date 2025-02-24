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
   const [sections, setSections] = useState<Record<string, any[]>>({
      [SectionObj.SHARE_PRICE_SECTION]: [],
      [SectionObj.FUNDAMENTALS_SECTION]: [],
      [SectionObj.INCOME_STATEMENT_SECTION]: [],
      [SectionObj.INVESTMENT_SECTION]: [],
      [SectionObj.BALANCE_SHEET_SECTION]: [],
      [SectionObj.SAHREHOLDING_PATTERN_SECTION]: [],
      [SectionObj.PROMOTERS_AND_MANAGEMENT_SECTION]: []
   });
   const [unknownSections, setUnknownSections] = useState<Record<string, any[]>>({});

   useEffect(() => {
      _getSections();
   }, []);

   const _getSections = async () => {
      try {
         const resp = await getSections();
         const updatedSections = resp.reduce(
            (acc: Record<string, any[]>, section: ISection) => {
               if (Object.values(SectionObj).includes(section.sectionName)) {
                  acc[section.sectionName] = section.data ?? [];
               } else {
                  setUnknownSections((prev) => ({ ...prev, [section.sectionName]: section.data }));
               }
               return acc;
            },
            {} as Record<string, any[]>
         );
         setSections((prev) => ({ ...prev, ...updatedSections }));
      } catch (error) {}
   };

   return (
      <Box position={'relative'}>
         <Navbar />
         <CSKHead />
         <Box w={['98%', '90%', '80%']} m={'auto'}>
            {/* SHARE_PRICE_SECTION */}
            <Grid gridTemplateColumns={{ base: '1fr', md: '1.9fr 1.1fr' }} gapX={20} gapY={[5, 5, 0]} mt={20}>
               <LineChart sectionData={sections?.[SectionObj.SHARE_PRICE_SECTION]} />
               <BuyOrSellForm />
            </Grid>

            {/* FUNDAMENTALS_SECTION */}
            {sections?.[SectionObj.FUNDAMENTALS_SECTION]?.length && (
               <Fundamentals sectionData={sections?.[SectionObj.FUNDAMENTALS_SECTION]} />
            )}

            {/* FINANTIALS_SECTION */}
            <Finantials
               incomeStatement={sections?.[SectionObj.INCOME_STATEMENT_SECTION]}
               investment={sections?.[SectionObj.INVESTMENT_SECTION]}
               balanceSheet={sections?.[SectionObj.BALANCE_SHEET_SECTION]}
            />

            {/* SAHREHOLDING_PATTERN_SECTION  */}
            {sections?.[SectionObj.SAHREHOLDING_PATTERN_SECTION]?.length && (
               <Box w={['98%', '80%', '60%']} m={['auto', 'auto', 0]}>
                  <SectionTable sectionHeader="Shareholding Pattern" tableData={sections?.[SectionObj.SAHREHOLDING_PATTERN_SECTION]} />
               </Box>
            )}

            {/* PROMOTERS_AND_MANAGEMENT_SECTION */}
            {sections?.[SectionObj.PROMOTERS_AND_MANAGEMENT_SECTION]?.length && (
               <Box w={['98%', '80%', '60%']} m={['auto', 'auto', 0]}>
                  <SectionTable
                     sectionHeader="Promoters or Management"
                     tableData={sections?.[SectionObj.PROMOTERS_AND_MANAGEMENT_SECTION]}
                  />
               </Box>
            )}

            {/*  this is for unknown sections */}
            {Object.keys(unknownSections).map((sectionName) => (
               <Box w={['98%', '80%', '60%']} m={['auto', 'auto', 0]} key={sectionName}>
                  <SectionTable sectionHeader={sectionName} tableData={unknownSections[sectionName]} />
               </Box>
            ))}
         </Box>

         {/* FAQ_SECTION */}
         <Box w={['95%', '80%', '60%']} mx="auto" mt={20}>
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
