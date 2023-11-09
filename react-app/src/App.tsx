import { UserList } from './Components/UserList'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { User } from './Components/User'
import { USERS } from './Interfaces/Users'
import { userContext } from './Context/userContext'


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


  useEffect(() => {
    setUsers(userProfiles);
  },[]);

  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <userContext.Provider value={{users, setUsers}}>
      <div>
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
