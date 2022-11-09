import "./Dropdown.css";

const Dropdown = (props) => {
    return <div className="dropdown visually-hidden hidden" id={`dropdown-${props.id}`}></div>;
};

export default Dropdown;
