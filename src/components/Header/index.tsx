import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue ({
    base: false,
    lg: true,
  })

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
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo/>
      { isWideVersion && <SearchBox/>}

      <Flex
        align="center"
        ml="auto" // margin left - joga o conteúdo para a direita        
      >
        <NotificationsNav/>
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}