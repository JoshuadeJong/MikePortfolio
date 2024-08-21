import React from "react";

import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {SectionHeader} from "../../../typography";

function Lesson() {


    return (
        <Section id={View.Home_Lessons.getHash()}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SectionHeader>Lesson Options!</SectionHeader>
                </Grid>
                <Grid container item sm={12} spacing={4}>
                    <Grid item sm={12} md={4}>
                        <Card sx={{minHeight: 400}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Introduction Lesson
                                </Typography>
                                <Typography variant="h4" component="div">
                                    Free!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Your first 30 minute lesson is free!
                                </Typography>
                                <Typography variant="body2">
                                    Includes:
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card sx={{minHeight: 400}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Beginner Student
                                </Typography>
                                <Typography variant="h4" component="div">
                                    $200/mo
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    30 minutes each week over 4 weeks
                                </Typography>
                                <Typography variant="body2">
                                    Includes:
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card sx={{minHeight: 400}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Advance Student
                                </Typography>
                                <Typography variant="h4" component="div">
                                    $400/mo
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    60 minutes each week over 4 weeks
                                </Typography>
                                <Typography variant="body2">
                                    Includes:
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item sm={12}>
                        <Typography variant="h6">
                            Unsure what type of lesson is best for you or want to do something different? Reach out to me and we can figure it out!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Section>
    )
}

export default Lesson;