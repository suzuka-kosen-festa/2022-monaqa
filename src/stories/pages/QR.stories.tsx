import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { QR } from '../../components/pages/QR'

type T = typeof QR
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const args: ComponentPropsWithoutRef<T> = {}

export default {
  args,

  component: QR,
} as Meta

export const Default: Story = {}
