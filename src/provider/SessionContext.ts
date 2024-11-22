import React from "react";
import {PaletteMode} from "@mui/material";
import FeatureFlag from "../type/FeatureFlag";

type SessionState = {
    currentTheme: PaletteMode;
    setCurrentTheme: (x: PaletteMode) => void;

    // Feature Flags
    featureFlags: {};
    setFeatureFlags: (x: Object) => void;
    setFeatureFlag: (x: FeatureFlag, y: Boolean) => void;
};

const SessionContext = React.createContext<SessionState>({
    currentTheme: "light",
    setCurrentTheme(x: PaletteMode): void {
    },

    // Feature Flags
    featureFlags: {},
    setFeatureFlags(x: Object): void {
    },
    setFeatureFlag(x: FeatureFlag, y: Boolean): void {
    },
});

export default SessionContext;