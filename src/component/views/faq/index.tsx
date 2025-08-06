import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Accordion, AccordionDetails, AccordionSummary, Paper, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SectionHeader} from "../../typography";
import QaAccordion from "./components/QaAccordion";
import QA from "../../../type/content/type/QA";


const StyledAccordion = styled(Accordion)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    paperShadow: "0px 3px 3px -2px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "translateY(-2px)"
    }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "translateY(-2px)"
    }
}))


function FAQ() {
    const {faq} = React.useContext(WebsiteContext);

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Frequently Asked Questions</SectionHeader>
                </Grid>
                {
                    Object.entries(faq).map(([key, value]) => (
                        unpackItem(key, value)
                    ))
                }
            </Grid>
        </Page>
    )
}

function unpackItem(key: string, values: QA[]) {
    return (
        <Grid container size={12} spacing={2}>
            <Grid size={12}>
                <Typography variant={"h5"} sx={{}}>{key}</Typography>
            </Grid>

            <Grid size={12}>
                {values.map((qa, index) => {
                    return (
                        <QaAccordion question={qa.question} answer={qa.answer} />
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default FAQ;