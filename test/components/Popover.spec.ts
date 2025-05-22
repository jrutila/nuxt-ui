import { describe, it, expect } from 'vitest'
import Popover, { type PopoverProps, type PopoverSlots } from '../../src/runtime/components/Popover.vue'
import ComponentRender from '../component-render'

describe('Popover', () => {
  const props = { open: true, portal: false }

  it.each([
    // Props
    ['with open', { props }],
    ['with arrow', { props: { ...props, arrow: true } }],
    ['with class', { props: { ...props, class: 'shadow-xl' } }],
    ['with ui', { props: { ...props, ui: { content: 'shadow-xl' } } }],
    ['with mode:click', { props: { ...props, mode: 'click' } }],
    ['with mode:hover', { props: { ...props, mode: 'hover' } }],
    ['with mode:manual', { props: { ...props, mode: 'manual' } }],
    // Slots
    ['with default slot', { props, slots: { default: () => 'Default slot' } }],
    ['with content slot', { props, slots: { content: () => 'Content slot' } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: PopoverProps, slots?: Partial<PopoverSlots> }) => {
    const html = await ComponentRender(nameOrHtml, options, Popover)
    expect(html).toMatchSnapshot()
  })
})
