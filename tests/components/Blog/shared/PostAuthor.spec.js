import { render } from '@testing-library/vue'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import { shallowMount } from '@vue/test-utils'

const mocks = {
  $prismic: {
    asText: text => text,
  },
}

const props = {
  document: {
    author: 'some-author',
    author_image: {
      url: 'some-url',
    },
    author_title: 'author_title',
  },
}

describe('text slice component', () => {
  it('should render correctly', () => {
    const { container } = render(PostAuthor, {
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work watcher', () => {
    const remove = jest.fn()
    const add = jest.fn()
    const callObject = {
      $refs: {
        authorImage: {
          classList: {
            remove,
            add,
          },
        },
      },
    }
    const wrapper = shallowMount(PostAuthor, {
      propsData: props,
      mocks,
    })

    wrapper.vm.$options.watch.document.call(callObject)

    expect(remove).toHaveBeenCalledTimes(1)
    expect(add).toHaveBeenCalledTimes(1)
  })
})
