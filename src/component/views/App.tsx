import React from 'react';
import {Container, CssBaseline, PaletteMode, ThemeProvider} from "@mui/material";
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

function App() {
    const [currentTheme, setCurrentTheme] = React.useState<PaletteMode>("light");
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
                </WebsiteContext.Provider>
            </SessionContext.Provider>
        </ThemeProvider>
    );
}

export default App;
