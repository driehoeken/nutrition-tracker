import styles from "./NavButton.module.css";
import Dropdown from "../menu/Dropdown";
const NavButon = (props) => {
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
        <div className={styles["nav-button-wrap"]}>
            <button
                className={styles[`nav-${props.name}`] + " " + styles["nav-button"] + " center"}
                onClick={() => navButtonHandler(`${props.name}`)}
            >
                <i class={`fa fa-${props.icon}`} aria-hidden="true"></i>
            </button>
            <Dropdown id={`${props.name}`} />
        </div>
    );
};

export default NavButon;
