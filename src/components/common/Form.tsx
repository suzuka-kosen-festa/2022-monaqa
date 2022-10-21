import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

import { Textfield } from './Textfield'
import { Button } from './Button'

interface FormInterface {
  children: React.ReactNode
  buttonText: string
}

const FormBox = tw.div`flex flex-col space-y-2 justify-center  items-center w-full lg:(flex-row space-x-2 space-y-0 w-1/2)  `
const Label = tw.label`block text-gray-500 font-bold  text-lg text-right lg:(text-xl)  `
const Damy = () => null

const Form: FC<FormInterface> = ({ children, buttonText }) => (
  <FormBox>
    <Label>{children}</Label>
    <Textfield type="search" name="search" maxLength={20} />
    <Button buttonKey="accept" onClick={() => Damy}>
      {`${buttonText}`}
    </Button>
  </FormBox>
)

export { Form }
