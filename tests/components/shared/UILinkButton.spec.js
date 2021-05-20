import { render, screen } from '@testing-library/vue'
import UILinkButton from '@/components/shared/UILinkButton'

const props = {
  link: 'test',
  title: 'See all case studies',
}

const stubs = ['NuxtLink']

describe('UILinkButton', () => {
  it('should render correctly with props data', () => {
    const { container } = render(UILinkButton, {
      props,
      stubs,
    })

    expect(screen.queryByText('See all case studies')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
