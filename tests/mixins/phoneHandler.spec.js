import { phoneHandler } from '../../client/mixins/phoneHandler';

const INPUT_VALUE = 'zzzzz1234567890aaaa';
const OUTPUT_VALUE = '+1 2345-678-90';

describe('Phone Handler Mixin',   () => {
  test('Should return phone without letter symbols and with mask', () => {
    expect(phoneHandler.methods.phoneChangeHandler({target: {value: INPUT_VALUE}}).target.value).toBe(OUTPUT_VALUE);
  });
});

