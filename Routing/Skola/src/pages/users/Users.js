import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();

    const GoToUser = () => {
        //Login Logic
        if (true) {
            // We send the user to user nr 6 with data to display it there. The data to be sent should be in parameters two in navigate method.
            navigate("/users/6",
                {
                    state:
                    {
                        luckyNumbers: [1, 2, 3, 4],
                        name: "Omar",
                        age: 25,
                        color: "blonde"
                    }
                })
        } else {
            navigate("/")
        }

    }

    return (
        <div>
            <h1>I'm Users page</h1>
            <button onClick={() => GoToUser()}>Go to User</button>
        </div>
    )
}
export default Users;