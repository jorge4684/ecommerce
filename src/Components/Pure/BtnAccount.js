import Dropdown from "react-bootstrap/Dropdown";
import search from "../../Styles/search.scss";

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light border-0" className="btnAcc" id="dropdown-basic">
        Tu cuenta
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
