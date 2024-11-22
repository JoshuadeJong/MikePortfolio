import React from "react";
import {Button, Container} from "@mui/material";
import Grid from '@mui/material/Grid2';


import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Par, SectionHeader} from "../../../typography";

function Connect() {
    const {contact} = React.useContext(WebsiteContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open(`mailto:${contact.email}`);
    };

    return (
        <Section id={View.Home_Contact.getHash()}>
            <Container maxWidth="sm" disableGutters>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <SectionHeader>Let's connect!</SectionHeader>
                    </Grid>
                    <Grid size={12} sx={{textAlign: "center"}}>
                        <Par>{contact.connectActionMessage}</Par>
                    </Grid>
                    <Grid size={12} sx={{textAlign: "center"}}>
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