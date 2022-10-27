import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { List } from '../../components/common/List'
import { dummy } from '../../components/utils/API'

type T = typeof List
type Story = ComponentStoryObj<T>

const data = {
  ListData: [],
  ListData1: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
  buttonText1: 'Test',
  buttonText2: 'Test',
}

export default {
  args: {
    data: data.ListData,
    data1: data.ListData1,
    buttonText1: data.buttonText1,
    buttonText2: data.buttonText2,
    onClick: () => dummy(),
  },
  component: List,
} as ComponentMeta<T>

export const Default: Story = {}
