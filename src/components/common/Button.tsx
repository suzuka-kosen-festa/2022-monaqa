import React, { useMemo } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Text } from './Text'

interface ButtonInterface {
  children: React.ReactNode
  buttonKey: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const ButtonBox = tw.button`inline-flex items-start px-2 py-0.5 sm:(px-8 py-2) gap-2.5 rounded-lg`

const Button: FC<ButtonInterface> = ({ children, buttonKey, onClick }) => {
  /* eslint-disable consistent-return */
  const buttonColor = useMemo(() => {
    switch (buttonKey) {
      case 'accept':
        return tw`text-white bg-blue-500 hover:bg-blue-600`
      case 'reject':
        return tw`text-white bg-red-600 hover:bg-red-700`
      // no default
    }
  }, [buttonKey])

  return (
    <ButtonBox css={[buttonColor]} onClick={onClick}>
      <Text css={tw`font-bold`}>{children}</Text>
    </ButtonBox>
  )
}
export { Button }
