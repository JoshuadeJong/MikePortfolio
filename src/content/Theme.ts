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
            main: "#000",
        },
        secondary: {
            main: "#00baff"
        },
        text: {
            primary: "#000",
            secondary: "#656565",
        },
        background: {
            default: "#f8f8f8",
            paper: "#fff",
        },
    },
    typography: typography
});
themeLight = responsiveFontSizes(themeLight);

// @ts-ignore
let themeBrown = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#ad7370",
            main: "#7E1723",
        },
        secondary: {
            main: "#7e1723",
        },
        text: {
            primary: "#000",
            secondary: "#656565",
        },
        background: {
            default: "#dbcebd",
            paper: "#eae8d6",
        },
    },
    typography: {
        ...typography,
        fontFamily: "Rowdies",
        h4: {
            fontSize: "2.25rem",
            fontWeight: 800,
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.8",
            letterSpacing: "0.01071em",
        },
        body2: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.43",
            letterSpacing: "0.01071em",
        }
    }
})
themeBrown = responsiveFontSizes(themeBrown);


const selectTheme = {
    "light": themeLight,
    "brown": themeBrown,
}

export {selectTheme, themeLight};