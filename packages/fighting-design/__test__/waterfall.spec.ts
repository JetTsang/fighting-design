import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FWaterfall } from '../index'

describe('Waterfall', () => {
  test('class', () => {
    const wrapper = mount(FWaterfall)
    expect(wrapper.classes()).toContain('f-waterfall')
  })
})
