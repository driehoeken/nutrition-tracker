import Dropdown from "../menu/Dropdown";
import styles from "./Nav.module.css";

const Nav = () => {
    const navButtonHandler = (dropdownID) => {
        const dropdownEl = document.getElementById(`dropdown-${dropdownID}`);
        if (dropdownEl.classList.contains("hidden")) {
            dropdownEl.classList.remove("hidden");
            setTimeout(() => {
                dropdownEl.classList.remove("visually-hidden");
            }, 20);
        } else {
            dropdownEl.classList.add("visually-hidden");
            dropdownEl.addEventListener(
                "transitionend",
                () => {
                    dropdownEl.classList.add("hidden");
                },
                {
                    once: true,
                }
            );
        }
    };
    return (
        <nav>
            <Dropdown id="notification" />
            <button
                className={styles["nav-notification"] + " center"}
                onClick={() => navButtonHandler("notification")}
            >
                <i class="fa fa-bell" aria-hidden="true"></i>
            </button>

            <button className={styles["nav-user-button"] + " center"}>
                <i class="fa fa-user" aria-hidden="true"></i>
            </button>
            <p className={styles["nav-user-name"]}> Chris Buffet</p>
            <div className={styles["nav-user-menu"]}>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </nav>
    );
};

export default Nav;
