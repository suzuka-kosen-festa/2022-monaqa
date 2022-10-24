import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import apiClient from '../utils/axios'
import { Modal } from './Modal'

interface ListInterface {
  data: object[]
  data1: ReadonlyArray<string>
  buttonText1: string
  buttonText2: string
}

const DataTable = tw.ul`text-center w-full lg:w-1/2 `
const ListItem = tw.li`flex items-center justify-between border-2 mb-1  p-4 border-gray-400`

const List: FC<ListInterface> = ({ data, data1, buttonText1, buttonText2 }) => {
  const timeStamp = (uuid: string): void => {
    apiClient
      .get(`/guest/check/${uuid}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        return []
      })
  }

  return (
    <DataTable>
      {data1.map((item, index) => (
        <ListItem key={item}>
          {item}
          <Modal
            buttonText1={buttonText1}
            buttonText2={buttonText2}
            name="name"
            onClick={() => timeStamp(data[index].guestId)}
          >
            入場記録
          </Modal>
        </ListItem>
      ))}
    </DataTable>
  )
}

export { List }
