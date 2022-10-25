import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import type { ComponentPropsWithoutRef } from 'react'
import { Navigation } from '../../components/common/Navigation'

type T = typeof Navigation
type Story = ComponentStoryObj<T>
type Meta = ComponentMeta<T>

const args: ComponentPropsWithoutRef<T> = {
  children: 'This is test',
  href: '#',
}

export default {
  args,

  component: Navigation,
} as Meta

export const Default: Story = {}
