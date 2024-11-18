import style from "./styles.module.css";

export default function Item({ item }) {
  return (
    <div className={style.item} key={item.shortUrl}>
      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>URL:</span>
        <span>{item.url}</span>
      </div>
      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>Short URL:</span>
        <span>
          <a href={`http://localhost:3000/u/${item.shortUrl}`} target="_blank" rel="noreferrer">
            http://localhost:3000/u/{item.shortUrl}
          </a>
        </span>
      </div>
      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>Views:</span>
        <span>{item.views}</span>
      </div>
    </div>  /* Usar una propiedad única como key */
  );
}