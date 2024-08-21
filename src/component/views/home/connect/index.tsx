import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";


import WebsiteContext from "../../../../provider/WebsiteContext";
import HomeContext from "../../../../provider/HomeContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Par, SectionHeader} from "../../../typography";

function Connect() {
    const { emailLesson } = React.useContext(WebsiteContext);
    const { connectMessage } = React.useContext(HomeContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open(`mailto:${emailLesson}`);
    };

    return (
        <Section id={View.Home_Contact.getHash()}>
            <Container maxWidth="sm" disableGutters>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SectionHeader>Let's connect!</SectionHeader>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Par>{connectMessage}</Par>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Button variant="outlined" onClick={handleClick} size="large">
                            Say Hello
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    );
}

export default Connect;