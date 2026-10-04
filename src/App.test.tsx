import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('отрисовывает заголовок каркаса', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'MAX Chat' })).toBeInTheDocument()
  })
})
