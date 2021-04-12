import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {  

  return (
    <Flex align="center">
      { showProfileData && ( // se for verdadeira mostra o conteúdo
        <Box mr="4" textAlign="right"> {/* div sem estilização */}
        <Text>Flávio Renato</Text>
        <Text color="gray.300" fontSize="small">
          renatoarapiraca.82@gmail.com
        </Text>
      </Box>
      )}

      <Avatar 
        size="md" 
        name="Flávio Renato" 
        src="https://xesque.rocketseat.dev/users/avatar/profile-52fbe155-13ec-494a-a55e-c79b4e5520ab-1614627655758.jpg"
      />
    </Flex>
  )
}