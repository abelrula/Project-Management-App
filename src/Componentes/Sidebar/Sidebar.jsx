  import { IoHelpCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import menuLinks from "../../data/menuLinks";
import { IoIosSettings } from "react-icons/io";
const Sidebar = () => {
  const selectedObj = {
    color: "black",
    background: "#545351",
  };

  return (
    <div className="side">
      <div className="navigationLinks">
        <div className="navigationTopLinks">
          {menuLinks.map((link, i) => (
            <NavLink
              style={({ isActive }) => (isActive ? selectedObj : null)}
              to={link.to}
              className="sideWord"
              key={i}
            >
              {link.icon}
              <label>{link.title}</label>
            </NavLink>
          ))}
        </div>
        <div className="navigationTBottomLinks">
          <NavLink>
            <IoIosSettings className="icon" />
          </NavLink>
          <NavLink>
            <IoHelpCircle className="icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
