import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {

  const params = useParams();

  useEffect(() => {
    const data = localStorage.getItem("shortenedUrls");
    if (data) {
      const items = JSON.parse(data);
      const id = params.id;

      const item = items.find((i) => i.shortUrl === id);

      if (item) {
        window.location.href = item.url;
      }
    }
  }, []);


  return <div>Redirect</div>;
}