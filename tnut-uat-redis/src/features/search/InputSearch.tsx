"use client";

import { toSlug } from "@/ultil/toSlug";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const InputSearch = ({ type }: { type: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [checkInput, setCheckInput] = useState(false);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = toSlug({ input: searchQuery });
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}&page=1`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const str = toSlug({ input: searchQuery });
    if (searchQuery != "" && str == "") {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  }, [searchQuery]);
  return (
    <Box zIndex={"100"}>
      <form onSubmit={onSearch}>
        <HStack>
          <Input
            required
            bg={"white"}
            value={searchQuery}
            type={type || "Text"}
            border={"1px solid #BFBFBF "}
            borderRadius={0}
            px={4}
            placeholder="Tìm kiếm..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </HStack>
      </form>
      {checkInput && (
        <Box
          pt={2}
          display={"flex"}
          color={"#f5222d"}
          justifyContent={"center"}
        >
          <Text>Từ khóa tìm kiếm không hợp lệ</Text>
        </Box>
      )}
    </Box>
  );
};
