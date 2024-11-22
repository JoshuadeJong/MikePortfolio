import {Card, CardContent, List, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";


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

    return (
        <Card sx={{minHeight: 360}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h4" component="div">
                    {price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2">
                    Includes:
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        {includes.map((item, index) => (
                            <ListItem sx={{ display: 'list-item' }}>
                                    <Typography variant="body2">
                                        {item}
                                    </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default LessonCard