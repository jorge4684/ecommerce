import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "../../Styles/Navbar.scss";

export const MenuButton = function () {
  return (
    <div className="containerB">
    <div className="containerB">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    <div>
        <a className="aBtnN">hola</a>
        <a className="aBtnN">hola</a>
        <a className="aBtnN">hola</a>
        <a className="aBtnN">hola</a>
    </div>
    </div>
    <div>
        <a className="aBtnN">hola</a>
        <a className="aBtnN">hola</a>
        <a className="aBtnN">hola</a>
    </div>
    </div>
  );
};
