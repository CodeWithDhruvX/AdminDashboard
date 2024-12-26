import React from 'react'
import Navbar from 'components/Navbar';
import Box from "@mui/material/Box";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box width="100%" height="100%">
            <Box>
                <Navbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
