import {createTheme, responsiveFontSizes} from "@mui/material";

declare module '@mui/material/styles' {
    interface TypeBackground  {
        dark: string;
    }
}


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
            dark: "#ccb698",
            default: "#dbcebd",
            paper: "#eae8d6",
        },
    },
    typography: {
        fontFamily: "Rowdies",
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
            fontWeight: 800,
        },
        h5: {
            fontSize: "1.75rem",
            fontWeight: 500,
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
        },
        overline: {
            fontSize: ".6rem",
            fontWeight: 200,
            lineHeight: ".05rem",
            letterSpacing: "0.01071em",
            textTransform: "none",
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#fbfaf7",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fbfaf7",
                }
            }
        }
    }
})
themeBrown = responsiveFontSizes(themeBrown);


const selectTheme = {
    "brown": themeBrown,
}

export {selectTheme, themeBrown};