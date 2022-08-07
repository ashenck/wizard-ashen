import Vue from 'vue'
import Page2 from '@/views/Page2.vue'
import { shallowMount } from '@vue/test-utils'

describe('Page2.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Page2)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .toEqual('Tell us about yourself')
  })
})

describe('calculatePackageExtra Method', () => {
  it('testing valid values', () => {
    const wrapper = shallowMount(Page2)
    expect(wrapper.vm.calculatePackageExtra(1000, 50)).toBe(500)
  })

  it('testing invalid value - premiumAmount', () => {
    const wrapper = shallowMount(Page2)
    expect(wrapper.vm.calculatePackageExtra(null, 50)).toBe(0)
  })

  it('testing invalid value - precentage', () => {
    const wrapper = shallowMount(Page2)
    expect(wrapper.vm.calculatePackageExtra(1000, null)).toBe(0)
  })
})

describe('calculatePremium Method', () => {
  it('testing valid value - rate', () => {
    const wrapper = shallowMount(Page2)
    wrapper.setData({
      age: 50
    })
    expect(wrapper.vm.calculatePremium(1)).toBe(500)
  })

  it('testing invalid value - rate', () => {
    const wrapper = shallowMount(Page2)
    wrapper.setData({
      age: 50
    })
    expect(wrapper.vm.calculatePremium(null)).toBe(0)
  })
})
