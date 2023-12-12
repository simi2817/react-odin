import { useState, useEffect } from "react";
import User from './User';

export default function Fetch() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((user) => setUser(user))
        .catch((err) => setError(err.message));
    }, []);

    if(error)
        return <span>{error}</span>;
    return (
        <div>
        {user ? <User user={user} /> : <span>Loading...</span>}
        </div>
    )
}