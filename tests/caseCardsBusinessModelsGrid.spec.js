import {
  mount
} from '@vue/test-utils';
import CardsBusinessModelsGrid from '@/components/Cases/cards-content/CardsBusinessModelsGrid';

describe('CardsBusinessModelsGrid', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardsBusinessModelsGrid);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //
});
