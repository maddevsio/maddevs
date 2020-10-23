import {
  mount
} from '@vue/test-utils';
import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation';
describe('Infrastructure optimisation', () => {
  let wrapper;
  const props = {
    whatMakes: {
      title: 'What makes us stand out from others?',
      subTitle: 'Optimising teams don’t care for tomorrow’s traffic peaks? We care!',
      paragraph: 'We don\'t just have experience with infrastructure management tools, our team helped develop some of them. We know where to get the cheapest price and the best service.',
      className: 'first-item'
    },
    upToSaving: {
      title: 'Up to 50% savings on infrastructure',
      subTitle: 'Pay-as-you-go receipts from your cloud providers make you curse them?',
      paragraph: 'Our fire brigade can help you optimise resource consumption like we\'ve done for 75% of our customers. We’ll reconfigure and disable every option or service that is not necessary.',
      className: 'second-item'
    },
    buttonInnerText: 'Get an infrastructure audit',
    modalWindowName: 'infrastructure-modal'
  };
  beforeEach(() => {
    wrapper = mount(InfrastructureOptimisation);
  });
  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //
  it('sets correct data', () => {
    expect(wrapper.vm.$data).toEqual(props);
  });
});
