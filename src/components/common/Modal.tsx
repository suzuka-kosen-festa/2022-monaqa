import React, { useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import { Button } from './Button'
import { Text } from './Text'

interface ModalInterface {
  children: React.ReactNode
  name: string
  buttonText1: string
  buttonText2: string
  onClick: () => void
}

const ModalArea = tw.div`fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-70 `
const ModalBox = tw.div`flex items-center min-h-screen px-4 py-8`
const DiaLog = tw.div`relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg text-center space-y-4 space-x-4`

const Modal: FC<ModalInterface> = ({
  children,
  name,
  buttonText1,
  buttonText2,
  onClick,
}) => {
  const [showModal, setShowModal] = useState(false)
  /* Todo: create portalやる const root = document.getElementById('modal') */
  return (
    <>
      <Button buttonKey="accept" onClick={() => setShowModal(true)}>
        {children}
      </Button>
      {showModal ? (
        <ModalArea>
          <ModalBox>
            <DiaLog>
              <Text>{name}さんの入場を記録しますか？</Text>
              <Button buttonKey="reject" onClick={() => setShowModal(false)}>
                {`${buttonText1}`}
              </Button>
              <Button buttonKey="accept" onClick={onClick}>
                {`${buttonText2}`}
              </Button>
            </DiaLog>
          </ModalBox>
        </ModalArea>
      ) : null}
    </>
  )
}

export { Modal }
