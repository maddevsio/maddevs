import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'

const refs = {
  container: {
    style: {
      marginBottom: '',
    },
  },
  cardsRightColumn: {
    style: {
      transform: 'translateY(-150px)',
    },
  },
}

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals)

    expect(container).toMatchSnapshot()
    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })

  it('method should get number in string and return', () => {
    const wrapper = mount(DevelopmentGoals)

    const result = wrapper.vm.getNumberFromString('string123')

    expect(result).toBe(123)
  })

  it('method should return zero if pass in params invalid value', () => {
    const wrapper = mount(DevelopmentGoals)

    const result = wrapper.vm.getNumberFromString({})

    expect(result).toBe(0)
  })

  it('method should return zero if pass in params empty string', () => {
    const wrapper = mount(DevelopmentGoals)

    const result = wrapper.vm.getNumberFromString('')

    expect(result).toBe(0)
  })

  it('method should set new marginBottom value for container', () => {
    const wrapper = mount(DevelopmentGoals)

    wrapper.vm.$refs = refs

    wrapper.vm.scrollHandler()

    expect(wrapper.vm.$refs.container.style.marginBottom).toBe('-150px')
  })
})
