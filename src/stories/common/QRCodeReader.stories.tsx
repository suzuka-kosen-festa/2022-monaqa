import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { QRCodeReader } from '../../components/common/QRCodeReader'

type T = typeof QRCodeReader
type Story = ComponentStoryObj<T>

export default {
  component: QRCodeReader,
} as ComponentMeta<T>

export const Default: Story = {}
