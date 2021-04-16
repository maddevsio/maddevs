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
})
