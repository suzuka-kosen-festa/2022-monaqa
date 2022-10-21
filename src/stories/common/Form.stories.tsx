import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Form } from '../../components/common/Form'

type T = typeof Form
type Story = ComponentStoryObj<T>

const data = {
  sentence: 'This is test',
  buttonText: 'This is test',
}

export default {
  args: { children: data.sentence, buttonText: data.buttonText },
  component: Form,
} as ComponentMeta<T>

export const Default: Story = {}
