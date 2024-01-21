import Contact from "../components/Contact";
import FullPageLoader from "../components/loader/FullPageLoader";
import Hero from "../components/Hero";
import ImageList from "../components/ImageList";
import { useState } from "react";

function Home() {
    const [data, setData] = useState(
     null
    );

    console.log(data);
    if (!data) {
        fetch("http://localhost:3001/api")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });

        return <FullPageLoader />;
    }

    return (
        <>
            <Hero
                heading={data.hero_heading}
                background_image={data.hero_background_image}
            />
            {data.images_map.map((image, index) => {
                return <ImageList key={index} data={image} />;
            })}
            <Contact />
        </>
    );
}

export default Home;
