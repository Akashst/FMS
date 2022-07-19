import logo from './logo.svg';
import { useState, createContext } from 'react'
import './App.css';
import ResponsiveDrawer from './component/pages/ResponsiveDrawer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Admin from './component/pages/Admin';
import Employee from './component/pages/Employee';
import { Box, Button, Modal } from '@mui/material';
import ChildModal from './component/pages/ChildModal';
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


      // <Button onClick={handleOpen}>Open Child Modal</Button>
    
   

export const UserContext = createContext({})



function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <UserContext.Provider value={{ handleOpen, handleClose, open, setOpen }}>
      <ChildModal />

      </UserContext.Provider>

      <UserContext.Provider value={{ handleOpen, handleClose,open, setOpen }}>
        
    

      <BrowserRouter>
        {/* <Router> */}
          <Routes>

            <Route path='/' element={<ResponsiveDrawer />} />
          <Route path='/' element={<Employee />} />

        


          </Routes>
        {/* </Router> */}
      </BrowserRouter>
      </UserContext.Provider>

    </div>
  );
}

export default App;
