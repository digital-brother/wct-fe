import axios from 'axios'

const API_HOST = 'http://localhost:8000/api/v1';
export const QUESTIONS_PATH = '/quiz/questions/';
export const ANSWERS_PATH = '/quiz/answers/';

const client = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  timeout: 1000,
  // headers: {Cookie: 'sessionid=1xt7r64kod93g9kwjtpwv9yl15s73eav'},
});

export async function getQuestions() {
  const response = await client.get(QUESTIONS_PATH);
  return response.data;
}

export async function postAnswer(url, {arg: data}) {
  console.log(data);
  const response = await client.post(ANSWERS_PATH, data)
  return response.data
}


// const data = {question: 3, text: 47}
// const createdAnswer = await postAnswer(data)
// console.log(createdAnswer);
