import './Listar.css'
import React from 'react'
import { useEffect, useState } from 'react'
import CursoService from '../../services/CursoService.jsx'
import useCursos from '../../hooks/useCursos.jsx'
import AddCurso from './addCurso'
import EditCurso from './editCurso'
import CursoCard from './cursoCard'

export default function Listar() {
  const { cursos, setCursos, addCurso, editCurso, deleteCurso } = useCursos()
  const [edit, setEdit] = useState(false);
  const [editedCurso, setEditCurso] = useState({});
  const cursoService = new CursoService()

  function listarCursos() {
    cursoService.getCursos().then((res) => {
      setCursos(res)
    })
  }

  useEffect(() => {
    listarCursos()
    // eslint-disable-next-line
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    const imagen = e.target.imagen.value
    const title = e.target.title.value
    const description = e.target.description.value
    cursoService
      .addCurso({
        imagen: imagen,
        title: title,
        description: description
      })
      .then((res) => {
        addCurso(res)
      })
    e.target.reset()
  }

  function onEdit(curso) {
    setEdit(true)
    setEditCurso(curso)
    console.log(curso)
  }

  function onSubmitEdit(editedCurso) {
    editCurso(editedCurso)
    cursoService
      .updateCurso(editedCurso)
      .then((res) => {
        updateCurso(res)
      })
    setEdit(false)
    setEditCurso({})
  }

  function onDelete(id) {
    deleteCurso(id)
    cursoService
      .deleteCurso(id)
      .then((res) => {
        deleteCurso(res)
      })
  }

  return (
    <div className='PrincipalContainer'>
      <h2>CURSOS</h2>
      <div className='Section'>
        <div className='EditSection'>
          {edit ? (
            <EditCurso 
              item={editedCurso}
              onSubmitEdit={onSubmitEdit}
              onCancel={() => setEdit(false)}
            />
          ) : (
            <AddCurso onSubmit={onSubmit} />
          )}
        </div>
        <div className='CardsSection'>
          <CursoCard 
            cursos={cursos}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      </div>
      <h5>CARLOS MARTINEZ &copy; 2022</h5>
    </div>
  )
}
