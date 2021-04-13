import { Icon, Link as ChakraLink, Text, LinkProps as ChakralinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'
interface NavLinkProps extends ChakralinkProps{
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" font_weight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}