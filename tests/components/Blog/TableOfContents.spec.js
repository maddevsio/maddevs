import TableOfContents from '@/components/Blog/TableOfContents'
import { render, fireEvent, screen } from '@testing-library/vue'

describe('table of contents block in single post page', () => {
  const content = [
    {
      spans: [
        {
          data: {
            lunk_type: 'Web',
            url: 'https://#gallery',
          },
          start: 0,
          end: 7,
          type: 'hyperlink',
        },
      ],
      text: 'Gallery',
      type: 'list-item',
    },
    {
      spans: [
        {
          data: {
            lunk_type: 'Web',
            url: 'https://#main',
          },
          start: 0,
          end: 7,
          type: 'hyperlink',
        },
      ],
      text: 'Main',
      type: 'list-item',
    },
  ]

  it('should render correctly', () => {
    const { container } = render(TableOfContents, {
      props: {
        content,
      },
    })
    const element = screen.getAllByTestId('test-link-table')
    fireEvent.click(element[0])
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without spans property', async () => {
    render(TableOfContents, {
      props: {
        content: [
          {
            spans: [],
            text: 'Gallery',
            type: 'list-item',
          },
        ],
      },
    })

    const element = screen.getAllByTestId('test-link-table')
    await fireEvent.click(element[0])

    expect(element[0].innerHTML.trim()).toBe('Gallery')
  })
})
