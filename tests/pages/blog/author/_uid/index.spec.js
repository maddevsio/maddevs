import '@testing-library/vue'
import Author from '@/pages/blog/author/_uid/'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

const storeObj = {
  getters: {
    blogAuthor: () => () => 'seo',
  },
  actions: {
    getAuthorPosts: jest.fn(),
  },
}

const META_DATA = {
  title: 'Mad Devs: Software & Mobile App Development Company | Blog Author',
  metaTitle: `${storeObj.getters.blogAuthor()()} | Blog`,
  description: '',
  url: '',
  jsonLd: '{"@context": "http://www.schema.org", "@type": "Organization", "name": "Mad Devs Group LTD - Custom Software Development Company", "url": "https://maddevs.io", "logo": "https://maddevs.io/Open-Graph.png", "foundingDate": "2016", "email": "team@maddevs.io", "description": "Mad Devs Group LTD is a software development company headquartered in Cambridge (UK), which specializes in developing highly scalable, enterprise-level software solutions. Since the year 2016, the Mad Devs Group LTD team has developed 50+ projects and online services for finance, transportation & logistics, security, edtech, and advertising industries. The company’s customers are based in the United States, Australia, United Kingdom, France, Germany, Switzerland, Austria, Poland, Vietnam, Singapore, Russia, and CIS countries.", "address": {"@type": "PostalAddress", "streetAddress": "Salisbury House, Station Road", "addressLocality": "Cambridge", "addressRegion": "UK", "postalCode": "CB12LA"}, "contactPoint": {"@type": "ContactPoint", "contactType": "customer service", "telephone": "+442039848555"}, "sameAs": ["https://www.facebook.com/maddevsllc", "http://www.linkedin.com/company/mad-devs", "https://blog.maddevs.io", "https://clutch.co/profile/mad-devs", "https://www.glassdoor.com/Overview/Working-at-Mad-Devs-EI_IE2507466.11,19.htm", "https://twitter.com/MadDevsIO", "https://www.insAuthorram.com/maddevsio", "https://www.crunchbase.com/organization/mad-devs", "https://github.com/maddevsio", "https://www.behance.net/maddevs"]}',
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
}

const stubs = ['ShareNetwork', 'PostView']

describe('Author _uid component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Author, {
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
    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })
    const result = await wrapper.vm.$options.asyncData.call(store, callObject)
    expect(mocks.$store.dispatch).toHaveBeenCalledWith('getBlogAuthor', callObject.params.uid)
    expect(result.openGraphUrl).toContain(`/blog/author/${callObject.params.uid}/`)
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
    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })
    await wrapper.vm.$options.asyncData.call(store, callObject)

    expect(callObject.error).toHaveBeenCalledTimes(1)
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    expect(actual.title).toBe(META_DATA.title)
  })

  it('should correctly work beforeRouteEnter method if from and to is empty', () => {
    const callObject = {
      next: jest.fn(),
    }
    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter.call(wrapper.vm, null, null, callObject.next)
    expect(callObject.next).toHaveBeenCalledTimes(1)
  })

  it('should correctly work beforeRouteEnter method if from and to correct', () => {
    const vm = {
      $store: {
        state: {
          blogAuthors: {
            author: {
              uid: '123',
            },
          },
        },
      },
    }

    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })

    const callObject = {
      from: {},
      to: {
        params: {
          uid: ' 2',
        },
      },
      next: jest.fn(callback => {
        if (typeof callback === 'function') {
          callback(vm)
        }
      }),
    }

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(2)
    expect(callObject.next).toHaveBeenLastCalledWith(
      { path: `/blog/author/${vm.$store.state.blogAuthors.author.uid}/` },
    )
  })

  it('should correctly work beforeRouteEnter method if from and to equals', () => {
    const vm = {
      $store: {
        state: {
          blogAuthors: {
          },
        },
      },
    }

    const callObject = {
      from: {},
      to: {
        params: {
          uid: ' 2',
        },
      },
      next: jest.fn(callback => {
        if (typeof callback === 'function') {
          callback(vm)
        }
      }),
    }
    const wrapper = shallowMount(Author, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(1)
  })
})
