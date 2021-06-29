import { render } from '@testing-library/vue'
import Post from '@/pages/customer-university/_uid.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import blogPost from '../../__mocks__/blogPost'

const DESCRIPTION = 'test description'

const store = {
  getters: {
    blogPageContent: () => ({ description: DESCRIPTION }),
  },
}

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
  post: blogPost,
  $store: {
    dispatch: jest.fn(),
  },
}

const localVue = createLocalVue()

localVue.use(Vuelidate)

const stubs = ['ShareNetwork', 'PostView']

describe('Post _uid component', () => {
  it('should render correctly', () => {
    const { container } = render(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    expect(container).toMatchSnapshot()
    expect(mocks.$store.dispatch).toHaveBeenCalledWith('getBlogAuthors')
  })

  it('should correctly work beforeRouteEnter method if from and to is empty', () => {
    const callObject = {
      next: jest.fn(),
    }
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter.call({}, null, null, callObject.next)
    expect(callObject.next).toHaveBeenCalledTimes(1)
  })

  it('should correctly work beforeRouteEnter method if from and to correct', () => {
    const vm = {
      post: {
        uid: '1',
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
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(2)
    expect(callObject.next).toHaveBeenLastCalledWith({ path: `/blog/${vm.post.uid}/` })
  })

  it('should correctly work beforeRouteEnter method if from and to equals', () => {
    const vm = {
      post: {
        uid: 2,
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
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.beforeRouteEnter(callObject.to, callObject.from, callObject.next)

    expect(callObject.next).toHaveBeenCalledTimes(1)
  })

  it('should correctly work fetch method', () => {
    const callObject = {
      cluster: null,
      getClusterData: jest.fn(),
      post: {
        id: '1',
      },
    }
    const wrapper = shallowMount(Post, {
      store,
      mocks,
      stubs,
      localVue,
    })

    wrapper.vm.$options.fetch.call(callObject)

    expect(callObject.getClusterData).toHaveBeenCalledTimes(1)
  })
})
