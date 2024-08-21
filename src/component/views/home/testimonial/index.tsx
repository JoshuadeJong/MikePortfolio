import React from "react";
import { Box, Grid } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

import HomeContext from "../../../../provider/HomeContext";
import View from "../../../../type/View";
import {Section} from "../../../layout";
import {SectionHeader} from "../../../typography";
import TestimonialCard from "./components/TestimonialCard";

function Testimonials() {
    const { testimonials } = React.useContext(HomeContext);

    return (
        <Section id={View.Home_Testimonial.getHash()}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SectionHeader>Why people love working with me!</SectionHeader>
                </Grid>
                <Grid item spacing={4}>
                    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4}} spacing={4}>
                        {testimonials.map((testimonial, index) => {
                            return (
                                <Box
                                    key={'testimonial-${index}'}
                                    sx={{
                                        width: "100%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </Box>
                            );
                        })}
                    </Masonry>
                </Grid>
            </Grid>
        </Section>
    );
}

export default Testimonials;