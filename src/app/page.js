"use client";
import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const obj = [
    { link: "varpaper", title: "var previous year paper" },
    { link: "adudpaper", title: "adud previous year paper" },
    { link: "iswapaper", title: "iswa previous year paper" },
    { link: "iotpaper", title: "iot previous year paper" },
    { link: "wcpaper", title: "wc previous year paper" },
    { link: "cvpaper", title: "cv previous year paper" },
    { link: "spmpaper", title: "spm previous year paper" },
    { link: "gtuimp", title: "gtu imp questions" },
  ];
  return (
    <Flex
      flexDirection={"column"}
      gap={3}
      px={{
        base: 15,
        sm: 5,
      }}
      bg={useColorModeValue("gray.100", "#1B1B1B")}
      height={"95dvh"}
    >
      <Text
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        my={{ base: 4, sm: 10 }}
      >
        Click Below Button To Read Document
      </Text>
      <Flex
        gap={5}
        flexWrap={"wrap"}
        flex={{ base: 1, md: "auto" }}
        maxH={"-moz-max-content"}
        alignContent={"flex-start"}
        justifyContent={"center"}
      >
        {obj.map((item) => {
          return (
            <Button
              aria-label="view Paper"
              py={2}
              px={3}
              rounded={"md"}
              boxShadow={"md"}
              bg={useColorModeValue("gray.200", "#090909")}
              color={useColorModeValue("black", "white")}
              _hover={{
                bgGradient: useColorModeValue(
                  "linear(to-tr, #bde1ff, #828aff)",
                  "linear(to-tr, #ffe852, #ff8b52)"
                ),
                boxShadow: "lg",
                rounded: "md",
                color: useColorModeValue("black", "black"),
              }}
              textTransform={"uppercase"}
            >
              {" "}
              <Link href={`/paper/${item.link}`}>{item.title}</Link>
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
}
