import {
  mount
} from '@vue/test-utils';
import SJMCVideo from '@/components/Cases/SJMCVideo';

describe('SJMCVideo', () => {
  let wrapper;
  const VueVideoStub = {
    render: () => {},
    methods: {
      onended: () => {}
    }
  };

  beforeEach(() => {
    wrapper = mount(SJMCVideo, {
      mocks: {
        $nuxt: {
          $on: jest.fn()
        }
      },
      stubs: {
        'SJMCVideo': VueVideoStub
      }
    });
    wrapper.vm.$refs = { 
      video: {
        paused: true,
        pause: jest.fn(),
        play: jest.fn(),
        onended: jest.fn()
      },
      videoContainer: {
        requestFullscreen: jest.fn()
      }
    };
    global.document.exitFullscreen = jest.fn();
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('videoSetState function should call play', () => {
    const spyPlay = jest.spyOn(wrapper.vm.$refs.video, 'play');
    wrapper.vm.videoSetState();
    expect(spyPlay).toHaveBeenCalled();
    spyPlay.mockReset();
  });

  test('videoSetState function should call pause', () => {
    wrapper.vm.$refs.video.paused = false;
    const spyPause = jest.spyOn(wrapper.vm.$refs.video, 'pause');
    wrapper.vm.videoSetState();
    expect(spyPause).toHaveBeenCalled();
    spyPause.mockReset();
  });

  test('exitFullscreen should change fullscreenModIsActive value', () => {
    wrapper.vm.$data.fullscreenModIsActive = true;
    wrapper.vm.exitFullscreen();
    expect(wrapper.vm.$data.fullscreenModIsActive).toEqual(false);
  });

  test('emitHandler should change fullscreenModIsActive value', () => {
    const spyRequestFullscreen = jest.spyOn(wrapper.vm.$refs.videoContainer, 'requestFullscreen');
    wrapper.vm.$data.fullscreenModIsActive = false;
    wrapper.vm.emitHandler();
    expect(spyRequestFullscreen).toHaveBeenCalled();
    expect(wrapper.vm.$data.fullscreenModIsActive).toEqual(true);
    spyRequestFullscreen.mockReset();
  });
});
