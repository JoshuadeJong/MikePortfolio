import React from "react";
import {Box, Button, Card, CardActions, CardContent, List, ListItem, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import View from "../../../../type/View";
import ContactReasonEnum from "../../../../type/ContactReasonEnum";
import Grid from "@mui/material/Grid2";


type Props = {
    title: string;
    price: string;
    description: string;
    includes: Array<string>;
    note: string;
    soldOut: boolean;
}

function LessonCard(props: Props) {
    const {
        title, price, description, includes, note, soldOut
    } = props;

    const navigate = useNavigate();
    const handleClick = React.useCallback(
        () => navigate(View.Contact.path, {replace: false, state: {subject: ContactReasonEnum.LessonRequest}}),
        [navigate]
    );

    return (
        <Card sx={{display: "flex", flexDirection: 'column'}}>
            <CardContent>
                <Grid container marginBottom={1.5}>
                    <Grid size={10}>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid size={2}>
                        <Typography variant="h5" sx={{textAlign: "right"}}>
                            {price}*
                        </Typography>
                    </Grid>
                </Grid>

                <Typography sx={{marginBottom: 1.5, color: "text.secondary"}}>
                    {description}
                </Typography>
                <Box sx={{
                    maxHeight: "400px",
                    overflowY: "auto",
                }}>
                    <Typography variant="body2" sx={{color: "text.secondary"}}>
                        Includes:
                    </Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            paddingLeft: 4,
                            paddingTop: 0,
                            paddingBottom: 0,
                            color: "text.secondary"
                        }}
                    >
                        {includes.map((item, index) => (
                            <ListItem key={title + "includes" + index} sx={{display: 'list-item', paddingTop: 0}}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Typography sx={{color: "text.secondary"}}>
                    {note}
                </Typography>
            </CardContent>
            <CardActions sx={{marginTop: "auto", paddingLeft: 2, paddingRight: 2, paddingBottom: 2}}>
                { getCardActions(handleClick, soldOut)}
            </CardActions>
        </Card>
    );
}

function getCardActions(onClick: () => void, soldOut: boolean) {

    if (soldOut) {
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