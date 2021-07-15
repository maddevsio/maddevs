import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import { fireEvent, render, screen } from '@testing-library/vue'
import RemoteTechStaff from '@/components/Services/RemoteTechStaff'

describe('RemoteTechStaff component', () => {
  let mockShowModalTeams = null
  let mockShowModalIndividuals = null

  beforeEach(() => {
    mockShowModalTeams = jest.fn()
    mockShowModalIndividuals = jest.fn()
  })

  afterEach(() => {
    mockShowModalTeams = null
    mockShowModalIndividuals = null
  })

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

  it('if call method "show" and ref modalTeams is undefined > "show" method in ref modalTeams not call', () => {
    const wrapper = shallowMount(RemoteTechStaff)
    wrapper.vm.showModalTeams()
    expect(mockShowModalTeams).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalTeams exist > "show" method in ref modalTeams call', () => {
    const wrapper = shallowMount(RemoteTechStaff, {
      stubs: {
        ModalTeams: {
          render(h) { return h('div') },
          methods: {
            show: mockShowModalTeams,
          },
        },
      },
    })
    wrapper.vm.showModalTeams()
    expect(mockShowModalTeams).toHaveBeenCalledTimes(1)
  })

  it('if call method "show" and ref modalIndividuals is undefined > "show" method in ref modalIndividuals not call', () => {
    const wrapper = shallowMount(RemoteTechStaff)
    wrapper.vm.showModalIndividuals()
    expect(mockShowModalIndividuals).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalIndividuals exist > "show" method in ref modalIndividuals call', () => {
    const wrapper = shallowMount(RemoteTechStaff, {
      stubs: {
        ModalIndividuals: {
          render(h) { return h('div') },
          methods: {
            show: mockShowModalIndividuals,
          },
        },
      },
    })
    wrapper.vm.showModalIndividuals()
    expect(mockShowModalIndividuals).toHaveBeenCalledTimes(1)
  })
})
