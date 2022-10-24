import React, { useRef, useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import apiClient from '../utils/axios'
import { escapeHTML } from '../utils/API'

import { Textfield } from '../common/Textfield'
import { List } from '../common/List'
import { Button } from '../common/Button'

const SearchScreen = tw.div`space-y-8 flex flex-col justify-center items-center my-[calc((100vh)/5)]`
const FormBox = tw.div`flex flex-col space-y-2 justify-center  items-center w-full lg:(flex-row space-x-2 space-y-0 w-1/2)  `
const Label = tw.label`block text-gray-500 font-bold  text-lg text-right lg:(text-xl)  `

export interface APIResponse {
  studentId: string
  kana: string
  email: string
  Guest: [
    {
      guestId: string
      sex: string
      jobs: string
      name: string
      hostId: string
    },
  ]
}
const Search: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  const [item, setItem] = useState<string[]>(['サンプル'])
  const [obj, setObj] = useState<object[]>([])

  const filterJSON = (items: APIResponse[]) => {
    for (let i = 0; i < items.length; i += 1) {
      const data1: string[] = ['']
      const data: object[] = []
      for (let j = 0; j < items[i].Guest.length; j += 1) {
        data1.unshift(items[i].Guest[j].name)
        data.unshift(items[i].Guest[j])
      }
      data.pop()
      data1.pop()
      setItem(data1)
      setObj(data)
    }

    return obj
  }

  const searchName = (kana: string) => {
    apiClient
      .get(`/student/${escapeHTML(kana)}`)
      .then(res => {
        setObj([])
        setItem([''])
        console.log(res.data[0].Guest[0].guestId)
        filterJSON(JSON.parse(JSON.stringify(res.data)))
      })
      .catch(err => {
        console.log(err)
        return []
      })
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
    </SearchScreen>
  )
}

export { Search }
