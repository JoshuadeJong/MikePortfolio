import React from "react";
import {Box} from "@mui/material";
import {Center} from "../../../../layout";

type Props = {
    disabled: boolean,
    onClick: (event: any) => void,
    left?: boolean,
}

function CarouselArrow(props: Props) {
    const arrowSizePixel = 3

    return (
        <Box
            sx={{
                position: "absolute",
                top: "45%",
                right: props.left ? undefined : -arrowSizePixel/2+"vh",
                left: props.left ? -arrowSizePixel/2+"vh" : undefined,
                height: "10%",
            }}
            onClick={props.onClick}
        >
            <Center minHeight={arrowSizePixel+"vh"}>
                <svg
                    width={arrowSizePixel+"vh"}
                    height={arrowSizePixel+"vh"}

                    fill={props.disabled ? "rgba(255, 255, 255, 0.5)" : "#fff"}
                    cursor={props.disabled ? undefined : "cursor"}

                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    {props.left && (
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    )}
                    {!props.left && (
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    )}
                </svg>
            </Center>
        </Box>
    )
}

export default CarouselArrow;