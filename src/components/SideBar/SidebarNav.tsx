import { Stack } from "@chakra-ui/react";
import { Navsection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from "react-icons/ri"

export function SidebarNav() {
  return (
      <Stack spacing="12" align="flex-start">

        <Navsection title="GERAL">

          <NavLink icon={RiDashboardLine} >Dashboard</NavLink>
          <NavLink icon={RiContactsLine} >Usuários</NavLink>
        
        </Navsection>

        <Navsection title="AUTOMAÇÃO">

          <NavLink icon={RiInputMethodLine} >Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} >Automação</NavLink>

        </Navsection>

      </Stack>
  )
}