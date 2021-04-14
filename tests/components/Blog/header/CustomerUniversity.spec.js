import CustomerUniversity from '@/components/Blog/header/CustomerUniversity'
import { render, screen } from '@testing-library/vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import mockedStore from '../../../__mocks__/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('customer university header component', () => {
  const store = mockedStore

  const postList = [
    {
      chapter_name: [
        {
          spans: [],
          text: 'Chapter 1',
          type: 'heading1',
        },
      ],
      cu_post: {
        id: 'unknownId',
        isBroken: false,
        lang: 'en-us',
        link_type: 'Document',
        slug: 'adadadad',
        tags: [],
        type: 'customer_university',
        uid: 'cu-test',
      },
    },
    {
      chapter_name: [
        {
          spans: [],
          text: 'Chapter 2',
          type: 'heading1',
        },
      ],
      cu_post: {
        id: store.modules.blogPost.state.post.id,
        isBroken: false,
        lang: 'en-us',
        link_type: 'Document',
        slug: 'adadadadaa',
        tags: [],
        type: 'customer_university',
        uid: 'cu-test-2',
      },
    },
  ]

  const clusterName = 'Pricing strategies in custom software development'

  const mocks = {
    $prismic: {
      asText: text => text[0].text,
    },
    $router: {
      push: jest.fn(),
    },
  }

  const stubs = ['PrismicImage', 'CommonHeader', 'NuxtLink']

  it('should render correctly with default props', () => {
    const { container } = render(CustomerUniversity, {
      mocks,
      stubs,
      store,
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with custom props', () => {
    render(CustomerUniversity, {
      props: {
        clusterName,
        postList,
      },
      mocks,
      stubs,
      store,
    })
    expect(screen.getByText(clusterName)).not.toBeNull()
  })

  it('should render correctly with custom props and id', () => {
    render(CustomerUniversity, {
      props: {
        clusterName,
        postList,
      },
      mocks,
      stubs,
      store,
    })

    expect(screen.getByText(clusterName)).not.toBeNull()
  })

  it('should correctly called $router.push after calling handleChange', () => {
    const wrapper = mount(CustomerUniversity, {
      propsData: {
        clusterName,
        postList,
      },
      mocks,
      stubs,
      store: new Vuex.Store(mockedStore),
      localVue,
    })

    wrapper.vm.handleChange({ value: 'cu-test-2', label: 'CUTest' })
    expect(mocks.$router.push).toHaveBeenCalledTimes(0)
    wrapper.vm.handleChange({ value: 'cu-test-333', label: 'CUTest' })
    expect(mocks.$router.push).toHaveBeenCalledTimes(1)
  })
})
