import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/" legacyBehavior>
                    <a className="link">Главная</a>
                </Link>
                <Link href="/users" legacyBehavior>
                    <a className="link">Пользователи</a>
                </Link>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                        background: #55acac;
                        padding: 15px;
                    }
                    .link {
                        text-transform: uppercase;
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                        color: #f1f1f1;
                        margin: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;