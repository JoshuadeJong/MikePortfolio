import {Center, Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Par, SectionHeader} from "../../typography";
import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import LessonCard from "./components/LessonCard";
import QaAccordion from "../faq/components/QaAccordion";
import YouTubeButton from "../../button/YouTubeButton";
import SpotifyButton from "../../button/SpotifyButton";

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

                {lesson.exampleLesson && (
                    <>
                        <Grid size={12}>
                            <Par>{lesson.exampleLesson.description}</Par>
                        </Grid>
                        <Grid size={12}>
                            <Center minHeight="0">
                                <Box 
                                    sx={{
                                        position: 'relative',
                                        paddingBottom: '56.25%',
                                        height: 0,
                                        overflow: 'hidden',
                                        maxWidth: '100%',
                                        width: '100%'
                                    }}
                                >
                                    <iframe
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        src={lesson.exampleLesson.videoUrl.replace('watch?v=', 'embed/')}
                                        title="Example Lesson"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </Box>
                            </Center>
                        </Grid>
                    </>
                )}

                <Grid size={12}>
                    <SectionHeader>Recommended Listening</SectionHeader>
                </Grid>

                {lesson.recommendedListening && lesson.recommendedListening.map((item, index) => (
                    <Grid size={{xs: 6, sm: 6, md: 4, lg: 3}} key={`listening-${index}`}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.imagePath}
                                alt={`${item.title} by ${item.artist}`}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="body1" fontWeight={600} gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {item.artist}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                                    {item.description}
                                </Typography>
                                
                                {(item.youtubeUrl || item.spotifyUrl) && (
                                    <>
                                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                                            Listen on:
                                        </Typography>
                                        <Stack direction="row" spacing={1}>
                                            {item.youtubeUrl && <YouTubeButton url={item.youtubeUrl} />}
                                            {item.spotifyUrl && <SpotifyButton url={item.spotifyUrl} />}
                                        </Stack>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}


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