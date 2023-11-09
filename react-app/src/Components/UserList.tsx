import React, { useContext } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton, 
    Paper, 
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Pagination 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';



interface User {
    name:string,
    email:string,
    phone:number,
    address:string
}


export const UserList:React.FC = () => {
    const {users} = useContext(userContext);
    const navigate = useNavigate();


    const goToUser = (userID:string) => {
        navigate(`/user/${userID}`);
    }

    return (
        <div>
            <>
                <Typography variant='h1' >React Assessment Users CRUD</Typography>
            </>
            <AppBar position="static">
                <Toolbar>
                    <TextField 
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                        fullWidth
                        InputProps={{
                            startAdornment: <SearchIcon />
                        }}
                        sx={{backgroundColor: 'white'}}
                    />
                </Toolbar>
            </AppBar>
            
            <Paper style={{margin: 20, padding: 20}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>
                                <IconButton color="primary">
                                    <AddIcon />
                                </IconButton>
                                <IconButton color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {users && <TableBody>
                        {users.map((user) => {
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={()=>goToUser(user.id)}>
                                            <EditIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>}
                </Table>
                <Pagination count={1} variant="outlined" shape="rounded" style={{marginTop: 20}} />
            </Paper>
        </div>
    );
}

