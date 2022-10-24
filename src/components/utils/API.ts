import apiClient from './axios'

/* 本実装ではAPIを叩くときに変換する */
export const escapeHTML = (text: string): string =>
  text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')

// テスト用
export const fetch = (): void => {
  apiClient
    .get('/health/http')
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return []
    })
}

// タイムスタンプ処理
export const timeStamp = (uuid: string): void => {
  apiClient
    .get(`/admin/check/${uuid}`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return []
    })
}

// かな検索用API
export const searchName = (kana: string): void => {
  apiClient
    .get(`/student/${escapeHTML(kana)}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      return []
    })
}
