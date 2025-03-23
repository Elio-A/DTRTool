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
            <iframe src="https://www.google.com/maps/d/embed?mid=1wyr97M0-FDH4euQlNhMsuFh-OAeG62U&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
        </div>        
    )
}

export default Home