import Boilerplates from '@/components/OpenSource/Boilerplates'
import { render } from '@testing-library/vue'

const stubs = ['TitleDesc', 'BoilerplatesList']

describe('Boilerplates component', () => {
  it('should render correctly', () => {
    const { container } = render(Boilerplates, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
