import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { List } from '../../components/common/List'

type T = typeof List
type Story = ComponentStoryObj<T>

const data = {
  ListData: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
  buttonText1: 'Test',
  buttonText2: 'Test',
}

export default {
  args: {
    data: data.ListData,
    buttonText1: data.buttonText1,
    buttonText2: data.buttonText2,
  },
  component: List,
} as ComponentMeta<T>

export const Default: Story = {}
