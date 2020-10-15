import {
  mount
} from '@vue/test-utils';
import FooterContacts from '@/components/Footer/footer-contacts';

describe('Footer contacts', () => {
  let wrapper;
  const messengersMock = [
    {
      name: 'Messenger',
      className: 'messenger-facebook-messenger',
      link: 'https://facebook.com/maddevsllc'
    },
    {
      name: 'WhatsApp',
      className: 'messenger-watsapp',
      link: 'http://wa.me/996555771481'
    },
    {
      name: 'Telegram',
      className: 'messenger-telegram',
      link: 'https://t.me/mun_tamara/'
    },
    {
      name: 'WeChat',
      className: 'messenger-wechat',
      link: 'https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FICWluRgJH8tu0IisMQ1eEFo=wc'
    }
  ];

  beforeEach(() => {
    wrapper = mount(FooterContacts);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should check existence of data', () => {
    expect(wrapper.vm.$data.messengers).toEqual(messengersMock);
  });
});
