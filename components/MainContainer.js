import A from "../components/A";
import styles from "../styles/MainContainer.module.scss";

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <head>
                <meta keywords={`next, react, ssr, ${keywords}`}></meta>
                <title>{title}</title>
            </head>
            <div className={styles.navbar}>
                <A href="/" text="главная" />
                <A href="/users" text="пользователи" />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );
};

export default MainContainer;