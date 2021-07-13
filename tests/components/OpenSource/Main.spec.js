import Main from '@/components/OpenSource/Main'
import { render } from '@testing-library/vue'

const stubs = ['Banner', 'ParagraphSection', 'FeaturedProjects', 'Boilerplates', 'CTABanner']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
