import Dropdown from "../menu/Dropdown";
import styles from "./Nav.module.css";
import NavButon from "./NavButton";

const Nav = () => {
    return (
        <nav>
            <NavButon name="notification" icon="bell" />
            <NavButon name="user-button" icon="user" />
            <p className={styles["nav-user-name"]}> Chris Buffet</p>
            <div className={styles["nav-user-menu"]}>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </nav>
    );
};

export default Nav;
