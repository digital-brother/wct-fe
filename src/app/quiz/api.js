import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
const api = axios.create({baseURL: API_HOST});

const QUESTIONS_PATH = '/quiz/questions';

export async function getQuestions() {
  const response = await api.get(QUESTIONS_PATH);
  return response.data
}
