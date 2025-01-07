import React from "react";
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Center} from "../../layout";
import {Par, SectionText} from "../../typography";


type Props = {
    code: 400 | 403 | 404 | 500 | 501 | 503;
    children?: React.ReactNode;
};

function Error(props: Props) {
    const {code, children} = props;

    const messages = {
        400: "Looks like your computer is drunk and making invalid requests...",
        403: "You don't have the power to do that...",
        404: "Whatever you're looking for doesn't seem to exist...",
        500: "We have a few fires to put out before this will work again...",
        501: "I'm still building this page, come back in a weekend or two...",
        503: "Looks like we turned something off by accident...",
    };

    return (
        <Container maxWidth={"md"}>
            <Center minHeight={"90vh"}>
                <Grid container spacing={2} sx={{textAlign: "center"}}>
                    <Grid size={12}>
                        <SectionText>{code} error</SectionText>
                    </Grid>
                    <Grid size={12}>
                        <Par>{messages[code]}</Par>
                    </Grid>
                </Grid>
                {children && (
                    <Grid size={12}>
                        {children}
                    </Grid>
                )}
            </Center>
        </Container>
    );
}

export default Error;