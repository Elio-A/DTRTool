import { useNavigate } from "react-router-dom"
import { db } from "../../../firebase"

const Login: React.FC<{onLogin: () => void}> = ({onLogin}) => {
    const navigate = useNavigate()

    const handleLogin = async () => {
        onLogin();
        navigate("/home")
        console.log("Handling")
    }

    return(
        <div>
            <button onClick={handleLogin}>
                Login to Home
            </button>
            
        </div>        
    )
}

export default Login