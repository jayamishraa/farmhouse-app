"use client";

import {
    Button,
    Flex,
    Stack,
    Text,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero({heading, background_image}) {
    return (
        <Flex
            w={"full"}
            h={"95vh"}
            backgroundImage={
                `url("${background_image}")`
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
                <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                    <Text
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({
                            base: "3xl",
                            md: "4xl",
                        })}
                        backgroundColor={"blackAlpha.600"}
                        p={'12'}
                        borderRadius={'xl'}
                    >
                        {heading}
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
}
