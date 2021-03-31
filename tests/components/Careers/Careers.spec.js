import { createLocalVue } from '@vue/test-utils'
import Careers from '@/components/Careers/Careers'
import Vuelidate from 'vuelidate'
import { render } from '@testing-library/vue'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('careersForm component', () => {
  it('Render correctly', () => {
    const { container } = render(Careers, {
      localVue,
    })

    expect(container).toMatchSnapshot()
  })
})
