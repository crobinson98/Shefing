import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Post({title,body}){
  return (
    <div className="post">
        <Card sx={{ mb: 2 }}>
            <CardContent >
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {body}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}
