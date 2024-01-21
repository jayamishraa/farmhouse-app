import {
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const password = localStorage.getItem("password");
        if (password) {
            setIsLoading(true);
            fetch("http://localhost:3001/api/login" + "?password=" + encodeURIComponent(password))
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.success) {
                        navigate("/admin");
                    } else {
                        localStorage.removeItem("password");
                    }
                    setIsLoading(false);
                });
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        setIsLoading(true);
        const password = e.target.password.value;
        fetch("http://localhost:3001/api/login" + "?password=" + encodeURIComponent(password))
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    localStorage.setItem("password", password);
                    navigate("/admin");
                } else {
                    alert("Wrong password");
                }
                setIsLoading(false);
            });
    };
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
                as={"form"}
                onSubmit={onSubmit}
            >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                    Login to Admin Portal
                </Heading>
                <Text
                    fontSize={{ base: "sm", sm: "md" }}
                    color={useColorModeValue("gray.800", "gray.400")}
                >
                    Enter your admin password
                </Text>
                <FormControl id="email">
                    <Input
                        _placeholder={{ color: "gray.500" }}
                        type="password"
                        name="password"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                            bg: "blue.500",
                        }}
                        type="submit"
                        loadingText="Checking password"
                        isLoading={isLoading}
                    >
                        Login as Admin
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}
