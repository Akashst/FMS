import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {UserContext} from '../../App';
import { Avatar, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200}}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </>
    );
    
}


export default function NestedModal() {
    const { handleOpen, handleClose, open, setOpen } = useContext(UserContext);

    return (
        <div sx={{ border: 'none' }}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                
            >
                <Box sx={{ ...style, width: 400, display: "flex",justifyContent: "space-between",border:'none',alignItems: "center"}}>
                    <Avatar  alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C5603AQFYK1_6MheOfw/profile-displayphoto-shrink_200_200/0/1611945104599?e=1659571200&v=beta&t=QXMhhyRBh6nDxT87U92zYDp_Ru53_m7rCchsW8j5fto" sx={{ width: "5rem", height: "5rem",backgroundColor: "purple" }} />
                    <Box>               
                        <Typography variant="h6" component="p" >
                            Akash Tondare
                        </Typography> 
                        <Typography variant="" component="p" sx={{mb:2}}>
                            trainee software engineer
                        </Typography>      
                        <Typography variant="span" component="span" color="text.disabled" sx={{ mb: 1 }}>
                           Location :
                            <Typography variant="span" component="span" color="text.primary">
                               baner
                            </Typography> 
                        </Typography> <br/>  
                        
                        <Typography variant="span" component="span" color="text.disabled" sx={{ mb: 1 }}>
                            Department :
                            <Typography variant="span" component="span" color="text.primary">
                                Engineering
                            </Typography>
                        </Typography>  <br/>
                        <Typography variant="span" component="span" color="text.disabled" sx={{ mb: 1 }}>
                            email :
                            <Typography variant="span" component="span" color="text.primary">
                               akash@am.in
                            </Typography>
                        </Typography> <br/>
                        <Typography variant="span" component="span" color="text.disabled" sx={{ mb: 1 }}>
                            mobile :
                            <Typography variant="span" component="span" color="text.primary">
                                9876543210
                            </Typography>
                        </Typography>   
                        <br/>      
                        <ChildModal />
                    </Box>
                  
                </Box>
            </Modal>
        </div>
    );
}
