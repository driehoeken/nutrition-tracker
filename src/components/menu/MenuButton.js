import styles from "./MenuButton.module.css";

const MenuButton = (props) => {
    return (
        <button type="button" className={styles["menu-button"]}>
            <div className={styles["menu-button__inside"]}>{props.name}</div>
        </button>
    );
};

export default MenuButton;
