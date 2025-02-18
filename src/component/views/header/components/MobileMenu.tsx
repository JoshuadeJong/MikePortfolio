import React from "react";
import {
    Box,
    Button,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import View from "../../../../type/View";


type Props = {
    mainViews: Array<View>;
    subViews: Map<View, Array<View>>;
    handleLinkClick: (path: string) => void;
};

function MobileMenu(props: Props) {
    const {mainViews, subViews, handleLinkClick} = props;

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSectionOpen, setIsSectionOpen] = React.useState<null | View>(null);
    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setIsMenuOpen(open);
        };

    return (
        <>
            <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                sx={{color: "text.secondary"}}
            >
                <MenuIcon/>
            </IconButton>

            <SwipeableDrawer
                anchor="top"
                open={isMenuOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List
                    sx={{
                        backgroundColor: "background.default",
                    }}
                >
                    {mainViews.map((view, index) => (
                        <Box key={"mobileMainView"+index}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        setIsSectionOpen(null);
                                        setIsMenuOpen(false);
                                        handleLinkClick(view.path);
                                    }}
                                >
                                    {view.icon != null ? <ListItemIcon>
                                        <view.icon sx={{color: "primary.main"}}/>
                                    </ListItemIcon> : null}
                                    <ListItemText primary={view.displayName}/>
                                </ListItemButton>
                                {subViews.has(view) && (
                                    <Button
                                        onClick={() =>
                                            setIsSectionOpen(isSectionOpen === view ? null : view)
                                        }
                                        sx={{
                                            width: "fit-content",
                                            marginLeft: 2,
                                            color: "text.secondary",
                                        }}
                                    >
                                        {isSectionOpen === view ? <ExpandLess/> : <ExpandMore/>}
                                    </Button>
                                )}
                            </ListItem>

                            <Collapse
                                in={isSectionOpen === view}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {subViews.get(view)?.map((subView,index) => (
                                        <ListItem disablePadding key={"mobileSubView"+index}>
                                            <ListItemButton
                                                onClick={() => {
                                                    setIsSectionOpen(null);
                                                    setIsMenuOpen(false);
                                                    handleLinkClick(subView.path);
                                                }}
                                                sx={{paddingLeft: 4}}
                                            >
                                                <ListItemIcon>
                                                    <subView.icon sx={{color: "primary.main"}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={subView.displayName}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider/>
                            </Collapse>
                        </Box>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
}

export default MobileMenu;