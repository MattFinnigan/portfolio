import axios from 'axios'

export const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    axios.get('/api/projects/all').then((resp) => {
      resolve(resp)
    })
  })
}
