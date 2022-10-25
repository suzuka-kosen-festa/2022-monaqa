import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Modal } from '../../components/common/Modal'
import { dummy } from '../../components/utils/API'

type T = typeof Modal
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const args: ComponentPropsWithoutRef<T> = {
  children: 'This is test',
  name: 'test',
  buttonText1: 'test',
  buttonText2: 'test',
  onClick: () => dummy(),
}

export default {
  args,
  argTypes: {
    children: {
      description: 'Context of text',
      control: {
        type: 'text',
      },
    },
  },
  component: Modal,
} as Meta

export const Default: Story = {}
