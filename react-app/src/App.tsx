
import { Typography } from '@mui/material'
import { User } from './Components/User'
import { UserList } from './Components/UserList'

function App() {

  type USERS = {
    name:string,
    email:string,
    phone:number,
    address:string
}

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
  
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <>
        <Typography variant='h1' >React Assessment Users CRUD</Typography>
      </>
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', minWidth:'60vW'}}>
        <UserList users={userProfiles}/>
      </div>  
    </div>
  )
}

export default App
