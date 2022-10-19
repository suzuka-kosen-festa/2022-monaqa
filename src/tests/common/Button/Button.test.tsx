import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import * as stories from '../../../stories/common/Button.stories'

const { Default } = composeStories(stories)

describe('(components/common) Button', () => {
  test('take snap shot', () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })
})
