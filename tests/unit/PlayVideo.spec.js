import { shallowMount } from '@vue/test-utils'
import PlayVideo from '@/components/PlayVideo.vue'

describe('PlayVideo.vue', () => {
  it('renders play button', () => {
    const wrapper = shallowMount(PlayVideo);
    const button = wrapper.find('a');
    button.trigger('click')
    // const MessageComponent = wrapper.find(Message)
    // expect(MessageComponent.attributes().msg).toEqual('message')
    // button.trigger('click')
    // expect(MessageComponent.attributes().msg).toEqual('toggled message')
  })
})

