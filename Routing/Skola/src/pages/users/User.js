import { useEffect, } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
    const id = useParams().id; // With useParams(), We read the parameter ID in the URL
    const location = useLocation();// With useLocation(), We read the data sent from other component
    const navigate = useNavigate()

    useEffect(() => {
        //Here we make sure that if no data is sent by another otherwise we send the user to home page
        if (location.state === null) {
            navigate("/")
        }
    })

    return (
        <div>
            {console.log(useParams())}
            {console.log(location) /* Console location to check which data you get*/}
            {location.state && <div>
                <h1>{location.state.name}</h1>
                <h1>{location.state.age}</h1>
                <h1>{location.state.color}</h1>
            </div>}
            <h1>I'm a user man with id {id}</h1>
        </div>
    )
}

export default User;