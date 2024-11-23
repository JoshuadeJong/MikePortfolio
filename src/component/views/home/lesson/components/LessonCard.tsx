import {Button, Card, CardActions, CardContent, List, ListItem, Typography} from "@mui/material";
import React from "react";
import WebsiteContext from "../../../../../provider/WebsiteContext";


type Props = {
    title: string;
    price: string;
    description: string;
    includes: Array<string>;
}

function LessonCard(props: Props) {
    const {
        title, price, description, includes
    } = props;
    const {contact} = React.useContext(WebsiteContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        window.open(`mailto:${contact.email}`);
    };

    return (
        <Card sx={{minHeight: 500, display: "flex", flexDirection: 'column'}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h4" component="div">
                    {price}*
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2">
                    Includes:
                </Typography>
                <List sx={{listStyleType: 'disc', paddingLeft: 2, paddingTop: 0, paddingBottom: 0}}>
                    {includes.map((item, index) => (
                        <ListItem sx={{display: 'list-item', paddingTop: 0}}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions sx={{marginTop: "auto"}}>
                <Button variant={"outlined"} onClick={handleClick}>
                    Book Now
                </Button>
            </CardActions>
        </Card>
    );
}

export default LessonCard