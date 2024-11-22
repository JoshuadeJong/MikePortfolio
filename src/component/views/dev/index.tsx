import React from "react";
import {
    Box,
    Divider, FormControl,
    List,
    ListItem,
    ListItemText, MenuItem,
    Select,
    SelectChangeEvent,
    Switch,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import SessionContext from "../../../provider/SessionContext";
import FeatureFlag from "../../../type/FeatureFlag";
import {Page} from "../../layout";
import {SectionHeader} from "../../typography";
import Error from "../error";
import {selectTheme} from "../../../content/Theme";

function Dev() {
    const {
        featureFlags,
        setFeatureFlag,
        currentTheme,
        setCurrentTheme
    } = React.useContext(SessionContext);

    let featureFlagList = Object.values(FeatureFlag).sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const handleFeatureFlagChange = (
        featureFlag: FeatureFlag,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFeatureFlag(featureFlag, event.target.checked);
    };

    const handleThemeChange = (event: SelectChangeEvent) => {
        setCurrentTheme(event.target.value as string);
    }

    // @ts-ignore
    if (!featureFlags[FeatureFlag.DEV]) {
        // @ts-ignore
        return <Error code={404}/>;
    }

    return (
        <Page>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <SectionHeader>Dev Feature Flags</SectionHeader>
                </Grid>
                <Grid size={12}>
                    <List sx={{width: "100%", bgcolor: "background.paper"}}>
                        {featureFlagList.map((featureFlag, index) => {

                            if (featureFlag.name.includes("Page")) {
                                return <></>
                            }

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
                                                handleFeatureFlagChange(featureFlag, event)
                                            }
                                        />
                                    </ListItem>
                                    {index < featureFlagList.length - 1 && (
                                        <Divider component="li"/>
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </Grid>
                <Grid size={12}>
                    <SectionHeader>Theme Selector</SectionHeader>
                </Grid>
                <Grid size={12}>
                    <FormControl fullWidth>
                        <Select
                            value={currentTheme}
                            label="Theme"
                            onChange={handleThemeChange}
                        >
                            {Object.keys(selectTheme).map((key, index) => (
                                <MenuItem value={key}>{key}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <SectionHeader>Page Enabler</SectionHeader>
                </Grid>
                <Grid size={12}>
                    <List sx={{width: "100%", bgcolor: "background.paper"}}>
                        {featureFlagList.map((featureFlag, index) => {

                            if (!featureFlag.name.includes("Page")) {
                                return <></>
                            }

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
                                                handleFeatureFlagChange(featureFlag, event)
                                            }
                                        />
                                    </ListItem>
                                    {index < featureFlagList.length - 1 && (
                                        <Divider component="li"/>
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