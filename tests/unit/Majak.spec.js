import {shallowMount} from '@vue/test-utils'
import Majak from '@/components/Majak.vue'

describe('Majak.vue', () => {
  it('renders in empty', () => {
    const wrapper = shallowMount(Majak, {
      propsData: {sources: []}
    });
    expect(wrapper.text()).toMatch("Rozhledna Bežerovice")
  });
  it('renders with videos', () => {
    expect(typeof Majak.data).toBe('function');
    const defaultData = Majak.data();
    expect(typeof defaultData.sources).toBe("object");
    expect(defaultData.sources[0].filename).toBe("13m")
  })
})

