import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ImageContainer from './common/ImageContainer';
import Logo from '../assets/images/logo.png';

function AppBarNav() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }} elevation={4}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <ImageContainer image={Logo} style={{ width: '10%', height: '10%' }}/>
        </Toolbar>
        </Container>
    </AppBar>
    );
}
export default AppBarNav;