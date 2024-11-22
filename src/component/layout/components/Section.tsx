import React from "react";
import {Box} from "@mui/material";

type Props = {
    id?: string;
    noPadding?: boolean;
    children?: React.ReactNode;
};

function Section(props: Props) {
    const {id, noPadding, children} = {
        ...props,
        noPadding: props.noPadding || false,
    };

    return (
        <Box
            id={id}
            sx={{
                width: "100%",
                paddingBottom: !noPadding ? "4vh" : "unset",
            }}
        >
            {children}
        </Box>
    );
}

export default Section;