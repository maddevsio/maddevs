import FileInput from '@/components/Careers/FileInput'
import Careers from '@/components/Careers/Careers'
import { fireEvent, render, screen } from '@testing-library/vue'

const file = new File([new ArrayBuffer(1)], 'file.pdf')
const fileWithLongName = new File([new ArrayBuffer(1)], 'verfdwfeyveryLongnameForFilePDFPDF')
const MAX_FILE_LENGTH = 25

describe('fileInput component', () => {
  it('Render correctly', () => {
    const { container } = render(FileInput, { parentComponent: Careers })

    expect(container).toMatchSnapshot()
  })

  it('is Vue instance', async () => {
    const { emitted } = render(FileInput, { parentComponent: Careers })

    const input = screen.getByTestId('test-file')
    await fireEvent.change(input, {
      target: { files: [file] },
    })
    const label = screen.getByTestId('test-file-label')
    expect(emitted().input).toHaveLength(1)
    expect(label.textContent.trim()).toBe(file.name)
  })

  it('is Vue instancdsfe', async () => {
    render(FileInput, { parentComponent: Careers })

    const input = await screen.getByTestId('test-file')
    await fireEvent.change(input, {
      target: { files: [fileWithLongName] },
    })
    const label = screen.getByTestId('test-file-label')
    expect(label.textContent.trim()).toBe(`${fileWithLongName.name.substring(0, MAX_FILE_LENGTH)}...`)
  })
})
