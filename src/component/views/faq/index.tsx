import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";
import {SectionHeader} from "../../typography";
import QaAccordion from "./components/QaAccordion";
import QA from "../../../type/content/type/QA";

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