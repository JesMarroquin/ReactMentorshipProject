import { UserList } from './Components/UserList'
import { Navigate, Route, Routes } from 'react-router-dom'
import { User } from './Components/User'
import { userContext } from './Context/userContext'
import { useFetch } from './Hooks/UseFetch'
import { Typography } from '@mui/material'


function App() {

  const {users, loading, error} = useFetch();

  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', minHeight:'100vH'}}>
      <userContext.Provider value={{users}}>
        <>
          {
            !error ?
            !loading ?
            <div>
              <Routes>
                <Route path='/Home' element={<UserList/>}/>
                <Route path= '/user/:userID' element = {<User/>}/>
                <Route path='/' element={<Navigate to='/Home' replace />} />
              </Routes>   
            </div>  :
            <Typography variant='h1'>Loading...</Typography>
            :
            <Typography variant= "h1">Error</Typography>
          }
        </>
      </userContext.Provider>
    </div>
  )
}


export default App
