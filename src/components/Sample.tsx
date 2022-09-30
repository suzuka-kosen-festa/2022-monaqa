import React from 'react'
import tw, { css } from 'twin.macro'

const SampleContainar = tw.div`bg-gray-400`

export const Sample = (): JSX.Element => {
  return <SampleContainar>HelloWorld</SampleContainar>
}
