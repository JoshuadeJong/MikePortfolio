import React from "react";
import {Link, Typography} from "@mui/material";

type Props = {
    url: string;
    children?: React.ReactNode;
};

function Par(props: Props) {
    const {url, children} = props;
    return (
        <Link
            component="button"
            variant="body1"
            onClick={() => {
                window.open(url, "_blank");
            }}
        >
            {children}
        </Link>
    );
}

export default Par;