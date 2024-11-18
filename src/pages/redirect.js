import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useReducerApp from "../store/store";
import Loader from "../components/loader";

export default function Redirect() {
  const params = useParams();
  const [item, setItem] = useState(null); // Inicializar como null
  const [, dispatch] = useReducerApp();

  useEffect(() => {
    const data = localStorage.getItem("shortenedUrls");
    if (data) {
      const items = JSON.parse(data);
      const id = params.id;

      const itemUrl = items.find((i) => i.shortUrl === id);

      if (itemUrl) {
        setItem(itemUrl);
        dispatch({ type: 'ADD_VIEW', data: id });
        // Solo redirigir si 'itemUrl' tiene una URL válida
        setTimeout(() => {
          if (itemUrl && itemUrl.url) {
            window.location.href = itemUrl.url;  // Redirigir a la URL
          } else {
            console.error("URL no válida o no encontrada");
          }
        }, 2000);
      } else {
        setItem(undefined);
      }
    } else {
      setItem(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.id]);


  return <Loader item={item} id={params.id} />;
}