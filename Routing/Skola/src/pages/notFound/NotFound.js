import { NavLink, useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate(); // To use useNavigate method, we need to declare first and save it in a variable

    const goBack = () => {
        navigate(-1) // WIth help of navigate(-1) we can go back one step in browser history
    }
    
    return (
        <div>
            <h1>404 NotFound</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default NotFound;