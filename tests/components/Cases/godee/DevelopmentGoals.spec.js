import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const getColumnOffset = (ref, rootBounding) => Math.abs(ref.getBoundingClientRect().bottom - rootBounding.bottom)

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

  it('getColumnOffset method should return 0 if ref param empty', () => {
    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    const result = wrapper.vm.$options.methods.getColumnOffset.call()
    expect(result).toBe(0)
  })

  it('getColumnOffset method should return abs if ref params correct', () => {
    const refObject = {
      getBoundingClientRect: () => ({ bottom: 100 }),
    }

    const rootBounding = {
      bottom: 50,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    const result = wrapper.vm.$options.methods.getColumnOffset.call({}, refObject, rootBounding)
    expect(result).toBe(Math.abs(50))
  })

  it('handleScrollDown method should work if incorrect sizes', () => {
    const callObject = {
      getColumnOffset,
      $refs: {
        cardsRootElem: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
          }),
        },
        cardsLeftColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 20,
            bottom: 10,
            left: 20,
            right: 20,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {
            transform: '',
          },
        },
        cardsContainer: {
          style: {
            height: '',
          },
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScrollDown.call(callObject)

    expect(callObject.$refs.developmentGoalsTitle.style.transform).toBe('')
    expect(callObject.$refs.cardsContainer.style.height).toBe('')
  })

  it('handleScrollDown method should work correct', () => {
    const callObject = {
      getColumnOffset,
      scrollSpeed: 2,
      paddingBottom: 20,
      cardsContainerHeight: 200,
      $refs: {
        cardsRootElem: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
          }),
        },
        cardsLeftColumn: {
          getBoundingClientRect: () => ({
            top: 20,
            bottom: 10,
            left: 20,
            right: 20,
          }),
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {},
        },
        cardsContainer: {
          style: {},
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScrollDown.call(callObject)

    expect(callObject.newHeight).toBe(130)
    expect(callObject.$refs.cardsRightColumn.style.transform).toBe('translateY(-50px)')
    expect(callObject.$refs.developmentGoalsTitle.style.transform).toBe('translateY(-50px)')
    expect(callObject.$refs.cardsContainer.style.height).toBe('130px')
  })

  it('handleScrollUp method should work correct and to be undefined if translateY more the rootBounding.top - this.headerHeight', () => {
    const callObject = {
      getColumnOffset,
      scrollSpeed: 3,
      cardsContainerHeight: 200,
      translateY: 100,
      $refs: {
        cardsRootElem: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
          }),
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {},
        },
        cardsContainer: {
          style: {},
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScrollUp.call(callObject)

    expect(callObject.$refs.cardsContainer.style.height).toBeUndefined()
  })

  it('handleScrollUp method should work correct if all condition truthy', () => {
    const callObject = {
      getColumnOffset,
      scrollSpeed: 3,
      cardsContainerHeight: 200,
      translateY: -100,
      newHeight: 15,
      $refs: {
        cardsRootElem: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
          }),
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {},
        },
        cardsContainer: {
          style: {},
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScrollUp.call(callObject)

    expect(callObject.$refs.cardsContainer.style.height).toBe(`${callObject.newHeight}px`)
  })

  it('handleScrollUp method should work correct and to be undefined if translateY more the cardsContainerHeight less then newHeight', () => {
    const callObject = {
      getColumnOffset,
      scrollSpeed: 3,
      cardsContainerHeight: 100,
      translateY: -100,
      newHeight: 150,
      $refs: {
        cardsRootElem: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
          }),
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {},
        },
        cardsContainer: {
          style: {},
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.handleScrollUp.call(callObject)

    expect(callObject.$refs.cardsContainer.style.height).toBeUndefined()
  })

  it('handleScrollUp method should work correct setDefaultStylesForCards method', () => {
    const callObject = {
      getColumnOffset,
      scrollSpeed: 3,
      cardsContainerHeight: 100,
      translateY: -100,
      newHeight: 150,
      $refs: {
        cardsContainer: {
          getBoundingClientRect: () => ({
            top: 100,
            bottom: 100,
            left: 0,
            right: 10,
            height: 200,
          }),
          style: {},
        },
        cardsRightColumn: {
          getBoundingClientRect: () => ({
            top: 120,
            bottom: 90,
            left: 10,
            right: 0,
          }),
          style: {},
        },
        developmentGoalsTitle: {
          style: {},
        },
      },
      headerHeight: 200,
    }

    const wrapper = shallowMount(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.setDefaultStylesForCards.call(callObject)

    expect(callObject.cardsContainerHeight).toBe(callObject.$refs.cardsContainer.getBoundingClientRect().height)
    expect(callObject.$refs.cardsRightColumn.style.transform).toBe('translateY(0px)')
    expect(callObject.$refs.developmentGoalsTitle.style.transform).toBe('translateY(0px)')
    expect(callObject.$refs.cardsContainer.style.height).toBe('100%')
  })
})
