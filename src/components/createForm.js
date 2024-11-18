import style from "./styles.module.css";

import { useState } from "react";

export default function CreateForm({ dispatch }) {
  const [url, setUrl] = useState("");

  // Maneja el cambio del input
  function handleChange(e) {
    const value = e.target.value;
    setUrl(value);

  }
  // Maneja el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();  // Evita que el formulario recargue la página

    if (url.trim()) {
      // Despacha la acción de agregar la URL
      dispatch({ type: "ADD", data: url });

      // Limpia el campo de texto después de enviar
      setUrl("");
    }
  }

  // Maneja el evento cuando se presiona una tecla (Enter)
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);  // Llama a la función de envío cuando se presiona Enter
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={handleChange}  // Actualiza el estado al cambiar el input
        onKeyDown={handleKeyDown} // Detecta la tecla presionada
        placeholder="Type a valid URL..."
        className={style.input}
      />
    </form>
  );
}