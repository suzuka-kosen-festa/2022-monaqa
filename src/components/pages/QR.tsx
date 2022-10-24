import React, { useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import apiClient from '../utils/axios'
import { QRCodeReader } from '../common/QRCodeReader'
import { Text } from '../common/Text'

const QRContainer = tw.div`flex flex-col justify-center items-center`

const QR: FC = () => {
  const [previousValue, setPeviosValue] = useState('')

  const timeStamp = (uuid: string): void => {
    if (previousValue !== uuid) {
      apiClient
        .get(`/admin/check/${uuid}`)
        .then(res => {
          if (res.data != null) {
            toast.success(`${res.data.name}さんの入場を記録しました`)
            setPeviosValue(uuid)
          } else {
            toast.error('error')
          }
        })
        .catch(err => {
          toast.error(err.message)
        })
    }
  }

  return (
    <QRContainer>
      <QRCodeReader
        onReadQRCode={result => {
          timeStamp(result.getText())
        }}
      />
      <ToastContainer position="bottom-center" />
      <Text>QRコードをかざしてください</Text>
    </QRContainer>
  )
}
export { QR }
