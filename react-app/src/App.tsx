
import { Typography } from '@mui/material'
import { UserList } from './Components/UserList'
import { createContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { User } from './Components/User'
import { redirect } from "react-router-dom";



interface USERS { 
  id: number,
  name:string,
  email:string,
  phone:number,
  address:string
}

interface userContextProps {
  users: null | USERS[]
  setUsers: null | ((users:USERS[])=>void)
}

export const userContext = createContext<userContextProps>({users:null, setUsers:null});

function App() {


const userProfiles:USERS[] = [
  { 
    id:1,
    name: "Jhon Doe", 
    email: 'jhondoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  },
  { 
    id:2,
    name: "James Doe", 
    email: 'jamesdoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  },
  { 
    id:3,
    name: "Larry Doe", 
    email: 'larrydoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  }

]

  const [users, setUsers] = useState<null|USERS[]>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setUsers(userProfiles);
  },[]);

  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <>
        <Typography variant='h1' >React Assessment Users CRUD</Typography>
      </>
      <userContext.Provider value={{users, setUsers}}>
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', minWidth:'60vW'}}>
        <Routes>
          <Route path='/Home' element={<UserList/>}/>
          <Route path= '/user/:userID' element = {<User/>}/>
          <Route path='/' element={<Navigate to='/Home' replace />} />
        </Routes>   
      </div>  
      </userContext.Provider>
    </div>
  )
}


export default App
