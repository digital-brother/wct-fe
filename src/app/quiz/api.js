import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
const QUESTIONS_URL = `${API_HOST}/quiz/questions`

export async function getQuestions() {
  const response = await axios.get(QUESTIONS_URL);
  return response.data
}
