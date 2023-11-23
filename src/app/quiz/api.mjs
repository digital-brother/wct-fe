import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
const QUESTIONS_PATH = '/quiz/questions/';
const ANSWERS_PATH = '/quiz/answers/';

const client = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  timeout: 1000,
});

export async function getQuestions() {
  const response = await client.get(QUESTIONS_PATH);
  return response.data;
}

export async function postAnswer(url, {arg: data}) {
  const response = await client.post(ANSWERS_PATH, data)
  return response.data
}
