import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LiveClock from '../../Util/LiveClock';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function LoginCard() {
    return (
        <Card sx={{ minWidth:' 100%',height:"80%" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <LiveClock />
                </Typography>
                <Box variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'no-wrap', mt: 7 }}>

                    <Box>
                        <Button color='success' variant="contained">ToDo-List</Button>
                        <Typography size='small' component="p" color='#d32f2f' pb={0} >you have pending tasks</Typography>
                    </Box>
                    <Box>
                        <Button color="error" variant="contained" >Clock-In</Button>
                        {/* <Typography size='small' component="p" color='neutral' pb={0} >5:30 since last login</Typography> */}
                    </Box>
                </Box>

            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
