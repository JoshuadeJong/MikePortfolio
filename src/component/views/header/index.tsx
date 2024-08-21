import React from "react";
import {AppBar, Box, Toolbar, Container, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import HideOnScroll from "./components/HideOnScroll";
import View from "../../../type/View";
import FeatureFlag from "../../../type/FeatureFlag";
import SessionContext from "../../../provider/SessionContext";
import {Center} from "../../layout";
import WebsiteContext from "../../../provider/WebsiteContext";

function Header() {
    const { featureFlags } = React.useContext(SessionContext);
    const { nameWebsite } = React.useContext(WebsiteContext);

    let mainViews = [
        View.Home,
        View.Lesson,
        View.Gigs,
        View.Faq,
        View.Contact,
        // @ts-ignore
        ...(featureFlags[FeatureFlag.DEV] ? [View.Dev] : []),
    ];

    const subViews = new Map<View, Array<View>>([
        [
            View.Home,
            [
                View.Home_About,
                View.Home_Testimonial,
                View.Home_Lessons,
                View.Home_Contact,
            ],
        ],
    ]);

    const [isHidden, setIsHidden] = React.useState(false);

    const navigate = useNavigate();
    const handleLinkClick = React.useCallback(
        (path: string, replace: boolean) => navigate(path, { replace: replace }),
        [navigate]
    );

    return (
        <HideOnScroll setIsHidden={setIsHidden}>
            <AppBar
                color="transparent"
                sx={{
                    backdropFilter: "blur(20px)",
                    backgroundColor: "background.transparent",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Center minHeight={"64px"}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        textWrap: "nowrap",
                                    }}
                                >
                                    { nameWebsite }
                                </Typography>
                            </Center>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: "none", sm: "flex" },
                                marginLeft: "auto",
                            }}
                        >
                            <DesktopMenu
                                mainViews={mainViews}
                                subViews={subViews}
                                handleLinkClick={handleLinkClick}
                                isHidden={isHidden}
                            />
                        </Box>

                        {/* Mobile */}
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: "flex", sm: "none" },
                                marginLeft: "auto",
                            }}
                        >
                            <MobileMenu
                                mainViews={mainViews}
                                subViews={subViews}
                                handleLinkClick={handleLinkClick}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}

export default Header;