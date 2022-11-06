import styles from "./MenuButton.module.css";

const MenuButton = (props) => {
    return (
        <button type="button" className={styles["menu-button"]}>
            <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>{" "}
            <span className={styles.name}> {props.name} </span>
        </button>
    );
};

export default MenuButton;
