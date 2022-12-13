import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function EditCurso(params) {

  const [imagen, setImagen] = useState(params.item.imagen);
  const [title, setTitle] = useState(params.item.title);
  const [desc, setDesc] = useState(params.item.description);

  function onChangeImagen(e) {
    setImagen(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeDesc(e) {
    setDesc(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    params.onSubmitEdit({
      id: params.item.id,
      imagen: imagen,
      title: title,
      description: desc,
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <TextField
          id="standard-basic"
          variant="filled"
          label="Imagen"
          type="text"
          name="imagen"
          value={imagen}
          onChange={onChangeImagen}
        />
        <TextField
          id="standard-basic"
          variant="filled"
          label="Título"
          type="text"
          name="title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextField
          id="standard-basic"
          variant="filled"
          label="Descripción"
          type="text"
          name="desc"
          value={desc}
          onChange={onChangeDesc}
        />
        <Button type="submit" variant="outlined">
          Edit
        </Button>
      </form>
      <Button variant="outlined" onClick={params.onCancel}>
        Cancel
      </Button>
    </>
  );
}
