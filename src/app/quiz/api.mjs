import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
const ANSWERS_PATH = '/quiz/answers/';
const NEXT_QUESTION_PATH = '/quiz/next-question/';

const client = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  timeout: 1000,
});

export async function getNextQuestion() {
  const response = await client.get(NEXT_QUESTION_PATH);
  return response.data;
}

export async function postAnswer(url, {arg: data}) {
  const response = await client.post(ANSWERS_PATH, data)
  return response.data
}
