import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
const QUESTIONS_PATH = '/quiz/questions';


export async function fetcher (path){
  const url = `${API_HOST}/${path}`
  const response = await axios.get(url);
  return response.data;
}
