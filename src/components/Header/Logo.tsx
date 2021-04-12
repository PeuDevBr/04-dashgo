import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
      <Text
        fontSize={["2xl","3xl"]} // 2xl mobel, 3xl a partir disso
        fontWeight="bold"
        letterSpacing="tight" // Typography https://chakra-ui.com/docs/theming/theme
        width="64" // 64	16rem	256px
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
  )
}