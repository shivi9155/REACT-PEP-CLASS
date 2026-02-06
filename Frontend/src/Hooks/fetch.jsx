import React, { useEffect, useState } from "react";

function Fetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, []);

    return (
        <div>
            <h3>Users</h3>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name} ({u.email})</li>
                ))}
            </ul>
        </div>
    );
}
export default Fetch;