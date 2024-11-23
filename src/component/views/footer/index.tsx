import {Box, Container} from "@mui/material";
import banner from "../../../assets/images/banner.jpg"
import {Center} from "../../layout";


function Footer() {

    return (
        <Box
            width="100%"
            height="300px"
            sx={{
                backgroundColor: "primary.main",
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >

        </Box>
    )
}

export default Footer