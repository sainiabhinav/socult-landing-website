"use client";

import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import BlogCard from "@/component/blogCard";

function AllBlogs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
                axios.get(`https://efxbtbfcs6.execute-api.ap-south-1.amazonaws.com/dev/blog`)
                    .then((res) => {
                        setData(res.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        )();
    }, [])

    return (
        <Grid container spacing={0} xs={12} md={12} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center"
              justifyContent="center" direction="column" id="blog">
            <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: '5rem', paddingBottom: '2rem'}} >
                <span style={{fontSize: '3rem', fontWeight: 'bold'}}> Blogs </span>
            </Grid>
            {
                data.map((entry) => {
                    return (
                        <BlogCard data={entry} />
                    )
                })
            }
        </Grid>
    )
}

export default AllBlogs