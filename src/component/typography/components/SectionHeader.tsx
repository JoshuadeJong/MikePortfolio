import React from "react";
import {Box} from "@mui/material";

import SectionText from "./SectionText";

type Props = {
    line?: "all" | "sm" | "md" | "none";
    children?: React.ReactNode;
};

function SectionHeader(props: Props) {
    const {line, children} = {
        ...props,
        line: props.line || "all",
    };

    return (
        <>
            {/* Mobile View */}
            <Box
                sx={{
                    display: {
                        md: "none",
                        sm: "block",
                    },
                    textAlign: "center",
                }}
            >
                <SectionText display="block">{children}</SectionText>
                <Box
                    sx={{
                        display: line === "all" || line === "sm" ? "block" : "none",
                        height: "4px",
                        backgroundColor: "primary.main",
                        marginTop: "8px",
                    }}
                />
            </Box>

            {/* Desktop View */}
            <Box
                sx={{
                    display: {
                        md: "flex",
                        xs: "none",
                    },
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <SectionText display="inline-block">{children}</SectionText>
                <Box
                    sx={{
                        display: line === "all" || line === "md" ? "flex" : "none",
                        flex: 1,
                        height: "4px",
                        backgroundColor: "primary.main",
                        marginLeft: "32px",
                    }}
                />
            </Box>
        </>
    );
}

export default SectionHeader;