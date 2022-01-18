import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {
  const favoritexCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritexCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritexCtx.removeFavorite(props.id);
    } else {
      favoritexCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    //   Zwracamy pojedynczy komponent zawierajacy dane przekazane z obiektu w formacie JSON, propsy zostały zdefiniowane dla każdego elementu w pliku MeetupList
    <Card>
      <li className={classes.item}>
        <div>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}
