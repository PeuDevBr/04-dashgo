import { Stack } from "@chakra-ui/react";
import { Navsection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from "react-icons/ri"

export function SidebarNav() {
  return (
      <Stack spacing="12" align="flex-start">

        <Navsection title="GERAL">

          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        
        </Navsection>

        <Navsection title="AUTOMAÇÃO">

          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>

        </Navsection>

      </Stack>
  )
}