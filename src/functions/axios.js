import axios from 'axios';

const URL = 'http://190.95.120.69:3002'


export async function getAllProjects(obj) {
    let mode = obj || {}
    let res = await axios.get(`${URL}/api/cee/v1/proyectos`, {
        headers: {
            data: JSON.stringify(mode)
        }
    })
   0
    return res
}

export async function putProjects(search,update,token) {
    let res = await axios.put(`${URL}/api/cee/v1/proyectos`,{
        update,
        search,
    },
    {
        headers: {'x-access-token': token}
    }
    )

    return res
}

export async function deleteProjects(search,token) {
 
    const response = await fetch(`${URL}/api/cee/v1/proyectos`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(search) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
}

export async function postProjects(token){
    let res = await axios.post(`${URL}/api/cee/v1/proyectos`,{
        metas: [],
        nombre: 'None',
        descripcion: 'None',
        avance: 100,
        area: 'None'
        },{
        headers: {'x-access-token': token}
    });
    return res
}

export async function login(nickname,password) {
    let res = await axios.post(`${URL}/api/cee/v1/root/login`,{
        nickname,
        password
    })
    return res
}

export async function getAllPolls(obj) {
    let mode = obj || false
    let res
    if(!mode) res = await axios.get(`${URL}/api/cee/v1/poll`)
    if(mode) res = await axios.get(`${URL}/api/cee/v1/poll`,obj)
    return res
}

export async function putPolls(search,update,token) {
    let res = await axios.put(`${URL}/api/cee/v1/poll`,{
        update,
        search,
    },
    {
        headers: {'x-access-token': token}
    }
    )

    return res
}

export async function postPolls(token){
    let res = await axios.post(`${URL}/api/cee/v1/poll`,{
        nombre:"hh",
        descripcion:"hhh",
        link:"https://none.none",
        hashtags:[]
    },{
        headers: {'x-access-token': token}
    });
    return res
}

export async function deletePolls(search,token) {
 
    const response = await fetch(`${URL}/api/cee/v1/poll`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(search) // body data type must match "Content-Type" header
      });
      let json = await response.json();
      console.log(json)
      return json; // parses JSON response into native JavaScript objects
}