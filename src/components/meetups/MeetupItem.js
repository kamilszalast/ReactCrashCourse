import classes from "./MeetupItem.module.css";

export default function MeetupItem(props) {
  return (
    //   Zwracamy pojedynczy komponent zawierajacy dane przekazane z obiektu w formacie JSON, propsy zostały zdefiniowane dla każdego elementu w pliku MeetupList

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
        <button>To Favorites</button>
      </div>
    </li>
  );
}
