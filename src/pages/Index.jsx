import { Box, Button, Container, Flex, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaUpload, FaRulerCombined } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1605896437011-bfc94d9c199f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjByb29mc3xlbnwwfHx8fDE3MTM3MzQ0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
          <Heading as="h1" size="xl">
            Aerial Roof Measurement Tool
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Upload your aerial images and get precise roof measurements quickly and easily.
          </Text>
          <Box>
            <Input type="file" accept="image/*" size="lg" placeholder="Upload Image" />
            <Button leftIcon={<FaUpload />} colorScheme="blue" mt={2}>
              Upload Image
            </Button>
          </Box>
          <Button rightIcon={<FaRulerCombined />} colorScheme="green" size="lg">
            Measure Roof
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
