import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'unset'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          width={['full', '96']}
          spacing="8"
          m="auto"
          my="16"
        >
          <Heading textAlign={'center'}>Welcome to PATSHALA</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
          <Input
            placeholder="Name"
            type={'text'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Confirm Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          <Button colorScheme={'purple'}>Sign Up</Button>

          <Text textAlign={'right'}>
            Already Signed Up? {'  '}
            <Button variant={'link'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
