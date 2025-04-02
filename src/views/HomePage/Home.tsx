import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {db} from "../../../firebase"
import { addDoc, collection } from "firebase/firestore"

const Home: React.FC = () => {
    const ref = collection(db, "users")
    const [Username, setUsername] = useState("")

    const navigate = useNavigate()
    const handleHomePage = async () => {
    }
    
    const handleNBPowerSite = async () => {
        navigate("/NBPower")
    }

    useEffect(() => {
        console.log("In Home Screen")
    }, []);

    const handleSubmit = async () => {
        const userData = {
            username: Username
        }
        try{
            const docRef = await addDoc(ref, userData);
        } catch(e) {
            console.error("ERrror adding document ", e);
        }
    };

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