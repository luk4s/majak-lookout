import {shallowMount} from '@vue/test-utils'
import PlayVideo from '@/components/PlayVideo.vue'


describe('PlayVideo.vue', () => {
  it('renders play button', () => {
    const wrapper = shallowMount(PlayVideo, {});
    const button = wrapper.find('a');
    button.trigger('click')
  })

  it('play()', () => {
    const wrapper = shallowMount(PlayVideo, {});

    let spy = {
      requestFullscreen: jest.fn(),
      load: jest.fn(),
      play: jest.fn(),
    };
    wrapper.vm.play(spy);
    expect(spy.load).toHaveBeenCalled()
    expect(spy.play).toHaveBeenCalled()
  })

})

