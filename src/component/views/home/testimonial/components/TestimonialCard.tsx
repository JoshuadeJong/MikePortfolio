import React from "react";
import {Box, Paper} from "@mui/material";
import Rating from '@mui/material/Rating';
import Testimonial from "../../../../../type/content/type/Testimonial";
import {Par} from "../../../../typography";


type Props = {
    testimonial: Testimonial;
};

function TestimonialCard(props: Props) {
    const {testimonial} = props;
    return (
        <Paper elevation={3}>
            <Box sx={{padding: 2}}>
                <Rating value={5} readOnly/>
                <Par textColor="text.primary">{testimonial.text}</Par>
                <Par noMargin>
                    - {testimonial.person}
                </Par>
            </Box>
        </Paper>
    );
}

export default TestimonialCard;