import React from "react";
import Grid from '@mui/material/Grid2';

import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {SectionHeader} from "../../../typography";
import {Box} from "@mui/material";


function Listen() {
    const {listen} = React.useContext(WebsiteContext);



    return (
        <Section id={View.Home_Listen.getHash()}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <SectionHeader>Listening</SectionHeader>
                </Grid>

                <Grid container size={12}>
                    {
                        listen.personal.map((personal) => (
                            <Grid size={12}>
                                <Box
                                   sx={{
                                       width: "90%",
                                       aspectRatio: 16/9
                                   }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        title="iframe player"
                                        src={personal.link}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Section>
    )

}

export default Listen;
