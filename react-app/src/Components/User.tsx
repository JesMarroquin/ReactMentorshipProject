import { Avatar, Paper, Typography } from '@mui/material';
import React from 'react';

interface UserProps {
    user:{
        name:string,
        email:string,
        phone:number,
        address:string
    }
}

export const User: React.FC<UserProps> = ({user}) => {

    const active: boolean = false;

      /* CODE CHALLENGE: Method for grabbing initials */
      
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar style={{ width: 100, height: 100, marginBottom: 20, backgroundColor: 'gray' }}>
                <Typography variant="h3">JM {/* CODE CHALLENGE:  */}</Typography>
            </Avatar>
            <Typography variant="h4" gutterBottom>
                {user.name}
            </Typography>
            
            {    
                active &&
                <Paper style={{ width: '100%', padding: 20 }}>
                    <Typography variant="h6" gutterBottom>
                        Information
                    </Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Phone: {user.phone}</Typography>
                    <Typography>Address: {user.address}</Typography>
                </Paper> 
            }   
        </div>
    );
}