import { useEffect } from "react";
import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";

import useReducerApp from "../store/store";
import ItemsContainer from "../components/itemsContainer";
import Item from "../components/item";

export default function Create() {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} /> {/* Pasa dispatch como prop */}

      <ItemsContainer>
        {state.items.map((item) => (
          <Item item={item} key={item.shortUrl} />
        ))}
      </ItemsContainer>

    </MainContainer>
  );
}