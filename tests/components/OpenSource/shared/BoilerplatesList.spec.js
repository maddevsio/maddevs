import BoilerplatesList from '@/components/OpenSource/shared/BoilerplatesList'
import { render } from '@testing-library/vue'

const stubs = ['BoilerplatesListItem']

describe('BoilerplatesList component', () => {
  it('should render correctly', () => {
    const { container } = render(BoilerplatesList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
