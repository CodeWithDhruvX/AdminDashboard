import React from 'react'
import Navbar from 'components/Navbar';
import Box from "@mui/material/Box";
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import { useMediaQuery } from '@mui/material';

const Layout = () => {
    const isNonMobile=useMediaQuery('(min-width:600px)');
    const [isSidebarOpen,setIsSidebarOpen]=React.useState(true);
    return (
        <Box display={isNonMobile?"flex":"block"} width="100%" height="100%">
            <Sidebar 
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box>
                <Navbar
                   isSidebarOpen={isSidebarOpen}
                   setIsSidebarOpen={setIsSidebarOpen} />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
