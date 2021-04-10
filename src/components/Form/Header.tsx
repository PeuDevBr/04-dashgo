import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri' // yarn add react-icons

export function Header() {

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20" // 20 -	5rem -	80px
      mx="auto" // horizontal margin
      mt="4" // vertical margin
      paddingX="6" // horizontal
      alignItems="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight" // Typography https://chakra-ui.com/docs/theming/theme
        width="64" // 64	16rem	256px
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={480}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400"}}
        />
        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>

      <Flex
        align="center"
        ml="auto" // margin left - joga o conteúdo para a direita        
      >
        <HStack  
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right"> {/* div sem estilização */}
            <Text>Flávio Renato</Text>
            <Text color="gray.300" fontSize="small">
              renatoarapiraca.82@gmail.com
            </Text>
          </Box>

          <Avatar 
            size="md" 
            name="Flávio Renato" 
            src="https://xesque.rocketseat.dev/users/avatar/profile-52fbe155-13ec-494a-a55e-c79b4e5520ab-1614627655758.jpg"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}