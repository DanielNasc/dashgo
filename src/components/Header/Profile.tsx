import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>DanielNasc</Text>
          <Text color="gray.300" fontSize="small">
            danielnasc15987@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="DanielNasc"
        src="https://github.com/danielnasc.png"
      />
    </Flex>
  );
}
