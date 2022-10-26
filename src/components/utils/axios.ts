import axios from 'axios'

const apiClient = axios.create({
  // APIのURI
  baseURL: import.meta.env.VITE_API_BASEURL,
  // リクエストヘッダ
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
  },
})

export const firestApiClient = axios.create({
  // APIのURI
  baseURL: import.meta.env.VITE_API_BASEURL,
})

export default apiClient
