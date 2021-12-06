import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';


export default function MyTable({rows}) {

    const Navigate = useNavigate();
    const handelRowClick = (id)=>{
        Navigate(`/posts/${id}`)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow style={{backgroundColor:'#bdbdbd'}}>
                        {['Name','Email','Company Name'].map(cell => 
                            <TableCell 
                                style={{width:"30%",fontSize:20, fontWeight:'bold'}} 
                                key={cell}
                            >{cell}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => 
                        <TableRow 
                            hover 
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => handelRowClick(row.id)}
                            sx={{cursor:'pointer'}}
                        >
                            {['name','email','cname'].map(item=>
                                <TableCell key={item}>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {row[item]}  
                                    </Typography>
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
