import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"

const userCredentials = {}

export default function LoginPage() {
    const location = useLocation()

    const {login} = useAuth()

    return (
        <div>
            <h1>Login-Page</h1>
            <button onClick={()=>login(userCredentials,location.state?.from)}>Login</button>
        </div>
    )
}
