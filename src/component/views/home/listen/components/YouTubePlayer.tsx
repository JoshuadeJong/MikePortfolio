import {Box} from "@mui/material";
import React from "react";
import YouTube from 'react-youtube';

type Props = {
    videoId: string
    title: string
    onPlay(): void,
    onPause(): void,
    onEnded(): void,
}

function YouTubePlayer(props: Props) {
    const {videoId, title, onPlay, onPause, onEnded} = props;
    const videoFrameRef = React.createRef<HTMLDivElement>();
    const [videoPlayerHeight, setVideoPlayerHeight] = React.useState(0);
    const [videoPlayerReady, setVideoPlayerReady] = React.useState(false);

    React.useEffect(() => {
        const updateWindowDimensions = () => {
            if (videoFrameRef.current && videoPlayerReady) {
                setVideoPlayerHeight(videoFrameRef.current?.offsetWidth * 9/16);
            }
        };

        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    })

    return (
        <Box
            id={"personalVideo"+videoId}
            ref={videoFrameRef}
            sx={{
                width: "100%",
                aspectRatio: 16/9,
                paddingLeft: "1vh",
                paddingRight: "1vh",
            }}
        >
            <YouTube
                videoId={videoId}
                title={title}
                onReady={() => setVideoPlayerReady(true)}
                onPlay={onPlay}
                onPause={onPause}
                onEnded={onEnded}
                opts={{
                  width: "100%",
                  height: `${videoPlayerHeight}px`
                }}
            />
        </Box>
    )
}

export default YouTubePlayer;