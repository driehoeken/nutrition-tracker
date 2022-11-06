import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";

function App() {
    return (
        <div id="container">
            <Menu />
            <div id="right-side">
                <Nav />
                <Main />
            </div>
        </div>
    );
}

export default App;
