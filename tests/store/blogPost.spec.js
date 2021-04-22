import 'regenerator-runtime'
import { actions } from '@/store/modules/blogPost'

import { getBlogPost, getClusterData } from '@/api/blogPost'

jest.mock('@/api/blogPost', () => (
  {
    getBlogPost: jest.fn(() => 'test'),
    getClusterData: jest.fn(() => ([
      {
        items: [
          {
            cu_post: {
              id: 2,
            },
          },
        ],
      },
      {
        items: [
          {
            cu_post: {
              id: 1,
            },
          },
        ],
      },
    ])),
  }
))

actions.$prismic = {
  api: jest.fn(),
}

describe('BlogPost module actions', () => {
  it('should getBlogPost action correctly called and returned post', async () => {
    const post = await actions.getBlogPost()
    expect(post).toBe('test')
    expect(getBlogPost).toHaveBeenCalledTimes(1)
  })

  it('should getClusterData action correctly called and returned data', async () => {
    const clusterData = await actions.getClusterData(null, 1)
    expect(clusterData).toEqual({
      items: [
        {
          cu_post: {
            id: 1,
          },
        },
      ],
    })
    expect(getClusterData).toHaveBeenCalledTimes(1)
  })

  it('should getClusterData action correctly called and returned null', async () => {
    const clusterData = await actions.getClusterData(null, 55)
    expect(clusterData).toBeNull()
  })
})
