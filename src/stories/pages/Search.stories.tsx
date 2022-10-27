import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Search } from '../../components/pages/Search'

type T = typeof Search
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const args: ComponentPropsWithoutRef<T> = {}

export default {
  args,

  component: Search,
} as Meta

export const Default: Story = {}
