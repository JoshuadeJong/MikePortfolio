import React from "react";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {Box, Button, Typography} from "@mui/material";

import banner from "../../../assets/images/banner.jpg"
import Content from "../../../provider/WebsiteContext";
import View from "../../../type/View";
import FeatureFlag from "../../../type/FeatureFlag";
import SessionContext from "../../../provider/SessionContext";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

type Props = {
    minHeight: string
}

function Footer(props: Props) {
    const {featureFlags} = React.useContext(SessionContext);
    const {website, contact} = React.useContext(Content);
    const {minHeight} = props;

    let mainViews = [
        View.Home,
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Lesson] ? [View.Lesson] : []),
        // @ts-ignore
        View.Testimonial,
        // @ts-ignore
        ...(featureFlags[FeatureFlag.Page_Frequently_Asked_Questions] ? [View.Frequently_Ask_Questions] : []),
        View.Contact,
    ];

    const navigate = useNavigate();
    const handleViewClick = React.useCallback(
        (path: string, replace: boolean) => navigate(path, {replace: replace}),
        [navigate]
    );

    return (
        <Box
            width="100%"
            minHeight={minHeight}
            sx={{
                borderTop: '4px solid',
                borderColor: 'secondary.main',
                backgroundImage: `url(${banner})`,
                backgroundColor: "rgba(208,188,161,0.45)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "lighten",
                padding: 4,
                paddingTop: 6
            }}
        >
            <Grid container spacing={0}>
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
                        flexWrap: "wrap"
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
                                marginTop: 1,
                                marginBottom: 1,
                                backgroundColor: 'transparent'
                            }}
                        >
                            {view.displayName}
                        </Button>
                    ))}
                </Grid>
                <Grid
                    size={12}
                    sx={{
                        marginBottom: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flex: 1,
                            height: "1px",
                            backgroundColor: "primary.main",
                        }}
                    />
                </Grid>
                <Grid
                    size={3}
                    sx={{
                        display: {xs: "none", md: "block"},
                        marginBottom: "4px",
                    }}
                >
                    <Typography
                        variant={"overline"}
                    >
                        © 2024 {website.name}. All rights reserved.
                    </Typography>
                </Grid>
                <Grid
                    size={{xs: 12, md: 9}}
                    sx={{
                        display: "flex",
                        justifyContent: {sx: "flex-start", md: "flex-end"},
                        flexWrap: "wrap",
                    }}
                >
                    {
                        [
                            {text: contact.location, icon: <PlaceIcon color="primary" fontSize={"small"} sx={{marginRight: 1}}/>},
                            {text: contact.phone, icon: <PhoneIcon color="primary" fontSize={"small"}  sx={{marginRight: 1}}/>},
                            {text: contact.email, icon: <EmailIcon color="primary" fontSize={"small"}  sx={{marginRight: 1}}/>}
                        ].map((element, index) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingLeft: 0,
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                    whiteSpace: "pre-wrap",
                                    flexWrap: "nowrap",
                                    marginLeft: {xs: "0px", md: "24px"},
                                    marginRight: {xs: "24px", md: "0px"},
                                }}
                            >
                                {element.icon}
                                <Typography variant={"caption"}>
                                    {element.text}
                                </Typography>
                            </Box>

                        ))
                    }
                </Grid>
                <Grid
                    size={12}
                    sx={{
                        display: {xs: "block", md: "none"},
                        marginBottom: "4px",
                    }}
                >
                    <Typography
                        variant={"overline"}
                    >
                        © 2024 {website.name}. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer