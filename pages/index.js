import Link from "next/link";
import A from "../components/A";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href="/" text="главная" />
                <A href="/users" text="пользователи" />
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                        background: #55acac;
                        padding: 15px;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;