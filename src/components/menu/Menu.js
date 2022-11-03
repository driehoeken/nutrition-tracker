import styles from "./Menu.module.css";
import MenuButton from "./MenuButton";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuButton name="Dashboard" />
            <MenuButton name="Calendar" />
            <MenuButton name="Statistics" />
            <MenuButton name="Calculator" />
        </div>
    );
};

export default Menu;
