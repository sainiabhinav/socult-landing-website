"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link href={"/"} >
                <Typography variant="h6" sx={{ my: 2 }}>
                    Home
                </Typography>
            </Link>
            <Divider />
            <List>
                <ListItem>
                    <ListItemButton sx={{ justifyContent: 'center' }}>
                        <Link href={"/#vision"} smooth={true}>
                            <ListItemText primary={"Vision"} />
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton sx={{ justifyContent: 'center' }}>
                        <Link href={"/#working"} >
                            <ListItemText primary={"How it works"} />
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton sx={{ justifyContent: 'center' }}>
                        <Link href={"/#blog"} >
                            <ListItemText primary={"Blogs"} />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{backgroundColor: 'rgba(13, 28, 62, 1)'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0}}
                    >
                        SoCult
                    </Typography>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'end' }}>
                        <Link href={"college"} >
                            <Button variant={"contained"} color={"primary"} sx={{ color: '#fff' }}>
                                Get Started
                            </Button>
                        </Link>
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/" style={{ marginRight: '30px' }}>
                            SoCult
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Link href={'/#vision'} style={{ marginRight: '30px' }} smooth={true} duration={500}> Vision </Link>
                        <Link href={"/#working"} style={{ marginRight: '30px' }}> How it works </Link>
                        <Link href={"/#blog"} style={{ marginRight: '30px' }}> Blogs </Link>
                        <Link href={"college"} style={{ marginRight: '30px' }} >
                            <Button variant={"contained"} color={"primary"} sx={{ color: '#fff' }}>
                                Get Started
                            </Button>
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color: 'white', backgroundColor: 'rgba(13, 28, 62, 1)' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
export default DrawerAppBar;