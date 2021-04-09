export default [
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
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
        {
          type: 'paragraph',
          text: 'So, the goal of this article is to give a quick tour that will help you start using S3 right after reading.',
          spans: [
            {
              start: 4,
              end: 28,
              type: 'strong',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Here’s what we’ll do:',
          spans: [],
        },
        {
          type: 'o-list-item',
          text: 'Talk about creating and configuring a bucket',
          spans: [],
        },
        {
          type: 'o-list-item',
          text: 'Set up a public link to access a bucket',
          spans: [],
        },
        {
          type: 'o-list-item',
          text: 'Learn how to work with aws cli',
          spans: [],
        },
        {
          type: 'heading2',
          text: 'Creating and configuring a bucket',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'The first thing to do is to follow the link and click on the big orange button.',
          spans: [
            {
              start: 35,
              end: 43,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://aws.amazon.com/s3/',
                target: '_blank',
              },
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 1280,
          height: 634,
        },
        alt: 'Amazon S3.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/225fda2c-9279-41b3-ba06-c56867ac5237_amazons3.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'This button will redirect us to the login page. If you don’t have an account, you need to register.',
          spans: [],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 951,
          height: 621,
        },
        alt: 'Amazon S3 Sign In Page.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/06ea4bd2-a1e8-4179-aa5f-a21214a57a45_amazons3-1.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'Once the account is ready, select Root use rand click Next. Enter the password and log in. It should redirect you to the storage management page.',
          spans: [
            {
              start: 34,
              end: 43,
              type: 'strong',
            },
            {
              start: 54,
              end: 58,
              type: 'strong',
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 1280,
          height: 587,
        },
        alt: 'Amazon S3 Storage Management Page.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/7c891792-1036-4626-a01e-b835006ccd07_amazons3-2.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'Let’s not waste time but create a new bucket right away. The Create bucket button will help us do this.\nThis will open a page for creating a bucket, where there are a lot of settings. I will tell you about the most interesting ones.',
          spans: [
            {
              start: 61,
              end: 75,
              type: 'strong',
            },
          ],
        },
        {
          type: 'heading3',
          text: 'AWS Region',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'This parameter will allow you to select the server location that is closest to you or your clients. This will speed up data transfer and reduce latency, which is very important.',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'Block Public Access settings for this bucket',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'Settings to block public access to your bucket. AWS recommends blocking all access to keep current and future storage secure. You can read more here.',
          spans: [
            {
              start: 144,
              end: 148,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://aws.amazon.com/s3/features/block-public-access/',
                target: '_blank',
              },
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 761,
          height: 469,
        },
        alt: 'Block Public Access Settings.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/311ba820-448c-422c-bfe2-af891e028da4_amazons3-3.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'But we’ll still abandon these settings and use access policy that allows setting more flexible parameters.',
          spans: [],
        },
        {
          type: 'heading3',
          text: 'Bucket Versioning',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'A very useful feature that allows you to return deleted data or roll back any changes to the desired point.',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'S3 will store several versions of the file. For example, when deleted, a file gets a delete marker making it hidden; it becomes visually inaccessible, but physically present. So it can be recovered.',
          spans: [
            {
              start: 0,
              end: 2,
              type: 'strong',
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 762,
          height: 181,
        },
        alt: 'Amazon S3 Bucket Versioning Page.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/5715f817-5982-49eb-bff8-1058f0ec8ca3_amazons3-4.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'heading3',
          text: 'Tags',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'Tags are needed to label repositories: this allows you to group them, control access to objects, limit access to certain groups of people or vice versa, etc.',
          spans: [],
        },
        {
          type: 'paragraph',
          text: 'A tag is a key-value, as in security=true. In this case, for all objects that have the same tag, certain settings will be applied. But there is a limit: up to 10 tags can be added per object.',
          spans: [
            {
              start: 28,
              end: 41,
              type: 'strong',
            },
            {
              start: 159,
              end: 161,
              type: 'strong',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This information is enough for now. Scroll to the bottom of the page and click Create bucket. We will be redirected to a page with a list of buckets.',
          spans: [
            {
              start: 0,
              end: 34,
              type: 'strong',
            },
            {
              start: 79,
              end: 92,
              type: 'strong',
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 1016,
          height: 348,
        },
        alt: 'Amazon S3 Page with a List of Buckets.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/b17f9821-09d5-4ecc-bd7c-920274f04f6f_amazons3-5.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'But you may notice that accesses to the new bucket is not yet public. It needs to be configured. To do this, go to the bucket and open the Permissions tab.',
          spans: [
            {
              start: 139,
              end: 151,
              type: 'strong',
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 940,
          height: 339,
        },
        alt: 'Amazon S3 Permissions Tab Page.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/7066223d-79b5-4968-b59b-44900cc5daee_amazons3-6.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
  {
    slice_type: 'text',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      color: null,
      text: [
        {
          type: 'paragraph',
          text: 'First of all, we need to disable the default blocking, which I wrote about above. We won’t need it because all the accesses will be configured through Bucket policy.',
          spans: [
            {
              start: 151,
              end: 164,
              type: 'strong',
            },
          ],
        },
      ],
    },
  },
  {
    slice_type: 'image_with_caption',
    slice_label: null,
    items: [
      {},
    ],
    primary: {
      image: {
        dimensions: {
          width: 870,
          height: 445,
        },
        alt: 'Block Public Access Settings.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/27919a0c-cc52-41cd-b730-79d5983b4f8e_amazons3-7.png?auto=compress,format',
      },
      caption: [],
      enable_zoom: 'disable',
    },
  },
]
