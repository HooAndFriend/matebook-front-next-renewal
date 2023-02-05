// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '@/api/config'

// ** Utils Imports
import { getCookie } from '@/utils/cookie'

const quiz = axios.create({
  baseURL: `${BASE_URL_DEV}/quiz`,
  withCredentials: true,
  headers: {},
})

export const saveQuiz = async (text: string, answer: boolean, id: string) => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await quiz({
      url: `/${id}`,
      method: 'post',
      data: { text, answer },
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getQuizList = async (id: string) => {
  try {
    const { data } = await quiz.get(`/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getQuiz = async (id: string) => {
  try {
    const { data } = await quiz.get(`/quiz/${id}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
