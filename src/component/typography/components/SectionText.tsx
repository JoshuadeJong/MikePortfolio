import React from "react";
import {Typography, useTheme} from "@mui/material";

type Props = {
    display?: "block" | "inline-block";
    children?: React.ReactNode;
};

function SectionText(props: Props) {
    const {display, children} = {
        ...props,
        display: props.display || "block",
    };
    const theme = useTheme();

    return (
        <Typography
            variant="h4"
            sx={{
                // fontSize: theme.typography.h4.fontSize,
                // fontWeight: theme.typography.h4.fontWeight,
                color: "primary.main",
                display: {display},
                margin: "0px auto",
            }}
        >
            {children}
        </Typography>
    );
}

export default SectionText;