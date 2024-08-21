import React from "react";
import {
    Grid,
    Switch,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
} from "@mui/material";
import SessionContext from "../../../provider/SessionContext";
import FeatureFlag from "../../../type/FeatureFlag";
import {Page} from "../../layout";
import {SectionHeader} from "../../typography";
import Error from "../error";

function Dev() {
    const { featureFlags, setFeatureFlag } = React.useContext(SessionContext);

    let featureFlagList = Object.values(FeatureFlag).sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const handleChange = (
        featureFlag: FeatureFlag,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFeatureFlag(featureFlag, event.target.checked);
    };

    // @ts-ignore
    if (!featureFlags[FeatureFlag.DEV]) {
        // @ts-ignore
        return <Error code={404} />;
    }

    return (
        <Page>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SectionHeader>Dev Feature Flags</SectionHeader>
                </Grid>
                <Grid item xs={12}>
                    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                        {featureFlagList.map((featureFlag, index) => {
                            return (
                                <Box key={featureFlag.name}>
                                    <ListItem>
                                        <ListItemText
                                            primary={featureFlag.name}
                                            secondary={featureFlag.description}
                                        />
                                        <Switch
                                            edge="end"
                                            // @ts-ignore
                                            checked={featureFlags[featureFlag]}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                handleChange(featureFlag, event)
                                            }
                                        />
                                    </ListItem>
                                    {index < featureFlagList.length - 1 && (
                                        <Divider component="li" />
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </Page>
    );
}

export default Dev;