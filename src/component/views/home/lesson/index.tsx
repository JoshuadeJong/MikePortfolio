import React from "react";

import {Center, Section} from "../../../layout";
import View from "../../../../type/View";
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Par, SectionHeader} from "../../../typography";
import LessonCard from "./components/LessonCard";
import WebsiteContext from "../../../../provider/WebsiteContext";
import mike2 from "../../../../assets/images/mike2.jpg";

function Lesson() {
    const {lesson} = React.useContext(WebsiteContext);
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
        <>
            <Section id={View.Home_Lessons.getHash()}>
                <Grid container spacing={4}>
                    <Grid size={12}>
                        <SectionHeader>Lessons</SectionHeader>
                    </Grid>
                    <Grid container size={12} spacing={4}>
                        <Grid size={{xs: 12, md: 7}}>
                            <div ref={photoRef}>
                                {lesson.info.map((text, index) => {
                                    return (
                                        <Par>
                                            {text}
                                        </Par>
                                    );
                                })}
                            </div>
                        </Grid>
                        <Grid size={{xs: 12, md: 5}}>
                            <Center minHeight={`${photoHeight}px`}>
                                <Box width="369px" height="414px" >
                                    <Box
                                        component="img"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "secondary.main",
                                        }}
                                        src={mike2}
                                    />
                                </Box>
                            </Center>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section id={undefined}>
                <Grid container spacing={4}>
                    <Grid size={12}>
                        <SectionHeader>Lesson Rates</SectionHeader>
                    </Grid>
                    <Grid container size={12} spacing={4}>
                        {
                            lesson.options.map((option) => (
                                <Grid size={{xs: 12, md: 4}}>
                                    <LessonCard
                                        title={option.title}
                                        price={option.price}
                                        description={option.description}
                                        includes={option.includes}
                                    />
                                </Grid>
                            ))
                        }
                        <Box marginTop="-24px" display="flex" justifyContent="right" width={"100%"}>
                            <Typography variant={"caption"}> * Rates may change based on travel</Typography>
                        </Box>
                    </Grid>
                    <Grid size={12}>
                        <Typography variant="h6" fontWeight={600}  color={"primary.main"} align={"center"}>
                            {lesson.optionsCallback}
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
        </>
    )
}

export default Lesson;