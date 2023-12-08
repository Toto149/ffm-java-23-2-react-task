import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
            <div>
            <Link to={"/Home/Welcome"}>Home</Link>
            <Link to={"/characters"}>Gallery</Link>
            </div>
        </>
    )
}