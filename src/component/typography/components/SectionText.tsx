import React from "react";
import {Typography} from "@mui/material";

type Props = {
    display?: "block" | "inline-block";
    children?: React.ReactNode;
};

function SectionText(props: Props) {
    const {display, children} = {
        ...props,
        display: props.display || "block",
    };
    return (
        <Typography
            variant="h4"
            sx={{
                display: {display},
                margin: "0px auto",
            }}
        >
            {children}
        </Typography>
    );
}

export default SectionText;