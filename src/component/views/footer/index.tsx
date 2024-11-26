import {Box} from "@mui/material";
import banner from "../../../assets/images/banner.jpg"


function Footer() {

    return (
        <Box
            width="100%"
            height="15vh"
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