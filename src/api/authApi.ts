// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from '@/api/config'

// ** Utils Imports
import { getCookie } from '@/utils/cookie'

const auth = axios.create({
  baseURL: `${BASE_URL_DEV}/user`,
})

export const register = async (
  user: {
    email: string
    password: string
    name: string
  },
  birth: string,
  male: boolean,
) => {
  try {
    const bodyData = {
      email: user.email,
      name: user.name,
      password: user.password,
      birth,
      male,
    }
    const { data } = await auth.post('/register', bodyData)

    return data
  } catch (err) {
    console.log(1, err)
  }
}

export const sendMail = async (email: string) => {
  const { data } = await auth.post('/mail', {
    email,
  })
  return data
}

export const getUserInfo = async () => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await auth.get('/', {
      headers: { accessToken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const updateImg = async (formData: any) => {
  try {
    const token = await getCookie('accesstoken')
    if (!token) {
      alert('로그인 해주세요')
      return (location.href = '/')
    }
    const { data } = await auth.patch('/', formData, {
      headers: { accessToken: token },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
