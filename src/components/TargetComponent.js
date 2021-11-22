import SelectedUsersList from "./SelectedUsersList";
import UsersList from "./UsersList";

export default function TargetComponent(props) {

    let {users, setUserSelector} = props;

    return (
        <>
            <header>
                <SelectedUsersList users={users}/>
            </header>
            <main>
                <UsersList users={users} setUserSelector={setUserSelector}/>
            </main>
        </>
    )
}