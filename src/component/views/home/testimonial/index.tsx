import React from "react";
import {Box, Button} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Masonry from '@mui/lab/Masonry';

import Content from "../../../../provider/WebsiteContext";
import View from "../../../../type/View";
import {Section} from "../../../layout";
import {SectionHeader} from "../../../typography";
import TestimonialCard from "./components/TestimonialCard";

function Testimonials() {
    const { testimonials } = React.useContext(Content);

    const [expanded, setExpanded] = React.useState(false);

    function handleCLick() {
        setExpanded(!expanded)
    }

    return (
        <Section id={View.Home_Testimonial.getHash()}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Why people love working with me!</SectionHeader>
                </Grid>
                <Grid container size={12} spacing={4} sx={{position:"relative"}}>
                    <Box sx={{
                        height: expanded ? undefined : 600,
                        overflow:"hidden",
                    }} >
                        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4}} spacing={2} sx={{margin: 0}}>
                            {testimonials.map((testimonial, index) => {
                                return (
                                    <Box
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
                    </Box>
                        <Box sx ={{
                            display: expanded ? "none" : "block",
                            height: 100,
                            width: "100%",
                            zIndex: 2,
                            bottom: "0px",
                            position: "absolute",
                            background: "linear-gradient(to top, rgba(248, 248, 248, 1),  rgba(248, 248, 248, 0))",
                        }}/>
                </Grid>
                <Grid size={12} display="flex" justifyContent="center" alignItems="center">

                    <Button onClick={() => handleCLick() }>
                        { !expanded ? "Read More Reviews" : "Read Less Reviews" }
                    </Button>
                </Grid>
            </Grid>

        </Section>
    );
}

export default Testimonials;