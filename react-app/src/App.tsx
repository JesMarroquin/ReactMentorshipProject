
import { CircularProgress, Typography } from '@mui/material'
import { UserList } from './Components/UserList'
import { createContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { User } from './Components/User'
import { useFetch } from './Hooks/UseFetch'



export interface USERS { 
  id: string,
  name:string,
  email:string,
  phone:string,
  address:string
}

interface userContextProps {
  users: null | USERS[]
}

export const userContext = createContext<userContextProps>({users:null});

function App() {

  const navigate = useNavigate();

  const {users, loading, error} = useFetch();


  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <>
        {!loading ? <>
          <userContext.Provider value={{users}}>
            <div>
            <Routes>
              <Route path='/Home' element={<UserList/>}/>
              <Route path= '/user/:userID' element = {<User/>}/>
              <Route path='/' element={<Navigate to='/Home' replace />} />
            </Routes>   
          </div>  
          </userContext.Provider>
        </>:
        <CircularProgress />}
      </>
    </div>
  )
}


export default App
