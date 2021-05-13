import { render, screen } from '@testing-library/vue'
import UILinkButton from '@/components/shared/UILinkButton'

const props = {
  link: 'test',
  title: 'See all case studies',
}

const stubs = ['NuxtLink']

const expected = `<nuxtlink-stub class="ui-link-btn_link" to="${props.link}">${props.title}</nuxtlink-stub>`

describe('UILinkButton', () => {
  it('should render correctly with props data', () => {
    const { container } = render(UILinkButton, {
      props,
      stubs,
    })

    expect(screen.queryByText(expected)).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
