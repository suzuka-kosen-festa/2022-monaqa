import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Loading } from '../../components/common/Loading'

type T = typeof Loading
type Story = ComponentStoryObj<T>

export default {
  component: Loading,
} as ComponentMeta<T>

export const Default: Story = {}
