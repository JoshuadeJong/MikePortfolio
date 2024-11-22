import React from "react";
import {Box} from "@mui/material";

type Props = {
    minHeight: string;
    children?: React.ReactNode;
};

function Center(props: Props) {
    const {minHeight, children} = props;

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={minHeight}
        >
            {children}
        </Box>
    );
}

export default Center;