import { Box, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>50</strong> de <strong>300</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent pageNumber={1} />
        {[2, 3, 4, 5, 6].map((pageNumber, i) => (
          <PaginationItem key={i} pageNumber={pageNumber} />
        ))}
      </HStack>
    </HStack>
  );
}
