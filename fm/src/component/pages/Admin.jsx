import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton } from '@mui/material';
import {Link} from 'react-router-dom'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Admin({handleOpen}) {
    return (
        <Card sx={{ minWidth: ' 100%', height: "80%" }}>
            <CardContent>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="div">
                        Admin
                    </Typography>
                    <Link to="/employee" sx={{textDecoration : 'none'}}> View All</Link>
                    {/* <Typography variant="span" component="">
                        View All
                    </Typography> */}
                </Box>
                <Typography sx={{ mb: 1.5 }} color="primary">
                    active users
                </Typography>
                <Box sx={{ display: 'flex', }}>
                    <IconButton sx={{ p: 0, m: 1 }} >
                        {/* <Link to="/employee"> */}
                        <Avatar onClick={handleOpen} alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C5603AQFYK1_6MheOfw/profile-displayphoto-shrink_200_200/0/1611945104599?e=1659571200&v=beta&t=QXMhhyRBh6nDxT87U92zYDp_Ru53_m7rCchsW8j5fto" sx={{ width: "2.2rem", height: "2.2rem", backgroundColor: "purple" }} />
                        {/* </Link> */}
                    </IconButton>
                    <IconButton sx={{ p: 0, m: 1 }} >
                        <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C5603AQFYK1_6MheOfw/profile-displayphoto-shrink_200_200/0/1611945104599?e=1659571200&v=beta&t=QXMhhyRBh6nDxT87U92zYDp_Ru53_m7rCchsW8j5fto" sx={{ width: "2.2rem", height: "2.2rem", backgroundColor: "purple" }} />
                    </IconButton>
                </Box>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
