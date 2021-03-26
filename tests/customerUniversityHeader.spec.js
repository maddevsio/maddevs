import { mount } from '@vue/test-utils'
import CustomerUniversity from '../client/components/Blog/header/CustomerUniversity'

describe('customer university header component', () => {
  let wrapper

  const propsData = {
    document: {
      featured_image: {
        alt: null,
        copyright: null,
        dimensions: {
          height: 452,
          width: 780,
        },
        url:
          'https://images.prismic.io/superpupertest/82f90d05-8c22-49c1-bf1e-8721a0e3eda6_Constructing+a+Map+in+the+Mercator+Projection+for+Android.png?auto=compress,format',
      },
      subtitle: [
        {
          spans: [],
          text: 'adadadad',
          type: 'heading1',
        },
      ],
      title: [
        {
          spans: [],
          text: 'adadadad',
          type: 'heading1',
        },
      ],
    },
    postList: [
      {
        chapter_name: [
          {
            spans: [],
            text: 'Chapter 1',
            type: 'heading1',
          },
        ],
        cu_post: {
          id: 'YAGi7REAACMAgV8d',
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
          id: 'YAGi7REAACMAgV8d',
          isBroken: false,
          lang: 'en-us',
          link_type: 'Document',
          slug: 'adadadadaa',
          tags: [],
          type: 'customer_university',
          uid: 'cu-test-2',
        },
      },
    ],
    clusterName: 'Pricing strategies in custom software development',
    id: 'YAGi7REAACMAgV8d',
  }

  beforeEach(() => {
    wrapper = mount(CustomerUniversity, {
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      propsData,
      stubs: ['v-select', 'common-header', 'router-link'],
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
