import React from "react";
import Grid from '@mui/material/Grid2';
import {
    Box, Checkbox, FormControlLabel, styled, TextField, Typography,
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import {Page} from "../../layout";
import WebsiteContext from "../../../provider/WebsiteContext";
import Form from "./components/Form";
import {useLocation} from "react-router-dom";
import ContactReasonEnum from "../../../type/ContactReasonEnum";
import {SectionHeader} from "../../typography";


const ContactBox = styled('div')({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0,
    marginTop: "20px",
    marginBottom: "20px",
    whiteSpace: "pre-wrap",
})

function Contact() {
    const {contact} = React.useContext(WebsiteContext);
    const location = useLocation();
    const [inferredContactReason, setInferredContactReason] = React.useState(ContactReasonEnum.Unknown);
    const [replyByPhone, setReplyByPhone] = React.useState(false);

    React.useEffect(() => {
        if (location.state && location.state.contactReason) {
            setInferredContactReason(location.state.contactReason);
        }
    }, [location]);

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={{xs: 12, md: 6}}>
                    <Box padding={0}>
                        <SectionHeader>Let's talk</SectionHeader>

                        <Typography
                            variant={"subtitle1"}
                            sx={{
                                marginTop: 4,
                                marginBottom: 4,
                            }}
                        >
                            {contact.connectActionMessage}
                        </Typography>

                        <ContactBox>
                            <PlaceIcon color="primary" fontSize={"large"} sx={{marginRight: 4}}/>
                            {contact.location}
                        </ContactBox>

                        <ContactBox>
                            <PhoneIcon color="primary" fontSize={"large"}  sx={{marginRight: 4}}/>
                            {contact.phone}
                        </ContactBox>

                        <ContactBox>
                            <EmailIcon color="primary" fontSize={"large"}  sx={{marginRight: 4}}/>
                            {contact.email}
                        </ContactBox>
                    </Box>


                </Grid>
                <Grid size={{xs:12, md:6}}>
                    <Form
                        inferredContactReason={inferredContactReason}
                    >
                        <Grid container spacing={4}>
                            <Grid size={12}>
                                <TextField required name={"name"} label={"Name"} type="text"/>
                            </Grid>
                            <Grid size={12}>
                                <TextField required name={"email"} label={"Email"} type="email"/>
                            </Grid>
                            <Grid size={6}>
                                <input type="hidden" name="Replay by Phone" value={replyByPhone.toString()}/>
                                <FormControlLabel
                                    control={<Checkbox size={"large"}/>}
                                    label={"Reply by Phone"}
                                    labelPlacement="end"
                                    onChange={(event, checked) => {
                                        setReplyByPhone(checked)
                                    }}
                                />
                            </Grid>
                            <Grid size={6}>
                                <TextField disabled={!replyByPhone} name={"phone number"} label={"Phone Number"}
                                           type="tel"/>
                            </Grid>
                            <Grid size={12}>
                                <TextField required name={"message"} label={"Message"} type="text" multiline rows={6}/>
                            </Grid>

                        </Grid>
                    </Form>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Contact;