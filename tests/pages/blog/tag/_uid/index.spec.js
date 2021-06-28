import '@testing-library/vue'
import Tag from '@/pages/blog/tag/_uid.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

const storeObj = {
  getters: {
    blogTag: () => ('seo'),
    tagPostsCount: () => (1),
  },
  actions: {
    getBlogTagPosts: () => jest.fn(),
    getBlogAuthors: () => ([]),
  },
}

const META_DATA = {
  title: `Top articles about ${storeObj.getters.blogTag()} | Mad Devs Blog`,
  metaTitle: `Top articles about ${storeObj.getters.blogTag()} | Mad Devs Blog`,
  description: `Discover articles about ${storeObj.getters.blogTag()}. Quality content curated by Mad Devs.`,
  url: '',
  jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in London, which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "27 Old Gloucester Street", "addressLocality": "London", "addressRegion": "UK", "postalCode": "WC1N3AX"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.instagram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
  image: 'https://maddevs.io/blog.png',
}

const store = new Vuex.Store({
  ...storeObj,
})
const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  $store: {
    dispatch: jest.fn(),
  },
  $route: {
    params: {
      uid: 'uid',
    },
  },
}

const stubs = ['ShareNetwork', 'PostView']

describe('Tag _uid component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Tag, {
      store,
      mocks,
      stubs,
      localVue,
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('should async data work correctly', async () => {
    const callObject = {
      store: mocks.$store,
      params: {
        uid: '1',
      },
      error: jest.fn(),
    }
    const wrapper = shallowMount(Tag, {
      store,
      mocks,
      stubs,
      localVue,
    })
    const result = await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(mocks.$store.dispatch).toHaveBeenCalledWith('getBlogTag', callObject.params.uid)
    expect(result.openGraphUrl).toContain(`/blog/tag/${callObject.params.uid}/`)
  })

  it('should async data work with failed promise', async () => {
    const callObject = {
      store: {
        store: {
        },
      },
      params: {
        uid: '1',
      },
      error: jest.fn(),
    }
    const wrapper = shallowMount(Tag, {
      store,
      mocks,
      stubs,
      localVue,
    })
    await wrapper.vm.$options.asyncData.call(store, callObject)

    expect(callObject.error).toHaveBeenCalledTimes(1)
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Tag, {
      store,
      mocks,
      stubs,
      localVue,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.title).toBe(META_DATA.title)
  })
})
