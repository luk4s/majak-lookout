import {shallowMount} from '@vue/test-utils'
import PlayVideo from '@/components/PlayVideo.vue'

describe('PlayVideo.vue', () => {
  it('renders play button', () => {
    const wrapper = shallowMount(PlayVideo, {});
    const button = wrapper.find('a');
    button.trigger('click')
  })

})

