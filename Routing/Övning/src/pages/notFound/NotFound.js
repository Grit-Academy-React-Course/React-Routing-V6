import { useNavigate  } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404 NotFound</h1>
            <button onClick={() => navigate('/')}>To Home</button>
        </div>
    )
}
export default NotFound;