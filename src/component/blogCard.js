"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";

function BlogCard(props) {
    return (
        <Grid item xs={12} md={3} sx={{mr: {xs: 0, md: 5}, mt: {xs: 5, md: 0}}}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Heading image"
                    height="200"
                    image={props.data.imageUrl}
                />
                <CardContent
                    style={{
                        paddingBottom: "0%",
                        height: "200px",
                        overflow: "auto"
                    }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        dangerouslySetInnerHTML =
                            {{ __html: props.data.body.length > 120 ?
                                    props.data.body.substring(0, 120) + '...' :
                                    props.data.body } }>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Know More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default BlogCard