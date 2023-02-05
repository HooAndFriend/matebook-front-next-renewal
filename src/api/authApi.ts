// ** Axios Imports
import axios from 'axios'
import { BASE_URL_DEV } from './config'

const auth = axios.create({
  baseURL: `${BASE_URL_DEV}/user`,
})

export const registerApi = async () => {
  try {
  } catch (err) {}
}
