import React from "react";
import WebsiteContext from "../../../../provider/WebsiteContext";
import ContactReasonEnum from "../../../../type/ContactReasonEnum";
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent, TextField,
    Typography
} from "@mui/material";
import {SectionHeader} from "../../../typography";
import Grid from "@mui/material/Grid2";
import heardAboutUsOptions from "./HeardAboutUsOptions";

type Props = {
    name?: string;
    description?: string;
    inferredContactReason: ContactReasonEnum;
    children?: JSX.Element;
}

function Form (props: Props) {
    const { name, description, inferredContactReason, children } = props;
    const {contact} = React.useContext(WebsiteContext);
    const [contactReason, setContactReason] = React.useState<string>(ContactReasonEnum.LessonRequest.name)

    React.useEffect(() => {
        if (inferredContactReason !== ContactReasonEnum.Unknown) {
            setContactReason(inferredContactReason.name);
        }
    },[])

    return (
        <>
            <form action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" name="access_key" value={contact.emailToken}/>
                <input type="hidden" name="subject" value={"MikeBot: " + contactReason}/>

                <div>
                    <Paper elevation={3}>
                        <Box padding={4}>

                            {name && (
                                <SectionHeader line={"none"}>{name}</SectionHeader>
                            )}

                            {description && (
                                <Typography
                                    variant={"subtitle1"}
                                    align={"center"}
                                    sx={{
                                        marginTop: 4,
                                        marginBottom: 4,
                                    }}
                                >
                                    {description}
                                </Typography>
                            )}

                            {children}

                            <Box paddingTop={4}>
                                <Grid container spacing={4}>
                                    <Grid size={6}>
                                        <FormControl required fullWidth>
                                            <InputLabel>Contact Reason</InputLabel>
                                            <Select
                                                name="Contact Reason"
                                                value={contactReason}
                                                label="Contact Reason"
                                                onChange={(event: SelectChangeEvent) => {
                                                    setContactReason(event.target.value);
                                                }}
                                            >
                                                <MenuItem value={ContactReasonEnum.LessonRequest.name}>{ContactReasonEnum.LessonRequest.name}</MenuItem>
                                                <MenuItem value={ContactReasonEnum.GigWorkRequest.name}>{ContactReasonEnum.GigWorkRequest.name}</MenuItem>
                                                <MenuItem value={ContactReasonEnum.Review.name}>{ContactReasonEnum.Review.name}</MenuItem>
                                                <MenuItem value={ContactReasonEnum.Other.name}>{ContactReasonEnum.Other.name}</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid size={6}>
                                        <Autocomplete
                                            disablePortal
                                            freeSolo
                                            options={heardAboutUsOptions}
                                            sx={{ width: "100%" }}
                                            renderInput={(params) =>
                                                <TextField {...params} name="How you heard about me?"  label="How You Heard About Me?" />
                                            }
                                        />
                                    </Grid>

                                    <Grid size={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            sx={{
                                                width: "100%",
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </div>
            </form>
        </>

    )
}

export default Form;