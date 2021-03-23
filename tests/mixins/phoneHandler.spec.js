import { phoneHandler } from '../../client/mixins/phoneHandler';
import {shallowMount} from '@vue/test-utils';
import FooterContacts from '@/components/Footer/footer-contacts';

const INPUT_VALUE = 'zzzzz1234567890aaaa';
const OUTPUT_VALUE = '+1 2345-678-90';

describe('Phone Handler Mixin',   () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FooterContacts, { mixins: [phoneHandler] });
  });

  test('If we pass an incorrect parameter. The function will work, but it will not make changes in the store', () => {
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
    wrapper.vm.phoneChangeHandler([]);
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
  });

  test('Should return phone without letter symbols and with mask', () => {
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
    wrapper.vm.phoneChangeHandler({target: {value: INPUT_VALUE}});
    expect(wrapper.vm.$data.phoneNumber).toBe(OUTPUT_VALUE);
  });
});

