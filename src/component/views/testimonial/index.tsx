import React from "react";
import Content from "../../../provider/WebsiteContext";
import Grid from "@mui/material/Grid2";
import {Page} from "../../layout";
import {SectionHeader} from "../../typography";
import TestimonialMasonry from "./components/TestimonialMasonry";

function Testimonial() {
    let {testimonials} = React.useContext(Content);

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Reviews</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <TestimonialMasonry testimonials={testimonials} />
                </Grid>
            </Grid>
        </Page>
    )
}

export default Testimonial;