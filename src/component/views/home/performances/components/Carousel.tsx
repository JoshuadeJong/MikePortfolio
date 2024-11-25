import React from "react";
import {Box, IconButton} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"

import CarouselArrow from "./CarouselArrow";

type Props = {
    shouldAutoSwitch: boolean;
    switchRate: number;
    children: React.ReactNode;
}

function Carousel(props: Props) {
    const {shouldAutoSwitch, switchRate, children} = props;
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = React.useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
            loop: true,
            initial: 0,
            mode: "free-snap",
            slides: {
                origin: "center",
                perView: 1,
                spacing: 15,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver || !shouldAutoSwitch) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, switchRate)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                }}
            >
                <Box ref={sliderRef} className={"keen-slider"}>
                    {children}
                </Box>
                {/*{loaded && instanceRef.current && (*/}
                {/*    <>*/}
                {/*        <CarouselArrow*/}
                {/*            left*/}
                {/*            onClick={(e: any) =>*/}
                {/*                e.stopPropagation() || instanceRef.current?.prev()*/}
                {/*            }*/}
                {/*            disabled={currentSlide === 0}*/}
                {/*        />*/}
                {/*        <CarouselArrow*/}
                {/*            onClick={(e: any) =>*/}
                {/*                e.stopPropagation() || instanceRef.current?.next()*/}
                {/*            }*/}
                {/*            disabled={*/}
                {/*                currentSlide ===*/}
                {/*                instanceRef.current.track.details.slides.length - 1*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </>*/}
                {/*)}*/}
            </Box>
            {loaded && instanceRef.current && (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {[
                        // @ts-ignore
                        ...Array(instanceRef.current?.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <IconButton
                                key={idx}
                                size={"small"}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                            >
                                {currentSlide === idx ? <CircleIcon fontSize={"small"}/> : <CircleOutlinedIcon fontSize={"small"}/>}
                            </IconButton>
                        )
                    })}
                </Box>
            )}
        </Box>
    )}

export default Carousel;