import {Box} from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import Masonry from "@mui/lab/Masonry";
import React from "react";
import Testimonial from "../../../../type/content/type/Testimonial";


type TestimonialProps = {
    testimonials: Testimonial[];
}

function TestimonialMasonry(props: TestimonialProps) {
    return (
        <Masonry columns={{xs: 1, sm: 2, md: 3, lg: 4}} spacing={2} sx={{margin: 0}}>
            {props.testimonials.map((testimonial, index) => {
                return (
                    <Box
                        key={"TestimonialCard" + index}
                        sx={{
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <TestimonialCard testimonial={testimonial}/>
                    </Box>
                );
            })}
        </Masonry>
    )
}

export default TestimonialMasonry