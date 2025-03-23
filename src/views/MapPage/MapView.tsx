import { useEffect } from "react"

const MapView: React.FC = () => {
    useEffect(() => {
        console.log("Map View")
    }, []);
    return(
        <iframe src="https://www.google.com/maps/d/embed?mid=1wyr97M0-FDH4euQlNhMsuFh-OAeG62U&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>      
    )

}

export default MapView