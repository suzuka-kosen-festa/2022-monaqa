import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Textfield } from '../../components/common/Textfield'

type T = typeof Textfield
type Story = ComponentStoryObj<T>

export default {
  args: {
    type: 'search',
    name: 'search',
  },
  component: Textfield,
} as ComponentMeta<T>

export const Default: Story = {}
