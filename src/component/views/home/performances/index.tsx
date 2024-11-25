import React from "react";
import Grid from '@mui/material/Grid2';

import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {SectionHeader} from "../../../typography";
import YouTubePlayer from "./components/YouTubePlayer";
import {Box} from "@mui/material";
import Carousel from "./components/Carousel";


function Listen() {
    const {listen} = React.useContext(WebsiteContext);
    const [shouldAutoSwitch, setShouldAutoSwitch] = React.useState(true)


    return (
        <Section id={View.Home_Performance.getHash()}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Performances</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <Carousel shouldAutoSwitch={shouldAutoSwitch} switchRate={3000}>
                        {
                            listen.personal.map((personal, index) => (
                                <Box className={"keen-slider__slide number-slide" + index}>
                                    <YouTubePlayer
                                        key={"personalVideo" + index}
                                        videoId={personal.videoId}
                                        title={personal.title}
                                        onPlay={() => {
                                            setShouldAutoSwitch(false);
                                        }}
                                        onPause={() => {
                                            setShouldAutoSwitch(true);
                                        }}
                                        onEnded={() => {
                                            setShouldAutoSwitch(true);
                                        }}
                                    />
                                </Box>
                            ))
                        }
                    </Carousel>
                </Grid>
            </Grid>
    </Section>
)}

export default Listen;
