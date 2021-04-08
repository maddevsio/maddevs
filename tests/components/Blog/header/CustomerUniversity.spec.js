import CustomerUniversity from '@/components/Blog/header/CustomerUniversity'
import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'

describe('customer university header component', () => {
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
        id: 'YAGi7REAACMAgV8d2',
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

  const props = {
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
    id: 'YAGi7REAACMAgV8d',
  }

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
      props,
      mocks,
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with custom props', () => {
    props.id = 'YAGi7REAACMAgV8d'
    render(CustomerUniversity, {
      props: {
        ...props,
        clusterName,
        postList,
      },
      mocks,
      stubs,
    })
    expect(screen.getByText(clusterName)).not.toBeNull()
  })

  it('should render correctly with custom props and id', () => {
    props.id = 'YAGi7REAACMAgV8d2'
    render(CustomerUniversity, {
      props: {
        ...props,
        clusterName,
        postList,
      },
      mocks,
      stubs,
    })

    expect(screen.getByText(clusterName)).not.toBeNull()
  })

  it('should correctly called $router.push after calling handleChange', () => {
    const wrapper = mount(CustomerUniversity, {
      propsData: {
        ...props,
        clusterName,
        postList,
      },
      mocks,
      stubs,
    })

    wrapper.vm.handleChange({ value: 'cu-test-2', label: 'CUTest' })
    expect(mocks.$router.push).toHaveBeenCalledTimes(0)
    wrapper.vm.handleChange({ value: 'cu-test-333', label: 'CUTest' })
    expect(mocks.$router.push).toHaveBeenCalledTimes(1)
  })
})
