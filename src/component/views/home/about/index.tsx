import React from "react";
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import WebsiteContext from "../../../../provider/WebsiteContext";
import {Center, Section} from "../../../layout";
import View from "../../../../type/View";
import {Par, SectionHeader} from "../../../typography";
import mike1 from "../../../../assets/images/mike1.jpg"
import HyperLink from "../../../typography/components/HyperLink";

function About() {
    const {about} = React.useContext(WebsiteContext);
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
                <Grid size={12}>
                    <SectionHeader>Here is a bit about me!</SectionHeader>
                </Grid>
                <Grid size={{xs:12, md:6}}>
                    <div ref={photoRef}>
                        {about.text.map((text, index) => {
                            return (
                                <Box key={`about-par-${index}`}>
                                    <Par>{text}</Par>
                                </Box>
                            );
                        })}
                        <Box>
                            <HyperLink
                                url={about.learnMoreLink}
                            >
                                {about.learnMoreText}
                            </HyperLink>
                        </Box>
                    </div>
                </Grid>
                <Grid size={{xs:12, md:6}}>
                    <Center minHeight={`${photoHeight}px`}>
                        <Box width="369px" height="553px" >
                            <Box
                                component="img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "secondary.main",
                                }}
                                src={mike1}
                            />
                        </Box>
                    </Center>
                </Grid>
            </Grid>
        </Section>
    );
}

export default About;