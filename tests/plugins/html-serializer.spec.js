import serializer from '@/plugins/html-serializer'

describe('html-serializer function', () => {
  it('renders empty with incorrect type', () => {
    const properties = {
      type: 'error-type',
      element: {
        type: 'error-type',
        text: 'Thank you!',
        spans: [],
      },
      content: null,
      children: ['Create a file called logger.js in the `middlewares` folder and put some simple code in it.'],
    }

    const result = serializer(properties.type, properties.element, properties.content, properties.children)
    expect(result).toBeNull()
  })
  describe('html-serializer hyperlink', () => {
    it('renders correctly with hyperlink', () => {
      const properties = {
        type: 'hyperlink',
        element: {
          start: 24,
          end: 51,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://nuxtjs.org/',
            target: '_blank',
          },
        },
        content: 'official Nuxt documentation',
        children: [
          'official Nuxt documentation',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<a href="${properties.element.data.url}" target="'_blank'" rel="noopener">${properties.children[0]}</a>`)
    })

    it('renders correctly with hyperlink without target', () => {
      const properties = {
        type: 'hyperlink',
        element: {
          start: 24,
          end: 51,
          type: 'hyperlink',
          data: {
            link_type: 'Web',
            url: 'https://nuxtjs.org/',
          },
        },
        content: 'official Nuxt documentation',
        children: [
          'official Nuxt documentation',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<a href="${properties.element.data.url}" >${properties.children[0]}</a>`)
    })

    it('renders correctly with hyperlink if type equals document', () => {
      const properties = {
        type: 'hyperlink',
        element: {
          start: 24,
          end: 51,
          type: 'hyperlink',
          data: {
            link_type: 'Document',
            url: '/about',
            target: '_blank',
          },
        },
        content: 'official Nuxt documentation',
        children: [
          'official Nuxt documentation',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<NuxtLink to="/not-found/">${properties.children[0]}</NuxtLink>`)
    })
  })

  describe('html-serializer images', () => {
    it('renders correctly with images', () => {
      const properties = {
        type: 'image',
        element: {
          url: 'some-url',
          linkTo: 'linkTo',
          type: 'image',
          data: {
            link_type: 'Document',
            url: '/about',
            target: '_blank',
          },
        },
        content: 'Image content',
        children: [
          'Image content',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p class=" block-img"><a href="" ><img src="${properties.element.url}" alt="" copyright=""></a></p>`)
    })

    it('renders correctly with images if type equals document', () => {
      const properties = {
        type: 'image',
        element: {
          url: 'some-url',
          linkTo: {
            link_type: 'Document',
          },
          type: 'image',
          data: {
            link_type: 'Document',
            url: '/about',
            target: '_blank',
          },
        },
        content: 'Image content',
        children: [
          'Image content',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p class=" block-img"><NuxtLink to="/not-found/"><img src="${properties.element.url}" alt="" copyright=""></NuxtLink></p>`)
    })

    it('renders correctly with images if type equals document with blank', () => {
      const properties = {
        type: 'image',
        element: {
          url: 'some-url',
          linkTo: {
            link_type: 'Web',
            target: '_blank',
          },
          type: 'image',
          data: {
            link_type: 'Document',
            url: '/about',
          },
        },
        content: 'Image content',
        children: [
          'Image content',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p class=" block-img"><a href="" target="_blank" rel="noopener"><img src="${properties.element.url}" alt="" copyright=""></a></p>`)
    })

    it('renders correctly with images if lint to is empty', () => {
      const properties = {
        type: 'image',
        element: {
          url: 'some-url',
          type: 'image',
          data: {
            link_type: 'Document',
            url: '/about',
            target: '_blank',
          },
        },
        content: 'Image content',
        children: [
          'Image content',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p class=" block-img"><img src="${properties.element.url}" alt="" copyright=""></p>`)
    })
  })

  describe('html-serializer row tags', () => {
    it('renders correctly with paragraph', () => {
      const properties = {
        type: 'paragraph',
        element: {
          type: 'paragraph',
          text: 'Thank you!',
          spans: [],
        },
        content: null,
        children: ['Create a file called logger.js in the `middlewares` folder and put some simple code in it.'],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p>${properties.children[0]
        .replace(/`([^`]*)`/g, (match, p) => `<span class="inline-code">${p}</span>`)}</p>`)
    })

    it('renders correctly with list item', () => {
      const properties = {
        type: 'group-list-item',
        element: {
          type: 'group-list-item',
          spans: [],
          text: '',
        },
        content: null,
        children: [
          '<li>Update list of files</li>',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<ul>${properties.children[0]}</ul>`)
    })

    it('renders correctly with ol list item', () => {
      const properties = {
        type: 'group-o-list-item',
        element: {
          type: 'group-o-list-item',
          spans: [],
          text: '',
        },
        content: null,
        children: [
          '<li>Talk about creating and configuring a bucket</li>',
          '<li>Set up a public link to access a bucket</li>',
          '<li>Learn how to work with aws cli</li>',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<ol>${
        properties.children.join('')
      }</ol>`)
    })

    it('renders correctly with processed children item', () => {
      const properties = {
        type: 'paragraph',
        element: {
          type: 'paragraph',
          text: 'Amazon S3 is a cloud storage platform. It is mainly used for storing pictures and video files. This service is free for 12 months after the first registration. When the period expires, or if you exceed the limit, you will be persistently asked to start paying for the use of the service. You can read about the rates here.',
          spans: [
            {
              start: 0,
              end: 9,
              type: 'strong',
            },
            {
              start: 0,
              end: 9,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://aws.amazon.com/s3/',
                target: '_blank',
              },
            },
            {
              start: 317,
              end: 321,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc',
                target: '_blank',
              },
            },
          ],
        },
        content: null,
        children: [
          '<a href="https://aws.amazon.com/s3/" target="\'_blank\'" rel="noopener">Amazon S3</a>',
          ' is a cloud storage platform. It is mainly used for storing pictures and video files. This service is free for 12 months after the first registration. When the period expires, or if you exceed the limit, you will be persistently asked to start paying for the use of the service. You can read about the rates ',
          '<a href="https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc" target="\'_blank\'" rel="noopener">here</a>',
          '.',
        ],
      }

      const result = serializer(properties.type, properties.element, properties.content, properties.children)
      expect(result).toBe(`<p>${properties.children.map(item => item.replace(/<a href="http[^"]*"/, match => `${match} target="_blank"`)).join('')}</p>`)
    })
  })
})
