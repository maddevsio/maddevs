import MeetOurExperts from '@/components/About/MeetOurExperts.vue';
import {render, screen} from '@testing-library/vue';

describe('Meet Our Experts', () => {
  test('is a Vue instance', () => {
    const { container } = render(MeetOurExperts);

    expect(screen.getByText('Meet our experts')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('correctly length of elements in DOM', () => {
    const { container } = render(MeetOurExperts);

    expect(container.querySelectorAll('.meet-our_experts__expert-item')).toHaveLength(8);
  });
});
