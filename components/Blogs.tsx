import { BlogDescription, Blogs } from '@/utils';
import { Box, Grid, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const BlogSection = () => {
   return (
      <Box w={['95%', '80%', '80%']} m="auto" py={10}>
         <VStack spaceX={4} spaceY={4} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold">
               Our Blogs
            </Text>
            <Text fontSize={[14, 16]} fontWeight={500} color="#757575">
               {BlogDescription}
            </Text>
         </VStack>

         <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            spaceX={[0, 4, 8]}
            spaceY={8}
            mt={8}
            justifyItems={'flex-start'}
         >
            {Blogs.map((blog) => (
               <Link as={NextLink} href={blog.link} key={blog.id}>
                  <Box>
                     <Box overflow={'hidden'} rounded={'2xl'} transition="0.5s" w="full">
                        <Image
                           _hover={{ boxShadow: 'xl', transform: 'scale(1.1)', transition: '0.5s' }}
                           src={blog.image}
                           alt={blog.title}
                           objectFit="cover"
                           w="full"
                           h="250px"
                        />
                     </Box>
                     <Box py={4}>
                        <Heading fontSize={16} fontWeight={600}>
                           {blog.title}
                        </Heading>
                        <Text fontSize={16} fontWeight={500} color={'#757575'} mt={2}>
                           {blog.description}
                        </Text>
                     </Box>
                  </Box>
               </Link>
            ))}
         </Grid>
      </Box>
   );
};

export default BlogSection;
