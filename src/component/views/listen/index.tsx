import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Par, SectionHeader} from "../../typography";
import React from "react";
import WebsiteContext from "../../../provider/WebsiteContext";
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import YouTubeButton from "../../button/YouTubeButton";
import SpotifyButton from "../../button/SpotifyButton";

function Listen() {
    const {listen} = React.useContext(WebsiteContext);

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Listen</SectionHeader>
                </Grid>
                <Grid size={12}>
                    <Par>
                        {listen.why}
                    </Par>
                </Grid>

                {listen.recommended.map((playlist, playlistIndex) => (
                    <React.Fragment key={`playlist-${playlistIndex}`}>
                        <Grid size={12}>
                            <Typography variant="h5" fontWeight={600} color="primary.main" gutterBottom>
                                {playlist.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {playlist.description}
                            </Typography>
                        </Grid>

                        {playlist.songs.map((song, songIndex) => (
                            <Grid size={{xs: 6, sm: 6, md: 4, lg: 3}} key={`song-${playlistIndex}-${songIndex}`}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={song.imagePath}
                                        alt={song.name}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="body1" fontWeight={600} gutterBottom sx={{ flexGrow: 1 }}>
                                            {song.name}
                                        </Typography>
                                        
                                        {(song.youtube || song.spotify) && (
                                            <>
                                                <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                                                    Listen on:
                                                </Typography>
                                                <Stack direction="row" spacing={1}>
                                                    {song.youtube && <YouTubeButton url={song.youtube} />}
                                                    {song.spotify && <SpotifyButton url={song.spotify} />}
                                                </Stack>
                                            </>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </Page>
    );
}

export default Listen;