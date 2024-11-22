import React from "react";
import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import Grid from '@mui/material/Grid2';
import {SectionHeader} from "../../../typography";

function Listen() {
    const {listen} = React.useContext(WebsiteContext);

    return (
        <Section id={View.Home_Listen.getHash()}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <SectionHeader>Listening</SectionHeader>
                </Grid>

                <Grid container>

                </Grid>

            </Grid>
        </Section>
    )

}

export default Listen;
