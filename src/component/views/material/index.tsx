import {Page} from "../../layout";
import Grid from "@mui/material/Grid2";
import {Par, SectionHeader} from "../../typography";
import {Box, Card, CardContent, Link, List, ListItem, ListItemText, Typography} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MaterialContent from "../../../content/MaterialContent";
import React from "react";

function Material() {
    return (
        <Page>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <SectionHeader>Lesson Materials</SectionHeader>
                </Grid>

                <Grid size={12}>
                    <Par>
                        Download practice materials, reference sheets, and transcriptions to support your jazz guitar studies. 
                        All materials are designed to complement our lessons and help you practice effectively between sessions.
                    </Par>
                </Grid>

                {MaterialContent.map((category, categoryIndex) => (
                    <Grid size={12} key={`category-${categoryIndex}`}>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" fontWeight={600} color="primary.main" gutterBottom>
                                {category.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {category.description}
                            </Typography>
                            
                            <Card variant="outlined">
                                <CardContent>
                                    <List>
                                        {category.items.map((item, itemIndex) => (
                                            <ListItem 
                                                key={`item-${categoryIndex}-${itemIndex}`}
                                                sx={{ 
                                                    borderBottom: itemIndex < category.items.length - 1 ? 1 : 0,
                                                    borderColor: 'divider',
                                                    py: 2
                                                }}
                                            >
                                                <PictureAsPdfIcon sx={{ mr: 2, color: 'primary.main' }} />
                                                <ListItemText
                                                    primary={
                                                        <Link 
                                                            href={item.fileUrl} 
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{ 
                                                                color: 'primary.main',
                                                                textDecoration: 'none',
                                                                fontWeight: 600,
                                                                '&:hover': { textDecoration: 'underline' }
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    }
                                                    secondary={item.description}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Page>
    );
}

export default Material;
