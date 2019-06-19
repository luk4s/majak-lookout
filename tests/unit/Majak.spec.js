import {shallowMount} from '@vue/test-utils'
import Majak from '@/components/Majak.vue'
import PlayVideo from '@/components/PlayVideo.vue'

describe('Majak.vue', () => {
  it('renders in empty', () => {
    const wrapper = shallowMount(Majak);
    expect(wrapper.text()).toMatch("Rozhledna Bežerovice");
    expect(wrapper.find(PlayVideo).exists()).toBe(true)

  });
  it('renders with videos', () => {
    expect(typeof Majak.data).toBe('function');
    const defaultData = Majak.data();
    expect(typeof defaultData.sources).toBe("object");
    expect(defaultData.sources[0].filename).toBe("13m")
  })

  it ("render PlayVideo", () => {
    // const wrapper = shallowMount(Majak);
  })
});

