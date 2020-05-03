import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Users() {

    const [users, setusers] = useState([]);

    useEffect(() => {
        fetchapi();
    }, []);

    const fetchapi = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const res_json = await res.json();
        setusers(res_json);
       
    }

    return (
        <div class="container mt-5">
            <ul className="list-group list-group-flush"> 
            {users.map(user => (
                <li className="list-group-item"><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            ))}
            </ul>
        </div>
    )
}

export default Users;
