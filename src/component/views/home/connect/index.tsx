import React from "react";
import {Button, Container} from "@mui/material";
import Grid from '@mui/material/Grid2';


import WebsiteContext from "../../../../provider/WebsiteContext";
import {Section} from "../../../layout";
import View from "../../../../type/View";
import {Par, SectionHeader} from "../../../typography";
import {useNavigate} from "react-router-dom";
import ContactReasonEnum from "../../../../type/ContactReasonEnum";

function Connect() {
    const {contact} = React.useContext(WebsiteContext);

    const navigate = useNavigate();
    const handleClick = React.useCallback(
        () => navigate(View.Contact.path, {replace: false, state: {subject: ContactReasonEnum.Other}}, ),
        [navigate]
    );

    return (
        <Section id={View.Home_Contact.getHash()}>
            <Container maxWidth="sm" disableGutters>
                <Grid container spacing={4}>
                    <Grid size={12}>
                        <SectionHeader line={"none"}>Let's connect!</SectionHeader>
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