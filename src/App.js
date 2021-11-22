import './App.css';
import React, {useState} from 'react';
import TargetComponent from "./components/TargetComponent";
import users_list from "./data/users_list";

const userDB = users_list;

export default function App(props) {

    let [users, setUsers] = useState(userDB.map((user) => ({...user, isSelected: false})))

    const setUserSelector = (newUsers) => {
        setUsers(newUsers)
    }

    return (
        <TargetComponent users={users} setUserSelector={setUserSelector}/>
    );
}
