import React from "react";
import FeatureFlag from "../type/FeatureFlag";

type SessionState = {
    currentTheme: string;
    setCurrentTheme: (x: string) => void;

    // Feature Flags
    featureFlags: {};
    setFeatureFlags: (x: Object) => void;
    setFeatureFlag: (x: FeatureFlag, y: Boolean) => void;
};

const SessionContext = React.createContext<SessionState>({
    currentTheme: "light",
    setCurrentTheme(x: string): void {
    },

    // Feature Flags
    featureFlags: {},
    setFeatureFlags(x: Object): void {
    },
    setFeatureFlag(x: FeatureFlag, y: Boolean): void {
    },
});

export default SessionContext;