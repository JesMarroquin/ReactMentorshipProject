import { createContext } from "react";
import { USERS } from "../Interfaces/Users";

interface userContextProps {
    users: null | USERS[]
    setUsers: null | ((users:USERS[])=>void)
  }
  
  export const userContext = createContext<userContextProps>({users:null, setUsers:null});
  