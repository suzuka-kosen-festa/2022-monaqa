import React, { useRef, useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import type { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import apiClient from '../utils/axios'
import { escapeHTML } from '../utils/API'

import { Textfield } from '../common/Textfield'
import { List } from '../common/List'
import { Button } from '../common/Button'
import type {
  GuestObject,
  StudentResponse,
  JhsResponse,
  StudentSuccessResponse,
  SponsorSuccessResponse,
  JhsSuccessResponse,
  ObSuccessResponse,
  FaiedResponse,
} from '../utils/model'

const SearchScreen = tw.div`space-y-8 flex flex-col justify-center items-center my-[calc((100vh)/5)]`
const FormBox = tw.div`flex flex-col space-y-2 justify-center  items-center w-full lg:(flex-row space-x-2 space-y-0 w-1/2)  `
const Label = tw.label`block text-gray-500 font-bold  text-lg text-right lg:(text-xl)  `

const Search: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  const [item, setItem] = useState<string[]>(['サンプル'])
  const [obj, setObj] = useState<GuestObject[]>([])

  const filterJSON = (items: StudentResponse[]) => {
    const data1: string[] = ['']
    const data: GuestObject[] = []
    for (let i = 0; i < items.length; i += 1) {
      for (let j = 0; j < items[i].Guest.length; j += 1) {
        data1.unshift(items[i].Guest[j].name)
        data.unshift(items[i].Guest[j])
      }

      data1.pop()
      setItem(data1)
      setObj(data)
    }
    return obj
  }
  // jhsだけレスポンスが若干違うので
  const jhsfilterJSON = (items: JhsResponse[]) => {
    const data1: string[] = ['']
    const data: GuestObject[] = []
    for (let i = 0; i < items.length; i += 1) {
      for (let j = 0; j < items[i].Parents.length; j += 1) {
        data1.unshift(items[i].Parents[j].name)
        data.unshift(items[i].Parents[j])
      }
      data1.pop()
      setItem(data1)
      setObj(data)
    }
    return obj
  }
  const searchNameSponsor = (kana: string) => {
    apiClient
      .get<SponsorSuccessResponse>(`/sponsor/${escapeHTML(kana)}`)
      .then(res => {
        setObj([])
        setItem([''])
        if (!res.data.length) {
          toast.error('検索された名前は見つかりませんでした')
          return
        }
        filterJSON(JSON.parse(JSON.stringify(res.data)))
      })
      .catch((err: AxiosError<FaiedResponse>) => toast.error(err.message))
  }
  const searchNameOb = (kana: string) => {
    apiClient
      .get<ObSuccessResponse>(`/ob/${escapeHTML(kana)}`)
      .then(res => {
        setObj([])
        setItem([''])
        if (!res.data.length) {
          searchNameSponsor(kana)
          return
        }
        filterJSON(JSON.parse(JSON.stringify(res.data)))
      })
      .catch((err: AxiosError<FaiedResponse>) => toast.error(err.message))
  }
  const searchNamejhs = (kana: string) => {
    apiClient
      .get<JhsSuccessResponse>(`/jhs/${escapeHTML(kana)}`)
      .then(res => {
        setObj([])
        setItem([''])
        if (!res.data.length) {
          searchNameOb(kana)
          return
        }
        jhsfilterJSON(JSON.parse(JSON.stringify(res.data)))
      })
      .catch((err: AxiosError<FaiedResponse>) => toast.error(err.message))
  }

  const searchName = (kana: string) => {
    apiClient
      .get<StudentSuccessResponse>(`/student/${escapeHTML(kana)}`)
      .then(res => {
        setObj([])
        setItem([''])
        if (!res.data.length) {
          searchNamejhs(kana)
          return
        }
        filterJSON(JSON.parse(JSON.stringify(res.data)))
      })
      .catch((err: AxiosError<FaiedResponse>) => toast.error(err.message))
  }
  return (
    <SearchScreen>
      <FormBox>
        <Label>フルネーム:</Label>
        <Textfield
          type="search"
          name="search"
          maxLength={15}
          required
          ref={inputRef}
        />
        <Button
          buttonKey="accept"
          onClick={() => searchName(inputRef.current.value)}
        >
          検索する
        </Button>
        <Label />
      </FormBox>
      <List data={obj} data1={item} buttonText1="いいえ" buttonText2="はい" />
      <ToastContainer position="bottom-center" />
    </SearchScreen>
  )
}

export { Search }
