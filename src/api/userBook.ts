// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '@/api/config'

// ** Utils Imports
import { getCookie } from '@/utils/cookie'

const userBook = axios.create({
  baseURL: `${BASE_URL_DEV}/userBook`,
  withCredentials: true,
  headers: {},
})

export const saveUserBook = async (bookIdx: string) => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await userBook({
      method: 'post',
      url: `/${bookIdx}`,
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getUserBookList = async () => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await userBook.get('/', {
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
