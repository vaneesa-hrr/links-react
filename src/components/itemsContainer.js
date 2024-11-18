import style from "./styles.module.css";

export default function ItemsContainer({ children }) {
  return <div className={style.ItemsContainer}>{children}</div>;
}