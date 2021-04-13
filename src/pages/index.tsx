import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function Singin() {
  const { register, handleSubmit, formState} = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise (resolve => setTimeout(resolve, 250));
    // resolve a promessa depois de 2 segundos (dá um delay da aplicação)

    console.log(values);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4"> 

          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            {...register('email')}
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            {...register('password')}
          />

        </Stack>

        <Button 
          type="submit"  
          marginTop="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
   </Flex>
  )
}
