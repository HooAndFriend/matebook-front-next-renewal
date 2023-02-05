// isEmpty
export const isEmpty = (data: any) => Object.entries(data).length === 0

// 에러처리 미들웨어
export const errMiddleWare = (errCd: number, errMsg: string) => {
  switch (errCd) {
    case 1000:
      // ** Api 호출 성공
      return { success: true }
      break
    case 3000:
      // ** 로그인 필요
      window.localStorage.removeItem('userData')
      window.location.href = '/login'
      break
    default:
      return { success: false, errMsg: errMsg }
      break
  }
}

// API 경로
export const BASE_URL_DEV = 'http://localhost:8003'
