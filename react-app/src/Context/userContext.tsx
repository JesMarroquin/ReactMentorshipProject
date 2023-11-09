import { createContext } from "react";
import { USERS } from "../Interfaces/Users";

interface userContextProps {
    users: null | USERS[]
  }
  
  export const userContext = createContext<userContextProps>({users:null});
  