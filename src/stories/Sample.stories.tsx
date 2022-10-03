import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Sample } from '../components/Sample'

type T = typeof Sample
type Story = ComponentStoryObj<T>

export default {
  component: Sample,
} as ComponentMeta<T>

export const Default: Story = {}
