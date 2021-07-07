import VacancyText from '@/components/slices/Careers/VacancyText'
import { render } from '@testing-library/vue'

describe('VacancyText slice component', () => {
  const props = {
    slice: {
      items: [
        {
          text_icon: '☑️',
          text_title: 'Title',
          text_content: 'Content',
        },
      ],
      primary: {},
    },
    htmlSerializer: () => {},
  }

  it('is a Vue instance', () => {
    const { container } = render(VacancyText, {
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
