import axios from "axios";

const favoritosApi = axios.create({baseURL: "http://localhost:8000/favoritos"})

    //conceito de promisse, tempo até um dado chegar de um lado ao outro
    //o async seria como uma trava até a promisse ser feita
async function getFavoritos(){
   const response = await favoritosApi.get("/") //await delay

  return response.data
}

async function postFavorito(id){
    await favoritosApi.post(`/${id}`)
}

async function deleteFavorito(id){
    await favoritosApi.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}