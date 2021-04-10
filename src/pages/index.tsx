import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'

export default function Singin() {
  return (
   <Flex
    w="100vw"
    h="100vh"
    alignItems="center"
    justifyContent="center"
   >
      <Flex 
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8" // 8 = 2rem - 32px - https://chakra-ui.com/docs/theming/theme
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4"> 

          <Input name="email" type="email" label="E-mail"/>
          <Input name="password" type="password" label="Senha"/>

        </Stack>

        <Button 
          type="submit"  
          marginTop="6" 
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
   </Flex>
  )
}
