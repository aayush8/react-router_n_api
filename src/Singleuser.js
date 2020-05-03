import React, {useEffect, useState} from 'react';

function Singleuser({match}) {

    const [user, setuser] = useState([]);

    useEffect(() => {
        fetchapi();
    }, []);

    const fetchapi = async () => {
        
        const res = await fetch("https://jsonplaceholder.typicode.com/users/"+match.params.id);
        const res_json = await res.json();
        setuser(res_json);
    }

    return (
        <div className="container mt-5">
            <div className="list-group"> 
    <span className="list-group-item list-group-item-dark"><strong>Username -></strong> {user.username}</span>
    <span className="list-group-item "><strong>Name -> </strong> {user.name}</span>
    <span className="list-group-item list-group-item-dark"><strong>Email -> </strong> {user.email}</span>
    <span className="list-group-item "><strong>Address -></strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
    <span className="list-group-item list-group-item-dark"><strong>Phone -> </strong> {user.phone}</span>
    <span className="list-group-item "><strong>Website -> </strong> {user.website}</span>
            </div>
        </div>
    )
}

export default Singleuser
