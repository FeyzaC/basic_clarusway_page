import "./Header.css";
import logo from "../../assets/clarusway-logo-classic.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
