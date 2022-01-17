import classes from "./Card.module.css";
// komponent typu wrapper, który tworzy formę dla naszego komponentu meetup
export default function Card(props) {
  //specjalny element obiektu props, który przekazuje wartość wewnątrz komponnetu Card, czyli między znacznikami
  return <div className={classes.card}>{props.children}</div>;
}
