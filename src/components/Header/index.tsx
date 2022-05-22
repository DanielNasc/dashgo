import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20" // height of the header
      mx="auto" // center horizontally
      mt="2" // margin top
      px="8" // padding x
      align="center"
    >
      <Logo />
      <SearchBox />
      <NotificationsNav />
      <Profile />
    </Flex>
  );
}
