import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
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

          <FormControl> 
            <FormLabel htmlFor="email">Email</FormLabel>

            <Input 
              name="email" 
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled" // https://chakra-ui.com/docs/form/input
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
            />
          </FormControl>          
          
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input 
              name="password" 
              type="password" 
              id="password"
              focusBorderColor="pink.500" 
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg" // large - tamanho
            />
          </FormControl>

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
