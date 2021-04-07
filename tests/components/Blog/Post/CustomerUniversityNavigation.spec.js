import { render } from '@testing-library/vue'
import CustomerUniversityNavigation from '@/components/Blog/Post/CustomerUniversityNavigation'

describe('cuNavigation', () => {
  const clusterPosts = [
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
  ]

  it('is a Vue instance', () => {
    const { container, html } = render(CustomerUniversityNavigation, {
      stubs: ['NuxtLink'],
      props: {
        clusterPosts,
        cluster: {
          items: clusterPosts,
          primary: {
            cluster_name: 'Pricing strategies in custom software development',
            read_more_text: 'Read more about pricing strategies',
          },
        },
        id: '123qweasd',
      },
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
    })

    expect(html()).not.toContain('current')
    expect(container).toMatchSnapshot()
  })

  it('is a Vue instance with equal id', () => {
    const { html } = render(CustomerUniversityNavigation, {
      stubs: ['NuxtLink'],
      props: {
        clusterPosts,
        cluster: {
          items: clusterPosts,
          primary: {
            cluster_name: 'Pricing strategies in custom software development',
            read_more_text: 'Read more about pricing strategies',
          },
        },
        id: 'YAGi7REAACMAgV8d',
      },
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
    })
    expect(html()).toContain('current')
  })
})
