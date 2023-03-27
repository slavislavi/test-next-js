import MainContainer from "../components/MainContainer";
import A from "../components/A";
import styles from "../styles/Users.module.scss";

const Users = ({ users }) => {
    return (
        <MainContainer keywords={"users, list"} title={"Список"}>
            <h1 className={styles.list_title}>Список пользователей</h1>
            <ul className={styles.list}>
                {
                    users.map(user => (
                        <li key={user.id} className={styles.list_item}>
                            <A href={`/users/${user.id}`} text={user.name} />
                        </li>
                    ))
                }
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: { users }
    };
}