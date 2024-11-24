import React from "react";
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";

import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {SectionHeader} from "../../../typography";
import YouTubePlayer from "./components/YouTubePlayer";


function Listen() {
    const {listen} = React.useContext(WebsiteContext);
    const [autoplay, setAutoplay] = React.useState(true);

    return (
        <Section id={View.Home_Listen.getHash()}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Listening</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <Box className={"slider-container"}>
                        <Slider
                            infinite={true}
                            focusOnSelect={true}
                            slidesToShow={1}
                            speed={500}
                            autoplaySpeed={3000}
                            autoplay={autoplay}
                        >
                            {
                                listen.personal.map((personal, index) => (
                                    <YouTubePlayer
                                        key={"personalVideo"+index}
                                        videoId={personal.videoId}
                                        title={personal.title}
                                        onPlay={() => setAutoplay(false)}
                                        onPause={() => setAutoplay(true)}
                                        onEnded={() => setAutoplay(true)}
                                    />
                                ))
                            }
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        </Section>
    )
}

export default Listen;
