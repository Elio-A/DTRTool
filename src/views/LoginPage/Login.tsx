import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
    const navigate = useNavigate()

    const handleLogin = async () => {
        navigate("/home")
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