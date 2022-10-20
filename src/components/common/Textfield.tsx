import React, { useState } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

interface TextfieldInterface {
  type: string
  name: string
  maxLength: number
}

const Input = tw.input` bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[calc((100vw)*7/10)] lg:w-[calc((100vw)/4)] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500`

const escapeHTML = (text: string) =>
  text
    .replace(/&/g, '&lt;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')

const Textfield: FC<TextfieldInterface> = ({ type, name, maxLength }) => {
  const [value, setValue] = useState('')
  return (
    <Input
      type={type}
      name={name}
      value={value}
      required
      maxLength={maxLength}
      onChange={e => setValue(escapeHTML(e.target.value))}
    />
  )
}

export { Textfield }
