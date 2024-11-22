import React from "react";
import {Box} from "@mui/material";

type Props = {
    rowStart: number;
    rowEnd: number;
    columnStart: number;
    columnEnd: number;
    zIndex: number;
    children?: React.ReactNode;
};

function MItem(props: Props) {
    const {rowStart, rowEnd, columnStart, columnEnd, zIndex, children} = props;

    return (
        <Box
            sx={{
                gridRowStart: rowStart + 1,
                gridRowEnd: rowEnd + 1,
                gridColumnStart: columnStart + 1,
                gridColumnEnd: columnEnd + 1,
                zIndex: zIndex,
            }}
        >
            {children}
        </Box>
    );
}

export default MItem;