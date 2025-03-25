import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
    const navigate = useNavigate()
    const handleHomePage = async () => {
    }
    
    const handleNBPowerSite = async () => {
        navigate("/NBPower")
    }

    useEffect(() => {
        console.log("In Home Screen")
    }, []);



    return(
        <div>
            
            <h2>
                Hello. You are in the Home page
            </h2>
            <button onClick={handleNBPowerSite}>
                NB Power website Lines
            </button>
            
        </div>        
    )
}

export default Home