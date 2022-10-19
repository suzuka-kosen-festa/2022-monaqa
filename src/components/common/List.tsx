import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Text } from './Text'
import { Modal } from './Modal'

interface ListInterface {
  data: ReadonlyArray<string>
  buttonText1: string
  buttonText2: string
}

const DataTable = tw.ul`text-center w-full lg:w-1/2 `
const ListItem = tw.li`flex items-center justify-between border-2 mb-1  p-4 border-gray-400`

const List: FC<ListInterface> = ({ data, buttonText1, buttonText2 }) => (
  /* Todo: APIからdataを取得する */
  <DataTable>
    {data.map(item => (
      <ListItem key={item}>
        <Text>{item}</Text>
        <Modal name={item} buttonText1={buttonText1} buttonText2={buttonText2}>
          入場記録
        </Modal>
      </ListItem>
    ))}
  </DataTable>
)

export { List }
