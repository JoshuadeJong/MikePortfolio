import React from "react";

import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Par, SectionHeader} from "../../../typography";
import LessonCard from "../../lesson/components/LessonCard";
import WebsiteContext from "../../../../provider/WebsiteContext";

function Lesson() {
    const {lesson} = React.useContext(WebsiteContext);

    return (
        <Section id={View.Home_Lessons.getHash()}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Lessons</SectionHeader>
                </Grid>
                <Grid container size={12} spacing={4}>
                    <Grid size={{xs: 12, md: 6}}>
                        {lesson.info.map((text, index) => {
                            return (
                                <Par key={"lessonPar"+index}>
                                    {text}
                                </Par>
                            );
                        })}
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Box sx={{paddingLeft: "4%", paddingRight: "4%"}}>
                            <LessonCard
                                title={lesson.options[0].title}
                                price={lesson.options[0].price}
                                description={lesson.options[0].description}
                                includes={lesson.options[0].includes}
                                note={lesson.options[0].note}
                                soldOut={lesson.options[0].soldOut}
                            />
                            <Box display="flex" justifyContent="right" width={"100%"}>
                                <Typography variant={"caption"}> * Rates may change based on travel</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h6" fontWeight={600}  color={"primary.main"} align={"center"}>
                        {lesson.optionsCallback}
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    )
}

export default Lesson;