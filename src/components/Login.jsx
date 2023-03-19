import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          width={['full', '96']}
          spacing="8"
          m="auto"
          my="16"
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
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

          <Button variant={'link'} alignSelf="flex-end">
            <Link to={'/forgetpassword'}>forget password</Link>
          </Button>

          <Button colorScheme={'purple'}>Login</Button>

          <Text textAlign={'right'}>
            new user? {'  '}
            <Button variant={'link'}>
              <Link to={'/signup'}>signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
