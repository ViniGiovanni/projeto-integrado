import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from '../../components/Header'

export default function Dashboard(){

    const { deslogar } = useContext(AuthContext)
    return(
        <div>
            <Header/>
            
        </div>
    )
}