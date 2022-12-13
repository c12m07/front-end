import React from "react";
import { TextField, Button } from "@mui/material";

export default function AddCurso(params) {
  return (
    <form onSubmit={params.onSubmit}>
      <TextField     
        id="standard-basic" 
        variant="filled"
        label="Imagen"
        type="text" 
        name="imagen" 
      />
      <TextField     
        id="standard-basic" 
        variant="filled"
        label="Título" 
        type="text" 
        name="title" 
      />
      <TextField     
        id="standard-basic" 
        variant="filled"
        label="Descripción" 
        type="text" 
        name="description" 
      />
      <Button variant="outlined" type="submit">Añadir</Button>
    </form>
  )
};
