import React from "react";
import {
    Box,
    debounce,
    Divider,
    Fade,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
} from "@mui/material";
import View from "../../../../type/View";
import DesktopLink from "./DesktopLinks";

type Props = {
    mainViews: Array<View>;
    subViews: Map<View, Array<View>>;
    handleLinkClick: (path: string, replace: boolean) => void;
    isHidden: boolean;
};

function DesktopMenu(props: Props) {
    const {mainViews, subViews, handleLinkClick, isHidden} = props;

    // Sub Menu Setup
    const refs = React.useRef(
        mainViews.map((view) => React.createRef<null | HTMLElement>())
    );
    const [subMenuOpen, setSubMenuOpen] = React.useState<null | View>(null);
    const setSubMenuOpenDebounced = React.useMemo(
        () => debounce(setSubMenuOpen, 40),
        [setSubMenuOpen]
    );
    const setSubMenuOpenUndebounce = React.useMemo(
        () => (view: typeof subMenuOpen) => {
            setSubMenuOpenDebounced.clear();
            setSubMenuOpen(view);
        },
        [subMenuOpen, setSubMenuOpen, setSubMenuOpenDebounced]
    );
    React.useEffect(() => {
        if (isHidden) {
            setSubMenuOpenDebounced(null);
        }

        return () => {
            setSubMenuOpenDebounced.clear();
        };
    }, [setSubMenuOpenDebounced, isHidden]);

    return (
        <>
            {mainViews.map((view, index) => (
                <Box
                    onMouseEnter={
                        subViews.has(view)
                            ? () => setSubMenuOpenUndebounce(view)
                            : undefined
                    }
                    onFocus={
                        subViews.has(view)
                            ? () => setSubMenuOpenUndebounce(view)
                            : undefined
                    }
                    onMouseLeave={
                        subViews.has(view) ? () => setSubMenuOpenDebounced(null) : undefined
                    }
                    onBlur={
                        subViews.has(view) ? () => setSubMenuOpenDebounced(null) : undefined
                    }
                    key={`${view}-menu`}
                >
                    {/*  Menu Item */}
                    <Box ref={refs.current[index]} sx={{marginRight: 1}}>
                        <DesktopLink
                            onClick={() => handleLinkClick(view.path, true)}
                            text={view.displayName + " "}
                            open={subViews.has(view) ? subMenuOpen === view : undefined}
                        />
                    </Box>

                    {/*  Sub Menu */}
                    {subViews.has(view) && (
                        <Popper
                            open={subMenuOpen === view}
                            anchorEl={refs.current[index].current}
                            transition
                            placement="bottom-start"
                            style={{
                                zIndex: 1200,
                                pointerEvents: subMenuOpen === view ? undefined : "none",
                            }}
                        >
                            {({TransitionProps}) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            backdropFilter: "blur(20px)",
                                            backgroundColor: "background.transparent",
                                            color: "text.secondary",
                                            textColor: "text.secondary",
                                        }}
                                    >
                                        <List sx={{padding: 0}}>
                                            {subViews.get(view)?.map((subView, index) => (
                                                <Box key={`${subView.displayName}-submenu`}>
                                                    <ListItem disablePadding>
                                                        <ListItemButton
                                                            onClick={() =>
                                                                handleLinkClick(subView.path, false)
                                                            }
                                                            sx={{
                                                                paddingTop: 1,
                                                                paddingBottom: 1,
                                                                paddingLeft: 4,
                                                                paddingRight: 4,
                                                            }}
                                                        >
                                                            <ListItemIcon>
                                                                <subView.icon sx={{color: "primary.main"}}/>
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={subView.displayName}
                                                                sx={{marginLeft: 2}}
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    {index < (subViews.get(view)?.length || 0) - 1 && (
                                                        <Divider/>
                                                    )}
                                                </Box>
                                            ))}
                                        </List>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    )}
                </Box>
            ))}
        </>
    );
}

export default DesktopMenu;