import React from 'react';

import { AiOutlineSend } from 'react-icons/ai';

import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w="full"
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'center']}
          >
            PAT SHALA
          </Heading>
          <Text px={['0', '1']} textAlign={'center'}>
            All rights received Bharat Bardiya &copy; 2023
          </Text>
        </VStack>

        <VStack w="full">
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://github.com/bharatbardiya">
              GitHub
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/bharatbardiya/"
            >
              Linkedin
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://instagram.com/bharat_bardiya">
              Instagram
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
