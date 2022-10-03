import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import * as stories from '../stories/Sample.stories'

const { Default } = composeStories(stories)

describe('(components) Sample', () => {
  test('take snap shot', () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })
})
