import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favoritexCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav></nav>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">
            My favorites
            <span className={classes.badge}>{favoritexCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
