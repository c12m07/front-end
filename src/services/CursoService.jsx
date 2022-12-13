import axios from 'axios'

class CursoService {

  constructor() {
    this.url = 'https://back-end-c12m07.onrender.com/cursos'
  }

  async getCursos() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  async addCurso(curso) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}`, curso)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  async updateCurso(curso) {
    return new Promise((resolve, reject) => {
      axios.put(`${this.url}/${curso.id}`, curso)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  async deleteCurso(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${this.url}/${id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
  }
}

export default CursoService