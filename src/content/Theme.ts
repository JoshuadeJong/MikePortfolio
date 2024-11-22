import {createTheme, responsiveFontSizes} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
    h1: {
        frontSize: "6rem",
        fontWeight: 600,
    },
    h2: {
        fontSize: "4.25rem",
        fontWeight: 600,
    },
    h3: {
        fontSize: "3rem",
        fontWeight: 600,
    },
    h4: {
        fontSize: "2.25rem",
        fontWeight: 550,
    },
    h5: {
        fontSize: "1.75rem",
        fontWeight: 500,
    },
    h6: {
        fontSize: "1.25rem",
        fontWeight: 400,
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "1.43",
        letterSpacing: "0.01071em",
    },
    body2: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "1.43",
        letterSpacing: "0.01071em",
    }
};

let themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#00baff",
        },
        text: {
            secondary: "#828282",
        },
        background: {
            default: "#f8f8f8",
            paper: "#fff",
        },
    },
    typography: typography,
});

let themeBrowns = createTheme({
    palette: {
        mode: "light",
        primary: {
            dark: '#865d36',
            main: '#93785b',
            light: '#Ac8968',
        },
        text: {
            primary: "#3e362e",
            secondary: "#fff",
        },
        background: {
            default: "#Ac8968",
            paper: "#93785b",
        },
    },
    typography: typography,
});

themeLight = responsiveFontSizes(themeLight);
themeBrowns = responsiveFontSizes(themeBrowns);

const selectTheme = {
    "light": themeLight,
    "brown": themeBrowns,
    "dark": themeLight,
}

export {selectTheme, themeLight};