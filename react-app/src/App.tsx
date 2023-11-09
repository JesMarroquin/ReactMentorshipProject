
import { Typography } from '@mui/material'
import { UserList } from './Components/UserList'
import { createContext, useEffect, useState } from 'react'


interface USERS { 
  name:string,
  email:string,
  phone:number,
  address:string
}

export const userContext = createContext<null| USERS[]>(null);

function App() {


const userProfiles:USERS[] = [
  { 
    name: "Jhon Doe", 
    email: 'jhondoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  },
  { 
    name: "James Doe", 
    email: 'jamesdoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  },
  { 
    name: "Larry Doe", 
    email: 'larrydoe@example.com', 
    phone: 81123456789, 
    address: '21 Main Street, Monterrey Nuevo Leon, CP65343' 
  }

]

  const [users, setUsers] = useState<null|USERS[]>(null);

  useEffect(() => {
    setUsers(userProfiles);
  },[])


  
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <>
        <Typography variant='h1' >React Assessment Users CRUD</Typography>
      </>
      <userContext.Provider value={users}>
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', minWidth:'60vW'}}>
        <UserList/>
      </div>  
      </userContext.Provider>
    </div>
  )
}

export default App
