import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Home-Icon.css'

function Home () {

    const navigate = useNavigate()

    const handleHome = ()=>{
        navigate('/')
    }

    return(
        <>
        <FontAwesomeIcon className="house-icon" icon={['fas', 'fa-house']} onClick= {handleHome}/>
        </>
    )

}

export default Home