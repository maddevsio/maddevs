import {
  mount
} from '@vue/test-utils';

import ExpectedTeamSize from '@/components/ui/expected-team-size';

describe('Expected team size', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ExpectedTeamSize, {
      propsData: {
        inputId: 'input id'
      }
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(typeof ExpectedTeamSize.methods.sendSelectedTeamSize).toBe('function');
  });

  test('correctly props data', () => {
    expect(wrapper.props().inputId).toBe('input id');
  });

  test('teamSizeItems must contain three elements', () => {
    expect(wrapper.vm.$data.teamSizeItems).toHaveLength(3);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.expected-team_size__radio-label');
    expect(contentItems).toHaveLength(3);
  });
});
