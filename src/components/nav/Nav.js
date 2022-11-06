import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <div className={styles["nav-notification"] + " center"}>
                <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <div className={styles["nav-user-button"] + " center"}>
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <p className={styles["nav-user-name"]}> Chris Buffet</p>
            <div className={styles["nav-user-menu"]}>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </nav>
    );
};

export default Nav;
