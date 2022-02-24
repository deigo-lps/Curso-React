import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo512.png"
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/"><img src={logo}/></Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
