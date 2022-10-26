import React, { useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { AxiosError } from 'axios'

import apiClient from '../utils/axios'
import { Modal } from './Modal'
import { Button } from './Button'
import type {
  FaiedResponse,
  ObObject,
  SponsorObject,
  GuestObject,
} from '../utils/model'

interface SuccessResponse {
  name: string
}

interface ListInterface {
  data: GuestObject[] | SponsorObject[] | ObObject[]
  data1: ReadonlyArray<string>
  buttonText1: string
  buttonText2: string
}

const DataTable = tw.ul`text-center w-full lg:w-1/2 `
const ListItem = tw.li`flex items-center justify-between border-2 mb-1  p-4 border-gray-400`

const List: FC<ListInterface> = ({ data, data1, buttonText1, buttonText2 }) => {
  const [selectedItem, setSelectedItem] = useState<string>('')

  const openModal = (name: string) => {
    setSelectedItem(name)
  }

  const closeModal = () => setSelectedItem('')

  const sponsorTimeStamp = (uuid: string): void => {
    apiClient
      .get<SuccessResponse>(`/sponsor/check/${uuid}`)
      .then(res => {
        if (res.data != null) {
          toast.success(`${res.data.name}さんの入場を記録しました`)
          closeModal()
        } else toast.error('error')
      })
      .catch((err: AxiosError<FaiedResponse>) => {
        toast.error(err.message)
      })
  }
  const jhsTimeStamp = (uuid: string): void => {
    apiClient
      .get<SuccessResponse>(`/jhs/check/${uuid}`)
      .then(res => {
        if (res.data != null) {
          toast.success(`${res.data.name}さんの入場を記録しました`)
          closeModal()
        } else toast.error('error')
      })
      .catch((err: AxiosError<FaiedResponse>) => {
        sponsorTimeStamp(uuid)
        toast.error(err.message)
      })
  }
  const obTimeStamp = (uuid: string): void => {
    apiClient
      .get<SuccessResponse>(`/ob/check/${uuid}`)
      .then(res => {
        if (res.data != null) {
          toast.success(`${res.data.name}さんの入場を記録しました`)
          closeModal()
        } else toast.error('error')
      })
      .catch((err: AxiosError<FaiedResponse>) => {
        toast.error(err.message)
      })
  }
  const guestTimeStamp = (uuid: string): void => {
    apiClient
      .get<SuccessResponse>(`/guest/check/${uuid}`)
      .then(res => {
        if (res.data != null) {
          toast.success(`${res.data.name}さんの入場を記録しました`)
          closeModal()
        } else toast.error('error')
      })
      .catch((err: AxiosError<FaiedResponse>) => {
        jhsTimeStamp(uuid)
        toast.error(err.message)
      })
  }

  const isGuest = (item: object): item is GuestObject =>
    !!(item as GuestObject)?.guestId
  const isOb = (item: object): item is ObObject => !!(item as ObObject)?.obId
  const isSponsor = (item: object): item is SponsorObject =>
    !!(item as SponsorObject)?.sponsorId

  const timeStamp = (obj: object) => {
    if (isGuest(obj)) {
      guestTimeStamp(obj.guestId)
    } else if (isOb(obj)) {
      obTimeStamp(obj.obId)
    } else if (isSponsor(obj)) {
      sponsorTimeStamp(obj.sponsorId)
    }
  }

  return (
    <>
      <DataTable>
        {data1.map((item, index) => (
          <ListItem key={item}>
            {item}
            <Button buttonKey="accept" onClick={() => openModal(item)}>
              入場記録
            </Button>
            <Modal
              buttonText1={buttonText1}
              buttonText2={buttonText2}
              name={item}
              showFlag={item === selectedItem}
              onClick1={() => closeModal()}
              onClick2={() => timeStamp(data[index])}
            />{' '}
          </ListItem>
        ))}
      </DataTable>
      <ToastContainer position="bottom-center" />
    </>
  )
}

export { List }
