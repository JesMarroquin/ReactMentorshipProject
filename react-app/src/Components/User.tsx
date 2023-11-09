import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { userContext } from '../Context/userContext';

const defaultUser = {
    id:"0",
    name: "no one", 
    email: 'non existen', 
    phone: "1234567890", 
    address: 'NeverLand' 
}

export const User: React.FC = () => {
    const {users} = useContext(userContext)

    const {userID} = useParams();
    const [user, setUser] = useState(defaultUser);
    const navigate = useNavigate();

    useEffect(()=>{
        const userTemp = users?.find(user => user.id.toString() === userID);
        if(userTemp !== undefined){
            setUser(userTemp);
        }
    }, [])


    const getInitials = () => {
        const names = user.name.split(' ');
        const initials = names.map(n => n.charAt(0));
        return initials.join('').toUpperCase();
    };

    const goToTable = () => {
        navigate("/Home");
    }
      
    return(
        <>
            <IconButton onClick={()=>goToTable()}>
                <ArrowBackIcon/>
            </IconButton>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {user &&
                <>
                    <Avatar style={{ width: 100, height: 100, marginBottom: 20, backgroundColor: 'gray' }}>
                        <Typography variant="h3">{getInitials()}</Typography>
                    </Avatar>
                    <Typography variant="h4" gutterBottom>
                        {user.name} 
                    </Typography>
                    
                    <Paper style={{ width: '100%', padding: 20 }}>
                        <Typography variant="h6" gutterBottom>
                            Information
                        </Typography>
                        <Typography>Email:  {user.email} </Typography>
                        <Typography>Phone: {user.phone}</Typography>
                        <Typography>Address: {user.address} </Typography>
                    </Paper>
                </> 
                }
            </div>
        </>
    );
}