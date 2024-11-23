import React from 'react';
import {
    Box,
    Container,
    CssBaseline,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    ThemeProvider,
    Typography
} from "@mui/material";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import FeatureFlag from "../../type/FeatureFlag";
import {selectTheme, themeLight} from "../../content/Theme";
import SessionContext from "../../provider/SessionContext";
import WebsiteContext from "../../provider/WebsiteContext";
import WebsiteContent from "../../content/WebsiteContent";
import Header from "./header";

// Views
import Error from "./error";
import View from "../../type/View";
import Dev from "./dev";
import {Page} from "../layout";
import Home from './home';
import Footer from "./footer";

function App() {
    const [currentTheme, setCurrentTheme] = React.useState<string>("light");
    const [featureFlags, setFeatureFlags] = React.useState(() => {
        let tempObject = {};
        FeatureFlag.values().forEach(
            (x: FeatureFlag) =>
                (tempObject = {
                    ...tempObject,
                    // @ts-ignore
                    [x]: x.defaultValue,
                })
        );
        return tempObject;
    });
    const setFeatureFlag = (featureFlag: FeatureFlag, value: Boolean) => {
        setFeatureFlags({
            ...featureFlags,
            // @ts-ignore
            [featureFlag]: value,
        });
    };
    const handleThemeChange = (event: SelectChangeEvent) => {
        setCurrentTheme(event.target.value as string);
    }

    const {pathname, hash, key} = useLocation();
    React.useEffect(() => {
        if (hash === "") {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element != null) {
                    element.scrollIntoView({behavior: "smooth"});
                } else {
                    window.scrollTo(0, 0);
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        // @ts-ignore
        <ThemeProvider theme={currentTheme in selectTheme ? selectTheme[currentTheme] : themeLight}>
            <CssBaseline/>

            <SessionContext.Provider
                value={{
                    currentTheme,
                    setCurrentTheme,
                    featureFlags,
                    setFeatureFlags,
                    setFeatureFlag
                }}
            >
                <WebsiteContext.Provider value={WebsiteContent}>
                    <Header/>
                    <Footer/>
                    <Container maxWidth="lg" sx={{paddingTop: 16}}>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to={View.Home.path} replace/>}
                            />
                            <Route path={View.Home.path} element={<Home/>}/>
                            <Route path={View.Lesson.path} element={<Page>Lesson</Page>}/>
                            <Route path={View.Contact.path} element={<Page>Contact</Page>}/>
                            <Route path={View.Dev.path} element={<Dev/>}/>
                            <Route path={"*"} element={<Error code={404}/>}/>
                        </Routes>
                    </Container>
                    <Footer/>

                    {
                        // @ts-ignore
                        featureFlags[FeatureFlag.Theme_Selector] &&
                        <Box position="fixed" right={5} bottom={5} sx={{backgroundColor: "white"}}>
                            <Typography variant={"h6"}>Theme Selector</Typography>
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
                        </Box>
                    }
                </WebsiteContext.Provider>
            </SessionContext.Provider>
        </ThemeProvider>
    );
}

export default App;
