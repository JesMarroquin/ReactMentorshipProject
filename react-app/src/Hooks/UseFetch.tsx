import { useEffect, useState } from "react"
import { USERS } from "../Interfaces/Users";


export const useFetch = () => {
    const [users, setUsers] = useState<USERS[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    const apiURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setLoading(true);
        fetch(apiURL).then(res =>{
            if(!res.ok){
                throw new Error("Network down")
            }
            return res.json()
        }).then(data => {
            const userData = mapDataToUsers(data)
            console.log(userData);
            setUsers(userData);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [])

    const mapDataToUsers = (data:any)=>{
        const mappedData: USERS[] = data.results.map((user:any) => {
            return{
                id:user.login.uuid,
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                phone: user.phone,
                address: `${user.location.street.name} ${user.location.street.number}, ${user.location.country}, ${user.location.postcode}`,
            }
        })

        return mappedData;
    }


    return {users, loading, error}

}