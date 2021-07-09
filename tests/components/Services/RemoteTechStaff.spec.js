import 'regenerator-runtime'
import RemoteTechStaff from '@/components/Services/RemoteTechStaff'
import { fireEvent, render, screen } from '@testing-library/vue'

describe('RemoteTechStaff component', () => {
  it('should render correctly', () => {
    const { container } = render(RemoteTechStaff)

    expect(container).toMatchSnapshot()
  })

  it('should correct mouse out event', async () => {
    const { container } = render(RemoteTechStaff)

    const element = screen.getByTestId('test-term')
    expect(container.innerHTML).toContain('remoteTechStaffContent__tech-staff-teams')
    await fireEvent.mouseMove(element)
    await fireEvent.mouseOver(element)
    await fireEvent.mouseOut(element)
    expect(container.innerHTML).toContain('remoteTechStaffContent__tech-staff-active')
  })
})
