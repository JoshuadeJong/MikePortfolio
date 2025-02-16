import React from "react";
import {Box, Button, useTheme} from "@mui/material";
import Grid from '@mui/material/Grid2';

import Content from "../../../../provider/WebsiteContext";
import View from "../../../../type/View";
import {Section} from "../../../layout";
import {SectionHeader} from "../../../typography";
import shuffle from "../../../../util/Shuffle";
import {useNavigate} from "react-router-dom";
import TestimonialMasonry from "../../testimonial/components/TestimonialMasonry";

function Testimonials() {
    let {testimonials} = React.useContext(Content);
    const [shouldShuffle, setShouldShuffle] = React.useState(true);
    const navigate = useNavigate();
    const theme = useTheme();

    React.useLayoutEffect(() => {
        if (shouldShuffle) {
            shuffle(testimonials);
            setShouldShuffle(false);
        }
    }, [shouldShuffle, testimonials])

    React.useEffect(() => {
        setShouldShuffle(true);
    }, [navigate]);

    function handleCLick() {
        navigate(View.Testimonial.path, {replace: false})
    }

    return (
        <Section id={View.Home_Testimonial.getHash()}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Why people love learning from me!</SectionHeader>
                </Grid>
                <Grid container size={12} spacing={4} sx={{position: "relative"}}>
                    <Box sx={{
                        height: 600,
                        overflow: "hidden",
                    }}>
                        <TestimonialMasonry testimonials={testimonials.slice(0, 10)} />
                    </Box>
                    <Box sx={{
                        display: "block",
                        height: 100,
                        width: "100%",
                        zIndex: 2,
                        bottom: "0px",
                        position: "absolute",
                        background: `linear-gradient(to top, ${theme.palette.background.default}, rgba(0, 0, 0, 0))`,
                    }}/>
                </Grid>
                <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={() => handleCLick()}>
                        Read More Reviews
                    </Button>
                </Grid>
            </Grid>

        </Section>
    );
}

export default Testimonials;