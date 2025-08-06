import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {SectionHeader} from "../../typography";
import React, {useRef} from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import PlaylistPlayer from "./components/playlistplayer";
import {Typography} from "@mui/material";

function Listen() {
    const {listen} = React.useContext(WebsiteContext);

    const ref = useRef<HTMLDivElement>(null);

    return (
        <Page>
            <Grid container spacing={4}>
                <div ref={ref} />
                <Grid size={12}>
                    <SectionHeader>Listen</SectionHeader>
                </Grid>
                <Grid size={12}>
                    <Typography variant="body1" color="textSecondary">
                        {listen.why}
                    </Typography>
                </Grid>

                { ref &&
                    <>
                        <PlaylistPlayer pageRef={ref} playlist={listen.recommended[0]}/>
                    </>
                }

            </Grid>
        </Page>
    )
}

export default Listen;