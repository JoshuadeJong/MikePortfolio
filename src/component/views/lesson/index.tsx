import {Center, Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Par, SectionHeader} from "../../typography";
import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Box, Typography} from "@mui/material";
import LessonCard from "./components/LessonCard";
import QaAccordion from "../faq/components/QaAccordion";

function Lesson() {
    const {lesson, faq} = React.useContext(WebsiteContext);

    const photoRef = React.createRef<HTMLDivElement>();
    const [photoHeight, setPhotoHeight] = React.useState(0);

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            if (photoRef.current) {
                setPhotoHeight(photoRef.current?.offsetHeight);
            }
        };
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    });

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Lessons</SectionHeader>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    {lesson.info.map((text, index) => {
                        return (
                            <Par key={"lessonPar"+index}>
                                {text}
                            </Par>
                        );
                    })}
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <Center minHeight={`${photoHeight}px`}>
                        <Box width="369px" height="414px" >
                            <Box
                                component="img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "secondary.main",
                                }}
                                src={"../images/mike2.jpg"}
                            />
                        </Box>
                    </Center>
                </Grid>


                <Grid size={12}>
                    <SectionHeader>Rates</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <Box sx={{paddingLeft: "4%", paddingRight: "4%"}}>
                        <LessonCard
                            title={lesson.options[0].title}
                            price={lesson.options[0].price}
                            description={lesson.options[0].description}
                            includes={lesson.options[0].includes}
                            note={lesson.options[0].note}
                            soldOut={lesson.options[0].soldOut}
                        />
                        <Box display="flex" justifyContent="right" width={"100%"}>
                            <Typography variant={"caption"}> * Rates may change based on travel</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={12}>
                    <Typography variant="h6" fontWeight={600}  color={"primary.main"} align={"center"}>
                        {lesson.optionsCallback}
                    </Typography>
                </Grid>


                <Grid size={12}>
                    <SectionHeader>Example Lesson</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <SectionHeader>Recommend Listening</SectionHeader>
                </Grid>


                <Grid size={12}>
                    <SectionHeader>FAQ</SectionHeader>
                </Grid>

                <Grid size={12}>
                    {
                        faq["Lessons"].map((qa, index) => {
                            return (
                                <QaAccordion question={qa.question} answer={qa.answer} />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Page>
    )
}

export default Lesson;