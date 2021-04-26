import { render } from '@testing-library/vue'
import Blog from '@/pages/blog/'
import { shallowMount } from '@vue/test-utils'

const DESCRIPTION = 'test description'

const store = {
  getters: {
    homePageContent: () => ({ description: DESCRIPTION }),
  },
}

const META_DATA = {
  description: DESCRIPTION,
  'og:url': 'https://maddevs.io/blog/',
  'og:type': 'website',
  'og:site_name': 'Mad Devs: Software & Mobile App Development Company',
  'og:title': 'Blog',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/blog.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Blog',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/blog.png',
  'twitter:url': 'https://maddevs.io/blog/',
}

const stubs = ['Main']

describe('Blog index component', () => {
  it('should render correctly', () => {
    const { container } = render(Blog, {
      store,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Blog, {
      store,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call({
      homePageContent: {
        description: DESCRIPTION,
      },
    })

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  it('should correct work head method if haven\'t description', () => {
    const wrapper = shallowMount(Blog, {
      store,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call({
      homePageContent: {
        description: null,
      },
    })

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    expect(actual.meta.find(meta => meta.name === 'description').content).toBe('')
  })
})
