import {Accordion, AccordionDetails, AccordionSummary, styled, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import makeUrlsClickable from "../../../../util/MakeUrlsClickable";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    paperShadow: "0px 3px 3px -2px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "translateY(-2px)"
    }
}));

type Props = {
    question: string;
    answer?: string;
    children?: React.ReactNode;
}

function QaAccordion(props: Props) {
    const {
        question, answer, children
    } = props;

    let answerNode: React.ReactNode;
    if (children) {
        answerNode = children;
    } else if (answer) {
        answerNode =  (
            <Typography sx={{ color: "text.secondary", whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: makeUrlsClickable(answer) }} />
        )
    } else {
        console.error(`Missing answer from question: ${question}`);
    }

    return (
        <StyledAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "text.primary"}}/>}
                sx={{
                    "& .MuiAccordionSummary-content": {
                        margin: "16px 0"
                    }
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 500}}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {answerNode}
            </AccordionDetails>
        </StyledAccordion>
    )
}

export default QaAccordion;