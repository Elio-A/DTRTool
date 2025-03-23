import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
    const navigate = useNavigate()

    const handleLogin = async () => {
        navigate("/home")
        console.log("Handling")
    }

    const handleNBPowerSite = async () => {
        navigate("/NBPower")
    }

    return(
        <div>
            <button onClick={handleLogin}>
                Login to Home
            </button>
            <button onClick={handleNBPowerSite}>
                NB Power website Lines
            </button>
        </div>        
    )
}

export default Login