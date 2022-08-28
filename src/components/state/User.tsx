import {useState} from "react";

type User = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = () => {
        setUser({
            name: "jinseok",
            email: "moregorenine@gmail.com"
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}