import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

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
      <Logo/>
      <SearchBox/>

      <Flex
        align="center"
        ml="auto" // margin left - joga o conteúdo para a direita        
      >
        <NotificationsNav/>
        <Profile/>
      </Flex>
    </Flex>
  )
}