import React from "react";
import { Container } from "@mui/system";
import { contact, social } from '../assets/data/GlobalData';
import { Box, Grid, Typography } from "@mui/material";
import Logo from '../assets/images/logo.png';
import ImageContainer from "./common/ImageContainer";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container justifyContent="center" sx={{ backgroundColor: '#FCFBFF', height: '250px' , width: '100%'}}>
            <Grid container>
                <Grid item xs={12} direction="column" sx={{ marginTop: '15px', display: 'flex', alignItems: { xs: 'center', sm: 'center'  }}}>
                    <ImageContainer image={Logo} style={{ width: { xs:'100px', sm: '10%'}}} />
                    <Typography color="primary">Copyright &copy; { new Date().getFullYear() }</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row">
                {/* <Grid item xs={4}>
                    <Box component="ul" 
                        sx={{
                            listStyle: "none",
                        }}
                        >
                        <Box component="li" sx={{ fontSize: '10px', color: 'primary.main', paddingBottom: '5px'}}>Pages</Box>

                        { pages.map(page => {
                            return <Box component="li" key={page.label} sx={{ fontSize: '10px', color: 'text.main', paddingBottom: '5px'}}><Link to={page.link} style={{ textDecoration: 'none', color: '#102542'}}>{page.label}</Link></Box>
                        })}
                        
                    </Box>
                </Grid> */}
                <Grid item xs={6} sm={3}>
                <Box component="ul" 
                        sx={{
                            listStyle: "none",
                        }}
                        >
                        <Box component="li" sx={{ fontSize: '10px', color: 'primary.main', paddingBottom: '5px'}}>Contact</Box>

                        { contact.map(page => {
                            return <Box key={page.label} component="li" sx={{ fontSize: '10px', color: 'text.main', paddingBottom: '5px'}}><Link to={page.link} style={{ textDecoration: 'none', color: '#102542'}}>{page.label}</Link></Box>
                        })}
                        
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Box component="ul" 
                        sx={{
                            listStyle: "none",
                        }}
                        >
                        <Box component="li" sx={{ fontSize: '10px', color: 'primary.main', paddingBottom: '5px'}}>Social</Box>

                        { social.map(page => {
                            return <Box key={page.label} component="li" sx={{ fontSize: '10px', color: 'text.main', paddingBottom: '5px'}}><Link to={page.link} style={{ textDecoration: 'none', color: '#102542'}}>{page.label}</Link></Box>
                        })}
                        
                    </Box>
                </Grid>
            </Grid>
            
        </Container>
    );
}

export default Footer;