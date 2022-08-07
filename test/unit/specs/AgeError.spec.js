import Vue from 'vue'
import AgeError from '@/views/AgeError.vue'

describe('AgeError.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AgeError)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .toEqual('Ooops')
  })
})
