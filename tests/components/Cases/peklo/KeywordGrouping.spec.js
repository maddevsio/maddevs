import KeywordGrouping from '@/components/Cases/peklo/KeywordGrouping'
import { render } from '@testing-library/vue'

const stubs = ['Picture']

describe('KeywordGrouping component', () => {
  it('should render correctly', () => {
    const { container } = render(KeywordGrouping, {
      stubs,
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
