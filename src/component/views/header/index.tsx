import React from "react";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import HideOnScroll from "./components/HideOnScroll";
import View from "../../../type/View";
import FeatureFlag from "../../../type/FeatureFlag";
import SessionContext from "../../../provider/SessionContext";
import {Center} from "../../layout";
import WebsiteContext from "../../../provider/WebsiteContext";

function Header() {
    const {featureFlags} = React.useContext(SessionContext);
    const {website} = React.useContext(WebsiteContext);

    let mainViews = [
        View.Home,
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Lesson] ? [View.Lesson] : []),
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Review] ? [View.Testimonial] : []),
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Contact] ? [View.Contact] : []),
        // @ts-ignore
        ...(featureFlags[FeatureFlag.DEV] ? [View.Dev] : []),
    ];

    let subViews = new Map<View, Array<View>>([
        [
            View.Home,
            [
                View.Home_About,
                View.Home_Testimonial,
                View.Home_Lessons,
                View.Home_Performance,
                View.Home_Contact,
            ],
        ],
        [
            View.Lesson,
            [
                // @ts-ignore
                ...(featureFlags[FeatureFlag.Page_Lesson_Booking] ? [View.Lesson_Booking] : []),
                // @ts-ignore
                ...(featureFlags[FeatureFlag.Page_Lesson_Material] ? [View.Lesson_Material] : []),
                // @ts-ignore
                ...(featureFlags[FeatureFlag.Page_Lesson_Listen] ? [View.Lesson_Listen] : []),
            ]
        ]
    ]);

    // @ts-ignore
    if (!(featureFlags[FeatureFlag.Page_Lesson_Booking] || featureFlags[FeatureFlag.Page_Lesson_Material] || featureFlags[FeatureFlag.Page_Lesson_Listen])) {
        subViews.delete(View.Lesson);
    }

    const [isHidden, setIsHidden] = React.useState(false);

    const navigate = useNavigate();
    const handleLinkClick = React.useCallback(
        (path: string, replace: boolean) => navigate(path, {replace: replace}),
        [navigate]
    );

    return (
        <HideOnScroll setIsHidden={setIsHidden}>
            <AppBar
                sx={{
                    backgroundColor: "background.dark",
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
                                        color: "text.primary",
                                    }}
                                >
                                    {website.name}
                                </Typography>
                            </Center>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: {xs: "none", sm: "flex"},
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
                                display: {xs: "flex", sm: "none"},
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