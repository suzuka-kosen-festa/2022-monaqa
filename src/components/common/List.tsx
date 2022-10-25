import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import apiClient from '../utils/axios'
import { Modal } from './Modal'

interface GuestObject extends Object {
  guestId: string
}
interface ListInterface {
  data: GuestObject[]
  data1: ReadonlyArray<string>
  buttonText1: string
  buttonText2: string
}

const DataTable = tw.ul`text-center w-full lg:w-1/2 `
const ListItem = tw.li`flex items-center justify-between border-2 mb-1  p-4 border-gray-400`

const timeStamp = (uuid: string): void => {
  apiClient
    .get(`/admin/check/${uuid}`)
    .then(res => {
      if (res.data != null)
        toast.success(`${res.data.name}さんの入場を記録しました`)
      else toast.error('error')
    })
    .catch(err => {
      toast.error(err.message)
    })
}

const List: FC<ListInterface> = ({ data, data1, buttonText1, buttonText2 }) => (
  <>
    {' '}
    <DataTable>
      {data1.map((item, index) => (
        <ListItem key={item}>
          {item}
          <Modal
            buttonText1={buttonText1}
            buttonText2={buttonText2}
            name={item}
            onClick={() => timeStamp(data[index].guestId)}
          >
            入場記録
          </Modal>
        </ListItem>
      ))}
    </DataTable>{' '}
    <ToastContainer position="bottom-center" />
  </>
)

export { List }
