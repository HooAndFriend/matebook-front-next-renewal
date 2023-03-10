import { getCookie } from './cookie'

export const useNull = (arr: any[]) => {
  for (const item of arr) {
    if (!item) return false
  }
  return true
}

export const useSame = (a: any, b: any) => {
  if (a !== b) return false
  return true
}

export const useLogined = async (): Promise<boolean> => {
  const cookie = await getJwtCookie()
  return cookie ? true : false
}

export const getJwtCookie = async (): Promise<string> => {
  return await getCookie('accesstoken')
}

export const getParams = async () => {
  const params = new URL(window.location.href).searchParams
  return params.get('token')
}
