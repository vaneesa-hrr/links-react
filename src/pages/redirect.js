import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useReducerApp from "../store/store";

export default function Redirect() {

  const [state, dispatch] = useReducerApp();

  const params = useParams();

  useEffect(() => {
    const data = localStorage.getItem("shortenedUrls");
    if (data) {
      const items = JSON.parse(data);
      const id = params.id;

      const item = items.find((i) => i.shortUrl === id);

      if (item) {
        dispatch({ type: 'ADD_VIEW', data: id });
        setTimeout(() => {
          window.location.href = item.url;
        }, 2000);

      }
    }
  }, [dispatch, params.id]);


  return <div>Redirect</div>;
}