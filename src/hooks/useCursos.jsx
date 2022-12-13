import { useState } from "react";

export default function useCursos() {
  const [cursos, setCursos] = useState([])

  function deleteCurso(id) {
    const newCursos = cursos.filter(curso => curso.id !== id)
    setCursos(newCursos)
  }

  function addCurso(item) {
    setCursos(prev => [...prev, item])
  }

  function editCurso(editedCurso) {
    const newCursos = cursos.map(curso => {
      if (editedCurso.id === curso.id) {
        return { 
          ...curso,
          imagen: editedCurso.imagen,
          title: editedCurso.title,
          description: editedCurso.description
        }
      }
      return curso
    })
    setCursos(newCursos)
  }

  return { cursos, setCursos, deleteCurso, addCurso, editCurso }
};