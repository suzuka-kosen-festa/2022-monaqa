import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import { Button } from './Button'
import { Text } from './Text'

interface ModalInterface {
  name: string
  showFlag: boolean
  buttonText1: string
  buttonText2: string
  onClick1: () => void
  onClick2: () => void
}

const ModalArea = tw.div`fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-70 `
const ModalBox = tw.div`flex items-center min-h-screen px-4 py-8`
const DiaLog = tw.div`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg text-center space-y-4 space-x-4`

const Modal: FC<ModalInterface> = ({
  name,
  buttonText1,
  buttonText2,
  onClick1,
  onClick2,
  showFlag,
}) =>
  showFlag && name !== '' ? (
    <ModalArea>
      <ModalBox>
        <DiaLog>
          <Text>{name}さんの入場を記録しますか？</Text>
          <Button buttonKey="reject" onClick={onClick1}>
            {`${buttonText1}`}
          </Button>
          <Button buttonKey="accept" onClick={onClick2}>
            {`${buttonText2}`}
          </Button>
        </DiaLog>
      </ModalBox>
    </ModalArea>
  ) : null
/* Todo: create portalやる const root = document.getElementById('modal') */

export { Modal }
