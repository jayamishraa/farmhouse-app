import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import FullPageLoader from "../components/loader/FullPageLoader";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ initialData, password }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (key, value) => {
        setFormData((prevData) => {
            // Deep copy the object to avoid mutation
            const newData = JSON.parse(JSON.stringify(prevData));
            setNestedValue(newData, key.split("."), value);
            return newData;
        });
    };

    const setNestedValue = (obj, keys, value) => {
        let currentObj = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            currentObj = currentObj[keys[i]];
        }
        currentObj[keys[keys.length - 1]] = value;
    };

    const renderFormControls = (data, parentKey = "") => {
        return Object.entries(data).map(([key, value]) => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof value === "object" && !Array.isArray(value)) {
                return (
                    <Box key={fullKey}>
                        <FormLabel>{fullKey}</FormLabel>
                        {renderFormControls(value, fullKey)}
                    </Box>
                );
            } else if (Array.isArray(value)) {
                return (
                    <Box key={fullKey}>
                        <FormLabel>{fullKey}</FormLabel>
                        {value.map((item, index) => (
                            <div key={`${fullKey}.${index}`}>
                                <Text>{item.name}</Text>
                                <Textarea
                                    defaultValue={item.images?.join("\n")}
                                    onChange={(e) =>
                                        handleInputChange(
                                            `${fullKey}.${index}.images`,
                                            e.target.value.split("\n")
                                        )
                                    }
                                    placeholder={`Enter ${fullKey} ${
                                        index + 1
                                    }`}
                                    mb={2}
                                />
                            </div>
                        ))}
                    </Box>
                );
            }

            return (
                <FormControl key={fullKey} mb={2}>
                    <FormLabel>{fullKey}</FormLabel>
                    <Input
                        value={value}
                        onChange={(e) =>
                            handleInputChange(fullKey, e.target.value)
                        }
                        placeholder={`Enter ${fullKey}`}
                    />
                </FormControl>
            );
        });
    };

    const handleSave = async () => {
        try {
            // Assuming saveEndpoint is the endpoint where you want to submit the data
            // Note: This is a simple fetch example. Adjust headers and body as needed.
            await fetch("http://localhost:3001/api/save?password=" + password, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            alert("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Error saving data. Please try again.");
        }
    };

    return (
        <VStack spacing={4} align="stretch" p={4}>
            {renderFormControls(formData)}
            <Box>
                <Button colorScheme="teal" onClick={handleSave}>
                    Save
                </Button>
            </Box>
        </VStack>
    );
};

function Admin() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const password = localStorage.getItem("password");

    useEffect(() => {
        if (!password) {
            navigate("/login");
        }
    }, []);

    console.log(data);
    if (!data) {
        fetch("http://localhost:3001/api")
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("data", JSON.stringify(data));
                setData(data);
            });

        return <FullPageLoader />;
    }

    return <AdminDashboard initialData={data} password={password} />;
}

export default Admin;
