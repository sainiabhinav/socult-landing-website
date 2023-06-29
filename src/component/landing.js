"use client";

import Box from "@mui/material/Box";
import {Grid, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import MoneyIcon from '@mui/icons-material/Money';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useState} from "react";
import axios from "axios";
import BlogCard from "@/component/blogCard";

function Landing(props) {
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

    return(
        <Box>
            <Box sx={{position: 'relative', py: {xs:4, sm: 6, lg: 8}, px: {xs:1, sm:2, lg:6}}}>
                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center" justifyContent="center" direction="column">
                    <Grid item xs={12} md={7}>
                        <Box sx={{ lineHeight: 0 }}>
                            <img src="landing_background_first.png" width="100%" alt="Hero img" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} style={{textAlign: 'center'}} >
                        <span style={{fontSize: '3.25rem', fontWeight: 'bold'}}>
                            Build Your Circle
                        </span>
                        <br />
                        <p style={{textAlign: 'justify'}}>
                            Social circles often come together because of common interests, circumstances and personalities;
                            they are usually very compatible. The importance of a social circle, especially for students, is huge.
                            Having a social circle is important to feel like you fit in, have a sense of community and improve your physical and mental health.
                        </p>
                        <h2 style={{marginTop: '1rem'}}>
                            Join interest based Clubs
                        </h2>
                        <br/>
                        <Link href={"college"} >
                            <Button variant={"contained"} color={"primary"} sx={{ color: '#fff' }} size="large">
                                Get Started
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center"
                      justifyContent="center" direction="column" id="vision">
                    <Grid item xs={12} md={12} style={{textAlign: 'center', padding: '5rem', paddingBottom: '2rem'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> Vision </span>
                    </Grid>
                    <Grid item xs={12} md={5} style={{textAlign: 'center'}} >
                        <p style={{textAlign: 'justify', textJustify: "inter-word", padding: '2rem', fontSize: '1.4em'}}>
                            The problem with a social networking site is that users tend to have people added as friends they don’t usually interact with or never interact with.
                        </p>
                        <p style={{textAlign: 'justify', textJustify: "inter-word", paddingLeft: '2rem',fontSize: '1.4em'}}>
                            Instead SoCult is a social community site where you connect with people based on common interests; engaging in meaningful and productive ways.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ lineHeight: 0 }}>
                            <img src="landing_background_second.png" width="100%" alt="Hero img" />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' }}}
                      alignItems="center" justifyContent="center" direction="column" id="working">
                    <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: '5rem', paddingBottom: '2rem'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> How it works? </span>
                    </Grid>
                    <div className="timeline">
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Find Your Campus Community</h2>
                                    <p>Search and join your campus community</p>
                                </div>
                            </div>
                            <div className="timeline-badge blue white-text">
                                <SchoolIcon className="how-it-works-icon" />
                            </div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Join Clubs Of Your Interest</h2>
                                    <p>Explore your interests specific clubs and participate in quizzes and events</p>
                                </div>
                            </div>
                            <div className="timeline-badge">
                                <InterestsIcon className="how-it-works-icon"/>
                            </div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Earn Points For Your Skills</h2>
                                    <p>Participate in community and club challenges, and get to showcase your skills </p>
                                </div>
                            </div>
                            <div className="timeline-badge green white-text">
                                <MoneyIcon className="how-it-works-icon"/>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid container spacing={0} xs={12} md={12} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center"
                      justifyContent="center" direction="column" id="blog">
                    <Grid item xs={12} md={12} style={{textAlign: 'center', paddingTop: '5rem', paddingBottom: '2rem'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> Blogs </span>
                    </Grid>
                    {
                        data.slice(0,3).map((entry) => {
                            return (
                                <BlogCard data={entry} />
                            )
                        })
                    }
                    <Grid item xs={0} md={1} sx={{mt: {xs: 5, md: 0}}}>
                        <Link href="/blogs">
                            <Button>
                                <p> Show All <SendIcon /> </p>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Paper elevation={3} style={{backgroundColor: 'rgba(13, 28, 62, 1)', color: 'white'}}>
                <Grid container spacing={0} >
                    <Grid item xs={4} md={4} style={{ textAlign: 'center', padding: '2rem'}} >
                        <h4> Contact Us </h4>
                        <br />
                        <p>
                            Write to us at: <br />socultbusiness@gmail.com <br/><br />
                            Headquarters: Bangalore, India
                        </p>
                    </Grid>
                    <Grid item xs={4} md={4} style={{ textAlign: 'center', padding: '2rem'}} >
                        <h4> Social media posts </h4>
                        <p>
                            <br/>
                            <Link href={"https://www.linkedin.com/pulse/heres-chasing-dream-making-them-reality-kamiya-jani-team-socult"} style={{color: '#1976d2'}}>
                                Chasing dream: Kamiya Jani
                            </Link>
                            <br/>
                            <br/>
                            <Link href={"https://www.linkedin.com/pulse/rediscover-your-passion-balancing-hobbies-hectic-lifestyle"} style={{color: '#1976d2'}}>
                                Rediscover Your Passion
                            </Link>
                            <br/>
                            <br/>
                            <Link href={"https://www.linkedin.com/pulse/did-you-know-hobbies-have-power-unlock-your-creativity-fuel"} style={{color: '#1976d2'}}>
                                Unlock Your Creativity
                            </Link>
                        </p>
                    </Grid>
                    <Grid item xs={4} md={4} style={{textAlign: 'center', padding: '2rem'}} >
                        <h4> Stay Updated </h4>
                        <br/>
                            <Link href="https://www.linkedin.com/company/team-socult/">
                                <LinkedInIcon style={{marginRight: '0.5rem'}} />
                            </Link>
                            <Link href="https://www.instagram.com/socult.in/">
                                <InstagramIcon />
                            </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Landing;