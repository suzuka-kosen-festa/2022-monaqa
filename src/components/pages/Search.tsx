import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import { Form } from '../common/Form'
import { List } from '../common/List'

const SearchScreen = tw.div`space-y-8 flex flex-col justify-center items-center my-[calc((100vh)/5)]`

/* Todo: APIかqら取得する */
const listData: string[] = [
  'こうせんたろう',
  'こうせんはなこ',
  'あおやまじろう',
  'みのうらたろう',
  'ほりえたろう',
]

const Search: FC = () => (
  <SearchScreen>
    <Form buttonText="検索する">フルネーム：</Form>
    <List data={listData} buttonText1="いいえ" buttonText2="はい" />
  </SearchScreen>
)

export { Search }
