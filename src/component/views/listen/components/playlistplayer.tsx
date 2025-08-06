import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import React, {useEffect, useState} from "react";
import Playlist from "../../../../type/content/type/Playlist";

const slideWidth = 124;
const animation = { duration: 5000, easing: (t: number) => t }

type Props = {
    playlist: Playlist;
    pageRef: React.MutableRefObject<HTMLDivElement | null>;
}

function PlaylistPlayer(props: Props) {
    const {playlist, pageRef} = props;
    const [visibleSlideCount, setVisibleSlideCount] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (pageRef.current) {
                setVisibleSlideCount(pageRef.current?.clientWidth / slideWidth);
            }
        };

        updateWidth(); // Get initial width
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const [sliderRef ] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: true,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
            perView: visibleSlideCount,
            spacing: 10
        }
    })

    return (
        <Box>
            <Typography variant="h6">
                {playlist.title}
            </Typography>
            <Typography variant="body1">
                {playlist.description}
            </Typography>
            { "Width: " + pageRef.current?.clientWidth + " slides: " + visibleSlideCount }
            <div ref={sliderRef} className={"keen-slider"}>
                { playlist.songs.map((song, index) => {
                    return (
                        <div className={"keen-slider__slide number-slide" + index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    sx={{width: 124, height: 124}}
                                    image={song.imagePath}
                                />
                            </Card>
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}

export default PlaylistPlayer;