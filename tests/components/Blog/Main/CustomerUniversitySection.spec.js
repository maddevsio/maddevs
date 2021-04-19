import { render } from '@testing-library/vue'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'

describe('customer University section component', () => {
  it('is a Vue instance', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: () => '',
        },
      },
      store: {
        modules: {
          blog: {
            state: {
              customerContent: {
                featured_cu: {
                  uid: 'uid',
                },
              },
              featuredCUPost: {
                body: [],
                post_author: {
                  id: 'id',
                },
                featured_image: {
                  url: '',
                },
              },
            },
            getters: {
              customerContent(state) {
                return state.customerContent
              },
              featuredCUPost(state) {
                return state.featuredCUPost
              },
            },
          },
          blogAuthors: {
            state: {
              authors: [],
            },
            getters: {
              allAuthors(state) {
                return state.authors
              },
            },
          },
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
