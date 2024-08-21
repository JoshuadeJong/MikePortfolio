import React from "react";
import { Button } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
    text: string;
    onClick?: () => void;
    open?: boolean;
};

function DesktopLink(props: Props) {
    const { text, onClick, open } = props;

    return (
        <Button
            key={text}
            variant="text"
            onClick={onClick}
            sx={{
                pl: 3,
                pr: 3,
                color: "text.secondary",
                textTransform: "capitalize",
                zLevel: 200,
            }}
            endIcon={
                open !== undefined ? (
                    open ? (
                        <ExpandLessIcon />
                    ) : (
                        <ExpandMoreIcon />
                    )
                ) : undefined
            }
        >
            {text}
        </Button>
    );
}

export default DesktopLink;