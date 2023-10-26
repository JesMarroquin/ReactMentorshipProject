import { Avatar, Paper, Typography } from '@mui/material';
import React from 'react';

export const User: React.FC = () => {

    const userProfile = { 
        name: "Jesus Marroquin", 
        email: 'jesus@example.com', 
        phone: 81123456789, 
        address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
      }
      
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar style={{ width: 100, height: 100, marginBottom: 20, backgroundColor: 'gray' }}>
                <Typography variant="h3">JM</Typography>
            </Avatar>
            <Typography variant="h4" gutterBottom>
                {userProfile.name}
            </Typography>
            <Paper style={{ width: '100%', padding: 20 }}>
                <Typography variant="h6" gutterBottom>
                    Information
                </Typography>
                <Typography>Email: {userProfile.email}</Typography>
                <Typography>Phone: {userProfile.phone}</Typography>
                <Typography>Address: {userProfile.address}</Typography>
            </Paper> 
                    
        </div>
    );
}