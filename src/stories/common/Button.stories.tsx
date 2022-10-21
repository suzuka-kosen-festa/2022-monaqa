import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Button } from '../../components/common/Button'

type T = typeof Button
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const Damy = () => null

const args: ComponentPropsWithoutRef<T> = {
  children: 'This is test',
  buttonKey: 'accept',
  onClick: () => Damy,
}

export default {
  args,

  component: Button,
} as Meta

export const Default: Story = {}
export const Reject: Story = {
  args: {
    buttonKey: 'reject',
  },
}
