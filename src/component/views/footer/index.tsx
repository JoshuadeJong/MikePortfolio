import React from "react";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {Box, Button, IconButton, Typography, styled} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import banner from "../../../assets/images/banner.jpg"
import Content from "../../../provider/WebsiteContext";
import View from "../../../type/View";
import FeatureFlag from "../../../type/FeatureFlag";
import SessionContext from "../../../provider/SessionContext";

const IconButtonStyle = {
    marginLeft: 2.5,
    color: "text.primary",
    backgroundColor: 'transparent'
};

function Footer() {
    const {featureFlags} = React.useContext(SessionContext);
    const {website, contact} = React.useContext(Content);

    let mainViews = [
        View.Home,
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Lesson] ? [View.Lesson] : []),
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Review] ? [View.Testimonial] : []),
        View.Contact,
    ];

    const navigate = useNavigate();
    const handleViewClick = React.useCallback(
        (path: string, replace: boolean) => navigate(path, {replace: replace}),
        [navigate]
    );
    const handleRedirectClick = (url: string) => window.open(url, "_blank");

    return (
        <Box
            width="100%"
            sx={{
                borderTop: '4px solid',
                borderColor: 'secondary.main',
                backgroundImage: `url(${banner})`,
                backgroundColor: "rgba(208,188,161,0.25)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "lighten",
                padding: 4
            }}
        >
            <Grid container spacing={2}>
                <Grid size={{xs: 12, md: 4}}>
                    <Typography
                        variant={"h4"}
                        sx={{
                            textWrap: "nowrap",
                            color: "text.primary",
                        }}
                    >
                        {website.name}
                    </Typography>
                </Grid>
                <Grid
                    size={{xs: 12, md: 8}}
                    sx={{
                        display: "flex",
                        justifyContent: {xs: "flex-start", md: "flex-end"},
                    }}
                >
                    {mainViews.map((view, index) => (
                        <Button
                            variant="text"
                            onClick={() => handleViewClick(view.path, true)}
                            size={"large"}
                            sx={{
                                color: "text.primary",
                                textTransform: "none",
                                fontWeight: 800,
                                fontSize: 16,
                                padding: 0,
                                marginRight: {xs: 4, md: 0},
                                marginLeft: {xs: 0, md: 4},
                                backgroundColor: 'transparent'
                            }}
                        >
                            {view.displayName}
                        </Button>
                    ))}
                </Grid>

                {/*<Grid size={12}>*/}
                {/*    <Box*/}
                {/*        sx={{*/}
                {/*            display: "flex",*/}
                {/*            flex: 1,*/}
                {/*            height: "1px",*/}
                {/*            backgroundColor: "primary.main",*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Grid>*/}
                <Grid size={4}>
                    <Typography
                        variant={"overline"}
                    >
                        © 2024 {website.name}. All rights reserved.
                    </Typography>
                </Grid>
                <Grid
                    size={8}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton
                        onClick={() => handleViewClick(View.Contact.path, true)}
                        sx={IconButtonStyle}
                    >
                        <PhoneIcon/>
                    </IconButton>
                    <IconButton
                        onClick={() => handleViewClick(View.Contact.path, true)}
                        sx={IconButtonStyle}
                    >
                        <EmailIcon/>
                    </IconButton>
                    <IconButton
                        onClick={() => handleRedirectClick(contact.youtube)}
                        sx={IconButtonStyle}
                    >
                        <YouTubeIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer