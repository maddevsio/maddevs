import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })

  it('should work handleScroll method with empty main element', () => {
    const callObject = {
      mainElement: null,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    const result = wrapper.vm.$options.methods.handleScroll.call(callObject)
    expect(result).toBeNull()
  })

  it('should work handleScroll method if inner width less then beak point', () => {
    const callObject = {
      mainElement: {
        scrollTop: 100,
      },
      setDefaultStylesForCards: jest.fn(),
    }

    window.innerWidth = 500

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScroll.call(callObject)
    expect(callObject.setDefaultStylesForCards).toHaveBeenCalledTimes(1)
  })

  it('should work handleScroll method if previous scroll will less then current', () => {
    const callObject = {
      mainElement: {
        scrollTop: 100,
      },
      previousScroll: 90,
      handleScrollDown: jest.fn(),
    }

    window.innerWidth = 1000

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScroll.call(callObject)
    expect(callObject.handleScrollDown).toHaveBeenCalledTimes(1)
  })

  it('should work handleScroll method if previous scroll will more then current', () => {
    const callObject = {
      mainElement: {
        scrollTop: 100,
      },
      previousScroll: 150,
      handleScrollUp: jest.fn(),
    }

    window.innerWidth = 1000

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScroll.call(callObject)
    expect(callObject.handleScrollUp).toHaveBeenCalledTimes(1)
  })
})
