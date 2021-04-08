import CardGoDeeFeature from '@/components/Cases/godee/cards/CardGoDeeFeature.vue'
import { render, screen } from '@testing-library/vue'

const props = {
  iconName: 'some-icon',
  title: 'feature-title',
}

describe('CardGoDeeFeature component', () => {
  it('should render correctly', () => {
    const { container } = render(CardGoDeeFeature, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render classname', () => {
    const { html } = render(CardGoDeeFeature, {
      props,
    })

    expect(screen.getByText(props.title)).toBeTruthy()
    expect(html()).toContain(`card-content_${props.iconName}-icon`)
  })
})
