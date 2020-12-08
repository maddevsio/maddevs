import {
  mount
} from '@vue/test-utils';

import ListTeamItem from '@/components/Cases/ListTeamItem';

describe('List team item', () => {
  let wrapper;
  let props = {
    name: 'Name',
    position: 'Position',
    pictureFolder: 'nambafood',
    fileName: 'iphone-video-preview',
    fileExtension: 'png',
    alt: 'alt'
  };

  beforeEach(() => {
    wrapper = mount(ListTeamItem, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props);
  });

  test('should have correct content in child elements', () => {
    const teamItemName = wrapper.find('.case_team-item__name');
    const teamItemPosition = wrapper.find('.case_team-item__position');
    expect(teamItemName.text()).toEqual('Name');
    expect(teamItemPosition.text()).toEqual('Position');
  });
});
