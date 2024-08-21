import React from "react";
import { Typography } from "@mui/material";

type Props = {
    noMargin?: boolean;
    textColor?: string;
    children?: React.ReactNode;
};

function Par(props: Props) {
    const { noMargin, textColor, children } = {
        ...props,
        noMargin: props.noMargin ? "none" : "1rem",
        textColor: props.textColor || "text.secondary",
    };
    return (
        <Typography
            variant="body1"
            sx={{
                marginBottom: noMargin,
                color: textColor,
            }}
        >
            {children}
        </Typography>
    );
}

export default Par;