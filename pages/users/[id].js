import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
    const { query } = useRouter();

    return (
        <MainContainer keywords={"user, person, profile"} title={user.name}>
            <div className={styles.user}>
                <h1>{user.name}</h1>
                <p>Имя: <span>{user.name}</span></p>
                <p>Никнейм: <span>{user.username}</span></p>
                <p>Почта: <span>{user.email}</span></p>
                <p>Город: <span>{user.address.city}</span></p>
                <p>Улица: <span>{user.address.street}</span></p>
                <p>Место работы: <span>{user.company.name}</span></p>
            </div>
        </MainContainer>
    );
};

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user }
    };
}