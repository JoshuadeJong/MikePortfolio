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
themeLight = responsiveFontSizes(themeLight);

let themeBrown = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00baff",
        },
        text: {
            primary: "#D4D4D6",
            secondary: "#C79360",
        },
        background: {
            default: "#08243B",
            paper: "#5E6F7C",
        },
    },
    typography: typography,
})
themeBrown = responsiveFontSizes(themeBrown);


const selectTheme = {
    "light": themeLight,
    "brown": themeBrown,
}

export {selectTheme, themeLight};