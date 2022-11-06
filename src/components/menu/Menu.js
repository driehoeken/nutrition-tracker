import styles from "./Menu.module.css";
import MenuButton from "./MenuButton";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuButton name="Dashboard" icon="home" />
            <MenuButton name="Calendar" icon="calendar" />
            <MenuButton name="Statistics" icon="bar-chart " />
            <MenuButton name="Calculator" icon="calculator" />
            <MenuButton name="Settings" icon="cog" />
        </div>
    );
};

export default Menu;
