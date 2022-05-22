import { Button } from "@chakra-ui/react";

interface PaginationProps {
  isCurrent?: boolean;
  pageNumber: number;
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
}: PaginationProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bgColor: "pink.500",
        cursor: "default",
      }}
    >
      {pageNumber}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {pageNumber}
    </Button>
  );
}
