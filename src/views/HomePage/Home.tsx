import { useEffect } from "react"

const Home: React.FC = () => {
    const handleHomePage = async () => {
    }
    
    useEffect(() => {
        console.log("In Home Screen")
    }, []);

    return(
        <div>
            <h2>
                Hello. You are in the Home page
            </h2>
        </div>        
    )
}

export default Home