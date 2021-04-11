import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Header } from "../../components/Form/Header";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Form/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>
        {/* flex="1" - ocupa toda a largura possível */}
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700"/> {/* linha horizontal */}

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="name" label="Nome completo"/>
              <Input name="email" type="email" label="E-mail"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="password" label="Senha"/>
              <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacin="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>         
      </Flex>
    </Box>
  );
}