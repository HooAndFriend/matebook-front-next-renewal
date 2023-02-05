// ** Redux Imports

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface LoginParams {
  email: string
  password: string
}

// ** Login
export const fetchLoginData = createAsyncThunk(
  'applications/fetchLoginData',
  async (params: LoginParams) => {
    const response = await axios.get('/apps/users/list', {
      params,
    })

    return response.data
  },
)

export const appContentsSlice = createSlice({
  name: 'appUsers',
  initialState: {
    userData: {},
    loginned: false,
    loadingStat: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLoginData.pending, (state, action) => {
      if (!state.loadingStat) {
        state.loadingStat = true
      }
    })

    builder.addCase(fetchLoginData.fulfilled, (state, action) => {
      state.userData = action.payload.userData
      state.loginned = true
      if (state.loadingStat) {
        state.loadingStat = false
      }
    })
  },
})

export default appContentsSlice.reducer
