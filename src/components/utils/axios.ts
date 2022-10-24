import axios from 'axios'

const apiClient = axios.create({
  // APIのURI
  baseURL: 'https://server-gytmf4azxa-uw.a.run.app/',
  // リクエストヘッダ
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
