import React from 'react';
import { Box, Container, Image, Heading, Stack, Text } from '@chakra-ui/react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransfomr: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          An Online Study Platform
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Best Instructor
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Let's Learn Together
        </Heading>
      </Box>
    </Carousel>
  );
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p="4"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            tempore tempora culpa distinctio odit voluptatum voluptatem optio.
            Fugiat illum porro fugit est, necessitatibus officiis corporis fuga
            esse, tempora quidem, praesentium itaque hic harum quod! Aperiam
            quae commodi quia asperiores sint laudantium odio, omnis incidunt
            alias impedit id hic aliquid, nam porro ratione laboriosam eos
            quidem esse? Illo voluptatem delectus excepturi corrupti harum
            deserunt asperiores reprehenderit voluptate, temporibus nemo fugit
            sapiente quae porro numquam possimus! Illo aperiam, repudiandae
            maiores provident suscipit nemo tempore eveniet omnis consequuntur
            culpa architecto enim magnam porro, corrupti a voluptatem
            perspiciatis ad, excepturi placeat. Ex, numquam repellat.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
