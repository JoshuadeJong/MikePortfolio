import React from "react";

import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Par, SectionHeader} from "../../../typography";
import LessonCard from "./components/LessonCard";
import WebsiteContext from "../../../../provider/WebsiteContext";

function Lesson() {
    const {lesson} = React.useContext(WebsiteContext);

    return (
        <>
            <Section id={View.Home_Lessons.getHash()}>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <SectionHeader>Lessons</SectionHeader>
                    </Grid>
                    <Grid container size={12} spacing={4}>
                        <Grid size={{xs: 12, md: 8}}>
                            {lesson.info.map((text, index) => {
                                return (
                                    <Par>
                                        {text}
                                    </Par>
                                );
                            })}
                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>

                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section id={undefined}>
                <Grid container spacing={2}>
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
                </Grid>
            </Section>
        </>


    )
}

export default Lesson;