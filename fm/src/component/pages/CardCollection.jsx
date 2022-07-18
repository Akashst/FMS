import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LoginCard from './LoginCard';
import OtherCard from './OtherCard';
import Maintenance from './Maintenance';
import Admin from './Admin';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CardCollection({handleOpen}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ md: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <LoginCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <OtherCard />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Maintenance />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Admin handleOpen={handleOpen }/>
                </Grid>
            </Grid>
        </Box>
    );
}
