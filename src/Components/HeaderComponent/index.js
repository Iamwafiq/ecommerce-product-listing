import { Link } from "react-router-dom";
import { headerSection, navLinks, itemSearchBar } from "./style";

export const HeaderComponent = () => {
  return (
    <div className={headerSection}>
      <div className={navLinks}>
        <Link to="/men-section">MEN</Link>
        <Link to="/women-section">WOMEN</Link>
        <Link to="/kids-section">KIDS</Link>
        <Link to="/offers">OFFERS </Link>
      </div>
      <div className={itemSearchBar}>
        <input placeholder="Search for Products" />
      </div>
    </div>
  );
};
