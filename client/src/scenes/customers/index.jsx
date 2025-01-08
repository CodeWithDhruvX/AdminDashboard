import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetCustomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';


const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery();
    console.log(data);

    const columns = [
        {
            field:"_id",
            headerName:"ID",
            flex:1
        },
        {
            field:"name",
            headerName:"Name",
            flex:0.5
        },
        {
            field:"email",
            headerName:"Email",
            flex:0.5
        },
        {
            field:"phoneNumber",
            headerName:"Phone Number",
            flex:0.5,
            // renderCell: (params) => {
            //     return params.value.replace(/^( \d{3})(\d{3})(\d{4})$/, "$1-$2-$3");
            // }
        }
    ];

    return <Box>
        <Header title="Customers" subtitle="List of Customers" />
        <Box
            sx={{
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
                padding: "1rem",
                marginTop: "1rem"
            }}
        >
            <DataGrid
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={data || []}
                columns={columns}
                pageSize={10}
                checkboxSelection
            /> 
        </Box>
    </Box>
}

export default Customers