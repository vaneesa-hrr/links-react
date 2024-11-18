import { useEffect } from "react";
import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} /> {/* Pasa dispatch como prop */}

      <div>
        {state.items.map((item) => (
          <div key={item.shortUrl}>
            {item.shortUrl} {item.url}
          </div>  /* Usar una propiedad única como key */
        ))}
      </div>

    </MainContainer>
  );
}