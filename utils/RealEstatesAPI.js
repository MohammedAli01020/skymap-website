
// const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

const api = process.env.REACT_APP_CONTACTS_API_URL ||
    'http://ec2-54-167-167-213.compute-1.amazonaws.com:5000/skymap/api/realestates/'

// let token = localStorage.token

// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  // 'Authorization': token
}

export const getAll = (pageNumber) =>
  fetch(`${api}all/?pageNumber=${pageNumber}&pageSize=10`, {headers })
    .then(res => res.json())
    .then(data => {
        return data;
    })


export const fetchItem = (id) =>
    fetch(`${api}id/${id}`, {headers })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data;
        })


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
