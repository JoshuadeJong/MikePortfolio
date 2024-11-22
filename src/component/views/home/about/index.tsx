import React from "react";
import { Grid, Box } from "@mui/material";
import WebsiteContext from "../../../../provider/WebsiteContext";
import {Center, MGrid, Section} from "../../../layout";
import View from "../../../../type/View";
import {Par, SectionHeader} from "../../../typography";

function About() {
    const { about } = React.useContext(WebsiteContext);
    const photoRef = React.createRef<HTMLDivElement>();
    const [photoHeight, setPhotoHeight] = React.useState(0);

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            if (photoRef.current) {
                setPhotoHeight(photoRef.current?.offsetHeight);
            }
        };
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    });

    return (
        <Section id={View.Home_About.getHash()}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SectionHeader>Here is a bit about me!</SectionHeader>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div ref={photoRef}>
                        {about.map((text, index) => {
                            return (
                                <Box key={`about-par-${index}`}>
                                    <Par>{text}</Par>
                                </Box>
                            );
                        })}
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Center minHeight={`${photoHeight}px`}>
                        <Box height="500px" width="400px">
                            <MGrid row={12} column={12} height={`500px`}>
                                <Box
                                    sx={{
                                        gridRowStart: 2,
                                        gridRowEnd: 13,
                                        gridColumnStart: 2,
                                        gridColumnEnd: 13,
                                        zIndex: 100,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            outlineStyle: "solid",
                                            outlineColor: "#00c7ff",
                                            outlineWidth: "thick",
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        gridRowStart: 1,
                                        gridRowEnd: 12,
                                        gridColumnStart: 1,
                                        gridColumnEnd: 12,
                                        zIndex: 200,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "green",
                                        }}
                                    />
                                </Box>
                            </MGrid>
                        </Box>
                    </Center>
                </Grid>
            </Grid>
        </Section>
    );
}

export default About;