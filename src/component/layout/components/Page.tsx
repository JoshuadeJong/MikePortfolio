import React from "react";
import {Container} from "@mui/material";

type Props = {
    noPadding?: boolean;
    backgroundColor? : string;
    children?: React.ReactNode;
};

function Page(props: Props) {
    const {noPadding, children} = {
        ...props,
        noPadding: props.noPadding || false,
    };
    return <Container
        sx={{
            minWidth: "100vw",
            paddingBottom: !noPadding ? 8 : 0,
            backgroundColor: props.backgroundColor || "default",
        }}
    >
        <Container>
            {children}
        </Container>
    </Container>;
}

export default Page;