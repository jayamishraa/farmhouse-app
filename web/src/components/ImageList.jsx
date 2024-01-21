import { Card, Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";

function ImageList({data}) {
    const {name, images} = data;
    console.log(images);
    return <Stack align={"center"}>
        <Heading m={'18px'} mt={'54px'}>{name}</Heading>
        <SimpleGrid columns={3} spacing={12}>
            {images.map((image) => {
                return <Card w={350} key={image}>
                    <Image src={image} alt={name} />
                </Card>
            })}
        </SimpleGrid>
    </Stack>
}

export default ImageList;
