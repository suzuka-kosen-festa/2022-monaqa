import React, { useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { QRCodeReader } from '../common/QRCodeReader'
import { Text } from '../common/Text'

const Box = tw.div``
const QRContainer = tw.div`flex flex-col justify-center items-center`

/*
  TODO: 
  QRからはuuidが読み取れる。
  uuidをkeyとしてGETメソッドを叩くとタイムスタンプが押される処理を書く。
  responce 200の場合 -> 中身がnullでなければ成功アラート nullならエラーを返す
 responece 500の場合 -> エラーを返す。
*/

const notify = (code: string) => {
  toast.success(code)
}

const QR: FC = () => {
  const [Scanflug, setScanflug] = useState(false)

  return (
    <QRContainer>
      <QRCodeReader
        onReadQRCode={result => {
          setScanflug(true)
          notify(result.getText())
        }}
      />
      <Box>
        {Scanflug ? (
          <ToastContainer position="bottom-center" />
        ) : (
          <Text>QRコードをかざしてください</Text>
        )}
      </Box>
    </QRContainer>
  )
}
export { QR }
