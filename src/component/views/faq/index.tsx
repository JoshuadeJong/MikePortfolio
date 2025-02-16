import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Accordion, AccordionDetails, AccordionSummary, Paper, styled, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SectionHeader} from "../../typography";


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

                <Grid size={12}>
                    {faq.map((qa, index) => {
                        return (
                            <StyledAccordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "text.primary"}}/>}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{
                                        "& .MuiAccordionSummary-content": {
                                            margin: "16px 0"
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        {qa.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: "text.secondary" }}>
                                        {qa.answer}
                                    </Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                        )
                    })}
                </Grid>
            </Grid>
        </Page>
    )
}

export default FAQ;