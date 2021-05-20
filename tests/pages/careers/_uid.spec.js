import { render } from '@testing-library/vue'
import Vacancy from '@/pages/careers/_uid.vue'
import { createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate'

const store = {
  getters: {
    vacancy: () => ({
      labels: {
        remote: true,
        relocation: false,
      },
    }),
  },
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $v: {
    name: {
      $touch: jest.fn(),
    },
    position: {
      $touch: jest.fn(),
    },
    grade: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    cvFile: {
      $touch: jest.fn(),
    },
    $reset: jest.fn(),
    validationGroup: {},
  },
  $store: {
    dispatch: jest.fn(),
  },
  buildEmail: jest.fn(),
  resetForm: jest.fn(),
  $refs: {
    fileInput: {
      reset: jest.fn(),
    },
    radioButtons: {
      reset: jest.fn(),
    },
  },
  $lazyLoad: {
    init: jest.fn(),
  },
  featureFlag: jest.fn(),
}

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('Careers _uid component', () => {
  it('should render correctly', () => {
    const { container } = render(Vacancy, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
