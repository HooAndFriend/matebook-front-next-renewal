// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '@/api/config'

// ** Utils Imports
import { getCookie } from '@/utils/cookie'

const mate = axios.create({
  baseURL: `${BASE_URL_DEV}/mate`,
  withCredentials: true,
  headers: {},
})

export const saveMate = async (name: string) => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await mate({
      method: 'post',
      url: '/',
      data: { name },
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getMate = async () => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await mate({
      method: 'get',
      url: '/',
      headers: { accesstoken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
