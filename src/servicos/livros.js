import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

    //conceito de promisse, tempo até um dado chegar de um lado ao outro
    //o async seria como uma trava até a promisse ser feita
async function getLivros(){
   const response = await livrosAPI.get("/") //await delay

  return response.data
}

export {
    getLivros
}