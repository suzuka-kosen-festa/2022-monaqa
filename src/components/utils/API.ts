/* 本実装ではAPIを叩くときに変換する */
export const escapeHTML = (text: string): string =>
  text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')

// ただのダミー
export const dummy = (): void => {
  console.log('dummy')
}
