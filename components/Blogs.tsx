import { BlogDescription, Blogs } from '@/utils';
import { Box, Heading, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const BlogSection = () => {
   return (
      <Box w={'80%'} m="auto" py={10}>
         <VStack spaceX={4} spaceY={4} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold">
               Our Blogs
            </Text>
            <Text fontSize={20} fontWeight={600} color="#757575">
               {BlogDescription}
            </Text>
         </VStack>

         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spaceX={8} spaceY={8} mt={8}>
            {Blogs.map((blog) => (
               <Link as={NextLink} href={blog.link} key={blog.id}>
                  <VStack bg="white" borderRadius="lg" overflow="hidden" align="start">
                     <Box overflow={'hidden'} rounded={'2xl'} transition="0.5s" w="full">
                        <Image
                           _hover={{ boxShadow: 'xl', transform: 'scale(1.1)', transition: '0.5s' }}
                           src={blog.image}
                           alt={blog.title}
                           objectFit="cover"
                           w="full"
                           h="330px"
                        />
                     </Box>
                     <Box p={4}>
                        <Heading fontSize={20} fontWeight="bold">
                           {blog.title}
                        </Heading>
                        <Text fontSize={20} fontWeight={500} color={'#757575'} mt={2}>
                           {blog.description}
                        </Text>
                     </Box>
                  </VStack>
               </Link>
            ))}
         </SimpleGrid>
      </Box>
   );
};

export default BlogSection;
