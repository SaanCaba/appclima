import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [ciudad, setCity] = useState('')
  return (
    <form 
    className="formulario"
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(ciudad);
      setCity('')
    }}>
      <input
        className="input"
        type="text"
        placeholder="Ciudad..."
        value={ciudad}
        onChange={e => setCity(e.target.value)}
      />
      <input className="btn-sbm" type="submit" value="Agregar" />
    </form>
  );
}
