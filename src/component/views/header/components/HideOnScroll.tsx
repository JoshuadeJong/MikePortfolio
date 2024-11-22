import React from "react";
import {Slide, useScrollTrigger} from "@mui/material";

type Props = {
    setIsHidden?: (value: boolean) => void;
    children: React.ReactElement;
};

function HideOnScroll(props: Props) {
    const {setIsHidden, children} = props;
    const trigger = useScrollTrigger();

    React.useEffect(() => {
        if (setIsHidden) {
            setIsHidden(trigger);
        }
    }, [setIsHidden, trigger]);

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={350}>
            {children}
        </Slide>
    );
}

export default HideOnScroll;