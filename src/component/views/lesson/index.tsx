import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {SectionHeader} from "../../typography";

function Lesson() {
    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Lessons</SectionHeader>
                </Grid>


                <Grid size={12}>
                    <SectionHeader>Rates</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <SectionHeader>FAQ</SectionHeader>
                </Grid>



            </Grid>
        </Page>
    )
}

export default Lesson;