"use client";

import Box from "@mui/material/Box";
import {CardActions, Grid, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import MoneyIcon from '@mui/icons-material/Money';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";

function Landing(props) {
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
                        <span style={{fontSize: '3.25rem', fontWeight: 'bold'}}>Build your circle</span>
                        <h2>Join interest based Clubs</h2>
                        <br/>
                        <Button variant={"contained"} color={"primary"} sx={{ color: '#fff' }} size="large">
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center" justifyContent="center" direction="column" id="vision">
                    <Grid item xs={12} md={5} style={{textAlign: 'center'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> Vision </span>
                        <p style={{textAlign: 'justify', textJustify: "inter-word", padding: '2rem'}}>
                            The problem with a social networking site is that users tend to have people added as friends they don’t usually interact with or never interact with.
                        </p>
                        <p style={{textAlign: 'justify', textJustify: "inter-word", paddingLeft: '2rem'}}>
                            Instead SoCult is a social community site where you connect with people based on common interests; engaging in meaningful and productive ways.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ lineHeight: 0 }}>
                            <img src="landing_background_second.png" width="100%" alt="Hero img" />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center" justifyContent="center" direction="column" id="working">
                    <Grid item xs={12} md={12} style={{textAlign: 'center', padding: '2rem'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> How it works? </span>
                    </Grid>
                    <div className="timeline">
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Find your campus community</h2>
                                    <p>Search and join your campus community</p>
                                </div>
                            </div>
                            <div className="timeline-badge blue white-text"><SchoolIcon fontSize="large"/></div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Join clubs of your interest</h2>
                                    <p>Explore your interests specific clubs and participate in quizzes and events</p>
                                </div>
                            </div>
                            <div className="timeline-badge red white-text"><InterestsIcon fontSize="large"/></div>
                        </div>
                        <div className="timeline-event">
                            <div className="card timeline-content">
                                <div className="card-reveal">
                                    <h2>Earn points for your skills</h2>
                                    <p>Participate in community and club challenges, and get to showcase your skills </p>
                                </div>
                            </div>
                            <div className="timeline-badge green white-text"><MoneyIcon fontSize="large"/></div>
                        </div>
                    </div>
                </Grid>
                <Grid container spacing={0} xs={12} md={12} sx={{ flexDirection: { xs: 'column', md: 'unset' } }} alignItems="center"
                      justifyContent="center" direction="column" id="blog">
                    <Grid item xs={12} md={12} style={{textAlign: 'center', padding: '2rem'}} >
                        <span style={{fontSize: '3rem', fontWeight: 'bold'}}> Blogs </span>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{mr: 5}}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Blog 1"
                                height="200"
                                image="blog_1.png"
                            />
                            <CardContent
                                style={{
                                    paddingBottom: "0%",
                                    height: "225px",
                                    overflow: "auto"
                                }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Did you know you can multiply your results by just a move?
                                </Typography>
                                <Typography variant="body2">
                                    Hello All! Today, we want to share with you the power of building connections beyond
                                    the confines of the workplace. In colleges or schools...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Know More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{mr: 5}} >
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Blog 2"
                                height="200"
                                image="blog_2.png"
                            />
                            <CardContent
                                style={{
                                    paddingBottom: "0%",
                                    height: "225px",
                                    overflow: "auto"
                                }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hobbies and innovation are interlinked?
                                </Typography>
                                <Typography variant="body2">
                                    Many of us associate creativity and innovation with our professional lives,
                                    but the connection between hobbies and these qualities should...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Know More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{mr: 5}}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Blog 3"
                                height="200"
                                image="blog_3.png"
                            />
                            <CardContent
                                style={{
                                    paddingBottom: "0%",
                                    height: "225px",
                                    overflow: "auto"
                                }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Navigating Superficial Relationships in the Digital Age
                                </Typography>
                                <Typography variant="body2">
                                    With the rise of social media, there has been a growing concern about the quality
                                    and depth of relationships in the digital age. Some argue that...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Know More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={0} md={1}>
                        <Button>
                            <p> Show All
                                <br />
                                <SendIcon />
                            </p>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Paper elevation={3} style={{backgroundColor: 'rgba(13, 28, 62, 1)', color: 'white'}}>
                <Grid container spacing={0} >
                    <Grid item xs={4} md={4} style={{ textAlign: 'center', padding: '2rem'}} >
                        <h4> Contact Us </h4>
                        <p>Email Id: <br/> Headquarters: <br/> Socult</p>
                    </Grid>
                    <Grid item xs={4} md={4} style={{ textAlign: 'center', padding: '2rem'}} >
                        <h4> Social media posts </h4>
                        <p>Links: </p>
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