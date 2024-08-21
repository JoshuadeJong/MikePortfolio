import React from "react";
import { Box, Paper } from "@mui/material";
import Testimonial from "../../../../../type/content/home/Testimonial";
import {Par} from "../../../../typography";

type Props = {
    testimonial: Testimonial;
};

function TestimonialCard(props: Props) {
    const { testimonial } = props;
    return (
        <Paper elevation={3}>
            <Box sx={{ padding: 2 }}>
                <Par textColor="text.primary">{testimonial.text}</Par>
                <Par noMargin>
                    - {testimonial.person}
                </Par>
            </Box>
        </Paper>
    );
}

export default TestimonialCard;