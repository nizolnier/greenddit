import { Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { MainContainer } from './styled'

function ErrorPage() {
  return (
    <MainContainer>
      <Heading size="xl">There's nothing here!</Heading>
      <Text p="1em" fontSize="xl" textAlign="center">Whatever you were looking for doesn't currently exist at this address. <br></br>
      Unless you were looking for this error page, in which case: <br></br> Congrats! You totally found it!</Text>
    </MainContainer>
  );
}

export default ErrorPage;