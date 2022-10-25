import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Login } from '../../components/pages/Login'

type T = typeof Login
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const args: ComponentPropsWithoutRef<T> = {}

export default {
  args,

  component: Login,
} as Meta

export const Default: Story = {}
