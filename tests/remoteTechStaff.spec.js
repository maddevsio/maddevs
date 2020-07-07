import {
  mount
} from '@vue/test-utils';
import RemoteTechStaff from '@/components/Services/RemoteTechStaff';

describe('Remote tech staff', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RemoteTechStaff);
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
