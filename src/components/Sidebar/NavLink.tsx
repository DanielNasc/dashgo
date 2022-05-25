import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavSectionProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
  href: string;
}

export function NavLink({ title, icon, href, ...rest }: NavSectionProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
