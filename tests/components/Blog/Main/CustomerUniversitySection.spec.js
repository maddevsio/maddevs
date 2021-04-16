import { render } from '@testing-library/vue'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
import { shallowMount } from '@vue/test-utils'
import postDataArray from '../../../__mocks__/postDataArray'
import getFirstParagraph from '../../../../client/helpers/getFirstParagraph'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

describe('customer University section component', () => {
  it('is a Vue instance', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs: ['PrismicImage'],
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work computed clusters', () => {
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    const callParams = {
      master: {
        data: {
          body: ['1', '2', '3', '4'],
        },
      },
    }
    const result = wrapper.vm.$options.computed.clusters.call(callParams)
    expect(result).toHaveLength(callParams.master.data.body.length)
  })

  it('should correct work computed firstParagraph', () => {
    const LIMIT_FROM_COMPONENT = 150
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    const callParams = {
      featured: {
        body: postDataArray,
      },
    }
    const result = wrapper.vm.$options.computed.firstParagraph.call(callParams)
    expect(result).toBe(getFirstParagraph(postDataArray, LIMIT_FROM_COMPONENT))
  })

  it('correctly work master watcher', () => {
    const nextTick = jest.fn()
    mocks.$nextTick = nextTick
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    wrapper.vm.$options.watch.master.call({
      $nextTick: nextTick,
    })
    expect(nextTick).toHaveBeenCalledTimes(1)
  })

  it('correctly work api method if haven\'t featured_cu', () => {
    const getSingleFunction = jest.fn()
    const getByUIDFunction = jest.fn()

    const callObject = {
      $prismic: {
        api: {
          getSingle: () => {
            getSingleFunction()
            return {
              data: {
                featured_cu: {
                },
              },
            }
          },
          getByUID: () => {
            getByUIDFunction()
            return {
              data: {
                date: '2021-01-21',
              },
            }
          },
        },
      },
    }
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    wrapper.vm.$options.fetch.call(callObject)
    expect(getSingleFunction).toHaveBeenCalledTimes(1)
    expect(getByUIDFunction).toHaveBeenCalledTimes(0)
  })

  it('correctly work api method', async () => {
    const getSingleFunction = jest.fn()
    const getByUIDFunction = jest.fn()

    const callObject = {
      $prismic: {
        api: {
          getSingle: () => {
            getSingleFunction()
            return {
              data: {
                featured_cu: {
                  uid: '12',
                },
              },
            }
          },
          getByUID: () => {
            getByUIDFunction()
            return {
              data: {
                date: '2021-01-21',
              },
            }
          },
        },
      },
    }
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    await wrapper.vm.$options.fetch.call(callObject)
    expect(getSingleFunction).toHaveBeenCalledTimes(1)
    expect(getByUIDFunction).toHaveBeenCalledTimes(1)
  })

  it('should correct work computed firstParagraph with empty body', () => {
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    const callParams = {
      master: {},
    }
    const result = wrapper.vm.$options.computed.clusters.call(callParams)
    expect(result).toHaveLength(0)
  })

  it('should correct work computed clusters if show all param false', () => {
    mocks.showAll = true
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    const callParams = {
      showAll: false,
      clusters: ['1', '2', '3', '4', '5', '6'],
    }
    const result = wrapper.vm.$options.computed.clustersToShow.call(callParams)
    expect(result).toHaveLength(3)
  })

  it('should correct work computed clusters if show all param true', () => {
    mocks.showAll = true
    const wrapper = shallowMount(CustomerUniversitySection, {
      mocks,
    })

    const callParams = {
      showAll: true,
      clusters: ['1', '2', '3', '4', '5', '6'],
    }
    const result = wrapper.vm.$options.computed.clustersToShow.call(callParams)
    expect(result).toHaveLength(callParams.clusters.length)
  })
})
