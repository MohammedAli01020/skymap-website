
// const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'
const api = 'http://ec2-54-167-167-213.compute-1.amazonaws.com:5000/skymap'

// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const localHostApi = "http://192.168.1.13:5000/skymap"

const headers = {
  'Accept': 'application/json',
  // 'Authorization': token
}

export const getAll = (pageNumber) =>
  fetch(`${api}/api/realestates/all/?pageNumber=${pageNumber}&pageSize=25`, {headers })
    .then(res => res)
      .catch(e => e)


export const fetchItem = (id) =>
    fetch(`${api}/api/realestates/id/${id}`, {headers })
        .then(res => res)
        .catch(e => e)



export const getAllPosts = (pageNumber) =>
    fetch(`${api}/api/posts/all/?pageNumber=${pageNumber}&pageSize=25`, {headers })
        .then(res => res)
        .catch(reason => reason)



export const fetchPostItem = (id) =>
    fetch(`${api}/api/posts/id/${id}`, {headers })
        .then(res => res)
        .catch(e => e)





export const createPost = (body) =>
  fetch(`${api}/api/posts/modify`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res)
      .catch(reason => reason)

// export const remove = (contact) =>
//   fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
//     .then(res => res.json())
//     .then(data => data.contact)
//
// export const create = (body) =>
//   fetch(`${api}/contacts`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json())