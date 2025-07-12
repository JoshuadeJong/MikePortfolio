import React from "react";
import {Box, Button, Card, CardActions, CardContent, List, ListItem, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import View from "../../../../type/View";
import ContactReasonEnum from "../../../../type/ContactReasonEnum";
import {TypeSpecimen} from "@mui/icons-material";


type Props = {
    title: string;
    price: string;
    description: string;
    includes: Array<string>;
    enabled: boolean;
}

function LessonCard(props: Props) {
    const {
        title, price, description, includes, enabled
    } = props;

    const navigate = useNavigate();
    const handleClick = React.useCallback(
        () => navigate(View.Contact.path, {replace: false, state: {subject: ContactReasonEnum.LessonRequest}}),
        [navigate]
    );

    return (
        <Card sx={{minHeight: 400, display: "flex", flexDirection: 'column'}}>
            <CardContent>
                <Typography sx={{fontSize: 14, color: "text.secondary"}} gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h4" component="div">
                    {price}*
                </Typography>
                <Box sx={{
                    height: "400px",
                    overflowY: "auto",
                }}>
                    <Typography sx={{mb: 1.5, color: "text.secondary"}}>
                        {description}
                    </Typography>
                    <Typography variant="body2">
                        Includes:
                    </Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            paddingLeft: 2,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                    >
                        {includes.map((item, index) => (
                            <ListItem key={title + "includes" + index} sx={{display: 'list-item', paddingTop: 0}}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </CardContent>
            <CardActions sx={{marginTop: "auto", padding: 2}}>
                { getCardActions(handleClick, enabled)}
            </CardActions>
        </Card>
    );
}

function getCardActions(onClick: () => void, enabled: boolean) {

    if (!enabled) {
        return (
            <Button disabled={true}>
                <Box sx={{color: "primary.main"}}>
                    Sold Out
                </Box>
            </Button>
        )
    }

    return (
        <Button variant={"outlined"} onClick={onClick}>
            Book Now
        </Button>
    )
}

export default LessonCard