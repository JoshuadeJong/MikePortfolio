import React from "react";
import {Typography} from "@mui/material";

type Props = {
    noMargin?: boolean;
    textColor?: string;
    whiteSpace?: string;
    children?: React.ReactNode;
};

function Par(props: Props) {
    const {noMargin, textColor, whiteSpace, children} = {
        ...props,
        noMargin: props.noMargin ? "none" : "1rem",
        textColor: props.textColor || "text.primary",
        whiteSpace: props.whiteSpace || "normal",
    };
    return (
        <Typography
            variant="body1"
            sx={{
                marginBottom: noMargin,
                color: textColor,
                whiteSpace: whiteSpace,
            }}
        >
            {children}
        </Typography>
    );
}

export default Par;