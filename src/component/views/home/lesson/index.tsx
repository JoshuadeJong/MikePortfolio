import React from "react";

import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {SectionHeader} from "../../../typography";
import LessonCard from "./components/LessonCard";
import WebsiteContext from "../../../../provider/WebsiteContext";

function Lesson() {
    const { lesson } = React.useContext(WebsiteContext);

    return (
        <>
            <Section id={View.Home_Lessons.getHash()}>
                <Grid container spacing={4}>
                    <Grid size={12}>
                        <SectionHeader>What I Teach!</SectionHeader>
                    </Grid>
                    <Grid container>
                        <Grid size={{xs: 12, md: 8}}>

                        </Grid>
                        <Grid size={{xs: 12, md: 4}}>

                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section id={undefined}>
                <Grid container spacing={4}>
                    <Grid size={12}>
                        <SectionHeader>Lesson Options!</SectionHeader>
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
                    </Grid>
                    <Grid size={12}>
                        <Typography variant="h6">
                            {lesson.optionsCallback}
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
        </>


    )
}

export default Lesson;