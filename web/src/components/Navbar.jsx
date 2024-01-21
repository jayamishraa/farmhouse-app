"use client";

import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

const NavLink = (props) => {
    const { children, href } = props;

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            href={href}
        >
            {children}
        </Box>
    );
};

export default function Nav() {
    return (
        <>
            <Box className="bg-primary" px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Box fontWeight={"bold"} fontSize={"x-large"} as="a" href="/">
                        Farmhose
                    </Box>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <NavLink href="/login">Login</NavLink>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
