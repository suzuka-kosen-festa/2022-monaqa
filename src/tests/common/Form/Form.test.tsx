import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import * as stories from '../../../stories/common/Form.stories'

const { Default } = composeStories(stories)

describe('(components/common) Form', () => {
  test('take snap shot', () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })
})

describe('(components/common) Form', () => {
  test('input test', async () => {
    render(<Default />)
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: "';delete from user_table;" },
    })
    expect(
      await screen.getByDisplayValue('&#x27;;delete from user_table;'),
    ).toBeInTheDocument()
  })
})
