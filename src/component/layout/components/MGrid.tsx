import React from "react";
import { Box } from "@mui/material";

type Props = {
    height?: string;
    row?: number;
    column?: number;
    children?: React.ReactNode;
};

function MGrid(props: Props) {
    const { height, row, column, children } = {
        ...props,
        height: props.height || "inherit",
        row: props.row || 12,
        column: props.column || 12,
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: `repeat(${row}, 1fr)`,
                gridTemplateColumns: `repeat(${column}, 1fr)`,
                height: { height },
                width: "100%",
            }}
        >
            {children}
        </Box>
    );
}

export default MGrid;