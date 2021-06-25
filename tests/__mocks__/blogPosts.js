export default [
  {
    id: 'X-i-4xEAACAAEpsd',
    uid: 'software-architecture-design',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-i-4xEAACAAEpsd%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Frontend development',
      'Editors pick',
      'Software Development ',
      'Mobile Development',
    ],
    first_publication_date: '2020-12-27T17:05:42+0000',
    last_publication_date: '2021-04-08T18:41:33+0000',
    slugs: [
      'software-architecture-101---introduction-to-the-world-of-application-design',
      'software-architecture-101',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Software Architecture 101 - Application Design | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'A brief introduction to software architecture: from business requirements to code in production, and an introduction to the world of application design.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Software architecture 101 - introduction to the world of application design',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2020-12-17',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Application Design Proccess.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/93d447b6-2865-4da7-ad2c-5cd07c98d4e3_8.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG8-ABAAANBN9vUd',
        type: 'author',
        tags: [],
        slug: 'nuradil-alymkulov',
        lang: 'en-us',
        uid: 'nuradil-alymkulov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Nuradil Alymkulov',
          spans: [],
        },
      ],
      author_title: 'Senior full-stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Nuradil Alymkulov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/002ba1c8-1a49-4213-bdd0-84764643fcf0_Nuradil.jpg?auto=compress,format&rect=451,0,3277,3277&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\r\n{ "@context": "https://schema.org", \r\n "@type": "BlogPosting",\r\n "mainEntityOfPage": {\r\n         "@type": "WebPage",\r\n         "@id": "https://maddevs.io/blog/software-architecture-design/"\r\n      },\r\n "headline": "Software Architecture 101",\r\n "alternativeHeadline": "We have 3 main and 3 spare servers with a lot of launched applications. Every application writes logs in the JSON-strings format into Syslog. In the near future, we will need to collect logs from a lot of Windows machines, but this is a completely different story.",\r\n "image":\r\n"https://images.prismic.io/superpupertest/93d447b6-2865-4da7-ad2c-5cd07c98d4e3_8.jpeg?auto=compress,format",\r\n "editor": "Nuradil Alymkulov", \r\n "genre": "Backend development", \r\n "keywords": "application design.", \r\n "publisher": {\r\n   },\r\n"url":"https://maddevs.io/blog/software-architecture-design/",\r\n "datePublished": "2020-12-17",\r\n "dateCreated": "2020-12-17" ,\r\n "dateModified": "2021-02-15",\r\n "description": "A quick intro to Software Architecture: from business requirements to code in production.",\r\n "articleBody": "Once we set goals for the application architecture, we can start preparing Sequence Diagrams. Sequence Diagrams are great for translating business requirements into a distinct set of operations between various application components. Also, given Sequence Diagrams of the app, we could refactor architecture & planned functionality to reduce complexity & increase the app\'s effectiveness even before writing a single line of code!\r\n",\r\n   "author": {\r\n    "@type": "Person",\r\n    "name": "Nuradil"\r\n  }\r\n },\r\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Hello, everyone!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Today, I would like to introduce you to the world of application design.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Designing applications can be called a multidisciplinary task, and it includes:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'a study of design patterns',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'a study of rules for describing architectural schemes',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'knowledge of algorithms and data structures',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'knowledge of distributed computing principles',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Why should we build an application architecture?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I want to consider the question — Why should we build an application architecture? I will ask 4 additional questions, which will hopefully answer the main one:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'What main components (modules) can an application be divided into?',
                spans: [
                  {
                    start: 0,
                    end: 66,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'How to share responsibility between components?',
                spans: [
                  {
                    start: 0,
                    end: 47,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'How to prepare the application for future changes?',
                spans: [
                  {
                    start: 0,
                    end: 50,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'How much will it cost to develop?',
                spans: [
                  {
                    start: 0,
                    end: 33,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'What main components (modules) can an application be divided into?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The question “Why divide” arises? It will allow us to:',
                spans: [
                  {
                    start: 14,
                    end: 24,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Reduce the interdependence of parts of the code',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Provide code testability, especially in case of unit tests',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Clearly delineate the responsibilities of each component',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Identify frequently used components and make them common (using polymorphism, in particular)',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Determine which pattern (abstraction) to apply to an application',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Once we set goals for the application architecture, we can start preparing Sequence Diagrams. Sequence Diagrams are great for translating business requirements into a distinct set of operations between various application components. Also, given Sequence Diagrams of the app, we could refactor architecture & planned functionality to reduce complexity & increase the app\'s effectiveness even before writing a single line of code!',
                spans: [
                  {
                    start: 75,
                    end: 92,
                    type: 'strong',
                  },
                  {
                    start: 75,
                    end: 92,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Sequence_diagram',
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
                width: 1400,
                height: 993,
              },
              alt: 'Initial Sequence Diagram.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/c8fafe23-f6d1-4cb9-b673-d43bc91fbfc8_Initial+Sequence+Diagram+.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Initial Sequence Diagram',
                spans: [],
              },
            ],
            enable_zoom: 'enable',
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
                width: 1400,
                height: 1196,
              },
              alt: 'Sequence Diagram after Refactoring.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/dc40d840-fdac-4312-b448-67647785290b_Sequence+Diagram+after+refactoring.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Sequence Diagram after refactoring',
                spans: [],
              },
            ],
            enable_zoom: 'enable',
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
                width: 1400,
                height: 741,
              },
              alt: 'Components Diagram.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/204ae3a8-3619-4699-b776-61ddf05081cf_Components+Diagram.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Components Diagram',
                spans: [],
              },
            ],
            enable_zoom: 'enable',
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
                text: 'After defining the application\'s tasks and functions, we turn to a Component Diagram with a description of the components themselves and their relationships.',
                spans: [
                  {
                    start: 67,
                    end: 84,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'How to share responsibility between components?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I mentioned polymorphism and design patterns. And on these topics, I would like to elaborate because entering abstractions into the code allows distinguishing components and their roles in the application more clearly.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Among the design patterns, I would like to highlight the following:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Facade',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Strategy',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Inversion of Control — which is actually an architectural principle',
                spans: [],
              },
              {
                type: 'heading4',
                text: 'Facade',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It is a structural design pattern that provides a simple interface to a complex system of components (classes, libraries, etc.)',
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
                width: 468,
                height: 1007,
              },
              alt: 'Simple Interface to a Complex System of Components.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f90c1c7e-69b2-4d13-a8fb-eab238b2cec0_9.png?auto=compress,format',
            },
            caption: [],
            enable_zoom: 'enable',
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
                type: 'heading4',
                text: 'Strategy',
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
                width: 1400,
                height: 1252,
              },
              alt: 'Behavioral Design Pattern.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/381eb16a-3854-4122-95e6-62edfc16c93b_Behavioral+Design+Pattern..png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
            enable_zoom: 'enable',
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
                text: 'This behavioral design pattern defines a family of similar algorithms and places each of them in its own class, after which the algorithms can be interchanged right at runtime.',
                spans: [],
              },
              {
                type: 'heading4',
                text: 'Inversion of Control',
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
                width: 800,
                height: 565,
              },
              alt: 'Inversion of Control.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/84e6ba16-2fe2-48f4-9f4f-3267c51c726d_Inversion+of+Control..png?auto=compress,format',
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
                text: 'This is an architectural principle where the framework controls the program control flow, and the custom code is embedded at specific execution points. ReactJS is a good example of IoC principle usage. Much of the application logic is implemented and controlled by the framework itself, so the software developer\'s sole responsibility is to alter the framework’s behavior at provided points (useState, useEffect, etc.)',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'How to prepare the application for future changes?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'With the architectural schemes and TOR in place, you can already begin to plan tasks for implementation and provide for future changes. Here, I used the word “provide” intentionally. Of course, architects are not visionaries, but as they get more experience, they learn to see and predict the vector of the application. In practice, few tasks require a fundamental redevelopment of the application or the business model — unless, of course, we are talking about an MVP or some unique features that need to be implemented.',
                spans: [
                  {
                    start: 419,
                    end: 422,
                    type: 'em',
                  },
                  {
                    start: 419,
                    end: 422,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Also, by applying a certain abstraction, we already have predictable tools to implement most ideas, and this allows us to keep time-to-market on a certain level.',
                spans: [],
              },
            ],
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
                text: 'How much will it cost to develop?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And this is one of the key questions that the architect and architectural schemes are trying to answer. The cost of software development itself depends on many factors, but the main one is the programmer’s time needed to write a working application with which the end-user can already interact. The architect\'s task is to define — together with the business and project managers — a minimum sufficient set of functions for each stage of project development. The next task is to proceed to develop the schemes of each of the parts (modules) without losing focus on the entire application as a whole and the features implemented in the late stages of development. It is possible because you can create a super tricked-out application on paper but fail to implement it within a reasonable timeframe.',
                spans: [
                  {
                    start: 108,
                    end: 136,
                    type: 'strong',
                  },
                  {
                    start: 108,
                    end: 136,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/customer-university/custom-software-development-pricing-strategies/',
                    },
                  },
                  {
                    start: 328,
                    end: 331,
                    type: 'strong',
                  },
                  {
                    start: 328,
                    end: 331,
                    type: 'em',
                  },
                  {
                    start: 378,
                    end: 381,
                    type: 'strong',
                  },
                  {
                    start: 378,
                    end: 381,
                    type: 'em',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/case-studies/godee/',
                embed_url: 'https://maddevs.io/case-studies/godee/',
                type: 'link',
                version: '1.0',
                title: 'Mad Devs Case Study: GoDee - Convenient Shuttle Bus Service',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://maddevs.io/godee.png',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/case-studies/godee/"><h1>Mad Devs Case Study: GoDee - Convenient Shuttle Bus Service</h1><img src="https://maddevs.io/godee.png"><p>GoDee is a transportation app and management panel to commute in Ho Chi Minh City, Vietnam. Users can find routes, select the time, book seats and pay for the ride online.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading4',
                text: 'Who should do it?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'All this time, I’ve been mentioning the architect, and you may have the question — Who is the architect? In my understanding, an architect is a person with a lot of development experience at different levels and with analytical skills. And no matter how controversial it sounds, every member of the team can be an architect at different stages of making architectural diagrams.',
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
                width: 1000,
                height: 767,
              },
              alt: 'Flow Diagrams Which Reflect a Specific Implementation of Application Logic.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/d3e4040e-4e5d-497f-8618-f4f59f163ded_Flow+Diagrams+Which+Reflect+a+Specific+Implementation+of+Application+Logic..png?auto=compress,format',
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
                text: 'For example, flow diagrams should reflect a specific implementation of logic, but if you have a multi-component application, preparing only flow diagrams for the whole logic can take an indecent amount of time. So it is important to delegate this work to the developers of this very logic. It will allow both parallelizing the work and identifying the pitfalls. After all, the developers have expertise in their subject areas and can identify controversial points in the whole architecture.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'However, when delegating authority, it is important to give one person or group of people the right to make or reject changes in architecture because only architects have the fullness of the picture.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To summarize, maintaining architecture is a team effort, and the more involved the developers are, the more predictable the development itself becomes.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Does everything end after drawing?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Of course not! Development requires creativity at every moment, and it is not uncommon to have to change the plan and the code on the fly. Still, at this point, it is crucial to calculate the change in the architectural plans and, if all is well, start the development.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'The architecture of the application is a living organism, and we should support it all the time.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Therefore, the architectural plans are developing all the time as the application itself is developing.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'That’s all I have. Thank you for your attention.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Also read about the cost of a mistake in a hardware project.',
                spans: [
                  {
                    start: 5,
                    end: 9,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/cost-of-errors-in-hardware-projects/',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/a54a2a8c-8e10-4c8b-ba72-dc8a8948114e_Engineering+your+growth+with+cat+white.jpg?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=software-architecture-101#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X9sU3BIAACgA8IBX',
    uid: 'how-to-make-three-paid-eta-services-one-free',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9sU3BIAACgA8IBX%22%29+%5D%5D',
    tags: [
      'Mobile Development',
      'Software features',
      'Editors pick',
      'Android development',
      'iOS development',
    ],
    first_publication_date: '2020-12-17T08:20:50+0000',
    last_publication_date: '2021-04-08T19:10:06+0000',
    slugs: [
      'how-to-make-three-paid-eta-services-one-free',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'How to Make Three Paid ETA Services One Free | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'How to process more than 350,000 requests per month free using three free ETA (estimated time of arrival) services instead of one paid.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'How to make three paid ETA services one free',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: 'How to process more than 350,000 requests per month free using three free ETA (estimated time of arrival) services instead of one paid.',
          spans: [],
        },
      ],
      date: '2020-12-17',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'How to Make Three Paid ETA Services One Free.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/7b3c67c5-b80e-488d-ad0e-e90745ede392_1_q9EOHqrYhaLpY1ZIL0C4Qw.jpeg?auto=compress,format&rect=0,1,1260,683&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG9GZBAAANBN9xts',
        type: 'author',
        tags: [],
        slug: 'meder-akkozov',
        lang: 'en-us',
        uid: 'meder-akkozov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Meder Akkozov',
          spans: [],
        },
      ],
      author_title: 'Backend developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Meder Akkozov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/c30a343a-6be0-4fdf-8278-423440811478_Meder+Akkozov.jpg?auto=compress,format&rect=0,37,4016,4016&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\r\n{ "@context": "https://schema.org", \r\n "@type": "BlogPosting",\r\n "mainEntityOfPage": {\r\n         "@type": "WebPage",\r\n         "@id": "https://maddevs.io/blog/how-to-make-three-paid-eta-services-one-free/"\r\n      },\r\n "headline": "How to Make Three Paid ETA Services One Free",\r\n "alternativeHeadline": "How to process more than 350,000 requests per month free using three free ETA (estimated time of arrival) services instead of one paid.",\r\n "image":\r\n"https://images.prismic.io/superpupertest/7b3c67c5-b80e-488d-ad0e-e90745ede392_1_q9EOHqrYhaLpY1ZIL0C4Qw.jpeg?auto=compress,format",\r\n "editor": "Meder Akkozov", \r\n "genre": "Mobile Development", \r\n "keywords": "ETA, GoDee project", \r\n "publisher": {\r\n   },\r\n "url":\r\n"https://maddevs.io/blog/how-to-make-three-paid-eta-services-one-free/",\r\n "datePublished": "2020-12-17",\r\n "dateCreated": "2020-12-17" ,\r\n "dateModified": "2021-02-14",\r\n "description": " How to process more than 350,000 requests per month free using three free ETA (estimated time of arrival) services instead of one paid.",\r\n "articleBody": "GoDee is a public transportation app. Bus transportation by GoDee is more convenient than motorbikes common for Southeast Asia and cheaper than a taxi. The app-based system allows users to find an appropriate route, select the time, book the seat, and pay for the ride online. And one of the problems of GoDee is traffic jams that severely impact the user experience. Users get tired of waiting and get annoyed by trying to guess the bus arrival time. So, to make the commuting more convenient, it needed service to calculate the bus\'s approximate arrival time, aka ETA.",\r\n   "author": {\r\n    "@type": "Person",\r\n    "name": "Meder "\r\n  }\r\n },\r\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'This is a story on how to not spend even a penny by using three ETA (estimated time of arrival) services instead of one. Everything is based on my personal experience working as a back-end developer at GoDee project. GoDee is a start-up project that offers booking seats on a bus online.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'text',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            color: '#000000',
            text: [
              {
                type: 'heading2',
                text: 'Prehistory',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'GoDee is a public transportation app. Bus transportation by GoDee is more convenient than motorbikes common for Southeast Asia and cheaper than a taxi. The app-based system allows users to find an appropriate route, select the time, book the seat, and pay for the ride online. And one of the problems of GoDee is traffic jams that severely impact the user experience. Users get tired of waiting and get annoyed by trying to guess the bus arrival time. So, to make the commuting more convenient, it needed service to calculate the bus’s approximate arrival time, aka ETA.',
                spans: [
                  {
                    start: 11,
                    end: 36,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/case-studies/godee/',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Developing ETA from scratch would take at least a year. So, to speed up the process, GoDee decided to implement the Google Distance Matrix API tool. Later they developed their own Pifia micro-service.',
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
                width: 250,
                height: 429,
              },
              alt: 'Developing ETA.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/5ce8f4cc-c59c-4f1e-bc04-0382868ae09d_1_vq9Ao08BtAdAMx5OYhbSlA.gif?auto=compress,format',
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
                type: 'heading2',
                text: 'Problems',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Over time, the business grew, and the user base increased. We encountered a problem with increasing requests in the Google Distance Matrix API.',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'Why is this a problem?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Because every request costs money, Google API provides 10.000 free queries per month, after which every 1.000 queries are charged $20. At that time, we had about 150,000 requests per month.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'My mentor was very dissatisfied with that. And said that the system should change caching to store ETA every 30 minutes. At that time, the system sent requests to the Google API every 3 seconds to get fresh data. However, such a caching algorithm wasn’t efficient, since minibusses were stuck in traffic. And so the distance only changed once every ten minutes. There was another nuance. For example, five users are asking for information about the same bus, and this is the same request. The cache solved this type of problem.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'b5afbe4eaee9881c6c1c9b69104ebfd7',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'cache.go',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Alternative services',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The cache worked, but not for long since GoDee grew even further and faced the same problem — the number of queries has increased again.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It was decided to replace the Google API with OSRM. Basically, OSRM is a service for building a route based on ETA (this is a rough but the short description, if you need details, here is the link).',
                spans: [
                  {
                    start: 192,
                    end: 196,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'http://project-osrm.org/',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'The Open Source Routing Machine or OSRM is a C++ implementation of a high-performance routing engine for the shortest paths in road networks.',
                spans: [],
              },
            ],
            name_of_the_author: [
              {
                type: 'paragraph',
                text: 'Wikipedia.',
                spans: [],
              },
            ],
            portrait_author: {
              mobile: {},
            },
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
                text: 'OSRM has one problem: it builds routes and calculates ETA without taking traffic into account. To solve this problem, I started looking for services that can provide information about traffic in the specified part of the city. HERE Traffic was providing the data I needed. After a little study of the documentation, I wrote a small code that gets traffic information every 30 minutes. And to upload traffic information to OSRM, I wrote a small script with the command `./osrm-contract data.osrm --segment-speed-file updates.csv` (more details here).',
                spans: [
                  {
                    start: 543,
                    end: 547,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/Project-OSRM/osrm-backend/wiki/Traffic',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Math time: every half of the hour, there is a request to HERE to get traffic information this are two requests per hour, that is, a day is 48 requests (24 * 2 = 48) and a month is about ≈ 1.488 (48*31 = 1.488) a year 17.520. Yes, we have these free requests from HERE for 15 years would be enough.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '0416c59e3361b0c9fb0167b5731a8ae8',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'getTrafficInfo.go',
                spans: [],
              },
            ],
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
                text: 'Preliminary tests showed that the service works perfectly, but there is a problem, HERE gives traffic information in “gibberish” and the data does not match the OSRM format. In order for the information to fit, you need to use another service HERE for geocoding + OSRM (for getting points on the map). This is approximately 450.000 requests per month. Later, OSRM was abandoned because the number of requests exceeded the free limit. We didn’t give up and enabled the HERE Distance Matrix API and temporarily removed the Google Distance Matrix API. The logic HERE is simple: we send coordinates from point A to point B and get the bus arrival time.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '771763acde0aa9bb31c7bb79d57926a9',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'here.go',
                spans: [],
              },
            ],
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
                text: 'After we installed everything on the test server and started checking, we received the first feedback from the testers. They said that ETA reads the time incorrectly. We started looking for the problem, looked at logs (we used Data dog for logs), logs, and tests showed that everything works perfectly. We decided to ask about the problem in a little more detail, and it turned out that if the car is in traffic for 15 minutes, ETA shows the same time. We decided that this is because of the cache because it stores the original time and does not update it for 30 minutes.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We started looking for the problem, at the beginning we checked the data on the web version of the HERE Distance Matrix API (which is called we go here), everything worked fine, we received the same ETA. This problem was also checked on the google map service. There was no problem. The services themselves show this ETA. We explained everything to testers and businesses, and they accepted everything.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Our team lead suggested connecting another ETA service and returning the Google API as a backup option and writing code with the logic of switching services (the switch was needed if the requests pass the free number of requests).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The code works the following way:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'val = getCount() // getting the number of queries usedif getMax() <= val { // checking for the limit of free requests for the service usednewService = switchService(s) // // if the limit is reached, switch the service returnreturn newService(from, to) // giving the logic of the new service ',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We found the following Mapbox service, connected it, installed it, and it worked. As a result, our ETA had:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: '“Here” — 250,000 free requests per month\nGoogle — 10,000 free requests per month\nMapbox — 100,000 free requests per month',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Always look for alternatives, sometimes it happens that the business doesn\'t want to pay the money for the service and refuses it. As a developer who has worked hard on the service, you should bring the task to real use. This article describes how we were trying to connect more services for the free use of ETA because the business did not want to pay for the service.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'P.S. As a developer, I believe that if the tool is good and does its job well, then you can pay for the tool’s services (or find Open source projects :D).',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/da624849-000d-45ca-97e0-89e4040611b6_1_pFrBAz4SFU8003BPmKKe2Q.jpeg?auto=compress,format&rect=0,0,1400,350&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=eta-services#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X9vNKBIAACkA89BT',
    uid: 'web-app-deploy-to-glitch',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X9vNKBIAACkA89BT%22%29+%5D%5D',
    tags: [
      'Frontend development',
      'Editors pick',
      'Software Development ',
    ],
    first_publication_date: '2020-12-17T21:27:39+0000',
    last_publication_date: '2021-04-08T19:04:13+0000',
    slugs: [
      'web-app-deploy-to-glitch.com-',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Web App Deploy to Glitch.com 🥳 | Mad Devs Blog ',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Standard and non-standard deploy methods to glitch.com. Creation of special delivery packages that don’t add extra files and allow you to change settings without affecting the source files.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Web App Deploy to Glitch.com 🥳',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: 'Standard and non-standard deploy methods to glitch.com. Creation of special delivery packages that don’t add extra files and allow you to change settings without affecting the source files.',
          spans: [],
        },
      ],
      date: '2020-12-01',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Glitch.com + Node.js.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/1642c64c-6482-41c1-9a2e-c76c1040caa4_Glitch2.png?auto=compress,format&rect=0,5,680,369&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a4638fd8-2510-44f4-b5a7-471836923dca_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,262,262&w=40&h=40',
      },
      table_of_contents: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/web-app-deploy-to-glitch/"\n      },\n "headline": "Web App Deploy to Glitch.com 🥳",\n "alternativeHeadline": "Creation of special delivery packages",\n "image":\n"https://images.prismic.io/superpupertest/be3b3263-a5f1-444b-97b8-37302a21b73a_1_ss8qVJYmj4njzGc_Nf8UdA.png?auto=compress,format",\n "editor": "Alexander Vishnyakov", \n "genre": "Frontend development", \n "keywords": "glitch.com, FogCreek", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/web-app-deploy-to-glitch/",\n "datePublished": "2019-09-19",\n "dateCreated": "2019-09-19" ,\n "dateModified": "2021-02-12",\n "description": "Standard and non-standard deploy methods to glitch.com. Creation of special delivery packages that don\'t add extra files and allow you to change settings without affecting the source files  ",\n "articleBody": "Standard and non-standard deploy methods to glitch.com. Creation of special delivery packages that don\'t add extra files and allow you to change settings without affecting the source files. \nSo, this is the second part of my interaction with Glitch.com and in this part, we will talk about deployment methods, both standard and non-standard (which suits me better than the standard method). Here is the first part of the article. ",\n   "author": {\n    "@type": "Person",\n    "name": "Alexander "\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'So, this is the second part of my interaction with Glitch.com and in this part, we will talk about deployment methods, both standard and non-standard (which suits me better than the standard method). Here is the first part of the article.',
                spans: [
                  {
                    start: 51,
                    end: 61,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://glitch.com/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 200,
                    end: 204,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/meet-glitch-com/',
                    },
                  },
                  {
                    start: 200,
                    end: 238,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'A very cool feature that gives you a quick delivery method on `glitch.com`',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'You can also bind your repo from `Tools -> Git, Import, and Export`',
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
                width: 680,
                height: 377,
              },
              alt: 'Definitely a Space Opportunity.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/4c32089c-a170-4485-9139-c73258d99a2d_%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD+%D0%B1%D0%B5%D0%B7+%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%282%29.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Definitely a space opportunity',
                spans: [],
              },
            ],
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
                text: 'After all, every project on glitch.com is also a repository that can be downloaded.',
                spans: [
                  {
                    start: 28,
                    end: 39,
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
                width: 1199,
                height: 665,
              },
              alt: 'Definitely a Space Opportunity.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/1439fb02-e292-428f-83db-16d2babe1a96_glitch.png?auto=compress,format',
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
                text: 'And also we see the opportunity to download the project in this menu. And access to the git repository is possible through the following url https://api.glitch.com/git/your-project-name',
                spans: [
                  {
                    start: 141,
                    end: 185,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://api.glitch.com/git/your-project-name',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Also very convenient!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'But in my case, this method does not work, since you need to set different settings and patch several files. As I organized a non-standard deployment on glitch.com- about this, I will talk further.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/addled-deploy/',
                embed_url: 'https://maddevs.io/blog/addled-deploy/',
                type: 'link',
                version: '1.0',
                title: 'An Addled Deploy | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/da67f010-4576-4bf1-a645-f5ec21c11259_1_2mH33SBVn9qzMfPwiGSSUg.png?auto=compress,format&rect=0,15,1600,868&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/addled-deploy/"><h1>An Addled Deploy | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/da67f010-4576-4bf1-a645-f5ec21c11259_1_2mH33SBVn9qzMfPwiGSSUg.png?auto=compress,format&rect=0,15,1600,868&w=983&h=533"><p>As code has the concept of code smell, so the deploys have their own gradation of problems calling «Deploy Smell”. I would call “Deploy Smell” the deploy that is new but smells bad, i.e. the deployment is regular but done in a wrong way. </p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Custom deployment at glitch.com',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In any non-standard environment, seemingly convenient features become useless. And in any case, it’s always worth writing a command for `package.json`. And here the question always arises — “What is this script to write on? Bash? Maybe a third-party library? Maybe make a file?”.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'But the answer to this question is very simple. If a programming language allows you to write the script you need with satisfactory functionality, then always prefer to write a script in the programming language of your project. This will give you, first of all, the opportunity to understand the work of the script without studying additional material. And it is very convenient!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I actually did just that. I wrote a glitch.js script to create an archive with the necessary files for delivery. Collect only the necessary files, adjust the necessary settings, and create one archive, in my case zip. Zip is versatile and simple.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the script, to build the delivery archive, I used the archiver library — which provides a convenient interface for manipulating data.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Below is the standard part for any script using archiver.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'codeblock',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            language: 'css',
            code: [
            ],
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
                text: 'In this part of the script, the output of information about the archiving process and the file name are configured to redirect the stream generated by the archiver to this file. In order not to overwrite any previously created archive with the case, I added a time stamp in the name. What added uniqueness to each created archive.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now let’s move on to the most interesting — to the possibilities of archiver, which I immediately took advantage of.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Archiver features',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now you can move on to the payload:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Include `views` folder',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`archive.directory(\'views/\', \'views\')` — this command makes it possible to add a folder with all its contents to the archive, and if necessary, also rename it in the second parameter. I did not rename and indicated the original name.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Include db folder files with the exception of the `db/teams.json` file, since in it, you will need to make some tweaks.',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.glob(\'db/**/*, { ignore: [\'db/teams.json\'] });',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this case, I used no longer `directory` command but used glob, which allows me to specify without problems which files to exclude. All glob library options are supported.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Include `public` folder',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.directory(\'public/\', \'public\')',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Include `routes` folder',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.directory(\'routes/\', \'routes\')',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Include a bot file — so that you can run it along with the express server.',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.file(\'examples/rtmbot/index.js\', { name: \'bot.js\' });',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To add a file, the `file` method is used, where the path to it is transferred, and if you need to rename it, then the options for the file, in this case `{name:\'bot.js\'}`. Accordingly, this trick transfers the `index.js` file from subfolders to the root of the archive.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Similarly include a few more files',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.file(\'package-lock.json\', { name: \'package-lock.json\' });\narchive.file(\'README.md\', { name: \'README.md\' });\narchive.file(\'server.js\', { name: \'server.js\' });\narchive.file(\'helpers.js\', { name: \'helpers.js\' });',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Now you need to include the previously excluded `db/teams.json` file in the db folder. Why was this somersault made? All due to the nature of the archiver, I cannot replace a file already included in the archive. For this reason, you have to exclude the file from the initial addition and then separately process and drop it in the right place in the archive.',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'const teams = JSON.parse(fs.readFileSync(\'./db/teams.json\', \'utf8\'));\nteams[0].domain = DomainHost;\nteams[0].email_domain = DomainHost;\narchive.append(JSON.stringify(teams, \' \', 2), { name: \'db/teams.json\' });',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And it turns out, I read the file, change the necessary values in memory and write the changes in text form to a file called `{name:\'db/teams.json\'}`. To write any text content, you must use the `append` method with parameters.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Similarly, I fix the start command in `package.json` so as not to add anything there.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Indicate to the archiver that we have completed the formation of the contents of the archive.',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'archive.finalize();',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now our archive for delivery is ready and contains only the necessary files and nothing more.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '7ec21676ed28684ba8cf6a722a17becd',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'glitch.js',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'The delivery process of the created archive',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now you need to use the script launch locally or in the docker and create an archive file for delivery.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Add the appropriate commands to `package.json`',
                spans: [],
              },
              {
                type: 'preformatted',
                text: '"glitch:pack": "node ./scripts/glitch.js",\n"glitch:unpack": "unzip -o glitch_release_*.zip -d . && rm glitch_release_*.zip && refresh",',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Run the `npm run glitch:pack` command',
                spans: [],
              },
              {
                type: 'image',
                url: 'https://images.prismic.io/superpupertest/1b9ccddb-e8be-4e17-8307-a4aba01c86b4_4.png?auto=compress,format',
                alt: 'Execution of the Delivery Archive Creation Command.',
                copyright: null,
                dimensions: {
                  width: 1008,
                  height: 222,
                },
              },
              {
                type: 'paragraph',
                text: 'As a result, we will have an archive in the root of the project',
                spans: [],
              },
              {
                type: 'image',
                url: 'https://images.prismic.io/superpupertest/49bf4416-54f0-47f6-8235-1d1a7acfd0cc_5.png?auto=compress,format',
                alt: 'Archive at the Root of the Project.',
                copyright: null,
                dimensions: {
                  width: 478,
                  height: 142,
                },
              },
              {
                type: 'paragraph',
                text: 'We have an archive for delivery and in order not to use intermediate hosting for the file, we will use the built-in opportunity glitch.com. And this is the `assets` folder.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Let’s go to our project page and drag the created archive into assets, which through `drag-n-drop` will allow you to upload the file.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We have an archive for delivery and in order not to use intermediate hosting for the file, we will use the built-in opportunity glitch.com. And this is the assets folder.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Let’s go to our project page and drag the created archive into assets, which through drag-n-drop will allow you to upload the file.',
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
                width: 1200,
                height: 780,
              },
              alt: 'Download Archive after dran-n-drop',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/4e857a3c-667d-45f0-9d25-4c8dfa18dd1e_6.png?auto=compress,format&rect=0,0,1258,818&w=1200&h=780',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Download archive after dran-n-drop',
                spans: [],
              },
            ],
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
                text: 'Now we can observe the archive in the `assets` folder',
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
                width: 1200,
                height: 570,
              },
              alt: 'Archive in the Assets Folder.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/b963fd38-1685-42e5-aa5f-53f5852ae9f2_7.png?auto=compress,format&rect=0,0,1400,665&w=1200&h=570',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Archive in the assets folder',
                spans: [],
              },
            ],
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
                text: 'And now you need to go to the console, but before that, you need to copy the path for the archive to `assets`.',
                spans: [],
              },
              {
                type: 'image',
                url: 'https://images.prismic.io/superpupertest/44b078de-0bb6-47ff-af2d-69d7db656a58_8.png?auto=compress,format',
                alt: 'Copy URL to Download Archive.',
                copyright: null,
                dimensions: {
                  width: 1400,
                  height: 1121,
                },
              },
              {
                type: 'paragraph',
                text: 'To copy the URL, click on the archive image and in the pop-up window click on the `Copy` button. Everything is now the URL to the archive in memory.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Go to the console!',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Console Actions',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We need `wget` to download the archive to the docker from the assets folder.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Go to `Tools -> Full Page Console`',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The console opens and we enter the command',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'wget -O glitch_release_1567145124325.zip https://cdn.glitch.com/b8270189-9c01-441b-9193-4f09ed636e4b%2Fglitch_release_1567145124325.zip?v=1567145294956',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'What allows you to download the archive file inside the container',
                spans: [],
              },
              {
                type: 'image',
                url: 'https://images.prismic.io/superpupertest/5949dc21-36c2-442c-b098-41c0086d90f9_9.png?auto=compress,format',
                alt: 'Downloading the Archive File to the Root of the Current Folder.',
                copyright: null,
                dimensions: {
                  width: 1400,
                  height: 519,
                },
              },
              {
                type: 'paragraph',
                text: 'Downloading the archive file to the root of the current folder',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And now we need to execute the command',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'unzip -o glitch_release_*.zip -d . && rm glitch_release_*.zip && refresh',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In order to unzip the archive to the root of the project folder with replacing files, as well as deleting the downloaded archive and executing the refresh command so that the changes are reflected in the UI',
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
                width: 680,
                height: 377,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/e7f283e7-d9b5-4eba-b9f6-183ad19e5a90_UNZIP.png?auto=compress,format',
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
                text: 'But we need this large command only during the first scan of the archive. In subsequent times, the team will help us',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'npm run glitch:unpack',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Which will execute the above command.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Thus, the delivery took place! Now you can use the menu `Show -> In New Window` or `Show -> Next to The Code`',
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
                width: 1200,
                height: 839,
              },
              alt: 'Show Menu to Choose How to View Your Creation.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/8759bdcd-f639-4881-b932-f5dc3755b1f5_12.png?auto=compress,format&rect=0,0,572,400&w=1200&h=839',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Show menu to choose how to view your creation',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this simple way, you can create special delivery packages that, unlike exporting the repository, do not add extra files and allow you to change settings without affecting the source files. Since it is not always possible to change any settings through environment variables.\nI hope in this article you will learn something new and useful for use in your work.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/8b8577f4-2d71-4d56-acfa-d5468bb16b69_Engineering+your+growth+with+projects.jpg?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=deploy-glitch#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-OUxhEAACMA-7gp',
    uid: 'effective-refactoring-of-heavy-database-interface',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-OUxhEAACMA-7gp%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Editors pick',
      'Software Development ',
    ],
    first_publication_date: '2020-12-23T19:04:43+0000',
    last_publication_date: '2021-04-08T19:03:06+0000',
    slugs: [
      'effective-refactoring-of-a-heavy-database-interface',
      'effective-refactoring-of-heavy-database-interface',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Effective Refactoring of Heavy Database Interface | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'How to refactor heavy database interface in Golang step-by-step to make it more readable, flexible, maintainable, and easy to work with.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Effective refactoring of a heavy database interface',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: 'How to refactor heavy database interface in Golang step-by-step to make it more readable, flexible, maintainable, and easy to work with.',
          spans: [],
        },
      ],
      date: '2020-07-14',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'From Total Mess to Order in Several Steps.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/d9fd1cce-d1a8-44fa-b90c-11fa2834c824_1_vlNV_wVecX-_9r55T7E2-w.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG860hAAACIA9ubS',
        type: 'author',
        tags: [],
        slug: 'anatoliy-fedorenko',
        lang: 'en-us',
        uid: 'anatoliy-fedorenko',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Anatoliy Fedorenko',
          spans: [],
        },
      ],
      author_title: 'Backend developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Anatoliy Fedorenko.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/d40d9f3c-cc9d-42b8-a10b-61b6a1fb1220_Anatoliy+Fedorenko.jpg?auto=compress,format&rect=307,0,3076,3076&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\r\n{ "@context": "https://schema.org", \r\n "@type": "BlogPosting",\r\n "mainEntityOfPage": {\r\n         "@type": "WebPage",\r\n         "@id": "https://maddevs.io/blog/effective-refactoring-of-heavy-database-interface/"\r\n      },\r\n "headline": "Effective Refactoring of Heavy Database Interface",\r\n "alternativeHeadline": "How to refactor heavy database interface in Golang step-by-step to make it more readable, flexible, maintainable, and easy to work with.",\r\n "image":\r\n"https://images.prismic.io/superpupertest/d9fd1cce-d1a8-44fa-b90c-11fa2834c824_1_vlNV_wVecX-_9r55T7E2-w.jpeg?auto=compress,format",\r\n "editor": "Anatoliy Fedorenko", \r\n "genre": "Backend development", \r\n "keywords": " Gorm,  SOLID, ", \r\n "publisher": {\r\n   },\r\n "url":\r\n"https://maddevs.io/blog/effective-refactoring-of-heavy-database-interface/",\r\n "datePublished": "2020-07-14",\r\n "dateCreated": "2020-07-14" ,\r\n "dateModified": "2021-02-14",\r\n "description": "  How to refactor heavy database interface in Golang step-by-step to make it more readable, flexible, maintainable, and easy to work with. ",\r\n "articleBody": "This story is about pain, agony, and denial of ready-made solutions. It is also about changes that improve the code\'s readability and help the development team stay happy. The object of this post is an interface that helps a program communicate with a database.\r\nDisclaimer: If we would use various ORMs such as Gorm in this project, most probably we would not face this issue, yet, we decided to write our implementation, so this created the issue and therefore this post.\r\n",\r\n   "author": {\r\n    "@type": "Person",\r\n    "name": "Anatoliy "\r\n  }\r\n },\r\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'This story is about pain, agony, and denial of ready-made solutions. It is also about changes that improve the code’s readability and help the development team stay happy. The object of this post is an interface that helps a program communicate with a database.',
                spans: [
                  {
                    start: 202,
                    end: 211,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Disclaimer: If we would use various ORMs such as Gorm in this project, most probably we would not face this issue, yet, we decided to write our implementation, so this created the issue and therefore this post.',
                spans: [
                  {
                    start: 0,
                    end: 11,
                    type: 'strong',
                  },
                  {
                    start: 36,
                    end: 40,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/avelino/awesome-go#orm',
                      target: '_blank',
                    },
                  },
                  {
                    start: 49,
                    end: 53,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://gorm.io/',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '513972b8ef185e871a7fdbabc9b462b3',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Heavy interface for database interactions',
                spans: [],
              },
            ],
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
                text: 'The problem with this interface was its size — 130+ methods in one single interface! That’s a lot of methods and that is not what SOLID interface should look like. And since we develop in Go, we have to know (and follow) one of the Go proverbs which are:',
                spans: [
                  {
                    start: 130,
                    end: 135,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/better-programming/solid-principles-simple-and-easy-explanation-f57d86c47a7f',
                      target: '_blank',
                    },
                  },
                  {
                    start: 228,
                    end: 243,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://go-proverbs.github.io/',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'The bigger the interface, the weaker the abstraction.',
                spans: [],
              },
            ],
            name_of_the_author: [
              {
                type: 'paragraph',
                text: 'Rob Pike',
                spans: [],
              },
            ],
            portrait_author: {
              mobile: {},
            },
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/how-to-start-with-logging-in-golang-projects-part-1/',
                embed_url: 'https://maddevs.io/blog/how-to-start-with-logging-in-golang-projects-part-1/',
                type: 'link',
                version: '1.0',
                title: 'How to Start with Logging in Go Projects. Part 1 | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/2767800e-7419-4f93-a9d2-cabde13b22b8_1_6mY93Z3wBTUpcRdEvhIBeg.jpeg?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/how-to-start-with-logging-in-golang-projects-part-1/"><h1>How to Start with Logging in Go Projects. Part 1 | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/2767800e-7419-4f93-a9d2-cabde13b22b8_1_6mY93Z3wBTUpcRdEvhIBeg.jpeg?auto=compress,format"><p>Two important aspects of project logging in Go: log formatting and log levels. How to log properly, and also when and where to use different types of levels.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                text: 'The further we developed the project, the heavier this interface grew and soon it became clear that to continue the development with fewer bugs, less time spent understanding the code, and more comfort, this interface should be refactored. We as a team could not use this interface with flexibility. We could not tell from the first glance what it does since it does everything. And that forced me to start its refactoring. Which is what I want to share with you.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Step 0: cover code (API) with tests before any refactoring',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This is crucial, since dealing with interfaces, abstractions, and refactoring without tests that cover API logic makes no good. I would say that it can do exactly opposite — bring a lot of problems to your code since every change you make to the interface will result in 20+ files being changed. And if you do not have solid tests, there is a high chance you break something or create bugs. Please, be cautious!',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Step 1: imagine what the result would look like',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I decided to concentrate on common aggregates that my project deals with. After some time of thinking and looking through the entire list of functions, I outlined how the future interface would look like and this is what I came up with:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '3bc64fa5ccc51fe66c52bc173f858bcb',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Interface for database communication.',
                spans: [],
              },
            ],
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
                text: 'This would allow writing the following code instead of just reference one of 130+ methods from the interface:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'user, err := api.Storage.GetUserByID(ctx, userID)\nerr := api.Storage.DenyAgreement(ctx, agreement)\nerr := api.Storage.UpdateUserDeviceToken(ctx, model.UserDeviceToken{...})',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After refactoring:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'user, err := api.Storage.User().Get(ctx, userID)\nerr := api.Storage.Agreement().Deny(ctx, agreement)\nerr := api.Storage.User().UpdateDeviceToken(ctx, model.UserDeviceToken{...})',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'As you can see, this interface consists of multiple smaller interfaces each based on certain aggregates (users, agreements, etc.) and doing something with that aggregate. Reading such constructions is a much better experience and at the same time, it is more convenient since if you ever need to do anything with a user, you know where to search for the right methods and consider if they even exist.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Step 2: implement changes step by step',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Having interface with 130+ methods makes it very complicated to do refactor in “once and for all” style. There are so many changes that turn every merge request into 50+ files changes. So, the next step, therefore, should be breaking the interface step by step, one aggregate after another and committing those changes often to make small, understandable merge request and making sure everything still works as expected (remember step 0!) For this I first break down methods into small portions',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'a69412565a36af2b72e7e13297001f76',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Interface refactoring.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'a69412565a36af2b72e7e13297001f76',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Interface refactoring.',
                spans: [],
              },
            ],
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
                text: 'So, I created several sub-interfaces and stated that my IStorage interface implements them all. That did not change the code much but laid an important preparatory brick to what I wanted to do next, which is essentially replace my sub-interfaces with separate interfaces with their separate methods in CRUD fashion, adding missing methods & uniting those which are of the same nature. I added new structs as the implementation of those interfaces and replaced old methods with a new one with VSCode search & replace all features.',
                spans: [
                  {
                    start: 302,
                    end: 306,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.codecademy.com/articles/what-is-crud',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'b386a2e7939e6706f573679d46b46fa5',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Changes to interface.',
                spans: [],
              },
            ],
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
                text: 'As a result, I have changed all IStorage sub-interfaces to its interfaces and made all functions more intuitive & understandable. Yes, it took me a while to do that, yet, the result is worth it.',
                spans: [],
              },
              {
                type: 'heading2',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/code-climate-code-analysis-locally-using-vscode-remote-containers/',
                embed_url: 'https://maddevs.io/blog/code-climate-code-analysis-locally-using-vscode-remote-containers/',
                type: 'link',
                version: '1.0',
                title: 'How to Run Code Climate Code Analysis Locally Using VSCode + Remote-Containers | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/e7a9249f-827a-497f-8029-17e4a841e6ca_1_c9_PccwaLaKUe9O42CqRcg.png?auto=compress,format&rect=32,0,741,402&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/code-climate-code-analysis-locally-using-vscode-remote-containers/"><h1>How to Run Code Climate Code Analysis Locally Using VSCode + Remote-Containers | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/e7a9249f-827a-497f-8029-17e4a841e6ca_1_c9_PccwaLaKUe9O42CqRcg.png?auto=compress,format&rect=32,0,741,402&w=983&h=533"><p>How to configure a local launch of the analysis of the quality of your code using Code Climate in ensemble with VSCode. </p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Step 3: clean up',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Bulk edits with find -> replace all helps save time, but it also creates some side effects where you can rename not relevant function or the logs messages might get a bit silly and hard to understand. This what happened to me after refactoring.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '2479c780e5eab04db754f20428293f4b',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'Logs to change.',
                spans: [],
              },
            ],
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
                text: 'When this gets logged we get the message “Update failed” which might not be so clear to us at first glance. Yes, there is a “handler” param that indicates where exactly it happened, but this might not be enough to determine the exact spot. So, my advice here would be to go ahead and review the project’s log messages and other components that might get affected by the refactoring.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Side effects from refactoring',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'During this process, it became clear that we use a lot of different methods for the same thing (like updating items in various fields in various methods). This creates code smell and in the future, we would avoid that anti-pattern.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Also, I have found some functions that were not “fit” in certain places. For example when agreements were highly dependent on referrals in the update. That made no sense after I begin refactoring. Having this “God” interface allowed code to use it, but refactoring showed how terrible it was and made living with this code impossible. I have to re-write some functions to create more natural, intuitive functionality.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Yes, we have to write some more code, yet, this approach gives us way more to code’s readability, maintainability, and simple design. I would do it after all.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/customer-university/introduction-to-technical-debt/',
                embed_url: 'https://maddevs.io/customer-university/introduction-to-technical-debt/',
                type: 'link',
                version: '1.0',
                title: 'Technical Debt 101: the Bottomless Pit of Cheap Software Development | Mad Devs Customer University',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/83c0f2c4-3ad0-48c6-b040-09c763fda296_9.+Technical+Debt+101_+The+Bottomless+Pit+Of+Cheap+Software+Development.png?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/customer-university/introduction-to-technical-debt/"><h1>Technical Debt 101: the Bottomless Pit of Cheap Software Development | Mad Devs Customer University</h1><img src="https://images.prismic.io/superpupertest/83c0f2c4-3ad0-48c6-b040-09c763fda296_9.+Technical+Debt+101_+The+Bottomless+Pit+Of+Cheap+Software+Development.png?auto=compress,format"><p>Technical debt is the price a company will pay later for choosing a simpler, faster, yet less reliable option today. Any compromise you make to release products or features faster in the present will accumulate a greater volume of work to do in the future.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'If you have a project with a very heavy database interface and you see that it continues to grow, consider refactoring as soon as possible since it would just get worse. ',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'When refactoring, always check tests first, then decide what the end solution should look like and do partial updates, one component at a time. This will keep your project alive, will decrease chances of introducing new bugs, will keep code reviewers from anger, and keep you happy about the progress.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After refactoring large interfaces always check for ‘side effects”. basically\nIf you ever face the same issue, please share your solutions in the comments, since I am really curious about what else I might have done. Also, please share your thoughts on what I could (and still can) do to make it even better. Any feedback is more than welcomed!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/e803429a-1f69-4e75-8b2c-f3feb5786af8_Frame+14.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [
              {
                type: 'paragraph',
                text: '',
                spans: [],
              },
            ],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=effective-refactoring-heavy-database-interface#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-NffhEAACIA-sdB',
    uid: 'running-geo-django-on-elasticbeanstalk',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-NffhEAACIA-sdB%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Editors pick',
      'Software Development ',
    ],
    first_publication_date: '2020-12-23T15:17:28+0000',
    last_publication_date: '2021-04-08T18:42:14+0000',
    slugs: [
      'running-geo-django-on-elasticbeanstalk',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Running Geo Django on ElasticBeanstalk | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Andrew Minkin will tell you: how to successfully run GeoDjango on an Elasticbeanstalk container using Python.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Running Geo Django on ElasticBeanstalk',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'heading2',
          text: 'How to successfully run GeoDjango on Elasticbeanstalk container using Python.',
          spans: [],
        },
      ],
      date: '2020-06-11',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Running Geo Django on ElasticBeanstalk.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/638ccb04-1340-4efc-9a7d-7ba9812f6929_1*BmpD-5oBin9o583biKxvCQ.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG89vxAAANBN9vP4',
        type: 'author',
        tags: [],
        slug: 'andrew-minkin',
        lang: 'en-us',
        uid: 'andrew-minkin',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Andrew Minkin',
          spans: [],
        },
      ],
      author_title: 'Chief technology officer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Andrew Minkin.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a812fb91-3f18-46ef-9442-c118b6b474b3_Andrew.jpeg?auto=compress,format&rect=0,0,553,553&w=40&h=40',
      },
      table_of_contents: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '{"@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/running-geo-django-on-elasticbeanstalk/"\n      },\n "headline": "Running Geo Django on ElasticBeanstalk",\n "alternativeHeadline": "How to successfully run GeoDjango on Elasticbeanstalk container using Python.",\n "image":\n"https://images.prismic.io/superpupertest/638ccb04-1340-4efc-9a7d-7ba9812f6929_1*BmpD-5oBin9o583biKxvCQ.jpeg?auto=compress,format",\n "editor": "Andrew Minkin", \n "genre": "Backend development", \n "keywords": "GeoDjango", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/running-geo-django-on-elasticbeanstalk/",\n "datePublished": "2020-06-11",\n "dateCreated": "2020-06-11" ,\n "dateModified": "2021-02-14",\n "description": " How to successfully run GeoDjango on Elasticbeanstalk container using Python.",\n "articleBody": "We have been using ElasticBeanstalk for 2 years to deploy our Django application in one of our projects. However, we weren\'t using Geocoding features for our Django app. In one of our services, we decided to use Geo features of Django and enable PostGIS support for the project.",\n   "author": {\n    "@type": "Person",\n    "name": "Andrew "\n  }\n }',
              spans: [],
            },
          ],
        },
      ],
      body: [
        {
          slice_type: 'section_id',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            id: [
              {
                type: 'paragraph',
                text: 'Content 1',
                spans: [],
              },
            ],
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
                text: 'I want to tell you this story because I wasted about 14 hours to realize how to achieve it correctly.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'NB!: Sometimes working with Elastic Beanstalk can be like this.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                height: 113,
                width: 200,
                embed_url: 'https://youtu.be/i5-Tuo1bmFM?t=517',
                type: 'video',
                version: '1.0',
                title: 'Ravandils Quest 2: The Second One',
                author_name: 'Karl the Deranged',
                author_url: 'https://www.youtube.com/user/kokarorloli',
                provider_name: 'YouTube',
                provider_url: 'https://www.youtube.com/',
                cache_age: null,
                thumbnail_url: 'https://i.ytimg.com/vi/i5-Tuo1bmFM/hqdefault.jpg',
                thumbnail_width: 480,
                thumbnail_height: 360,
                html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/i5-Tuo1bmFM?start=517&feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Long story short',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To successfully run GeoDjango on Elasticbeanstalk container using Python 3.6 you need to follow these steps:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Launch EC2 instance from ElasticBeanstalk image ami-0a2fbeb2675c47493. NB! Do not use EC2 instances under the control of ElasticBeanstalk for that purpose. Launch an instance from the source image used by Beanstalk;',
                spans: [
                  {
                    start: 71,
                    end: 215,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'Install GDAL 2;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Create a custom AMI;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Run your Django app using this AMI.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'The road so far',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We have been using ElasticBeanstalk for 2 years to deploy our Django application in one of our projects. However, we weren’t using Geocoding features for our Django app. In one of our services, we decided to use Geo features of Django and enable PostGIS support for the project.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The problem was with missing GDAL 2 library, required for Django. There is GDAL 1 in Amazon Linux’s repositories, but it’s outdated dependency to make Django enable its GeoSpatial features.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I tried to build it from sources, installed on running instance and deployed code. Everything was fine, but I wanted to make it more reliable and be sure that it would work constantly because my changes would be deleted by autoscaling. Hence, I wanted to build a custom AMI image with required libraries (I needed two more, that didn\'t exist in repositories).',
                spans: [
                  {
                    start: 269,
                    end: 280,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Okay. I ran a clean configuration of the Elastic Beanstalk environment, installed everything, and created a custom AMI from EC2 instance I created using ElasticBeanstalk.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Seems pretty easy, I thought. I tried to create a new environment using this image and I found a problem with environment variables. For an unknown reason, Python container didn’t see the variables I set in the web interface.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I tried to set them using eb command and tried to set them using .ebextensions . Finally, I set them manually and had luck running the Django app, but it was unable to deploy it using eb deploy command.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the next step I tried to use an updated image with Python 3.7 and Amazon Linux 2, but there were a lot of differences between Amazon Linux and Amazon Linux 2 that required a lot of changes in my deployment configuration.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I started thinking about what’s wrong with my configuration and why it didn\'t work. I made a suggestion, that I built custom AMI wrong way and I started from the beginning.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Creating Custom AMI',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/;',
                spans: [
                  {
                    start: 31,
                    end: 66,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://console.aws.amazon.com/ec2/',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'Choose Launch Instance;',
                spans: [
                  {
                    start: 7,
                    end: 23,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'Choose Community AMIs;',
                spans: [
                  {
                    start: 7,
                    end: 22,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'Insert ami-0a2fbeb2675c47493 to a search bar;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Choose Select to select the AMI;',
                spans: [
                  {
                    start: 7,
                    end: 13,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'Launch instance;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Connect with SSH.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Building GDAL',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'c048bbc7fe72365412502fc685e73723',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'gistfile1.txt',
                spans: [],
              },
            ],
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
                type: 'o-list-item',
                text: 'Go to EC2 Instances page;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Select created instance;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Go to Actions -> Images -> Create image.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Running ElasticBeanstalk using newly created image',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Create an EB environment as you got used to it, you need to do the following steps:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Go to “Configure More options”;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Go to Capacity;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Click Edit;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Paste ID of a new image in AMI ID field;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Press save;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Configure rest parameters;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Launch application.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Deploy your Django application and enjoy it!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'P. S. Try to move to EKS, sometimes Beanstalk can get you some problems:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Elastic Beanstalk is a wrapper around Amazon Elastic Container Service and it already has some automation (by choosing actions in the UI interface). Thus you can’t well describe your Infrastructure using the IaaC approach.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'The instances in each environment run the same set of containers. For instance, you have one frontend application and one backend application. You can’t scale them independently from each other.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'It has a hard limit of 4KB to store all key-value pairs, thus you can’t set as many env variables as you want.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'One Elastic Beanstalk task is one ECS cluster (EC2 mode).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'But it has the following pros:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'It’s one of the easiest ways to deploy a simple application to AWS;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'AWS Elastic Beanstalk is a good choice for a newly started application on a staging environment;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'It offers multi-container Docker;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Has a user-friendly UI.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And, it also has some cons:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'It loses independently schedule a replicated set of apps on the cluster;',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'One Elastic Beanstalk task is one ECS cluster (EC2 mode).',
                spans: [],
              },
              {
                type: 'heading2',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/media-storage-on-multiple-django/',
                embed_url: 'https://maddevs.io/blog/media-storage-on-multiple-django/',
                type: 'link',
                version: '1.0',
                title: 'Storage of Media Files on Multiple Django or My First Experience in Open Source | by Belek Abylov | Mad Devs Blog — Custom Software Development Company',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/2bfd106d-6ace-4d36-b6f8-8080def16799_1_LQBnX_vdQCdV5WcQnajzWA.png?auto=compress,format&rect=0,13,1400,759&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/media-storage-on-multiple-django/"><h1>Storage of Media Files on Multiple Django or My First Experience in Open Source | by Belek Abylov | Mad Devs Blog — Custom Software Development Company</h1><img src="https://images.prismic.io/superpupertest/2bfd106d-6ace-4d36-b6f8-8080def16799_1_LQBnX_vdQCdV5WcQnajzWA.png?auto=compress,format&rect=0,13,1400,759&w=983&h=533"><p>How to build a python package by publishing it in PyPI, as well as to offer a solution for storing media files in scalable Django projects.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I hope my experience will save you time, and you’ll successfully run GeoDjango on Elasticbeanstalk container. Good luck with your next Beanstalk deployment.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Also read about Testing Django on steroids with Pytest.',
                spans: [
                  {
                    start: 5,
                    end: 9,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/testing-django-on-steroids-with-pytest/',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/190d30a4-3104-415e-af03-65a3f7fc771d_Frame+15.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=geodjango-elasticbeanstalk#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-Y51xEAACMAB3mK',
    uid: 'guaranteed-delivery-with-grpc-streams',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-Y51xEAACMAB3mK%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-25T19:13:38+0000',
    last_publication_date: '2021-04-08T19:14:45+0000',
    slugs: [
      'guaranteed-delivery-with-grpc-streams',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Guaranteed Delivery with gRPC Streams | Mad Devs Blog ',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'How we implemented the solution to organize guaranteed delivery between microservices using gRPC without MQ addition.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Guaranteed delivery with gRPC streams',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2019-11-26',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'GRPC Streams.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/ffcc13e7-abed-4806-ac94-ec0f95bb88ee_1_hwJDs4aWX8ioOeHmWG13lw.png?auto=compress,format&rect=0,1,2000,1084&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG89vxAAANBN9vP4',
        type: 'author',
        tags: [],
        slug: 'andrew-minkin',
        lang: 'en-us',
        uid: 'andrew-minkin',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Andrew Minkin',
          spans: [],
        },
      ],
      author_title: 'Chief technology officer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Andrew Minkinю',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a812fb91-3f18-46ef-9442-c118b6b474b3_Andrew.jpeg?auto=compress,format&rect=0,0,553,553&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/guaranteed-delivery-with-grpc-streams/"\n      },\n "headline": "Guaranteed Delivery with gRPC Streams",\n "alternativeHeadline": "For frontend and backend integration, as web developers, we have two basic options to create an HTTP API: RPC and REST.",\n "image":\n"https://images.prismic.io/superpupertest/ffcc13e7-abed-4806-ac94-ec0f95bb88ee_1_hwJDs4aWX8ioOeHmWG13lw.png?auto=compress,format",\n "editor": "Andrew Minkin", \n "genre": "Backend development", \n "keywords": "RPC API, REST API", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/guaranteed-delivery-with-grpc-streams/",\n "datePublished": "2019-11-26",\n "dateCreated": "2019-11-26" ,\n "dateModified": "2021-02-12",\n "description": "How we implemented the solution to organize guaranteed delivery between microservices using gRPC without MQ addition",\n "articleBody": "Nowadays web developers should care about interactions with mobile phones too. Responsive layout, SPA, adaptive layout were introduced and quickly became trends for a few upcoming years in web development. Today, developers mostly split into the following camps: frontend and backend. Web development became more challenging for beginners. The frontend part of a web project has turned into an independent project with integration with a backend via API.\nFor frontend and backend integration, as web developers, we have two basic options to create an HTTP API: RPC and REST.\n",\n   "author": {\n    "@type": "Person",\n    "name": "Andrew"\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Let’s take a look at the minimum requirements for web developers in the 2000s. In the good old days, you could build more or less working website with a backend programming language (e.g. PHP, Python, Ruby), some Javascript + jQuery and the ability to create an HTML layout from PSD. That’s all. The code was deployed mainly by FTP. CI/CD, Pipelines, DevOps, SRE, and other mainstream concepts were not in the list of minimum requirements for web developers.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/',
                embed_url: 'https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/',
                type: 'link',
                version: '1.0',
                title: 'Top 3 Best CI for Your JS Projects with Puppeteer Tests | Mad Devs Blog ',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/"><h1>Top 3 Best CI for Your JS Projects with Puppeteer Tests | Mad Devs Blog </h1><img src="https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format"><p> Comparison of Circle, Cirrus, and Travis CIs\' for JS Projects with Puppeteer Tests. The speed of work, the complexity of configuration, and other differences of these CIs\'.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                text: 'Yet technologies change rapidly. The number of users increases every day, hence we faced scaling issues and almost every popular Web service nowadays became distributed. CQRS or Event Sourcing, SOA, and CAP theorem became a must-have for a developer job position. The minimum requirements have risen for backend developers as well.',
                spans: [
                  {
                    start: 170,
                    end: 174,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://martinfowler.com/bliki/CQRS.html',
                      target: '_blank',
                    },
                  },
                  {
                    start: 178,
                    end: 192,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://microservices.io/patterns/data/event-sourcing.html',
                      target: '_blank',
                    },
                  },
                  {
                    start: 194,
                    end: 197,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Service-oriented_architecture',
                      target: '_blank',
                    },
                  },
                  {
                    start: 203,
                    end: 214,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/CAP_theorem',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Nowadays web developers should care about interactions with mobile phones too. Responsive layout, SPA, adaptive layout were introduced and quickly became trends for a few upcoming years in web development. Today, developers mostly split into the following camps: frontend and backend. Web development became more challenging for beginners. The frontend part of a web project has turned into an independent project with integration with a backend via API.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'For frontend and backend integration, as web developers, we have two basic options to create an HTTP API: RPC and REST.',
                spans: [
                  {
                    start: 114,
                    end: 118,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'What is an RPC API?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'RPC stands for “Remote Procedure Call”. It’s almost the same as calling a function in JS/Python/PHP/Go or other programming languages, with a method name and arguments. You have the freedom to give names for your methods and it’s a very convenient way to create APIs.',
                spans: [
                  {
                    start: 16,
                    end: 17,
                    type: 'strong',
                  },
                  {
                    start: 23,
                    end: 24,
                    type: 'strong',
                  },
                  {
                    start: 33,
                    end: 34,
                    type: 'strong',
                  },
                ],
              },
            ],
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
                type: 'heading2',
                text: 'What is a REST API?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'REST stands for “REpresentational State Transfer”. REST is about the representation of data in simple formats (mostly JSON) and it’s all about resources. We use HTTP methods for getting (GET), updating (POST/PUT/PATCH), and deleting resources(DELETE). Unfortunately, many developers have their idea of what REST is, which leads to a lot of confusion and disagreement across teams and the development community in general. Yet, some big players are trying to come up with a universal guide for REST API development. In my opinion, Zalando REST API guidelines are the most comprehensive, detailed, and well-written guide on REST API that exists today.',
                spans: [
                  {
                    start: 17,
                    end: 19,
                    type: 'strong',
                  },
                  {
                    start: 34,
                    end: 35,
                    type: 'strong',
                  },
                  {
                    start: 40,
                    end: 41,
                    type: 'strong',
                  },
                  {
                    start: 530,
                    end: 557,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://opensource.zalando.com/restful-api-guidelines/',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'A few years ago Facebook implemented GraphQL “the query language for your APIs”. Also, Google came up with gRPC, which is similar to any RPC or SOAP with some differences: tt uses HTTP/2 for transport protocol and protocol buffers for data serialization. Hence the choice of API implementation became even more challenging.',
                spans: [
                  {
                    start: 37,
                    end: 44,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://graphql.org/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 107,
                    end: 111,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/maddevs-io/introduction-to-grpc-6de0d9c0fe61',
                      target: '_blank',
                    },
                  },
                  {
                    start: 214,
                    end: 230,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://developers.google.com/protocol-buffers',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Methods for microservice communication',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In my previous article about REST or gRPC with the Go programming language, I explained how to use gRPC to build APIs for microservice communication and mobile apps. Now let’s talk about microservices. Nginx has a detailed guide about building communication between microservices but in short, developers have two ways to implement communication between microservices: synchronous and asynchronous. Synchronous communication is often implemented with HTTP API and asynchronous with message queues. Kafka, or NATS, or RabbitMQ will be a great choice for your project. Yet, gRPC instead of REST/GraphQL can be asynchronous and we can use it to build simple async communication between our services. We can use it for a long time until we need to add a message queue to our system even if we need a guaranteed delivery between services.',
                spans: [
                  {
                    start: 29,
                    end: 41,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/go-rest-or-grpc/',
                    },
                  },
                  {
                    start: 214,
                    end: 228,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.nginx.com/blog/building-microservices-inter-process-communication/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 498,
                    end: 503,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://kafka.apache.org/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 508,
                    end: 512,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://nats.io/',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Asynchronous communication using gRPC without MQ',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In one of our projects, the development team had to organize guaranteed delivery between services, however, the addition of MQ would be overkill. The project was about processing events and events delivery should be with the delivery order.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We had two microservices:',
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
                width: 401,
                height: 61,
              },
              alt: 'Two Microservices.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/6c02ee56-49d9-4444-8523-de2ca47929fd_1_KHN6Ka2SL_yrBk1F0q1zgw.png?auto=compress,format',
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
                text: 'The Core works simple. It has an external REST API for clients. We save all accepted events to the PostgreSQL database and pass it to the Processor. We save results once we process an event.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The Processor is even simpler. We need to process an event using one of our algorithms for each event received got from the Core.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the first version of service, we made communication between microservices using a one-direction gRPC stream. We had the AddEvent method on the Core. It accepts events, writes them to Postgres and passes it to the Go channel',
                spans: [
                  {
                    start: 85,
                    end: 110,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://grpc.io/docs/tutorials/basic/java/#client-side-streaming-rpc-1',
                      target: '_blank',
                    },
                  },
                  {
                    start: 216,
                    end: 226,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://gobyexample.com/channels',
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
                width: 341,
                height: 181,
              },
              alt: 'AddEvent Method on the Core.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/a091aa8d-e05c-4832-99a7-5e0ffbe22494_1_lvaCArLlGh5NRzcwf32PDw.png?auto=compress,format',
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
                text: 'The Go channel passes events to Processor using events stream. The Processor opens a stream to the Core gets data from Postgres and then it receives data passed to the channel.',
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
                width: 631,
                height: 181,
              },
              alt: 'The Go Channel Passes Events to Processor Using Events Stream.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/14bf504e-8fc5-491c-abff-804044a8e2ff_1_QpxjPqE-fPkhlNsE9lVB2w.png?auto=compress,format',
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
                type: 'heading2',
                text: 'Guaranteed delivery on gRPC streams',
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
                width: 1024,
                height: 683,
              },
              alt: 'Sean Bean.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/1013edda-9019-4eb9-af22-0da940384292_0_A9UeAH2ar6uIYB7i.jpg?auto=compress,format',
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
                text: 'We have a distributed system once we have more than one service communicating with each other. It causes various problems.',
                spans: [
                  {
                    start: 105,
                    end: 121,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Category:Distributed_computing_problems',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We can’t be sure that a network will work properly if there is a need for guaranteed delivery. The network is unreliable: sometimes delivery order is broken. Moreover, there is a chance to face packet loss and packet duplication.',
                spans: [
                  {
                    start: 110,
                    end: 120,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Netsplit',
                      target: '_blank',
                    },
                  },
                  {
                    start: 132,
                    end: 146,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Out-of-order_delivery',
                      target: '_blank',
                    },
                  },
                  {
                    start: 194,
                    end: 205,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Packet_loss',
                      target: '_blank',
                    },
                  },
                  {
                    start: 210,
                    end: 228,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://wiki.wireshark.org/DuplicatePackets',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We need to solve network issues once we’re going to build on an application-level delivery guarantee.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'We need to retransmit packet once we didn’t get a message',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'There can be duplicates once we have packet retransmission',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Also, we need to choose a delivery method from the following:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: ' at most once which can lead to messages being lost, but they cannot be redelivered or duplicated',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'at least once ensures messages are never lost but may be duplicated',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We had to come up with a protocol to build any of them.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '81f84c7840d9ba95eea4adfd2834f063',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'proto.go',
                spans: [],
              },
            ],
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
                text: 'The protocol covers at most once delivery, yet, in our case at least once was enough because we have only one running instance of a service. Still, we could have duplicated messages in our system.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To prevent duplicated messages we had a simple map with mutex on the Processor side, and we sent events with exponential backoff on the Core side.',
                spans: [
                  {
                    start: 109,
                    end: 128,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Exponential_backoff',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Usually, I don’t like to reinvent the wheel. Yet sometimes it’s easier to implement your solution for a problem if takes a short time. You can live without any MQ for a very long time if you chose gRPC for communication between your microservices. Also, it does not save you from issues completely since there can be a couple with load balancing which will be explained in the next post. Stay tuned!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/29d4d3a1-3d08-43b5-8742-6da6f0c55a68_Frame+7.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=guaranteed-delivery-grpc#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-XObhEAACEABZ8O',
    uid: 'how-to-start-with-logging-in-golang-projects-part-1',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-XObhEAACEABZ8O%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Editors pick',
      'Software Development ',
    ],
    first_publication_date: '2020-12-25T12:02:15+0000',
    last_publication_date: '2021-04-08T19:02:07+0000',
    slugs: [
      'how-to-start-with-logging-in-go-projects.-part-1',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'How to Start with Logging in Go Projects. Part 1 | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Two important aspects of project logging in Go: log formatting and log levels. How to log properly, and also when and where to use different types of levels.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'How to start with logging in Go projects. Part 1',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2019-11-05',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Go projects.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/2767800e-7419-4f93-a9d2-cabde13b22b8_1_6mY93Z3wBTUpcRdEvhIBeg.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG860hAAACIA9ubS',
        type: 'author',
        tags: [],
        slug: 'anatoliy-fedorenko',
        lang: 'en-us',
        uid: 'anatoliy-fedorenko',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Anatoliy Fedorenko',
          spans: [],
        },
      ],
      author_title: 'Backend developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Anatoliy Fedorenko.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/d40d9f3c-cc9d-42b8-a10b-61b6a1fb1220_Anatoliy+Fedorenko.jpg?auto=compress,format&rect=355,0,3076,3076&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/how-to-start-with-logging-in-golang-projects-part-1/"\n      },\n "headline": "How to Start with Logging in Go Projects. Part 1",\n "alternativeHeadline": "The importance of logging",\n "image":\n"https://images.prismic.io/superpupertest/2767800e-7419-4f93-a9d2-cabde13b22b8_1_6mY93Z3wBTUpcRdEvhIBeg.jpeg?auto=compress,format",\n "editor": "Anatoliy Fedorenko", \n "genre": "Backend development", \n "keywords": "Fatal/Panic", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/how-to-start-with-logging-in-golang-projects-part-1/",\n "datePublished": "2019-11-05",\n "dateCreated": "2019-11-05" ,\n "dateModified": "2021-02-12",\n "description": "Two important aspects of project logging in Go: log formatting and log levels. How to log properly, and also when and where to use different types of levels.",\n "articleBody": "Logs are recorded events that your software produces. They are essential to every IT project since they provide the context to help debugging and solving problems in the application.\nLogs in the project is a necessity. They show the quality level of the software team and the code.\n",\n   "author": {\n    "@type": "Person",\n    "name": "Anatoliy"\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                type: 'heading2',
                text: 'The importance of logging',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Logs are recorded events that your software produces. They are essential to every IT project since they provide the context to help debugging and solving problems in the application.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Logs in the project is a necessity. They show the quality level of the software team and the code.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Some developers place logs chaotically with `print` or `fmt.Println` without any care about formatting and meaning for future log viewers. Other developers use logging libraries, yet often this does not solve the problem of chaos in log files and inability to understand what exactly happened in the application.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Chaotic logging brings too much suffering. If a project runs in production, maintainers rewrite these logs almost every day if not hour trying to add more informative logs and eliminate “spam” logs. Yet, after the debugging is finished, all the added logs become useless and would be removed in the next iteration of debugging. There is a special place prepared in hell for those who do logging this way… and seems like they are always in that place in their development process.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Takeaway #1: do not do chaotic logging! Systematize them as soon as possible and never allow the clutter and chaos.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'I would like to begin a series of articles about logging with two aspects that I consider essential to every newcomer that starts more or less serious development. These are logs formatting and logs levels. Also, it is essential to mention that these articles would have examples that are based on one of the most popular logging library for Golang projects — Logrus.',
                spans: [
                  {
                    start: 360,
                    end: 366,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/sirupsen/logrus',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/effective-refactoring-of-heavy-database-interface/',
                embed_url: 'https://maddevs.io/blog/effective-refactoring-of-heavy-database-interface/',
                type: 'link',
                version: '1.0',
                title: 'Effective Refactoring of Heavy Database Interface | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/d9fd1cce-d1a8-44fa-b90c-11fa2834c824_1_vlNV_wVecX-_9r55T7E2-w.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/effective-refactoring-of-heavy-database-interface/"><h1>Effective Refactoring of Heavy Database Interface | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/d9fd1cce-d1a8-44fa-b90c-11fa2834c824_1_vlNV_wVecX-_9r55T7E2-w.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533"><p>How to refactor heavy database interface in Golang step-by-step to make it more readable, flexible, maintainable, and easy to work with.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'How you should log properly',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'A lot of junior developers and sometimes middle programmers even do not suspect that logging formats should be defined in advance so that every log in your project is well organized, carries the context, and is easy to find.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Regarding the general log formatting, I recommend placing a package name and function name that invoked a particular event. This helps to quickly find out where the event took place and take appropriate actions.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The most obvious way to log something is just to … log it.',
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
                width: 896,
                height: 102,
              },
              alt: 'Log Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/0e8ce918-b42e-405e-b193-836cccbf915e_0_vIE4U3wl79uf0cD_.png?auto=compress,format',
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
                text: 'Yet a better option, in the long run, is to spend 10–15 more seconds and log more information.',
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
                width: 1268,
                height: 294,
              },
              alt: 'Log Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/aca0b972-c360-4b71-a72a-f7906850d929_0_WsNBgz12c49sZffS.png?auto=compress,format',
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
                text: 'The first method, even though logs everything you need right now, will bring troubles in the future, since it lacks a lot of contexts. And in the future, the only person who would understand what was going on is you, but probably you yourself would forget everything about it.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In most cases, I recommend using log.WithFields(). Error() log construction, since it allows to create separate Fields for different variables and therefore orient among them fairly easy and fast.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'You can save hours or even weeks of work for future self just by properly describing how logs should be formatted in any place of your project. Remember, adding new logs, do not be lazy to take care of formatting. This is your future investment. By the way, you should only add logs to your project and avoid removing them at all…',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Logging levels in Go',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Many beginners do not quite understand why there are so many logging levels and even if they more or less understand it is difficult to properly place logs if different levels to comfortably use them.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'As a result, development or debugging in a project turns into chaotic addition and removal of logs to understand why things happen in a particular way in production. In the following commits spam logs are removed (just to be again added a few commits later). This is a problem and if you experience something similar, it is time to stop and think on how to place logs of different levels to your code so that there would be no need to remove them at all.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Convenience in logging is when the amount of spam logs reaches 0 level and all the logs serve its particular purpose. They are never removed but only added.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Logging libraries(in particular Logrus) have the option to configure logging levels, showing or hiding log messages of different levels. The levels I would like to talk about now are: “Fatal”, “Error”, “Info”, “Warning”, “Debug”, All other common levels have a more or less similar purpose (Panic vs Fatal), or are very specific (Trace).',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'When to use Fatal/Panic logs in Go',
                spans: [
                  {
                    start: 12,
                    end: 24,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Where should we place Fatal/Panic logs? They should appear when the software can no longer continue its performance. For example, when the project could not start simply because the database could not start or configs could not load properly. These logs are often placed at the very beginning of the code to “fail fast” and do not go further if something went wrong with setup of essential components',
                spans: [
                  {
                    start: 22,
                    end: 34,
                    type: 'em',
                  },
                  {
                    start: 22,
                    end: 34,
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
                width: 768,
                height: 154,
              },
              alt: 'Fatal Level Logs in Go.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/9959945f-1ab6-46a0-a55b-e166c45529fd_0_WM87JmFCKVoPcrpG.png?auto=compress,format',
            },
            caption: [],
            enable_zoom: 'disable',
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'React on Fatal/Panic logs immediately!',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'When to use Error logs in Go',
                spans: [
                  {
                    start: 12,
                    end: 18,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: '`Error level is for real errors, errors that you do not expect to get, errors that must be immediately taken into account and handled`. For example if the request in database failed with syntactic error or missing table or some essential component had broken. Error logs are just like fatal and panic levels should be sent to different monitoring instruments (like Sentry) for immediate warnings to most productively use available resources.',
                spans: [
                  {
                    start: 0,
                    end: 6,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 6,
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
                width: 834,
                height: 264,
              },
              alt: 'Error Level Logs in Go.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f1566841-ccb9-419a-a552-c46e0c054d4c_0_GT_spX-xvH--PdHJ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Error level logs should trigger and be fixed as soon as possible, do not allow them to happen again.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'When to Use Warning Logs in Go',
                spans: [
                  {
                    start: 12,
                    end: 20,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Warning takes care of everything to pay attention to yet, bear in mind that this is all programmed meaning no errors, everything goes right way. For example validations of structures, skipping iterations for some loops, etc.',
                spans: [
                  {
                    start: 0,
                    end: 7,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 7,
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
                width: 844,
                height: 232,
              },
              alt: 'Warnings Level Logs in Go.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/137f9a93-1190-429d-89fc-254fcb896d3a_0__03NFej0Tc-wFWax.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Warnings is everything that you may pay attention or sometimes should pay attention, but it should not trigger you as much as errors and force you to fix things right away.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'When to use Info logs in Go',
                spans: [
                  {
                    start: 12,
                    end: 17,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Info level can be used everywhere where additional info is needed. This level is pretty universal and often mixed up with warning, or debug logs. Personally I do not recommend using it as it is very neutral and could mean almost anything. It is better to use the next logging level to better understand how to use the provided info',
                spans: [
                  {
                    start: 0,
                    end: 5,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 5,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'When to use Debug/Trace logs in Go',
                spans: [
                  {
                    start: 12,
                    end: 24,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Debug/Trace level logs should provide very detailed info about the events of the app. What are the incoming requests, how they are handled, what changes as business logic goes, what is sent in response, and so on. All these will be really helpful in debugging and error tracing to identify all data changes and why things are the way they are.',
                spans: [
                  {
                    start: 0,
                    end: 11,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 11,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Debug/Trace logs are like microscope, you do not need one always, just in a very particular situations. Therefore turn these levels off in production not to clutter the log files',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'To sum it up:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Use well developed/supported logging instruments since it saves your time and helps to format logs better.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Think and plan your logging format in advance to always know where and how to place a particular log so that it serves its purpose and only improves debugging.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Use logging levels appropriately, since it is really hard to read, understand, and debug the application if it has a lot of useless logs or does not have enough logs. Both options are no good for you.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'When the format is set and the levels are used appropriately it is time to set the configuration of the log the way it is easy to change logs and control them. Also, it is easy to view and react to them. All these I would like to explain in the next part of the series. Stay tuned!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the second part of the article, we will talk about how to control your logging in Go. ',
                spans: [
                  {
                    start: 7,
                    end: 19,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/how-to-start-with-logging-in-go-projects-part-2/',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'IT Consulting.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/a7a9b34c-6288-4340-b35e-c8f64b1add49_Frame+19.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=logging-go-part-1#it-consulting',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X_V6kxEAACEASw6v',
    uid: 'how-to-start-developing-for-raspberry-pi-with-qt',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X_V6kxEAACEASw6v%22%29+%5D%5D',
    tags: [
      'Hardware',
      'Editors pick',
    ],
    first_publication_date: '2021-01-06T08:53:44+0000',
    last_publication_date: '2021-04-12T08:09:07+0000',
    slugs: [
      'how-to-start-developing-for-raspberry-pi-with-qt',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'How to start developing for Raspberry Pi with Qt',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'My personal way of software development for a single-board Raspberry Pi computer and custom hardware, but in general terms, it will fit other single-board computers of a similar class.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'How to start developing for Raspberry Pi with Qt',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2019-10-21',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Raspberry Pi with Qt.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/e4a2fb29-2906-479e-a875-0dd278f4bc08_Raspberry+Pi+with+Qt.png?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG9J9RAAANBN9yv0',
        type: 'author',
        tags: [],
        slug: 'kirill-avdeev',
        lang: 'en-us',
        uid: 'kirill-avdeev',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Kirill Avdeev',
          spans: [],
        },
      ],
      author_title: 'Backend developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: null,
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/c006a713-498b-4e39-821d-b32e5a2482d6_Kirill+Avdeev.jpg?auto=compress,format&rect=0,133,3355,3355&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/how-to-start-developing-for-raspberry-pi-with-qt/"\n      },\n "headline": "How to Stop Worrying and Start Developing for Raspberry Pi with Qt",\n "alternativeHeadline": "We reviewed three options of modules for the basis of the project: ESP32, RaspberryPi (RPi), and STM32.",\n "image":\n"https://images.prismic.io/superpupertest/e4a2fb29-2906-479e-a875-0dd278f4bc08_Raspberry+Pi+with+Qt.png?auto=compress,format",\n "editor": "Kirill Avdeev", \n "genre": "Hardware", \n "keywords": "Hardware,  ESP32, RaspberryPi (RPi), and STM32", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/how-to-start-developing-for-raspberry-pi-with-qt/",\n "datePublished": "2019-10-21",\n "dateCreated": "2019-10-21" ,\n "dateModified": "2021-02-12",\n "description": "My personal way of software development for a single-board Raspberry Pi computer and custom hardware, but in general terms, it will fit other single-board computers of a similar class.   ",\n "articleBody": "One fine day, it became necessary to finish the project for an international mining company. The workers regularly complained about the quality of the... uh... internets in rooms of the residential building of the factory. There are a lot of factors that determine the quality of working with the Internet, and often the issue is about an old smartphone but not an IT department or ISP.\n",\n   "author": {\n    "@type": "Person",\n    "name": "Kirill"\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'One fine day, it became necessary to finish the project for an international mining company. The workers regularly complained about the quality of the… uh… internets in rooms of the residential building of the factory. There are a lot of factors that determine the quality of working with the Internet, and often the issue is about an old smartphone but not an IT department or ISP.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The customer came up with the idea to hang a screen with a colorful indication of pings to known resources via WiFi in each room, as a means of monitoring the quality of the Internet.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In general, the article is intended for those who want to join the development of software with Qt for Raspberry Pi.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Hardware',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We reviewed three options of modules for the basis of the project: ESP32, RaspberryPi (RPi), and STM32.',
                spans: [
                  {
                    start: 67,
                    end: 72,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.espressif.com/en/products/hardware/esp32/overview',
                      target: '_blank',
                    },
                  },
                  {
                    start: 74,
                    end: 85,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.raspberrypi.org/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 97,
                    end: 102,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We refused to use STM32 because it requires a lot of development time, and huge difficulty in supporting a solution (the customer’s factory is located about 400 km from Bishkek, at heights about 4000 meters and you can climb there for quite a long time to reach it).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'ESP32 did not seem reliable and had the same problems with solution support.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We decided not to waste time and opted for the Raspberry Pi computer.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Embedded Linux on the Raspberry Pi solved a lot of issues with development and support, but it required a bit of a specific development approach.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {},
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Features of Raspberry Pi',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'So, we chose the Raspberry Pi 3B +. This is an excellent bank card-sized single-board computer. It has 4 USB ports, a WiFi module, 1GB of RAM, a BCM2835 processor with four Cortex-M53 cores, each with a frequency of up to 1.4 GHz. We decided not to use HDMI or composite output, because less wires are better. Miners will not notice and tear off the wires or they will tear it off and not notice it. The miners are quite harsh people.',
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
                width: 800,
                height: 600,
              },
              alt: 'Raspberry Pi 3 B+.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/a77acaa0-04fa-4772-800e-f7bc31029d26_Raspberry+Pi+3+B%2B.jpeg?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Raspberry Pi 3 B+. Image taken from https://www.raspberrypi.org',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Displays',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In addition to RPi, we obtained Adafruit PiTFT resistive touch displays. I liked the display at the moment I laid eyes on it. It’s simple, concise, without frills. It is enough just to push it tightly onto the board to make it to work.',
                spans: [
                  {
                    start: 32,
                    end: 46,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.adafruit.com/product/1601',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Well, things that are usually forgotten: power and a flash drive for the operating system (OS).',
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
                width: 970,
                height: 728,
              },
              alt: 'Raspberry Pi Touch Display.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/5958bf42-bf1d-4553-908c-9f5850b4d77d_Touch+display.jpeg?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Raspberry Pi touch display. Image taken from https://www.adafruit.com',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Power',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'At the beginning, I powered the RPi from a laptop, but something went wrong and RPi was offline. I saw blinking LEDs (the same short sequence was repeated), and suggested that it repeatedly reboots. Quickly, I asked the colleague for a phone charger and powered up the single-board to 2.5A current. It became clear that an RPi needs a strong power supply.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Flash drive',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The flash drive is needed in order to write the OS image to it. Four years ago, I worked on a side project on the Raspberry Pi 2 b and foolishly took a dozen of low-quality flash drives. Flash drives worked fine on a smartphone and laptop, but not on the Raspberry Pi. However, with AData flash drives taken two days later, an RPi started to work without problems.',
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
                width: 960,
                height: 826,
              },
              alt: 'Almost Completed Device.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/91f4b8d8-d837-4d53-b8ed-f08e712cf0df_Almost+completed+device+.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Almost completed device',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Software',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'As a framework for the application, we decided to use Qt.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'So, to implement the project in terms of software, the following steps were taken:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Install and initial configuration of the OS on an RPi',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Turn the screen on',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Build and install of Qt',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: '`Curl` installation',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Setting up a development environment',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Ehmmm… Write the `Curler`',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Setting up the OS so that `Curler` starts at OS startup and restarts in case of a crash',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'With all this, it was necessary to keep in mind that almost five dozen sets of RPis would have to be produced and it required quickly duplication of a flash drive.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Asus ROG GL753VD with Kubuntu OS 18.04 was used as a development PC',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'Stage 1. Installation and initial setup of the OS',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Everything is simple here. Download the Raspbian image archive from the official site and unpack it. Copy the image using the `dd` utility to the USB flash drive. That`s it. The image is ready to run on an RPi. Insert the flash drive and turn the RPi on. The device victoriously blinks with LEDs.',
                spans: [
                  {
                    start: 127,
                    end: 130,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'What’s next? The device doesn’t know our WiFi credentials, we don’t know its IP-address, and it will not allow us to access it via `ssh` even with a cable connection. Just by default so.',
                spans: [
                  {
                    start: 130,
                    end: 136,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We insert the flash drive into the computer again. It will be mounted as two partitions: boot and system. The boot is small and has FAT32 file system partition and system partition with `ext4` filesystem on it.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In order for a single-board player to allow access via `ssh`, we create a file named `ssh` in the boot partition. Seeing this file, RPi will allow us to log in via `ssh`, but only until the next reboot. After each boot, this file is deleted.',
                spans: [
                  {
                    start: 56,
                    end: 60,
                    type: 'em',
                  },
                  {
                    start: 86,
                    end: 90,
                    type: 'em',
                  },
                  {
                    start: 165,
                    end: 169,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'You need slightly different witchcraft to make RPi to use Your WiFI. We go into the system partition in the directory `/etc/wpa_supplicant`. Open the `wpa_supplicant.conf` file. It describes the settings for connecting to wireless networks. One network is already described there. We add a description of our WiFi network with access credentials to the new network section (the first one can be used as an example). Be sure that there is no empty line at the end of the file (once the RPi was unable to boot precisely because of this).',
                spans: [
                  {
                    start: 119,
                    end: 139,
                    type: 'em',
                  },
                  {
                    start: 151,
                    end: 171,
                    type: 'em',
                  },
                  {
                    start: 357,
                    end: 364,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In order to find out the IP address of our RPi, we can use the `nmap` utility in this way:',
                spans: [
                  {
                    start: 64,
                    end: 69,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: 'sudo nmap -sP 192.168.20.0/24',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Of course, you will need to substitute your own network in this command instead of mine.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We will see a list of all the hosts on the network, and if the RPi has connected to WiFi, we will find something like this in the list:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'Nmap scan report for 192.168.20.49\nHost is up (0.0013s latency).\nMAC Address: B8: 27: EB: A0: 50: 9E (Raspberry Pi Foundation)',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Well, now we can connect to the RPi via `ssh`:',
                spans: [
                  {
                    start: 41,
                    end: 45,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: 'ssh pi@192.168.20.49',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It will ask for a password. By default, `raspberry` is used as the password. It is strongly recommended you to change it immediately.',
                spans: [
                  {
                    start: 41,
                    end: 51,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Next, to finish the configuration, you need to enable `ssh` access on an ongoing basis and expand the file system to the entire flash drive with the `raspi-config` utility. Qt takes a lot of space and just cannot fit on default filesystem partitioning.',
                spans: [
                  {
                    start: 55,
                    end: 58,
                    type: 'em',
                  },
                  {
                    start: 150,
                    end: 163,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Execute the command',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'sudo raspi-config',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'A simple application appears. Use the arrows on the keyboard to select “Interfacing Options”, sub-item “Ssh”. We choose the affirmative action in dialog. So, we have ssh.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Next, go to the item “Advanced Options”, sub-item “Expand Filesystem”, we also answer in the affirmative in the appeared dialog. We should wait a bit. Reboot the RPi:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'sudo reboot -h now',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It also makes sense to update all the software on the raspberry. There is a couple of commands for this:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'sudo apt update sudo apt upgrade',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We will wait for the completion of these commands and the raspberry is ready for use.',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'Stage 2. Turn the screen on',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The screen simply fits onto an RPi. But tightly, nevertheless, electronics is the science of contacts.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Actually, the steps to turn on the screen in the software are described here, but it makes sense to bring them here briefly.',
                spans: [
                  {
                    start: 72,
                    end: 76,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://learn.adafruit.com/adafruit-pitft-28-inch-resistive-touchscreen-display-raspberry-pi/easy-install-2',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Run the following commands:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'cd ~ \nwget https://raw.githubusercontent.com/adafruit/Raspberry-Pi-Installer-Scripts/master/adafruit-pitft.sh\nchmod +x adafruit-pitft.sh\nsudo ./adafruit-pitft.sh',
                spans: [
                  {
                    start: 11,
                    end: 115,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://raw.githubusercontent.com/adafruit/Raspberry-Pi-Installer-Scripts/master/adafruit-pitft.shchmod',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'A script is launched and offers us to pick settings for the screen driver.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The first dialogue gives us the choice between screen types. I have a 2.8″ resistive touchscreen.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The second dialog prompts you to select a screen rotation. For the first time, you can choose just something. And later you have to pick out the turn that you need.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the third dialog, I noticed that I did not need HDMI.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Next, the script downloads something, installs it, thinks about something, and asks for a reboot. Note that you can run the `adafruit-pitft.sh` script again at any time, it will just cause a screen reconfiguration.',
                spans: [
                  {
                    start: 125,
                    end: 143,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In general, I was very pleased with the fact that the screen wound up with a half-kick and works well even without any calibration.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After the reboot, we see that the screen shows us the console, and then the graphical shell.',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'Stage 3. Build Qt',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Well, now we proceed to the very essence of the process. Why Qt at all? The reasons:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '1. Allows you to build very decent user interfaces (GUIs);\n2. It can be used on a wide range of OS and computer architectures;\n3. Development can be easily done in C++.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The Qt build consists of four parts: preparing the environment, configuring, building, and installing.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Preparing the environment for me personally consists of creating directories with the Qt source code, a cross-compiler, a copy of the raspberry system section, and linking all this in scripts that make life easier.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I put the paths used to build the process into a separate script with environment variables.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Download the `*.tar.xz` archive with Qt sources from here. Unpack it somewhere.',
                spans: [
                  {
                    start: 14,
                    end: 23,
                    type: 'em',
                  },
                  {
                    start: 53,
                    end: 57,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://download.qt.io/official_releases/qt/',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Download the `gcc` compiler for ABI `arm-linux-generic-elf-32bit`. I use `gcc-linaro-5.4.1–2017.05-x86_64_arm-linux-gnueabihf` tested in battle, but you can try any one that suits the requirements of Qt.',
                spans: [
                  {
                    start: 14,
                    end: 18,
                    type: 'em',
                  },
                  {
                    start: 74,
                    end: 126,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Now we need a clone of a working flash drive from raspberry. You can make it with the dd command. We stick the flash drive into the computer and run',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'lsblk',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We get a tree of block devices, we find the name of the flash drive. Well, we write something like',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'dd if=/dev/mmcblk01 of=~/images/rpi_working.img bs=100M status=progress',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The path in the `of` the parameter you can use own. This is a matter of personal convenience.',
                spans: [
                  {
                    start: 17,
                    end: 21,
                    type: 'em',
                  },
                  {
                    start: 24,
                    end: 25,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'I prefer to have a complete clone of the file system for single-board development for every significant step in the configuration. Non-global synchronization can be performed using the rsync utility.',
                spans: [
                  {
                    start: 185,
                    end: 190,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'So we have an image. You need to mount it in some directory. There is such a script for this: ',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`mountImage.sh`',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The magic number 98304 was obtained by the `fdisk` utility. This is the offset of the system partition, indicated in the blocks of the file system in the image of the flash drive that we removed.',
                spans: [
                  {
                    start: 44,
                    end: 50,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'So, the environment for building Qt is completed.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The configuration is reduced to calling the configure script in the directory with Qt sources with the parameters we need. The parameters are selected depending on the requirements for the software being developed and the paths to various necessary pieces on a specific developer’s machine. It is necessary first of all in order to identify the missing libraries for building Qt modules.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To configure Qt, I use this script like this: ',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`buildQt.sh`',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It might make sense to assign a different value to the `BUILDPATH` variable. It specifies the directory for the shadow builds.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And these are our build_variables.sh variables:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`buildVariables.sh`',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Only four variables are in our concern:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`PATH_TO_CC` — path to the compiler',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`RPI_ROOT` — path directory with a mounted raspberry file system',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`PATH_TO_QT_SOURCES` — directory with Qt sources',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`PATH_TO_QT_RPI` — the path to which Qt will be installed on the raspberry.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We set them, run the script, and …',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And I’m absolutely sure that Qt will not be configured. The configuration will fail due to missing libraries, even if they are in place. What to do?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After a short look at the libraries, it dawned on me that:',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'There are simply no symbolic links.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'There are libraries, but they are in completely different paths',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Some libraries are not visible due to the fact that the name of the library is a symbolic link name with an absolute path. The path exists within the root filesystem of the RPi, but it is not at the root of our filesystem.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the first case, everything is simple: we look through the configure logs, we find nonexistent libraries. If in the raspberry file system there are necessary ones with a more or less detailed indication of the version, then there is enough just a symbolic link, so we should create it manually with the ln command.',
                spans: [
                  {
                    start: 305,
                    end: 308,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The second case is more complicated. The configure options have this: -device linux-rasp-pi3-g +. It indicates the build options for a particular type of computer. You can create your own settings for custom hardware. These files are located in the Qt source directory, in the `qtbase/mkspec/devices` subdirectory. There are a lot of interesting things in the `qtbase/mkspecs` directory. We find a file with that name, study, and edit as necessary.',
                spans: [
                  {
                    start: 69,
                    end: 96,
                    type: 'em',
                  },
                  {
                    start: 276,
                    end: 278,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'But with the latter case, everything is complicated. Remaking all the links manually is extremely unreasonable, so a couple of good people wrote scripts for this tricky business and shared them with the community.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The first script is here. It’s easy to stumble upon and easy to break off. It doesn`t work properly already for about three years.',
                spans: [
                  {
                    start: 20,
                    end: 24,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/plexydesk/cross-compile-tools/blob/master/fixQualifiedLibraryPaths',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The second script is here. It works like a charm.',
                spans: [
                  {
                    start: 21,
                    end: 25,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/plexydesk/cross-compile-tools/blob/master/fixQualifiedLibraryPaths',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We should run it with the root directory of RPi as a parameter (with `sudo`, of course). It just worked. The configurator rolls out all the features of Qt that will be in the build. If everything suits us, then we proceed to the build.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'To build, go to the directory `BUILDPATH` and command:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'make -j4',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The number 4 depends on the number of cores in the processor of your computer. But you need to leave some processor for yourself, for the sake of order. Go on, make coffee, or tea. Drink it. Have a snack. Talk to someone to calm the soul. Come back. If we encounter compilation errors, it makes sense to run the assembly again. Sometimes it helps.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'If errors continue to occur in the same places, then the problem can be in anything, from the compiler to missing or old headers on the raspberry. approach here is strictly individual to each build error.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'If we have everything built, we can proceed with the installation.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Installation is made from the same directory BUILDPATH with the command:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'sudo make install',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We are waiting for the completion of the command. It copies the built libs and creates symbolic links to them.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After the installation is complete, the image is ready for use. We synchronize its contents with a flash drive either via dd or rsync utilities.',
                spans: [
                  {
                    start: 122,
                    end: 124,
                    type: 'em',
                  },
                  {
                    start: 128,
                    end: 134,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'If after rsync you suddenly cannot access RPi via ssh with the error “Wrong user or password”, then most likely something happened to the `/etc/shadow` file. It is necessary to copy it from the flash drive section mounted on the computer to the flash drive itself.',
                spans: [
                  {
                    start: 9,
                    end: 14,
                    type: 'em',
                  },
                  {
                    start: 50,
                    end: 53,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Step 4. Install curl',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Go to the RPi, execute the command',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'sudo apt install libcurl4-gnutls-dev',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It installs curl with everything needed for development as a library.',
                spans: [
                  {
                    start: 12,
                    end: 16,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Stage 5. Setting up the development environment',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now we want to somehow start writing application code. To do this, we must configure the QtCreator IDE. It can be downloaded and installed separately. However, we will install the whole Qt framework in order to conduct the main part of the development and debugging in comfortable conditions — on a PC. Download Qt again, but this time it’s not an archive, but a full-fledged * .run file. Run it, install Qt.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Open QtCreator. Try to run some examples. If everything is well, then everything is well. However, most often the installed gcc and the libgl1-mesa-dev library are missing. Install them in the usual way for Ubuntu.',
                spans: [
                  {
                    start: 124,
                    end: 127,
                    type: 'em',
                  },
                  {
                    start: 136,
                    end: 151,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'We launch some examples. Everything starts successfully and we are happy about it.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Go to Tools> Options> Kits. We see the settings for all Qt packages (namely, one so far).',
                spans: [
                  {
                    start: 6,
                    end: 26,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Open the Debuggers tab. Add the arm-linux-gnueabihf-gdb debugger from the directory with our cross-compiler, call it arm-gdb.',
                spans: [
                  {
                    start: 9,
                    end: 18,
                    type: 'em',
                  },
                  {
                    start: 32,
                    end: 56,
                    type: 'em',
                  },
                  {
                    start: 117,
                    end: 125,
                    type: 'em',
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
                width: 680,
                height: 377,
              },
              alt: 'Adding a Debugger.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/93ffeafd-c236-49e0-a1c7-186277305160_Adding+a+Debugger+.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Adding a Debugger',
                spans: [],
              },
            ],
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
                text: 'Open the Compilers tab, add the arm-linux-gnueabihf-gcc compiler from the directory with our cross-compiler, call it arm-gcc.',
                spans: [
                  {
                    start: 9,
                    end: 18,
                    type: 'em',
                  },
                  {
                    start: 117,
                    end: 125,
                    type: 'em',
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
                width: 680,
                height: 377,
              },
              alt: 'Adding a Compiler.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/522d8cae-6bd6-49d6-8c4c-24c91e9a8af2_Adding+a+Compiler+.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Adding a Compiler',
                spans: [],
              },
            ],
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
                text: 'Open the Qt versions tab, add the new Qt version from the mounted image (remember the PATH_TO_QT_RPI parameter that we saw during the build? Here in this directory on the image, in the bin subdirectory, we have qmake file, specify it), name it arm-qt.',
                spans: [
                  {
                    start: 9,
                    end: 21,
                    type: 'em',
                  },
                  {
                    start: 185,
                    end: 188,
                    type: 'em',
                  },
                  {
                    start: 211,
                    end: 216,
                    type: 'em',
                  },
                  {
                    start: 244,
                    end: 251,
                    type: 'em',
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
                width: 680,
                height: 377,
              },
              alt: 'Adding a Qt Version.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/125b4e22-966b-4132-9843-783e85124ec1_Adding+a+Qt+Version.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Adding a Qt Version',
                spans: [],
              },
            ],
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
                text: 'Apply all the changes, go to the Kits tab. Add a new kit. Call it rpi-qt. We pick in it our debugger, compiler, and version of Qt.',
                spans: [
                  {
                    start: 33,
                    end: 37,
                    type: 'em',
                  },
                  {
                    start: 66,
                    end: 72,
                    type: 'em',
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
                width: 680,
                height: 377,
              },
              alt: 'Adding a New Kit',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/6a335731-d8c2-4219-8b0a-fc141f4a2950_Adding+a+a+new+kit.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Adding a new kit',
                spans: [],
              },
            ],
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
                text: 'In Device type, specify Generic Linux Device, in Device, click Manage. The device management dialog opens.',
                spans: [
                  {
                    start: 3,
                    end: 14,
                    type: 'em',
                  },
                  {
                    start: 24,
                    end: 44,
                    type: 'em',
                  },
                  {
                    start: 49,
                    end: 55,
                    type: 'em',
                  },
                  {
                    start: 63,
                    end: 69,
                    type: 'em',
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
                width: 680,
                height: 377,
              },
              alt: 'Device Management Dialog.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f81c1ae3-0f84-46a7-9d35-92e8d774a8f1_Device+Management+Dialog+.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Device Management Dialog',
                spans: [],
              },
            ],
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
                text: 'Add a new Generic Linux device, call it something (here it is curler.raspberry). We write down its ip-address and username, which we use for SSH access. Click test. We see a window in which the result of the verification is displayed. We apply and close. We are again on the Kits tab. The name selection on the right has a small picture with a computer. Click there and select the icon. Less confusion will arise further.',
                spans: [
                  {
                    start: 10,
                    end: 23,
                    type: 'em',
                  },
                  {
                    start: 62,
                    end: 78,
                    type: 'em',
                  },
                  {
                    start: 159,
                    end: 163,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Stage 6. Writing a program',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We should create a new project, and include both sets in it (both for the computer and for the RPi).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We connect libraries in a pro-file:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'Libs + = -lcurl',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Well, we change the deployment rules a bit:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'target.path = /home/pi/qcurler/qcurler\nINSTALLS + = target',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This will lead to the fact that the project will be deployed on the RPi in the home directory. Less rights issues during development will appear.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We write the code, as for regular software with Qt framework. We debug the program on the PC. If everything is fine, try to run it on the RPi. A window appears on the display with our program.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'However, we needed only our program to be available, and therefore, through the raspi-config utility, we turned off the graphical shell and started the program with the parameter',
                spans: [
                  {
                    start: 80,
                    end: 92,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: '-platform linuxfb',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And it started on top of the console. For such programs, it generally makes sense to use launch scripts with its environment variables and parameters, but it depends on the development method.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`Script to run curler`',
                spans: [
                  {
                    start: 15,
                    end: 22,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The source code of our application itself can be found here.',
                spans: [
                  {
                    start: 55,
                    end: 59,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/maddevsio/QCurler',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Step 7. Final setup. Autostart',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In Raspbian, systemd is responsible for services management.',
                spans: [
                  {
                    start: 13,
                    end: 20,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In order to register a service, you must put its description in the form of a file with the .service extension into the `/etc/systemd/system` directory and run the command:',
                spans: [
                  {
                    start: 92,
                    end: 100,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: 'sudo systemctl enable servicename.service',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Where enable is the command and servicename is the name of the uploaded file.',
                spans: [
                  {
                    start: 6,
                    end: 12,
                    type: 'em',
                  },
                  {
                    start: 32,
                    end: 43,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'There are a whole bunch of commands: start, stop, restart, disable. It is best to consult the systemd documentation.',
                spans: [
                  {
                    start: 37,
                    end: 66,
                    type: 'em',
                  },
                  {
                    start: 94,
                    end: 101,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'To start the service you need to use the start command.',
                spans: [
                  {
                    start: 41,
                    end: 47,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Our service description is as follows:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`Curler’s Service Description`',
                spans: [],
              },
              {
                type: 'heading3',
                text: 'Other flash drives',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After we sent the first batch of devices, the suitable flashcards ran out within a radius of walking distance from the office. The taken new Chinese flash drive, quite suddenly had lesser storage size and dd simply refused to make the proper copy. There was a need to reduce the image to write it to a flash drive. This script helped us out:',
                spans: [
                  {
                    start: 205,
                    end: 207,
                    type: 'em',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'c2e0f9c861220baec93affd2c48c0736',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'How to Shrink the Cloned Raspberry Pi Image (Linux-only)',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Summary',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The article describes my personal way of software development for a single-board Raspberry Pi computer, but in general terms, it will fit other single-board computers of a similar class. It will also be suitable for custom hardware (there was a case of using Qt on a proprietary drill rig controller), with the difference that it was more convenient for my personal working controller to boot through the NFS network file system.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'If you have comments or notes, please share it.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'P.S. Finally, I’ll repeat the link to our repository with Curler:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://github.com/maddevsio/QCurler',
                embed_url: 'https://github.com/maddevsio/QCurler',
                type: 'link',
                version: '1.0',
                title: 'maddevsio/QCurler',
                author_name: null,
                author_url: null,
                provider_name: 'object',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://avatars0.githubusercontent.com/u/21100936?s=400&v=4',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="object"><a href="https://github.com/maddevsio/QCurler"><h1>maddevsio/QCurler</h1><img src="https://avatars0.githubusercontent.com/u/21100936?s=400&v=4"><p>Contribute to maddevsio/QCurler development by creating an account on GitHub.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/54f69beb-fdc4-4a5a-829a-9a573b0a1f8d_Get+your+trusted+IT+partner+MVP.jpg?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=raspberry-pi-qt#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-rjAhEAACIAHBwE',
    uid: 'a-bit-about-event-delegation-in-pure-js',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-rjAhEAACIAHBwE%22%29+%5D%5D',
    tags: [
      'Frontend development',
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-29T12:15:59+0000',
    last_publication_date: '2021-04-12T10:27:18+0000',
    slugs: [
      'a-bit-about-event-delegation-in-pure-js',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'A Bit about Event Delegation in Pure JS | Mad Devs Blog ',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Event Delegation in pure JS: organization of centralized event processing and concatenation of all the code in one place, with dividing into modules.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'A Bit about Event Delegation in Pure JS',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2019-10-10',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'A Bit about Event Delegation in Pure JS.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/ee76dea8-07c8-4c08-ab9f-5f337a1fd0b0_1_d28fyQqH7yGrZ6NvNpm2jA.png?auto=compress,format&rect=31,0,738,400&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a4638fd8-2510-44f4-b5a7-471836923dca_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,262,262&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/a-bit-about-event-delegation-in-react/"\n      },\n "headline": "A Bit about Event Delegation in Pure JS",\n "alternativeHeadline": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. ",\n "image":\n"https://images.prismic.io/superpupertest/83f9d80e-d90e-4694-bfca-9633adf0bb76_1_wcAi1bMW4Xrj57-rbiE7hg.png?auto=compress,format",\n "editor": "Alexandr Vishnyakov", \n "genre": "Frontend development", \n "keywords": "delegation", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/a-bit-about-event-delegation-in-react/",\n "datePublished": "2019-09-30",\n "dateCreated": "2019-09-30" ,\n "dateModified": "2021-02-12",\n "description": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS.  ",\n "articleBody": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. \nUnfortunately, in our modern world, there is no way to delve into the little things and how frameworks work.\n",\n   "author": {\n    "@type": "Person",\n    "name": "Alexandr "\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'In the previous article, I talked about Event Delegation in React. On this one, I will tell you how you can use this pattern in the world of events in order to successfully overcome difficulties in pure JS as well.',
                spans: [
                  {
                    start: 40,
                    end: 65,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/a-bit-about-event-delegation-in-react/',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In general, I am a supporter of a detailed study of a particular pattern or innovation, since this allows not only to see what implementation difficulties may developers meet but also to test myself in a certain role as the creator of this pattern. Of course, you need to try in isolation from all the frameworks, since using pure JS, you go down to the lowest level of abstraction.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This may not be a very good comparison, but I think that frameworks in JS are high level (since they hide a lot of problems and give for each a solution, sometimes suffered by the authors. You understand, here’s both the implementation method and the moodiness and peculiarity of browsers ). But pure JS is assembler in the web world. Here you are faced with all the problems in the forehead. And only your brain, skills, and StackOverflow can help you 😂.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'So, the time has come to talk about pure JS and the simplest implementation of the `Event Delegation` pattern.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Idea',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Before starting the implementation of the pattern, I would like to fantasize and try something interesting that would show how to use some sorts of DOM API methods, which can greatly help in simplifying your task. And after a little thought, I decided that it was necessary to show the possibilities of templating and to create such a simple analogue of React using the Event Delegation pattern. This is what we will do next!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/',
                embed_url: 'https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/',
                type: 'link',
                version: '1.0',
                title: 'Top 3 Best CI for Your JS Projects with Puppeteer Tests | Mad Devs Blog ',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format&rect=109,0,950,515&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/"><h1>Top 3 Best CI for Your JS Projects with Puppeteer Tests | Mad Devs Blog </h1><img src="https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format&rect=109,0,950,515&w=983&h=533"><p> Comparison of Circle, Cirrus, and Travis CIs\' for JS Projects with Puppeteer Tests. The speed of work, the complexity of configuration, and other differences of these CIs\'.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Templating',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'What already exists from ready-made and simple solution in the browser DOM for our mini React implementation?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Meet the tag',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: '`<template>` — this is a mechanism for `deferred rendering` of client content that is not displayed during page loading, but can be initialized using JavaScript.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'A template can be thought of as a piece of content saved for later use in a document. Although the parser processes the contents of the `<template>` element at the time the page loads, it does this only to make sure the content is valid; the content itself is not displayed.',
                spans: [],
              },
            ],
            name_of_the_author: [
              {
                type: 'paragraph',
                text: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/template',
                spans: [],
              },
            ],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Fine! This is what you need!',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Component Requirements',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now let’s decide what our components will be able to do?',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Be able to process attached event handlers through attributes and respond to them using the `Event Delegation` principle.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Be able to use data from the first level properties of the data object. That is the usage of an attached property of a type `property.subproperty` not available. There will be the only opportunity to specify `property` instead of `property.subproperty`.',
                spans: [
                  {
                    start: 125,
                    end: 146,
                    type: 'strong',
                  },
                  {
                    start: 209,
                    end: 218,
                    type: 'strong',
                  },
                  {
                    start: 231,
                    end: 252,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'In the template, the properties of the data object and the names of the event handlers should be enclosed in curly brackets, for example, like this `{property}` or `{handlerOfSomeEvent}`.',
                spans: [
                  {
                    start: 150,
                    end: 158,
                    type: 'strong',
                  },
                  {
                    start: 166,
                    end: 184,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'If during the `DOM` parsing, components that do not belong to the standard set from the HTML `DOM` are found, then you need to try to find the registered component and replace the non-standard `DOM` node with the component template. Just like in `React`.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The component should be declared as follows:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: '<template name="TodoList">\n  <ol id="todo_list" class="todo__list"></ol>\n</template>',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'where the `name` property will be used for the component name. And it will use the contents of the `<template>` tag as a component markup.',
                spans: [
                  {
                    start: 11,
                    end: 16,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'To declare a component in the DOM, use a view construct of the form `<TodoList></TodoList>`.',
                spans: [
                  {
                    start: 70,
                    end: 78,
                    type: 'strong',
                  },
                  {
                    start: 81,
                    end: 89,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'What will we test our implementation on?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Then a simple thought occurred to me. Implement a simple Todo List.',
                spans: [
                  {
                    start: 57,
                    end: 66,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Functional:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'In fact, you can add text tasks to the list, completing the entry with the `Enter` key or by clicking the `Add` button. In this case, the text field will be cleared, and the `Add` button will be disabled.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'If the task is completed, you press the button with `x` at the corresponding element in the list and this task will be permanently deleted from the list.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/functional-programming-principles-in-javascript/',
                embed_url: 'https://maddevs.io/blog/functional-programming-principles-in-javascript/',
                type: 'link',
                version: '1.0',
                title: 'Functional Programming principles in JavaScript | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/c94b995a-7e4c-4086-af60-f546128e6b15_5.png?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/functional-programming-principles-in-javascript/"><h1>Functional Programming principles in JavaScript | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/c94b995a-7e4c-4086-af60-f546128e6b15_5.png?auto=compress,format&rect=0,1,1400,759&w=983&h=533"><p>Functional Programming is the standard of building modern JavaScript applications. Concepts from this article will allow you to take advantage of Functional Programming and write cleaner code.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {},
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                text: 'The technology of our mini React',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The first phase is going through the DOM in search of `<template>` and custom elements (`HTML tags`). Component registration also enters into this phase — this is the key point where we will apply the `Event Delegation`.',
                spans: [
                  {
                    start: 0,
                    end: 15,
                    type: 'strong',
                  },
                  {
                    start: 55,
                    end: 66,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Registration of global event handlers on the document element + Associating an event processor with each of the global handlers.',
                spans: [
                  {
                    start: 0,
                    end: 37,
                    type: 'strong',
                  },
                  {
                    start: 64,
                    end: 94,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'The second phase is the replacement of custom tags with registered components from the `<template>` tags.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And now below, we will take a look at all these phases in turn.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Phase One (walk through the DOM and search for component declarations)',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Here you go through the DOM elements of an HTML document. In the HTML DOM, we already have the necessary tool that allows us to easily go through all the elements that interest us.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And that tool is `document.createTreeWalker`. Bearded 🧔🧔🏾 guys wrote this API method for promenading over HTML elements. In this case, you can specify the filtering option for nodes of HTML elements. For our case, we will use `NodeFilter.SHOW_ELEMENT`, we will not need text nodes, since we can walk through the text nodes ourselves, inside a specific element.',
                spans: [
                  {
                    start: 18,
                    end: 43,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker',
                      target: '_blank',
                    },
                  },
                  {
                    start: 230,
                    end: 254,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The code for this phase is concentrated here:',
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
                width: 1120,
                height: 682,
              },
              alt: 'Phase 1 Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/82becefd-6253-477c-a024-049b3b9101f6_1_Gvw5mSNA5Jpv13XVI8b0MA.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Phase 1 Code',
                spans: [],
              },
            ],
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
                text: 'To begin with, as you can see, we create an iterator object over the `DOM` elements. And as the root element, from which the journey along with the `DOM` begins, we specify d`ocument.body`.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Then we specify the filter parameter `NodeFilter.SHOW_ELEMENT`. After the filtering parameter, we specify the `acceptNode` handler, in which if you wish, you can add additional filtering conditions for `DOM` elements. This handler should return `NodeFilter.FILTER_ACCEPT` for the necessary nodes, and for skipping `NodeFilter.FILTER_REJECT`. In our case, for example, we always return `NodeFilter.FILTER_ACCEPT`, since the `NodeFilter.SHOW_ELEMENT` flag suits us.',
                spans: [
                  {
                    start: 38,
                    end: 62,
                    type: 'strong',
                  },
                  {
                    start: 246,
                    end: 271,
                    type: 'strong',
                  },
                  {
                    start: 315,
                    end: 340,
                    type: 'strong',
                  },
                  {
                    start: 386,
                    end: 411,
                    type: 'strong',
                  },
                  {
                    start: 424,
                    end: 448,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'After creating an iterator over the `DOM`, using the `nextNode()` method and while loop.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Inside the loop, we collect non-standard `DOM` elements. To do this, check the name of the constructor of the `DOM` node and for non-standard components, the name of the constructor will correspond to `HTMLUnknownElement`. The found elements are written to the array for subsequent processing.',
                spans: [
                  {
                    start: 202,
                    end: 221,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The second step, we check the name of the node for compliance with `TEMPLATE`. This is an announcement of our elements. And each node found, we send to the `registerTemplate` procedure.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Next, we will see how the component registration phase works.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'First phase (registration of component templates)',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Here is the registration procedure:',
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
                width: 1120,
                height: 1091,
              },
              alt: 'Item Template Registration Procedure.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/3e4d99c3-60b9-4947-9890-a1a2f06d8d15_1_akE_Aful1abyJopI174HCg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Item Template Registration Procedure',
                spans: [],
              },
            ],
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
                type: 'o-list-item',
                text: 'First, we copy the contents of the template node using `node.content.cloneNode(true)`. You can read more about cloning here. Cloning is necessary in order to leave the original template unchanged.',
                spans: [
                  {
                    start: 69,
                    end: 78,
                    type: 'strong',
                  },
                  {
                    start: 119,
                    end: 123,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'o-list-item',
                text: 'As a next step, we must go through the contents of the template, identify the text variables to be inserted, and also get event handlers.',
                spans: [],
              },
              {
                type: 'o-list-item',
                text: 'Representation of an element in our collection will look like this:',
                spans: [],
              },
              {
                type: 'preformatted',
                text: '{\n  element,\n  handlers: {},\n  textVars: {}\n};',
                spans: [],
              },
              {
                type: 'list-item',
                text: '`element` — this is the component template node, as is, without processing.',
                spans: [],
              },
              {
                type: 'list-item',
                text: '`handlers` — this is a collection of `key — function` where all handlers for a particular element will be stored.',
                spans: [
                  {
                    start: 38,
                    end: 41,
                    type: 'strong',
                  },
                  {
                    start: 44,
                    end: 53,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: '`textVars` — this is a collection of `index — value``. Here the position is saved in the DOM with the contents of the current node (naturally, without keeping in attention the ability of position changing, imagine that in our case the text nodes will not change positions and this is done for simplification).',
                spans: [
                  {
                    start: 38,
                    end: 43,
                    type: 'strong',
                  },
                  {
                    start: 46,
                    end: 53,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: '4. Inside the loop through the elements of the template, the unique identifier of the template element is generated. It consists of the following parts:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'From the `template name` + `index number` + `node name`. This is quite enough for us to identify the element.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Adding of `data-template` attribute, which contains a unique identifier.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'We go through the collection of attributes of the current node and identify the appropriate event handlers. They start with `on` prefix. And also we are forced to immediately remove the event attribute of the current node so that when inserted into the DOM, we don’t confuse the browser.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'We go through the first level of nesting of child elements and fill in `textVars` for the current element.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Registering global event handlers and event processor binding',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This is the backbone of `Event Delegation`, the core of event processing on different elements.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The event processor looks like this:',
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
                width: 1120,
                height: 661,
              },
              alt: 'Event Processor.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/5c2564b8-1d82-4de3-878d-c38c84910a5c_1_nIOgzF0uXhjuZ18yvJuvUw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Event processor',
                spans: [],
              },
            ],
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
                text: 'And also, for it to work, you need to associate it with events on the `document` element.',
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
                width: 1120,
                height: 121,
              },
              alt: 'Associating an Event Handler with Global Events of Interest to Us.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/476714f7-947f-41da-aba6-4d083ee9f9f5_1_joXLNvg_BjWYsHChJ86czw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Associating an event handler with global events of interest to us',
                spans: [],
              },
            ],
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
                text: 'Thus, we can now respond to three necessary events.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'How will we distinguish for which `component` which `handler` to call? And it’s very simple, earlier we marked each element with a special `data-template` attribute, in which we put the necessary information. Thus, dividing the identifier string by the symbol `:`, we can:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Find a registered component;',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Get the event handler by the full initial value of the `data-template` + `e.type` attribute;',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Check if it matches our pattern `{nameOfEventHandler}`;',
                spans: [
                  {
                    start: 34,
                    end: 52,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'If everything is fine, select the name `nameOfEventHandler` from `{nameOfEventHandler}` and find the handler function in the `globalEventHandlers` collection using this key;',
                spans: [
                  {
                    start: 40,
                    end: 59,
                    type: 'strong',
                  },
                  {
                    start: 67,
                    end: 85,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'And finally, execute the handler, passing it the event object.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'The second phase — rendering custom DOM tags',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This part of the work phase of our simple version of `React` consists of two methods:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'phase Two;',
                spans: [
                  {
                    start: 0,
                    end: 10,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'apply Template.',
                spans: [
                  {
                    start: 0,
                    end: 15,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: '`phase Two` — passes through the collection of custom elements detected in the previous phase and using the `Node.replaceChild` method replaces the node with the component template.',
                spans: [
                  {
                    start: 109,
                    end: 126,
                    type: 'strong',
                  },
                  {
                    start: 109,
                    end: 126,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild',
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
                width: 1120,
                height: 208,
              },
              alt: 'Phase 2 Procedure.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/39e330ed-8654-4ec6-ac65-25afdda4c2c4_1_rlXWC33YVjbn-SzdrFO1PA.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Phase 2 Procedure',
                spans: [],
              },
            ],
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
                text: '`applyTemplate`— inserts data from the passed options object into the element template `HTML`in accordance with `textVars` and returns the processed `HTML` node, ready for insertion into the `DOM`.',
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
                width: 1120,
                height: 386,
              },
              alt: 'The Function of Filling the Template with Data.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/7c42014c-ae2f-4c48-9d20-944c892d98c8_1_gL4QoMUQFZ1gtb3WnHSGAw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'The function of filling the template with data',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Entry point',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This is a piece of code that will breathe life into our simple application that uses `Event Delegation`.',
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
                width: 596,
                height: 364,
              },
              alt: 'The Entry Point to Our Simple React.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/9cc3f4ae-fc62-4977-9784-de45bcddfa3c_1_AGV95lhR0YVrS4bi4T3PjQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'The entry point to our simple React',
                spans: [],
              },
            ],
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
                text: 'After the `runApp` procedure is launched, the phased execution of `Phase 1` and then `Phase 2` will immediately begin. As well as the availability setting for the Add button, given the state of the text field.',
                spans: [
                  {
                    start: 67,
                    end: 75,
                    type: 'strong',
                  },
                  {
                    start: 86,
                    end: 94,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Results Analysis',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'First, let’s see how our HTML “Before” and “After” changes.',
                spans: [
                  {
                    start: 30,
                    end: 38,
                    type: 'strong',
                  },
                  {
                    start: 43,
                    end: 50,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Here is the original HTML:',
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
                width: 1120,
                height: 865,
              },
              alt: 'HTML Source before Processing with our Simple React.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/86ec6e0b-ebd6-47c1-b5d4-368b7844afbf_1_NnXTC8z8ScX2mJ-vF_8Qrw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'HTML source before processing with our simple React',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
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
                width: 1086,
                height: 1236,
              },
              alt: 'And This Is What We Get as a Result of the Work of Our Simple React.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/39bd8a5c-ee46-4b4c-b29f-14e656f7a0de_1_eP2N1zoS2Yb4S7vxR9CsrQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'And this is what we get as a result of the work of our simple React',
                spans: [],
              },
            ],
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
                type: 'list-item',
                text: 'As you can see, inside the `div#app` instead of custom elements, elements from specific templates are displayed. You can also notice the abundance of `data-template` with identifiers for each template node.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'You may also notice the absence of `onclick` and other events outside the `<template>` tags.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Inside the `<template>` tags, all `HTML` nodes remain as they are. So you can definitely check which events with which handlers you specified.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Let’s check now if we really use `Event Delegation`.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'First, let’s look at the Add button',
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
                width: 1120,
                height: 272,
              },
              alt: 'Testing the Use of processEvent Function as an Event Processor Based on the Principles of Event Delegation.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f8b0ba52-8c7e-4ac6-975d-ae4a5e48addf_1_N8PnLqfc9G_-snhOytmAvA.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Testing the use of processEvent function as an event processor based on the principles of Event Delegation',
                spans: [],
              },
            ],
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
                type: 'list-item',
                text: 'We observe the presence of the `processEvent` handler for the click event at the document level, there are no local handlers, there is no element level handlers.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Now check the text box',
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
                width: 1120,
                height: 267,
              },
              alt: 'Testing the Use of processEvent as an Event Processor Based on the Principles of Event Delegation.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/bca9bd2d-8884-43a7-a63f-19cd480122d6_1_vKsWCr9FgyLBKXJhfLOlrw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Testing the use of processEvent as an event processor based on the principles of Event Delegation',
                spans: [],
              },
            ],
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
                text: 'And for the text field, the input event, we also observe the presence of a global `processEvent` handler.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'How things are with the buttons to remove todo item from the list',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Add a few todos and then inspect event handlers:',
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
                width: 1120,
                height: 174,
              },
              alt: 'We Look at the Event Handlers for the Click Event of a Button To Remove a Todo From the List.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/d34d1540-b671-44e4-b89f-957a5f0296e0_1_tvjO0jvPhtRZs4wJI5PuQQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'We look at the event handlers for the click event of a button to remove a todo from the list',
                spans: [],
              },
            ],
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
                text: 'And again we see from the long list, the absence of local event handlers. Only global!',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The application perfectly displays todo and allows you to remove the todos from the list!',
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
                width: 596,
                height: 240,
              },
              alt: 'So Simple and Tasteful.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/8ed579f8-e17f-4856-aa54-e431389da09a_1_NPumGXgCnuu1rDlZGJWYNA.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'So simple and tasteful',
                spans: [],
              },
            ],
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
                type: 'heading4',
                text: 'You could see in action here.',
                spans: [
                  {
                    start: 24,
                    end: 28,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://stackblitz.com/edit/js-f8ulyx?embed=1&file=index.js',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'From the above, we can conclude that we have successfully applied the principles and capabilities of Event Delegation, and also implemented the simplest version of “React” for educational and research purposes.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Most importantly, now if you decide to write your application in pure JS, then the `Event Delegation` approach can:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'save you from having to worry about clearing events on an element before deleting it.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'help organize centralized event processing.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'help to concentrate all the code in one place, with the possibility of dividing the logic into modules.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'rid of hell event handlers.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'eliminate the need to insert pieces of JS code in templates.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Thank you very much for reading! I hope you enjoyed it!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Remote Tech Staff.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/7c90f66c-1393-4830-9086-eebdbbc43e58_Frame+20.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=event-delegation-pure-js#remote-tech-staff',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-Y8fxEAACAAB4VN',
    uid: 'a-bit-about-event-delegation-in-react',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-Y8fxEAACAAB4VN%22%29+%5D%5D',
    tags: [
      'Frontend development',
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-25T19:24:53+0000',
    last_publication_date: '2021-04-08T18:57:47+0000',
    slugs: [
      'a-bit-about-event-delegation-in-react',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'A Bit about Event Delegation in React | Mad Devs Blog ',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. ',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'A Bit about Event Delegation in React',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: 'In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. ',
          spans: [],
        },
      ],
      date: '2019-09-30',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Event Delegation in React.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/83f9d80e-d90e-4694-bfca-9633adf0bb76_1_wcAi1bMW4Xrj57-rbiE7hg.png?auto=compress,format&rect=31,0,738,400&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: 'In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. ',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a4638fd8-2510-44f4-b5a7-471836923dca_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,262,262&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/a-bit-about-event-delegation-in-react/"\n      },\n "headline": "A Bit about Event Delegation in React",\n "alternativeHeadline": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. ",\n "image":\n"https://images.prismic.io/superpupertest/83f9d80e-d90e-4694-bfca-9633adf0bb76_1_wcAi1bMW4Xrj57-rbiE7hg.png?auto=compress,format",\n "editor": "Alexandr Vishnyakov", \n "genre": "Frontend development", \n "keywords": "delegation", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/a-bit-about-event-delegation-in-react/",\n "datePublished": "2019-09-30",\n "dateCreated": "2019-09-30" ,\n "dateModified": "2021-02-12",\n "description": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS.  ",\n "articleBody": "In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS. \nUnfortunately, in our modern world, there is no way to delve into the little things and how frameworks work.\n",\n   "author": {\n    "@type": "Person",\n    "name": "Alexandr "\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Unfortunately, in our modern world, there is no way to delve into the little things and how frameworks work.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We use many tools and like how easy it is to work with them. And most importantly, these tools solve our problems. What else do you need? Of course, the story ends here. How little is needed for happiness?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'But when you implement something on pure JS, you begin to wonder how those frameworks and tools solve certain problems.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this article, we will consider event delegation and what it is for. How it can help you in understanding the mechanisms of the framework, and maybe even in improving your decisions in pure JS.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'How to quick-start a new React project? Use our template which includes everything you need and describes some additional useful things such as typescript and cypress.',
                spans: [
                  {
                    start: 0,
                    end: 167,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/amazing-template-for-react-application/',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/a-bit-about-event-delegation-in-pure-js/',
                embed_url: 'https://maddevs.io/blog/a-bit-about-event-delegation-in-pure-js/',
                type: 'link',
                version: '1.0',
                title: 'A Bit about Event Delegation in Pure JS | Mad Devs Blog ',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/ee76dea8-07c8-4c08-ab9f-5f337a1fd0b0_1_d28fyQqH7yGrZ6NvNpm2jA.png?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/a-bit-about-event-delegation-in-pure-js/"><h1>A Bit about Event Delegation in Pure JS | Mad Devs Blog </h1><img src="https://images.prismic.io/superpupertest/ee76dea8-07c8-4c08-ab9f-5f337a1fd0b0_1_d28fyQqH7yGrZ6NvNpm2jA.png?auto=compress,format"><p>Event Delegation in pure JS: organization of centralized event processing and concatenation of all the code in one place, with dividing into modules.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'What is an Event Delegation?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'You have probably already encountered delegation of authority and tasks. The meaning of this word is very important, isn’t it? And the main point is in centralizing decision-making, thereby reducing the number of decision-making points. This is the work of a leader.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Perhaps the key points of delegation:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Centralization (which makes it possible to monitor events)',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Tracking (from whom the event came)',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Filtering (decide to react or not)',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In fact, you do not handle an event on each child DOM element, but handle them on some parent DOM element and then decide what to do and how.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Event delegation - is a method of attaching event handlers not to the elements from which you actually want to handle events, but to a higher-level element.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'In any case, when you work with a large number of interactive elements. We get a lot of elements that can be removed and added quite intensively. If you accidentally did not clear the events of an element that was previously removed from the DOM by any line of code, you will get zombies that can eat up the memory.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'The solution to the problem of handling events in parent elements with a large nesting of child elements. For example, if you click on the most nested child element, click events will be triggered on each of the parent elements. And here you can avoid using e.stopPropagation(). This is why it is not recommended to use event chain interruption in handlers, since if you need to handle an event on the parent component, then you will not succeed.',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [
              {
                type: 'heading2',
                text: 'When to apply?',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: '',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'How is event delegation applied in React?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Actually, you are watching a very good picture. There are practices that have long been applied that really solve problems, and you most often see their usage in high-quality and recommended products. These are kind of design patterns.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Let’s see how `React` applies `Event delegation`:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                height: 400,
                width: 745,
                embed_url: 'https://stackblitz.com/edit/react-7h5cje?embed=1&file=index.js',
                type: 'rich',
                version: '1.0',
                title: 'react-7h5cje - StackBlitz',
                author_name: 'Alexander',
                author_url: 'https://stackblitz.com/@CyberLight',
                provider_name: 'StackBlitz',
                provider_url: 'https://stackblitz.com',
                cache_age: null,
                thumbnail_url: null,
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<iframe src="https://stackblitz.com/edit/react-7h5cje?embed=1&amp;file=index.js" height="400" width="745"></iframe>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                text: 'First, open the `Chrome Developer Tool` sand find the list item.',
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
                width: 1112,
                height: 246,
              },
              alt: 'Example the First Element in the List on Chrome Dev Tools.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/3ca27d8d-dafa-4825-810f-9b1634f762ef_1_oAZncbkmA0DJPEyLLRNMnQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'We find for example the first element in the list',
                spans: [],
              },
            ],
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
                text: 'Highlight this list item in the `DOM` and go to the `Event Listeners` tab.',
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
                width: 1114,
                height: 636,
              },
              alt: 'Event Listeners Tab on Chrome Dev Tool.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/97a5b6d5-aaad-4f28-b767-d7558fcbc099_1_hRYBk4Ege3E2J-eVAcQauw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Event Listeners tab and click event list',
                spans: [],
              },
            ],
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
                text: 'If you expand the list of `click` event handlers, you will notice that `React-DOM` has created two handlers:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'One on our element selected in the `DOM`',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'And one event handler for the `DOM document` object globally',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '`Hmm …` you think, every element has a handler, in this case, where are the pros of `Event Delegation`?',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'That’s a fair question, but in each case you need to dig down. Let’s go deeper and expand the property tree of the `<li>` element',
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
                width: 1112,
                height: 204,
              },
              alt: 'Event Listener →li.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/5f7f3139-0500-4488-833f-51726dcafefd_1_f3X-n8-WeNP5qZq7P097bQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Event Listener →li',
                spans: [],
              },
            ],
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
                text: 'What do we see? The name of the `noop` function hints that this is a `stub`. And most importantly, this `stub` exists in a single, global instance, and when you delete an item from the `DOM`, you can easily remove the `element.removeEventListener(‘click’, noop)` event. Yes, this slightly eliminates the effect of `Event Delegation`, but if you search the Internet, you will find the answer to this question. I’ll save your time — this decision is associated with a bug in `iOS Safari`.',
                spans: [
                  {
                    start: 474,
                    end: 484,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'A bit about the bug in iOS Safari',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'For each so-called “bug”, because it violates our usual use case, there is a certain reason. Because this bug can be the result of an architectural solution and hardware capabilities.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'It turns out that `Safari` on the `iPhone` does not support `event delegation` for click events, unless click occurs on a`link` or `text field`.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Nevertheless, `Apple` engineers could not be so wrong, here the matter is something else. There must be some `reasons` for this`behavior`. The true reason is not known, but perhaps — this is a memory management problem. Apparently, giving all the elements on the page the ability to respond to clicks requires too many resources, and Apple engineers decided to disable this possibility.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'This fact is, of course, a serious problem for web pages with a high degree of user interaction. This is an annoying fact, but, fortunately, there is a workaround.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'You must make the element clickable by providing it with its own `onclick` event handler. This handler can be `empty`, while it is present, any element will be clickable.',
                spans: [],
              },
              {
                type: 'preformatted',
                text: 'document.onclick = function (e) {\n  // click logic here\n}\ndiv.onclick = function () {} // empty event handler',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'We still handle the event at the document level, but add an `empty event handler` to the `div` that we want to click. Now suddenly a `div` becomes `clickable`, the event passed to the document and is processed correctly.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The only trick is that we have to repeat this every time we change the div. After the old div has been removed from the `DOM` and a new one has been added, the `onclick` event handler also needs to be reinstalled.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now you know the answer to the question: Where did the `noop()` handler come from for the `li`element?',
                spans: [
                  {
                    start: 41,
                    end: 102,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'You can also notice the mention of a safari bug in the source code `React`',
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
                width: 1440,
                height: 592,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/06a86140-a8b7-47b0-9908-7df216834c12_1_WFN3uhmPnR1-iZWO_58weg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
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
                text: 'See here.',
                spans: [
                  {
                    start: 4,
                    end: 8,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/facebook/react/blob/b8d079b41372290aa1846e3a780d85d05ab8ffc1/packages/react-dom/src/client/ReactDOMComponent.js#L295',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Fun fact, but `//TODO: Only do this for the relevant Safaris maybe?` hints that it would be nice to use this trick only on bug-prone versions of `Safari`. Since we see the ubiquitous installation of `noop` for those elements that require a click event, it means that no mechanism has yet been added to narrow the place of usage of this trick.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This fact, of course, does not improve the mood of the developer, since it still creates a load on the use of memory on a page with many components, which suggests receiving a feedback from the user in the form of a `click`.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Let’s back to the Event Delegation topic in React',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'So, we found out why the `noop()` event handler is needed. And now we can understand why the event is handled globally on document object.',
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
                width: 1114,
                height: 766,
              },
              alt: 'React’s Global Event Handler by Event Delegation Approach.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/e6e7e2d4-17bd-4948-9f92-b78fe6a7d4d7_1_oS-47xfNl2oyTdQSLbRyvw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'React’s global event handler by Event Delegation approach',
                spans: [],
              },
            ],
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
                text: 'Event Delegation is an important event processing design pattern. This is where the magic of Event Delegation is going on.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Let’s take a look at the event handling method in the React source.',
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
                width: 1100,
                height: 356,
              },
              alt: 'The Event Handling Method in the React Source.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/dc2bbab6-6df9-4472-b256-9126d963094e_1_-cJwNXat2DdV3-sbG-PgCw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
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
                text: 'See here.',
                spans: [
                  {
                    start: 4,
                    end: 8,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/facebook/react/blob/fd870e6b6a9c35cf4bb77d83dbfe61e07327368f/packages/react-ui/events/src/dom/shared/index.js#L33',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'And if we delve deeper into this super-method in the React source, you can see the following picture:',
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
                width: 1120,
                height: 1159,
              },
              alt: 'The Event Handling Method in the React Source.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/eb506c35-fcb0-4138-a6cb-611cab238ec5_1_bHp23knYE8Tdg-ZyJzGqLg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
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
                text: 'Here is a very long function for determining the target that issued the event, and further dispatching the event through the React infrastructure.',
                spans: [
                  {
                    start: 0,
                    end: 4,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/facebook/react/blob/8d7c733f1fdad55d0f10947931b378edc5e039ad/packages/react-dom/src/events/ReactDOMEventListener.js#L314',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'As you can see, the basic logic for determining the element that generated the event, as well as throwing the event through the React architecture, is done below.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And if we look, purely from interest, at the `getEventTarget` function, we will see how much we need to consider of moments before choosing the right element, which is suitable as the source of the event.',
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
                width: 1120,
                height: 754,
              },
              alt: 'getEventTarget Function.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/7a5b75ac-aadf-4680-8ef3-4713bcfe9d72_1_Mwal5_a6hjiRk2_1T0Or-A.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: '',
                spans: [],
              },
            ],
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
                text: 'See here.',
                spans: [
                  {
                    start: 4,
                    end: 8,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/facebook/react/blob/8d7c733f1fdad55d0f10947931b378edc5e039ad/packages/react-dom/src/events/getEventTarget.js',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'As a result, you have to pay for the convenience in handling events with a more complex code scheme. But if you look at the hell of the handlers that could wait for the developer, then nevertheless the `Event Delegation` rules. The main thing is to understand the general pattern, and its usage is a matter of technology.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/best-architecture-for-the-react-project/',
                embed_url: 'https://maddevs.io/blog/best-architecture-for-the-react-project/',
                type: 'link',
                version: '1.0',
                title: 'Best Architecture for the React Project | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/0af584bc-4da6-469d-954a-ae4f2d6b7e37_react.jpg?auto=compress,format&rect=0,390,6240,3383&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/best-architecture-for-the-react-project/"><h1>Best Architecture for the React Project | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/0af584bc-4da6-469d-954a-ae4f2d6b7e37_react.jpg?auto=compress,format&rect=0,390,6240,3383&w=983&h=533"><p>What the arc.js is - the advantages and disadvantages of arc.js architecture. Solving problems related to the implementation of arc.js architecture.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After reading this article, you now know:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'What is `Event Delegation`?',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'How it works in general in `React`;',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Why you need a `noop` click event handler;',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The details of the so-called `bug` in `iOS Safari`;',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The implementation of `Event Delegation` is a centralized event processing pattern.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I hope you learned something interesting for yourself, and if not, it means you may have consolidated your knowledge.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Thanks for reading!',
                spans: [
                  {
                    start: 0,
                    end: 19,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 19,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Remote Tech Staff.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/190d30a4-3104-415e-af03-65a3f7fc771d_Frame+15.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=event-delegation-react#remote-tech-staff',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-YubREAACEAB0cg',
    uid: 'best-ci-for-js-projects-with-puppeteer-tests',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-YubREAACEAB0cg%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Editors pick',
      'Software Development ',
    ],
    first_publication_date: '2020-12-25T18:24:49+0000',
    last_publication_date: '2021-04-08T18:52:32+0000',
    slugs: [
      'top-3-best-ci-for-your-js-projects-with-puppeteer-tests',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Top 3 Best CI for JS projects with Puppeteer Tests | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: ' Comparison of Circle, Cirrus, and Travis CIs\' for JS Projects with Puppeteer Tests. The speed of work, the complexity of configuration, and other differences of these CIs\'.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Top 3 best CI for your JS projects with Puppeteer tests',
          spans: [],
        },
      ],
      subtitle: [],
      date: '2019-07-19',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Top 3 Best CI for Your JS Projects with Puppeteer Tests.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format&rect=109,0,950,515&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/c4ec3c11-04d9-4e0d-b1f1-50f00883a0af_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,262,262&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/"\n      },\n "headline": "Top 3 Best CI for Your JS Projects with Puppeteer Tests",\n "alternativeHeadline": "Continuous Integrationis a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily -- leading to multiple integrations per day. ",\n "image":\n"https://images.prismic.io/superpupertest/f0ac1d09-037c-4d09-8599-13dd754d2b13_1_MccluIYzshmdLz4cM_HsEg.png?auto=compress,format",\n "editor": "Alexander Vishnyakov", \n "genre": "Backend development", \n "keywords": " Circle CI, Cirrus CI, Travis-CI", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/best-ci-for-js-projects-with-puppeteer-tests/",\n "datePublished": "2019-07-19",\n "dateCreated": "2019-07-19,",\n "dateModified": "2021-02-12",\n "description": "Comparison of Circle, Cirrus, and Travis CIs\' for JS Projects with Puppeteer Tests. The speed of work, the complexity of configuration, and other differences of these CIs ",\n "articleBody": "For the first time, it was conceptualized and proposed by Grady Booch in 1991. It is one of the main elements of extreme programming practice. I already have such a project, on which I tried the following three CIs: Circle CI, Cirrus CI, Travis-CI. And so, in descending order, I will talk about each of this CIs in the list. I\'ll tell you about the speed of work, the complexity of configuration and other differences.\n ",\n   "author": {\n    "@type": "Person",\n    "name": "Alexander "\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                type: 'heading2',
                text: 'What is Continuous Integration?',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'Continuous Integrationis a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily — leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. Many teams find that this approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly.',
                spans: [],
              },
            ],
            name_of_the_author: [
              {
                type: 'paragraph',
                text: 'Martin Fowler',
                spans: [],
              },
            ],
            portrait_author: {
              dimensions: {
                width: 700,
                height: 700,
              },
              alt: 'Martin Fowler.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/ed0abc2f-f5f5-4557-9af3-65efe2d2c6e0_mf-dallas.jpg?auto=compress,format&rect=0,0,1000,1000&w=700&h=700',
              mobile: {
                dimensions: {
                  width: 50,
                  height: 50,
                },
                alt: ' Martin Fowler.',
                copyright: null,
                url: 'https://images.prismic.io/superpupertest/ed0abc2f-f5f5-4557-9af3-65efe2d2c6e0_mf-dallas.jpg?auto=compress,format&rect=0,0,1000,1000&w=50&h=50',
              },
            },
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
                text: 'For the first time, it was conceptualized and proposed by Grady Booch in 1991. It is one of the main elements of extreme programming practice.',
                spans: [
                  {
                    start: 58,
                    end: 69,
                    type: 'strong',
                  },
                  {
                    start: 58,
                    end: 69,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://en.wikipedia.org/wiki/Grady_Booch',
                      target: '_blank',
                    },
                  },
                  {
                    start: 73,
                    end: 77,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'I already have such a project, on which I tried the following three CIs:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Circle CI',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Cirrus CI',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Travis-CI',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And so, in descending order, I will talk about each of this CIs in the list. I’ll tell you about the speed of work, the complexity of configuration and other differences. And so, let’s get started! Caution: A lot of pictures! :warn_frontend_gods_emoji:',
                spans: [
                  {
                    start: 198,
                    end: 252,
                    type: 'strong',
                  },
                  {
                    start: 226,
                    end: 252,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Special thanks to Fedor Korotkov for the help in translating and clarifying inaccuracies. It is very cool!',
                spans: [
                  {
                    start: 0,
                    end: 106,
                    type: 'strong',
                  },
                  {
                    start: 18,
                    end: 32,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/u/780a30ef6583?source=post_page-----9395ff31d134--------------------------------',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Circle CI',
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
                width: 1400,
                height: 786,
              },
              alt: 'This is What the Circle CI Interface Looks Like.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/32a11099-6bfa-4d03-a2e6-8a60f20246fe_1_2aTMqFRTXyCoOl5LMQpUyQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'This is what the Circle CI interface looks like.',
                spans: [],
              },
            ],
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
                text: 'By the way, I wanted to say at once that Circle CI is the fastest of all of the above, the first place, but as it will be later seeing after measuring build times, Cirrus CI is 22 seconds faster and it turns out that it takes the first place instead of Circle CI. The same build, for the same purpose - to run integration tests, passes very quickly and you observe the result for your Pull Request one of the first. This is very cool since the time to run the tests is very valuable for the developer, the faster pass of tests on CI guarantee that developers will be able to deploy the new functionality faster.',
                spans: [
                  {
                    start: 41,
                    end: 50,
                    type: 'strong',
                  },
                  {
                    start: 41,
                    end: 50,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://circleci.com/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 164,
                    end: 173,
                    type: 'strong',
                  },
                  {
                    start: 164,
                    end: 173,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://cirrus-ci.org/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 177,
                    end: 179,
                    type: 'strong',
                  },
                  {
                    start: 230,
                    end: 241,
                    type: 'strong',
                  },
                  {
                    start: 253,
                    end: 262,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Circle CI Build Step Timing',
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
                width: 1400,
                height: 829,
              },
              alt: 'Screen of Starting and Passing Tests on CI for Pull Request.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/4516c105-bada-46a4-b83c-9e2e0e78e42a_1_7Hkb9cubIw2xwIqQdlJVKg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Screen of starting and passing tests on CI for Pull Request',
                spans: [],
              },
            ],
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
                text: 'The timing of launching integration tests on Circle CI is as follows:',
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
                width: 1400,
                height: 494,
              },
              alt: 'Timing of Steps to Run the Integration Tests.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/107d47ad-6e66-4f7c-97c7-490faca482b4_1_5NgN_ePKaELE29nD4HYmug.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Timing of steps to run the integration tests',
                spans: [],
              },
            ],
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
                text: 'All build steps passed and took 57 seconds, very cool!',
                spans: [
                  {
                    start: 32,
                    end: 34,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Spin up Environment — 2 seconds',
                spans: [
                  {
                    start: 0,
                    end: 20,
                    type: 'strong',
                  },
                  {
                    start: 22,
                    end: 23,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Checkout code — 0 seconds, very cool!',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                  {
                    start: 16,
                    end: 17,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Restoring Cache — 9 seconds',
                spans: [
                  {
                    start: 0,
                    end: 15,
                    type: 'strong',
                  },
                  {
                    start: 18,
                    end: 19,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Install dependencies — 12 seconds (installing dependencies for google-chrome-stable)',
                spans: [
                  {
                    start: 0,
                    end: 20,
                    type: 'strong',
                  },
                  {
                    start: 23,
                    end: 25,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Install Chromedriver latest version — 7 seconds (installation of google-chrome-stable)',
                spans: [
                  {
                    start: 0,
                    end: 35,
                    type: 'strong',
                  },
                  {
                    start: 38,
                    end: 39,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm i — 5 seconds (installing dependencies via node package manager with a key indicating puppeteer that you do not need to download chromium).',
                spans: [
                  {
                    start: 0,
                    end: 44,
                    type: 'strong',
                  },
                  {
                    start: 46,
                    end: 47,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Saving Cache — 4 seconds (caching contents of node_modules folder)',
                spans: [
                  {
                    start: 0,
                    end: 12,
                    type: 'strong',
                  },
                  {
                    start: 15,
                    end: 16,
                    type: 'strong',
                  },
                  {
                    start: 46,
                    end: 59,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'npm run test:integration — 14 seconds (launching of integration tests through puppeteer)',
                spans: [
                  {
                    start: 0,
                    end: 24,
                    type: 'strong',
                  },
                  {
                    start: 78,
                    end: 87,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Total: 53 seconds',
                spans: [
                  {
                    start: 7,
                    end: 9,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The queue to start the build ~ 4 seconds',
                spans: [
                  {
                    start: 31,
                    end: 32,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading3',
                text: 'Circle CI configuration for running tests using puppeteer',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It all starts with creating a configuration file named config.yml inside the .circleci folder, which should be in the project’s root.',
                spans: [
                  {
                    start: 55,
                    end: 65,
                    type: 'strong',
                  },
                  {
                    start: 77,
                    end: 86,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'fa5d0d98de02bc44aca6a8512bf90193',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'circleci_config.yml',
                spans: [],
              },
            ],
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
                text: 'The configuration file is very coolly structured, which allows you to immediately see the moments related to Jobs. It immediately focuses that only one Job will be launched and all settings for this Job are below.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'It is very convenient to specify which Docker image is needed for your project.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'You must specify working_directory — a folder relative to the root folder / where your build will be.',
                spans: [
                  {
                    start: 17,
                    end: 34,
                    type: 'strong',
                  },
                  {
                    start: 74,
                    end: 75,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'And you immediately see which steps will be included in the CI build in the steps: section.',
                spans: [
                  {
                    start: 76,
                    end: 82,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'The ability to cache contents of node_modules folder is cool because it contains “whole Internet” :).',
                spans: [
                  {
                    start: 33,
                    end: 45,
                    type: 'strong',
                  },
                  {
                    start: 82,
                    end: 96,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Each execution step can be named so it is more understandable, and you can specify the command will be executed for the corresponding step.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Writing configuration for Circle CI is very convenient and trouble-free work.',
                spans: [
                  {
                    start: 26,
                    end: 35,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Cirrus CI — fashionable and cross-platform CI from Cirrus Labs',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I think this is the coolest implementation of CI, because it supports Linux, Windows and macOS platforms. And all in one box! If your project is cross-platform, then you won’t find a better CI. On the Cirrus CI website, you can read more about its capabilities.',
                spans: [
                  {
                    start: 201,
                    end: 210,
                    type: 'strong',
                  },
                  {
                    start: 201,
                    end: 210,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://cirrus-ci.org/',
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
                width: 1400,
                height: 1026,
              },
              alt: 'Comparison with Popular CIaaS.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/d995b57c-34e3-47fb-a806-ca8909ad20fe_1_fSH0kkgKVuP3GS50xQlyGg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Comparison with popular CIaaS',
                spans: [],
              },
            ],
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
                text: 'This CI naturally takes the first place, according to the speedy passage of the build.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Setting up a Cirrus CI build',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'To do this, install Github App from GitHub Marketplace inside your repository or organization settings.',
                spans: [
                  {
                    start: 20,
                    end: 30,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/marketplace/cirrus-ci',
                      target: '_blank',
                    },
                  },
                  {
                    start: 36,
                    end: 54,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/marketplace',
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
                width: 1400,
                height: 1413,
              },
              alt: 'Cirrus CI.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/2dbd2e82-8c56-4798-b681-f966e5d38633_1_oAlEeA9p5dzRzz4ELwe2cQ.png?auto=compress,format',
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
                type: 'list-item',
                text: 'Next, you need to choose a plan.',
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
                width: 1400,
                height: 735,
              },
              alt: 'Cirrus CI Pricing Plan.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/ecf2fa14-3017-477d-b5ca-efe56dac50a7_1_pVR7EKkf6IB2eWxKO-AJiw.png?auto=compress,format',
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
                type: 'list-item',
                text: 'Fortunately, there is no need to pay anything for public repos and thanks for that to Cirrus Labs! There is no time limit for public repositories except these concurrency limits: https://cirrus-ci.org/faq/#are-there-any-limits.',
                spans: [
                  {
                    start: 86,
                    end: 97,
                    type: 'strong',
                  },
                  {
                    start: 179,
                    end: 226,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://cirrus-ci.org/faq/#are-there-any-limits',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'For personal private repositories, Cirrus is $10/month with the same limits. For organization private projects, you can either connect your own infrastructure or use per-second billing with no concurrency limits. Each organization also gets 200 CPU hours to try things out.',
                spans: [
                  {
                    start: 45,
                    end: 54,
                    type: 'strong',
                  },
                  {
                    start: 241,
                    end: 248,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'The Cirrus CI application setup page for your repo or organization',
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
                width: 1400,
                height: 1498,
              },
              alt: 'Cirrus CI.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/eeebe323-a8ca-4fc6-bdee-1694e55b239e_1_P7Zar-Ouyg675BjuTLz66g.png?auto=compress,format',
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
                text: 'Everything is very convenient here too! You can choose which repositories will be tracked for changes and trigger builds from the Cirrus CI side. For this respect to CirrusLabs.',
                spans: [
                  {
                    start: 130,
                    end: 139,
                    type: 'strong',
                  },
                  {
                    start: 130,
                    end: 139,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://cirrus-ci.org/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 166,
                    end: 176,
                    type: 'strong',
                  },
                  {
                    start: 166,
                    end: 176,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/cirruslabs',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'A little bit about the interface of Cirrus CI application',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This UI is available directly in your repo. It is very convenient when on the screen below you can see the number of steps and their timing.',
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
                width: 1400,
                height: 976,
              },
              alt: 'Interface of Cirrus CI Application.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/0df20a68-743a-4806-a4f4-d93d479c2f50_1_o1fCZ6nn5dmF1xAcWp0D2w.png?auto=compress,format',
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
                type: 'heading2',
                text: 'Timing of Cirrus CI',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Judging by the time spent at the build stages, we see only 31 seconds, which is much less than the time spent by Circle CI.',
                spans: [
                  {
                    start: 59,
                    end: 61,
                    type: 'strong',
                  },
                  {
                    start: 113,
                    end: 123,
                    type: 'strong',
                  },
                  {
                    start: 113,
                    end: 122,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://circleci.com/',
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
                width: 1400,
                height: 865,
              },
              alt: 'List of All Tasks and Steps on Cirrus CI.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/c2ae6bb1-097c-4f8d-90ce-d6a34e4dacc6_1_zApKt7Jb4cy7AZcw7zbBbw.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'List of all tasks and steps on Cirrus CI',
                spans: [],
              },
            ],
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
                text: 'As you can see, the Prebuild task is not executed, since nothing has changed in the docker file for the test environment.',
                spans: [
                  {
                    start: 20,
                    end: 29,
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
                width: 1400,
                height: 376,
              },
              alt: 'List of All Tasks and Steps on Cirrus CI.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/3ae8905b-c6ae-4e5e-8464-fcd9e6332a8b_1_grsCG78dQqKApXvJp8x9Cg.png?auto=compress,format',
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
                text: 'Cloning repos, running xvfb for the future for non-headless tests + installing dependencies through npm and running tests, all together take 31 seconds! Not bad at all! Cirrus CI is faster than Circle CI! Another penny to the karma of the Cirrus Labs!',
                spans: [
                  {
                    start: 141,
                    end: 143,
                    type: 'strong',
                  },
                  {
                    start: 169,
                    end: 179,
                    type: 'strong',
                  },
                  {
                    start: 194,
                    end: 203,
                    type: 'strong',
                  },
                  {
                    start: 239,
                    end: 250,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/cirruslabs',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Cirrus CI configuration to run puppeteer tests',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The entire configuration is also based on yml and is described in the .cirrus.yml file, which should be in the root of your project.',
                spans: [
                  {
                    start: 42,
                    end: 45,
                    type: 'strong',
                  },
                  {
                    start: 70,
                    end: 81,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '66c32b9b519002b3ebc8c1e3be58c9c1',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: '.cirrus.yml',
                spans: [],
              },
            ],
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
                text: 'I believe that this is the closest approximation of config what is used for VSCode and it is great!',
                spans: [
                  {
                    start: 76,
                    end: 82,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The most important feature of Cirrus CI is the ability to specify your own Dockerfile for the execution environment I need. What I hurried to use!',
                spans: [
                  {
                    start: 30,
                    end: 39,
                    type: 'strong',
                  },
                  {
                    start: 75,
                    end: 85,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'a865a6395b55f71a66558869bf11dbbe',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: '.ci_mode10_Dockerfile.linux',
                spans: [],
              },
            ],
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
                text: 'With the exception of selecting an individual user, in order to enable sandbox mode, the installation of google-chrome-stable repeats what is specified in .devcontainer/Dockerfile. And as it turns out, compared to Circle CI and Travis-CI — this is a cool feature! No need to move away from the usual way to install the browser and use some mystical plugins or non-obvious installation scripts that you can hardly find in the threads of discussing problems on GitHub and running tests on a particular CI associated with Puppeteer. And since the Docker image is built only once upon a change to Dockerfile, you can make sure that your execution environment is the same for every single build.',
                spans: [
                  {
                    start: 105,
                    end: 125,
                    type: 'strong',
                  },
                  {
                    start: 155,
                    end: 179,
                    type: 'strong',
                  },
                  {
                    start: 214,
                    end: 223,
                    type: 'strong',
                  },
                  {
                    start: 228,
                    end: 237,
                    type: 'strong',
                  },
                  {
                    start: 519,
                    end: 528,
                    type: 'strong',
                  },
                  {
                    start: 593,
                    end: 603,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Travis-CI',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'This is probably the longest running build compared to Circle CI and Cirrus-CI. And for this reason, Travis-CI is at the end of the list.',
                spans: [
                  {
                    start: 55,
                    end: 64,
                    type: 'strong',
                  },
                  {
                    start: 69,
                    end: 78,
                    type: 'strong',
                  },
                  {
                    start: 101,
                    end: 110,
                    type: 'strong',
                  },
                  {
                    start: 101,
                    end: 110,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://travis-ci.org/',
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
                width: 1400,
                height: 862,
              },
              alt: 'An Example of the Travis-CI Interface for thecurrent/latestbuild.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/14585ae0-be44-43ee-b48a-acde6df03a77_1_RkI_MK5Hw3sxc1zhAcI4HA.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'An example of the Travis-CI interface for thecurrent/latestbuild.',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Build timing of Travis-CI',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'As can be see from the interface, the total execution time was 1 minute 11 seconds. This is 2 times longer than Circle-CI and ~ 3 times more than Cirrus-CI.',
                spans: [
                  {
                    start: 63,
                    end: 82,
                    type: 'strong',
                  },
                  {
                    start: 92,
                    end: 93,
                    type: 'strong',
                  },
                  {
                    start: 112,
                    end: 121,
                    type: 'strong',
                  },
                  {
                    start: 128,
                    end: 130,
                    type: 'strong',
                  },
                  {
                    start: 146,
                    end: 155,
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
                width: 1400,
                height: 465,
              },
              alt: 'The Timings of Steps are Indicated Directly in the Interactive Log.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/949bfb3c-86c7-49cc-bf35-62432d0d0fae_1_HGhfvy5y0YAPKkCs-sQiqg.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'The timings of steps are indicated directly in the interactive log.',
                spans: [],
              },
            ],
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
                type: 'list-item',
                text: 'Repo cloning — 4.48 seconds',
                spans: [
                  {
                    start: 15,
                    end: 19,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Installation of node.js 10.15.3–2.79 seconds',
                spans: [
                  {
                    start: 16,
                    end: 36,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Launching xvfb — 0.01 seconds',
                spans: [
                  {
                    start: 10,
                    end: 14,
                    type: 'strong',
                  },
                  {
                    start: 17,
                    end: 21,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Installing dependencies through npm — 7.16 seconds',
                spans: [
                  {
                    start: 38,
                    end: 42,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Running of integration tests — 17.58 seconds',
                spans: [
                  {
                    start: 31,
                    end: 36,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In total: 32.02 seconds! What? Where did 1 minute 11 seconds come from?',
                spans: [
                  {
                    start: 10,
                    end: 15,
                    type: 'strong',
                  },
                  {
                    start: 41,
                    end: 60,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Judging by the RAW log, I see that the rest of the time was spent creating the environment (this time is not spent on Circle-CI and Cirrus-CI), and this happens every time again. Travis uses generic purpose VMs with many packages pre-installed and many add-ons ready to be installed. This means that when Travis updates their environment with newer versions of packages there are no guarantees that your CI builds continue working like before. You cannot rely on reproducibility of your execution environment like with Docker images which are immutable. In general, there was a hot discussion of tasks with the docker inside. In it, people complained that their build passes 9 minutes on Travis-CI, whereas locally, due to caching images of the docker, the build finishes in a minute.',
                spans: [
                  {
                    start: 118,
                    end: 127,
                    type: 'strong',
                  },
                  {
                    start: 132,
                    end: 141,
                    type: 'strong',
                  },
                  {
                    start: 566,
                    end: 571,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/travis-ci/travis-ci/issues/5358',
                      target: '_blank',
                    },
                  },
                  {
                    start: 675,
                    end: 684,
                    type: 'strong',
                  },
                  {
                    start: 688,
                    end: 697,
                    type: 'strong',
                  },
                  {
                    start: 771,
                    end: 783,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Un-obvious things which I encountered using Travis-CI',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'These are environment variables in the key of the configuration file env: It seems that everything seemed obvious, you simply indicate one variable environment per line, with its value and everything is ok. But no! As it turned out, each line, in this case, means setting each of the variables to one task. Thus, by setting 2 environment variables, I got two tasks!',
                spans: [
                  {
                    start: 69,
                    end: 73,
                    type: 'strong',
                  },
                  {
                    start: 207,
                    end: 214,
                    type: 'strong',
                  },
                  {
                    start: 297,
                    end: 305,
                    type: 'strong',
                  },
                  {
                    start: 324,
                    end: 325,
                    type: 'strong',
                  },
                  {
                    start: 355,
                    end: 364,
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
                width: 1400,
                height: 572,
              },
              alt: 'That’s How Two Environment Variables Spawned — Two Tasks!',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/514fdc77-50c3-47e4-bd2b-7f29128400da_1_xBRthM1qod_0OvsVqWax2Q.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'That’s how two environment variables spawned — two tasks!',
                spans: [],
              },
            ],
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
                text: 'How is this moment fixed? Very simple! It turns out there is a global: subsection of env: in order to declare a global environment variables for all list of tasks. Now the env: section looks like this:',
                spans: [
                  {
                    start: 63,
                    end: 70,
                    type: 'strong',
                  },
                  {
                    start: 85,
                    end: 89,
                    type: 'strong',
                  },
                  {
                    start: 172,
                    end: 176,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: 'env:\n  global:\n    - PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true\n    - USE_REMOTE_DUBUG=false',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this case, no matter how many variables are set, all of them will be set for all tasks and the generation of new tasks (by the number of variables) will not occur.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'There is also very little information on how to launch and install google-chrome-stable browser to run tests on puppeteer. In Github questions, many claimed that everything needed to launch the puppeteer is already in the Ubuntu Trusty version, but the browser names are clearly different, and the browser launch did not lead to success (by default, the 67th version of chrome in the system) and the build failed with an error “time out”. Someone suggested launching a browser at the before_install step, as below.',
                spans: [
                  {
                    start: 67,
                    end: 87,
                    type: 'strong',
                  },
                  {
                    start: 112,
                    end: 121,
                    type: 'strong',
                  },
                  {
                    start: 484,
                    end: 498,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: '- google-chrome-stable — headless — disable-gpu — remote-debugging-port=9222http://localhost&',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'But why? I can run Puppeteer myself. And after several unsuccessful attempts to find a way to install the browser myself, I found in the discussions on GitHub that the browser can be installed via add-ons.',
                spans: [
                  {
                    start: 19,
                    end: 28,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'preformatted',
                text: 'addons:\n  chrome: stable',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this way, I achieved the installation of the same browser for the Travis-CI build (version 75) that I use locally. You can read here how to write the configuration for GUI and headless browsers.',
                spans: [
                  {
                    start: 69,
                    end: 78,
                    type: 'strong',
                  },
                  {
                    start: 94,
                    end: 96,
                    type: 'strong',
                  },
                  {
                    start: 131,
                    end: 135,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://docs.travis-ci.com/user/gui-and-headless-browsers/',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Travis CI configuration to run puppeteer tests',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The configuration for Travis-CI is to write a .travis.yml file, which must be located in the root directory of the project.',
                spans: [
                  {
                    start: 22,
                    end: 31,
                    type: 'strong',
                  },
                  {
                    start: 46,
                    end: 57,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/the-nuances-of-testing-in-pair-cucumber-js-puppeteer/',
                embed_url: 'https://maddevs.io/blog/the-nuances-of-testing-in-pair-cucumber-js-puppeteer/',
                type: 'link',
                version: '1.0',
                title: 'The Nuances of Testing in Pair Cucumber.js + Puppeteer | Mad Devs Blog ',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/e62b18f4-e98f-4e1c-ad9b-b6633d3ea7d9_Frame+1372.jpg?auto=compress,format&rect=149,0,823,446&w=983&h=533',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/the-nuances-of-testing-in-pair-cucumber-js-puppeteer/"><h1>The Nuances of Testing in Pair Cucumber.js + Puppeteer | Mad Devs Blog </h1><img src="https://images.prismic.io/superpupertest/e62b18f4-e98f-4e1c-ad9b-b6633d3ea7d9_Frame+1372.jpg?auto=compress,format&rect=149,0,823,446&w=983&h=533"><p>How to save time when you write tests with Cucumber.js and Puppeteer. Practical tips that I learned from my OSS project.</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '9c2fc1cffa6cb66f85131b319273952b',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'travis.yml',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
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
                text: 'As a result, after a visual measurement of build timings at all three CIs and the actual timings of build steps, the leader among all three CI is Cirrus CI. All thanks to great Docker support and ability to prebuilt Dockerfiles. Nowadays almost every project on the internet provides a Dockerfile that has not only the project installed but also exact versions of packages it depends on. This allows your CI builds to run your tests right away without the need to install packages every time. Travis-CI does not shine with such examples from the very beginning and this fact does not allow to write a basic configuration using docker images or caching principles.',
                spans: [
                  {
                    start: 146,
                    end: 155,
                    type: 'strong',
                  },
                  {
                    start: 216,
                    end: 227,
                    type: 'strong',
                  },
                  {
                    start: 286,
                    end: 296,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'So the conclusion is: Use CI, where Docker integration is already a first class citizen. Docker images can be prebuilt and reused for every build saving your precious time.',
                spans: [
                  {
                    start: 0,
                    end: 21,
                    type: 'strong',
                  },
                  {
                    start: 22,
                    end: 172,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Thank you for reading this article to the end! I hope the collected material will benefit everyone who begins to encounter the CI world around us!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'IT Consulting.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/6a6625cc-bdf3-4712-a6ed-469a2bd5cafd_Frame+23.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=top-3-best-ci#it-consulting',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-YohhEAACEABy0I',
    uid: 'mad-fake-slack',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-YohhEAACEABy0I%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-25T17:59:38+0000',
    last_publication_date: '2021-04-08T18:43:52+0000',
    slugs: [
      'mad-fake-slack',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Mad-Fake-Slack — to Test Your Bots | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Mad Devs created a powerful tool for integration and e2e tests to test your bots. This tool helps you to test your bot locally without using real servers.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Mad-Fake-Slack ',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'heading1',
          text: '',
          spans: [],
        },
      ],
      date: '2019-07-03',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Mad Fake Slack.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/dd6df0bd-221c-4392-9eb1-4d782d6e2ddd_1_Kw5pRjj9dpQIDye2-0sjAQ.jpeg?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/c4ec3c11-04d9-4e0d-b1f1-50f00883a0af_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,262,262&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/mad-fake-slack/"\n      },\n "headline": "Mad-Fake-Slack",\n "alternativeHeadline": "Mad-fake-slack is primarily a tool for testing your bot, without using real slack servers. In the future, it will be a powerful tool for integration and e2e tests. ",\n "image":\n"https://images.prismic.io/superpupertest/dd6df0bd-221c-4392-9eb1-4d782d6e2ddd_1_Kw5pRjj9dpQIDye2-0sjAQ.jpeg?auto=compress,format",\n "editor": "Alexander Vishnyakov", \n "genre": "Backend development", \n "keywords": " Mad-fake-slack, testing bot", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/mad-fake-slack/",\n "datePublished": "2019-07-03",\n "dateCreated": "2019-07-03,",\n "dateModified": "2021-02-12",\n "description": "Mad Devs created a powerful tool for integration and e2e tests to test your bots. This tool helps you to test your bot locally without using real servers",\n "articleBody": "In this world, much is changing, and flying at a tremendous speed and client libraries, instant messengers are often updated by developers. Any copy of the real service will lag behind the real implementation.\nAnd in this case, it all depends on the team, supporting the fake service. But if the company developing the service follow the principle of backward compatibility, then in principle everything should be fine.\n ",\n   "author": {\n    "@type": "Person",\n    "name": "Alexander "\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Mad-fake-slack is primarily a tool for testing your bot, without using real slack servers. In the future, it will be a powerful tool for integration and e2e tests. As you can see, in the gif below, when testing, something can go wrong :). And to avoid this, you need to test not for production, but locally, without reference to real services.',
                spans: [
                  {
                    start: 0,
                    end: 15,
                    type: 'strong',
                  },
                  {
                    start: 0,
                    end: 14,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/maddevsio/mad-fake-slack',
                      target: '_blank',
                    },
                  },
                  {
                    start: 153,
                    end: 157,
                    type: 'strong',
                  },
                  {
                    start: 308,
                    end: 342,
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
                width: 544,
                height: 308,
              },
              alt: 'How a Bot is Tested on Production.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/1d5bc694-53eb-4f77-a671-ef741d7c7b89_1_xksHbGTFs0lqml-r7Wf11w+%281%29.gif?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'This is how a bot is tested on production))) Thanks for this pleasure to https://www.youtube.com/channel/UCsn6cjffsvyOZCZxvGoJxGg',
                spans: [],
              },
            ],
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
                text: 'In most cases, we run integration tests using “real service” because of the lack of analogs of real services.',
                spans: [
                  {
                    start: 47,
                    end: 59,
                    type: 'strong',
                  },
                  {
                    start: 95,
                    end: 108,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'For the success of such tests, you need the Internet, and if the Internet suddenly disappears, then you will not be able to release the product. In addition, real services do not allow for the reduction of integration testing scenarios.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'For example, to pre-fill data, you need to make a lot of work by sending messages, files, and so on before starting the test script. (if your application uses the current data in the channel).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Fake services (how to interpret fake services, you can read here), reduce the testing time and add the ability to model a specific situation, without many previous ones, manipulations.',
                spans: [
                  {
                    start: 60,
                    end: 64,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://stackoverflow.com/questions/346372/whats-the-difference-between-faking-mocking-and-stubbing',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'If it is necessary for the client to be already “logged in” in the slack client (you will not need to test the client’s login in the slack client), then the fake service allows you to remove unnecessary actions, because you need to test the bot or the application that provides the services.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this case, a mad-fake-slack can help you. While he is able to do a little, but with this functionality, you can test the simplest scenarios to send/receive messages.',
                spans: [
                  {
                    start: 16,
                    end: 30,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Lacks of fake services and any client library',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In this world, much is changing, and flying at a tremendous speed and client libraries, instant messengers are often updated by developers. Any copy of the real service will lag behind the real implementation.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'And in this case, it all depends on the team, supporting the fake service. But if the company developing the service follow the principle of backward compatibility, then in principle everything should be fine.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'After all, even client libraries for Slack, can not 100% guarantee that they will not lag behind the developers of real slack API. So you do not need to worry. Before releasing to production, you will still need to make sure that all functions are working on a staging server. Since the tests do not always guarantee the correctness of the functionality covered by them. Something might slip away from the developer’s view.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'What is mad-fake-slack?',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'UI interface is very reminiscent of Slack client',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'The ability to pre-fill data for a channel or a direct channel of a user (through editing files in the db folder) or an application user, since all data is stored on disk in json format. They are easy to fill and change.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'There is only one user who is considered to be logged in (he is listed first in the user collection)',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'By default, there are two channels: general and random.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'There is a user named “valera” of the bot application (you can see the user of the application, right after the “Apps” label in the left panel). The username of the application can also be changed if you want, by editing users.json.',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [],
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
                width: 454,
                height: 450,
              },
              alt: 'Mad-Fake-Slack Disk Storage.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/15c7405e-68d9-4a9d-820b-f77062ecd775_1_4TP5VGaUZ-P5XWE_Lxmr4g.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Mad-Fake-Slack disk storage',
                spans: [],
              },
            ],
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
                text: 'users.json — is a file that stores data about regular users, bots, and application users.',
                spans: [
                  {
                    start: 0,
                    end: 10,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'teams.json — data about teams of the user stored here.',
                spans: [
                  {
                    start: 0,
                    end: 11,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'sessions.json — md5 hashes of the user’s token and its identifier are stored here. What is it for? Since I did not find any headers when connecting the bot to the mad-fake-slack ws server, it became obvious that you need to somehow understand which user or bot is currently connected or trying to connect to this socket. As a result, such a simple solution was born (approximately similar to the real solution in the Slack). Since the request for the /api/rtm.connect method or /api/rtm.start gives information from the url for the ws server (which the bot connects to), you can pass a hash as a parameter of ws connection url. User can be identified using hash from url parameter at the server-side. But this is the beginning of work on security implementation, which in the future can also be useful in testing.',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                  {
                    start: 16,
                    end: 19,
                    type: 'strong',
                  },
                  {
                    start: 417,
                    end: 422,
                    type: 'strong',
                  },
                  {
                    start: 451,
                    end: 467,
                    type: 'strong',
                  },
                  {
                    start: 478,
                    end: 492,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'channels.json —here are stored channel data, which can also be easily changed. This list is returned when requesting channels from /API/channels.list',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                  {
                    start: 131,
                    end: 149,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'messages — This is the folder where all messages are stored. To simplify and separate access to messages (the “file per channel” structure is used). The channel ID is used as the file name. Thus, in each of the CXXXXXXXX.json files, the messages of the channels are stored separately. Inside each such file is an object which represents messages storage using the key-value strategy. The first property of the object stores meta-information and so far only there is a field for storing records with the non-obvious name “last_id” (I will correct this deficiency in the future). The following are the entries in key-value format. Where value is a message object with the required minimum of fields, and the key is the value of the “ts” field — which is guaranteed to be a unique key with the content of the date in UNIX format + incremental value.',
                spans: [
                  {
                    start: 0,
                    end: 9,
                    type: 'strong',
                  },
                  {
                    start: 211,
                    end: 225,
                    type: 'strong',
                  },
                  {
                    start: 521,
                    end: 528,
                    type: 'strong',
                  },
                  {
                    start: 611,
                    end: 620,
                    type: 'strong',
                  },
                  {
                    start: 635,
                    end: 640,
                    type: 'strong',
                  },
                  {
                    start: 706,
                    end: 709,
                    type: 'strong',
                  },
                  {
                    start: 731,
                    end: 733,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'There is also a manager of an improvised database on disk, which allows you to combine data from several files by their keys and give it to the client.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Examples of responses to API requests',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The responses folder contains examples of positive responses to API requests with the names of API methods for which they are intended. Now, these files are used as blanks of answers, in which the required fields change before sending to the requesting. All sample answers were taken from the documentation site https://api.slack.com/',
                spans: [
                  {
                    start: 4,
                    end: 13,
                    type: 'strong',
                  },
                  {
                    start: 312,
                    end: 334,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://api.slack.com/web',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'About UI',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'User UI based on Handlebars.js — for client rendering and express-handlebars — for server rendering. This is a hybrid rendering since most of the page rendering is done on the server-side. On the client-side is used real-time message reception via ws connection. Server helpers and templates are also used on the client-side, very convenient.',
                spans: [
                  {
                    start: 17,
                    end: 30,
                    type: 'strong',
                  },
                  {
                    start: 58,
                    end: 77,
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
                width: 1400,
                height: 1013,
              },
              alt: 'Example of mad-fake-slack UI.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/1e466572-e5e2-44f5-ae54-19ffc592cf98_1_IwV3RkjIom6Nif3790dfzQ.png?auto=compress,format',
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
                text: 'The interface is very similar to the slack-client so that it is as usual and convenient to understand the mechanics and how to send messages and so on. Of course not all features it was possible to add to the interface at first, and much functionality still does not available, but to test simple communication with the bot through this interface it is quite possible.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'What is now available through the interface?',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Sending messages to any available channels, direct to the user, direct to application’s user (that is the bot).',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Receive messages in realtime to the currently active channel.',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [],
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
                type: 'heading2',
                text: 'What needs to be done in the future?',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Message indication (red circle for an inactive channel with the number of unread messages in it).',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Parsing messages written in markdown format.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Rendering of more complex messages.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Testing file uploads.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Buttons on messages (for reactions).',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Displaying of the “typing” status under the text field.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Ability to add the channel from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Ability to add a new user from the UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'The ability to change the status of the current user.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Ability to view RAW messages in JSON format in the channel.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Ability to create message threads.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Displays message threads.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Add sending emoji.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Deleting user from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Deleting applications from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Deleting applications from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Deleting a channel from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Channel Archiving from UI.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Support for slash commands.',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [],
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
                text: 'And so on, in general, the main goal is to expand the possibilities for testing. After all, for any action in the UI, events are generated and the various events and data are called and sent. It will be possible to check accordingly how your bot reacts to these events, to create different situations that in real slack, it would be more difficult to do.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'About Server-side',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'It is based on express.js and express-ws and allows you to handle the following API calls:',
                spans: [],
              },
              {
                type: 'list-item',
                text: '/api/rtm.connect',
                spans: [
                  {
                    start: 0,
                    end: 16,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: '/api/rtm.start — for now, this method provides exactly as much information as rtm.connect. In the future, the answer will be aligned with the expected documentation in api.',
                spans: [
                  {
                    start: 0,
                    end: 14,
                    type: 'strong',
                  },
                  {
                    start: 78,
                    end: 89,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: '/api/auth.test',
                spans: [
                  {
                    start: 0,
                    end: 14,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: '/api/channels.list',
                spans: [
                  {
                    start: 0,
                    end: 18,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: '/api/chat.postMessage',
                spans: [
                  {
                    start: 0,
                    end: 21,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'There is also a server-side render of the following pages:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '/ — the main page, with the default “general” channel selected and accordingly, its contents.',
                spans: [
                  {
                    start: 0,
                    end: 1,
                    type: 'strong',
                  },
                  {
                    start: 37,
                    end: 44,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: '/messages/:id — when you click on the channel name, the request goes to the server, where the channel ID is parsed and if there is one, the entire page with the displayed channel content will be returned in response. This applies to both direct and open channel and application user.',
                spans: [
                  {
                    start: 0,
                    end: 13,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: '/api/chat.postMessage — if you disable JS, the form for sending data will still work, since in this case a POST request will be sent to the server in the format of a regular HTTP form and the channel page will be displayed in response, with a new message inside.',
                spans: [
                  {
                    start: 0,
                    end: 21,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'About test api',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The method that allows you to clear the database in memory is available now.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'GET /test/api/db/reset —when sending a request to this URL the data of in-memory database cleared and re-read from the db folder and thus returned to its original state. Now, you only need to refresh the page in your browser (if it was open before).',
                spans: [
                  {
                    start: 0,
                    end: 3,
                    type: 'strong',
                  },
                  {
                    start: 4,
                    end: 22,
                    type: 'strong',
                  },
                  {
                    start: 4,
                    end: 22,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'http://localhost:9001/test/api/db/reset',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'In the future, the number of methods assisting in integration testing will grow as needed.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'About security',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'There is no check of the token for compliance with what the bot produce when accessing the api or web socket. Verification will be surely added in the future with the corresponding server responses so that it is possible to test unsuccessful authorization.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Real usage example',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In the examples folder, there is an example of rtm bot that does not use web hooks, but instead uses the ws connection. First you need to start mad-fake-slack with the npm start command. Then, run the bot by running the npm run example:rtmbot',
                spans: [
                  {
                    start: 7,
                    end: 15,
                    type: 'strong',
                  },
                  {
                    start: 47,
                    end: 50,
                    type: 'strong',
                  },
                  {
                    start: 105,
                    end: 107,
                    type: 'strong',
                  },
                  {
                    start: 144,
                    end: 158,
                    type: 'strong',
                  },
                  {
                    start: 168,
                    end: 177,
                    type: 'strong',
                  },
                  {
                    start: 220,
                    end: 242,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The bot in the examples is very simple, it receives any message in the channel and immediately sends it to the same channel with some prefix.',
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
                width: 800,
                height: 580,
              },
              alt: 'This is How a Bot Responds to Messages in Open Channels and Direct.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/506aeaa1-40e2-4906-b315-d66d85df02b3_ezgif.com-gif-maker.gif?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'This is how a bot responds to messages in open channels and direct',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'What is unusual in implementations of API is weak, in different languages',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Here, for example, the official api on node.js https://github.com/slackapi/node-slack-sdk, uses inside the state machine and each request sent to the server contains an id field, which increments by 1. And at the same time, It is required to send the reply_to field in the reply with the id that was sent to the server..',
                spans: [
                  {
                    start: 47,
                    end: 89,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/slackapi/node-slack-sdk',
                      target: '_blank',
                    },
                  },
                  {
                    start: 169,
                    end: 171,
                    type: 'strong',
                  },
                  {
                    start: 199,
                    end: 200,
                    type: 'strong',
                  },
                  {
                    start: 251,
                    end: 259,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'At the same time in the library on python, there is generally no binding to this kind of echo (reply_to field).',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I would like to somehow standardize these moments because in the documentation the reply_to field is mentioned in a slightly different accent.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'If you’re reconnecting after a network problem this initial set of events may include a response to the last message sent on a previous connection (with a`reply_to`) so a client can confirm that message was received.',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Actually need for reply_to, appears only in case there was a disconnection. But for the node.js version, even simple ping / pong requests must be accompanied by this field. Although it may be that I missed something, but there were no problems with the python version.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/meet-glitch-com/',
                embed_url: 'https://maddevs.io/blog/meet-glitch-com/',
                type: 'link',
                version: '1.0',
                title: 'Meet Glitch.com 🥳 🤟🏻 | Mad Devs Blog ',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/f933a63e-e224-4a7b-98de-4d2d68137806_Frame+1373.jpg?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/meet-glitch-com/"><h1>Meet Glitch.com 🥳 🤟🏻 | Mad Devs Blog </h1><img src="https://images.prismic.io/superpupertest/f933a63e-e224-4a7b-98de-4d2d68137806_Frame+1373.jpg?auto=compress,format"><p>Process for delivering your node.js app with Glitch.com. The Glitch project review and application experience. </p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
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
                text: 'Thank you very much, Ankur Oberoi(profile on medium.com) for a very detailed and clear explanation!',
                spans: [
                  {
                    start: 0,
                    end: 99,
                    type: 'strong',
                  },
                  {
                    start: 21,
                    end: 33,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/u/95d23b1afd8d?source=post_page-----945ea810a778--------------------------------',
                      target: '_blank',
                    },
                  },
                  {
                    start: 34,
                    end: 55,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/@aoberoi',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'In addition to helping with resuming a broken connection, the `id` field is also used to understand when Slack has acknowledged that the RTM message was received.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'When the Node SDK sends a message it returns a Promise immediately. Then later, when Slack sends a message to the client with a matching `reply_to`, the Node SDK will resolve the corresponding Promise so that the application can sequence work to occur after the message is successfully received by Slack. This is very useful when your application sends a message and would like to know the `ts` identifier created for that message (maybe you want to store it so you can update that message later).',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Here’s an example from the documentation: https://slack.dev/node-slack-sdk/rtm-api',
                spans: [],
              },
            ],
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
                text: '',
                spans: [],
              },
              {
                type: 'paragraph',
                text: '',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'quote',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            quotation_design: 'border',
            quote: [
              {
                type: 'paragraph',
                text: 'The Python SDK has a slightly different architecture. It also sends the`id`field with each RTM message (not only the`ping`and`pong`messages). However, the client returns after the message has been sent (but not yet acknowledged by Slack). An exception is the`send_over_websocket`method which returns a future that the application can await. The returned future will also complete when the message is sent (but not yet acknowledged by Slack).',
                spans: [],
              },
            ],
            name_of_the_author: [],
            portrait_author: {
              mobile: {},
            },
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
                text: 'Link to original comment here.',
                spans: [
                  {
                    start: 25,
                    end: 29,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://medium.com/@aoberoi/thanks-for-taking-the-time-to-create-this-and-share-your-journey-db7513d54cdc',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Example of integration tests with jest-puppeeter',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The project contains examples of integration tests for the bot in the examples folder. Which test its consistency and adequacy. Examples of all tests can be found here. These tests are run by the command',
                spans: [
                  {
                    start: 163,
                    end: 167,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/maddevsio/mad-fake-slack/tree/master/examples/rtmbot/__tests__/integration',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'npm run example:rtmbot:integration',
                spans: [
                  {
                    start: 0,
                    end: 34,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 34,
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
                width: 1236,
                height: 606,
              },
              alt: 'Example of Integration Tests with Test-Puppeeter.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/92d033ad-4ba7-4dc1-98f1-9e70a74bf64c_1_iLb58WJnaKqJ4omHNYbKSQ.png?auto=compress,format',
            },
            caption: [
              {
                type: 'heading3',
                text: 'Now 3 test scenarios available',
                spans: [],
              },
            ],
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
                text: 'Here are some sample tests:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: '7ca9c77a370046c2d99488682062ec0e',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'greeting.test.js',
                spans: [],
              },
            ],
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
                text: 'The following example is longer than the previous example and tests the reaction of the bot, if messages are sent to different channels, in this case in“random”and“general”.',
                spans: [
                  {
                    start: 152,
                    end: 160,
                    type: 'strong',
                  },
                  {
                    start: 163,
                    end: 172,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'github_gist',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            gist_id: [
              {
                type: 'paragraph',
                text: 'e6c7b4c7a42834bcf5d910e27819ff0b',
                spans: [],
              },
            ],
            file_name: [
              {
                type: 'paragraph',
                text: 'channel.test.js',
                spans: [],
              },
            ],
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
                type: 'heading2',
                text: 'Where can you try mad-fake-slack in action?',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://github.com/maddevsio/mad-fake-slack',
                embed_url: 'https://github.com/maddevsio/mad-fake-slack',
                type: 'link',
                version: '1.0',
                title: 'maddevsio/mad-fake-slack',
                author_name: null,
                author_url: null,
                provider_name: 'object',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://avatars0.githubusercontent.com/u/21100936?s=400&v=4',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="object"><a href="https://github.com/maddevsio/mad-fake-slack"><h1>maddevsio/mad-fake-slack</h1><img src="https://avatars0.githubusercontent.com/u/21100936?s=400&v=4"><p>Fake Slack implementation on node.js + express.js + express-ws  - maddevsio/mad-fake-slack</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
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
                text: 'There is still a lot of work ahead and this is only the first announcement of the testing tool. I hope this tool will be able to identify problems and help in testing in the future. Thank you very much for reading this article!',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/271bc2f6-be64-4696-aa53-a642cefac072_Frame+22.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=mad-fake-slack#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-XIBxEAACIABYKK',
    uid: 'comedian-slack-standup-bot',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-XIBxEAACIABYKK%22%29+%5D%5D',
    tags: [
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-25T11:07:56+0000',
    last_publication_date: '2021-04-08T18:50:15+0000',
    slugs: [
      'comedian-standup-chatbot-preview-how-remote-standups-can-help-your-team',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: '“Comedian”: How Remote Standups Can Help Your Team | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'Why writing daily reports is important and how we monitor this process with a "Comedian" chatbot. How to implement this bot for your business.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: '“Comedian” standup chatbot preview: how remote standups can help your team',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2018-10-01',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Standup.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/d765c67a-821c-4f88-abf7-7a6822df8ede_1_bNuvXMgfV9hkVO-U-gQQ2g.png?auto=compress,format&rect=0,1,1400,759&w=983&h=533',
      },
      introduction_paragraph: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      post_author: {
        id: 'YG860hAAACIA9ubS',
        type: 'author',
        tags: [],
        slug: 'anatoliy-fedorenko',
        lang: 'en-us',
        uid: 'anatoliy-fedorenko',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Anatoliy Fedorenko',
          spans: [],
        },
      ],
      author_title: 'Backend developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Anatoliy Fedorenko.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/d40d9f3c-cc9d-42b8-a10b-61b6a1fb1220_Anatoliy+Fedorenko.jpg?auto=compress,format&rect=355,0,3076,3076&w=40&h=40',
      },
      table_of_contents: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "Article",\n "headline": "“Comedian” standup chatbot preview: how remote standups can help your team",\n "alternativeHeadline": "Why writing daily reports is important and how we monitor this process with a Comedian chatbot. How to implement this bot for your business.",\n "image": "https://images.prismic.io/superpupertest/d765c67a-821c-4f88-abf7-7a6822df8ede_1_bNuvXMgfV9hkVO-U-gQQ2g.png?auto=compress,format",\n "author": "Anatoliy Fedorenko", \n "editor": "Anatoliy Fedorenko", \n "genre": "Slack bot", \n "keywords": "tand-up, standup, agile, scrum, slack, bot, app", \n"publisher": {\n    "@type": "Organization",\n    "name": "Mad Devs LLC",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://maddevs.io/Open-Graph.png"\n    }\n  },\n "url": "https://maddevs.io/blog/comedian-slack-standup-bot",\n   "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://maddevs.io/blog/comedian-slack-standup-bot"\n  },\n "datePublished": "2018-10-01",\n "dateCreated": "2018-10-01",\n "dateModified": "2020-09-20",\n "description": "How remote standups can help your team",\n "articleBody": "Any business always strives to effectively use the time and skills of its employees since it directly affects the profit. Therefore, a business intends to solve employees’ problems and encourages their growth.\nOne of the biggest issues is that problems are often solved either by developers themselves (which is a bad practice) or by Project Managers(PMs) /Team Leads who are usually involved in many projects and do not have enough time to address all problems. The solution is effective communication within a team through remote standup meetings. So, what is a remote standup, and why it is so useful?"\n }\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Any business always strives to effectively use the time and skills of its employees since it directly affects the profit. Therefore, a business intends to solve employees’ problems and encourages their growth.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'One of the biggest issues is that problems are often solved either by developers themselves (which is a bad practice) or by Project Managers(PMs) /Team Leads who are usually involved in many projects and do not have enough time to address all problems. The solution is effective communication within a team through remote standup meetings.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'So, what is a remote standup, and why it is so useful?',
                spans: [
                  {
                    start: 14,
                    end: 20,
                    type: 'strong',
                  },
                  {
                    start: 21,
                    end: 30,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'What did I do yesterday?',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'What am I going to do today?',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'What blocks my progress?',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [
              {
                type: 'paragraph',
                text: 'Remote standup is a message that contains the answers to the following basic questions:',
                spans: [],
              },
            ],
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
                text: 'Team members usually write standups at the beginning of a working day in the project channel. This practice allows all the stakeholders to get an overview of what is going on in the project in general and by each team member particularly. It may turn out that two people are going to work on the same issue or someone faced the problem that was solved a week ago. Remote standups will make these problems visible and simplifies providing timely help and support.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'A good standup is beneficial for everyone',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'A developer knows what he/she has done and what is a plan for today. One also can ask for help in case of problems and recognize unnecessary work if someone else does the same thing.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'PM or Team Lead observes progress and can easily understand if a developer does a good job or tends to avoid problems. Besides, he/she sees if the task load for any of the team members is high or low. This information allows us to make the right decisions fast and appropriately.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The whole team sees how each member performs and motivates to accomplish more in less time, support each other in case of problems, and discuss solutions that lead to better products.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Now the majority of businesses recognize the importance and the benefits of remote standups meetings. Yet, people are lazy and until remote standups are not developed as a habit, they are written with little or no benefits to others, which makes no sense and at the same time forces team leads or PMs to spend additional time and efforts to make people disciplined and find out about their problems.',
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
                width: 800,
                height: 706,
              },
              alt: 'Comedian.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/6c14a64a-325b-48d4-b257-9660d9b1d17c_Comedian.png?auto=compress,format',
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
                text: 'Therefore, we create a simple, but powerful chatbot @Comedian to automate the standup monitoring processes.',
                spans: [
                  {
                    start: 52,
                    end: 61,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://comedian.maddevs.io/',
                      target: '_blank',
                    },
                  },
                  {
                    start: 53,
                    end: 62,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'section_id',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            id: [
              {
                type: 'paragraph',
                text: 'headline-1',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'image_gallery',
          slice_label: null,
          items: [
            {
              image_captions: [
                {
                  type: 'paragraph',
                  text: 'Comedian standup example.',
                  spans: [],
                },
              ],
              gallery_image: {
                dimensions: {
                  width: 1362,
                  height: 684,
                },
                alt: 'Comedian Standup Example.',
                copyright: null,
                url: 'https://images.prismic.io/superpupertest/4e055260-5973-4066-b3c3-9cdd97f297b5_Standup.jpeg?auto=compress,format',
                Mobile: {
                  dimensions: {
                    width: 73,
                    height: 40,
                  },
                  alt: 'Comedian Standup Example.',
                  copyright: null,
                  url: 'https://images.prismic.io/superpupertest/4e055260-5973-4066-b3c3-9cdd97f297b5_Standup.jpeg?auto=compress,format&rect=0,0,1248,684&w=73&h=40',
                },
              },
            },
            {
              image_captions: [
                {
                  type: 'paragraph',
                  text: 'Comedian standup daily report.',
                  spans: [],
                },
              ],
              gallery_image: {
                dimensions: {
                  width: 1066,
                  height: 830,
                },
                alt: 'Comedian Standup Daily Report.',
                copyright: null,
                url: 'https://images.prismic.io/superpupertest/1bcd0a23-cfbf-4a4c-ac7b-8c4629875c6a_image3.png?auto=compress,format&rect=0,1,1065,829&w=1066&h=830',
                Mobile: {
                  dimensions: {
                    width: 73,
                    height: 40,
                  },
                  alt: 'Comedian Standup Daily Report.',
                  copyright: null,
                  url: 'https://images.prismic.io/superpupertest/f2b9f9eb-75c0-4c5c-8490-0cd1be47df4f_Standup1.jpeg?auto=compress,format&rect=0,0,1066,584&w=73&h=40',
                },
              },
            },
          ],
          primary: {
            name_of_the_gallery: [
              {
                type: 'heading2',
                text: 'Standup examples',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'section_id',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            id: [
              {
                type: 'paragraph',
                text: 'headline-2',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Configuring standup deadlines for project',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Assigning team members to submit standups',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Generating informative reports by project, user, or user in the project',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Finding out about missed deadlines right away',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [
              {
                type: 'heading3',
                text: 'Comedian assists you with the following',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'section_id',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            id: [
              {
                type: 'paragraph',
                text: 'headline-3',
                spans: [],
              },
            ],
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
                text: 'Comedian figures out standups and stores them in the database. The bot reminds those who did not submit standup in 10 minutes (configurable) before the deadline. If a person for some reason missed the deadline, Comedian sends a message identifying this person. It continues reminding non-reporters later. Each day comedian also reports users who slacked, i.e. did not commit enough and have not logged enough time (parsing commits and work logs from other services).',
                spans: [
                  {
                    start: 0,
                    end: 8,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://maddevs.io/blog/comedian-slack-standup-bot/#first-section',
                    },
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Comedian is an open-source project written in Golang. You can download it, play with it, test it, and send pull requests or issues to make Comedian a better product to use by everyone.',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://github.com/maddevsio/comedian',
                embed_url: 'https://github.com/maddevsio/comedian',
                type: 'link',
                version: '1.0',
                title: 'maddevsio/comedian',
                author_name: null,
                author_url: null,
                provider_name: 'object',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://avatars0.githubusercontent.com/u/21100936?s=400&v=4',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="object"><a href="https://github.com/maddevsio/comedian"><h1>maddevsio/comedian</h1><img src="https://avatars0.githubusercontent.com/u/21100936?s=400&v=4"><p>Comedian bot-a team management system that helps track performance and assists team members in daily remote stand-ups meetings. - maddevsio/comedian</p></a></div>',
              },
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
        },
        {
          slice_type: 'ordered_list',
          slice_label: null,
          items: [
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Direct messages to Project Manager about users who did not make commits or did not log enough time at work.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Standup text analysis for standupers’ mood and problems to target problems quickly and solve them ASAP.',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Add more services support for a collector (Github, Bitbucket, etc.)',
                  spans: [],
                },
              ],
            },
            {
              list_item: [
                {
                  type: 'paragraph',
                  text: 'Develop Comedian not only for Slack but also for other messengers such as Telegram.',
                  spans: [],
                },
              ],
            },
          ],
          primary: {
            list_introduction: [
              {
                type: 'heading3',
                text: 'In the nearest future, we are planning to add:',
                spans: [],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {},
              embed_title: null,
              embed_description: null,
            },
          ],
          primary: {},
        },
        {
          slice_type: 'divider',
          slice_label: null,
          items: [
            {},
          ],
          primary: {},
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f328565b-ded7-4d74-ae35-c7e0cd48ab2f_Frame+20.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=comedian#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
  {
    id: 'X-nqPhEAACAAF8m_',
    uid: 'best-architecture-for-the-react-project',
    type: 'post',
    href: 'https://superpupertest.cdn.prismic.io/api/v2/documents/search?ref=YHWbxREAACgAxbKI&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22X-nqPhEAACAAF8m_%22%29+%5D%5D',
    tags: [
      'Backend development',
      'Software Development ',
      'Editors pick',
    ],
    first_publication_date: '2020-12-28T14:22:57+0000',
    last_publication_date: '2021-04-08T18:58:18+0000',
    slugs: [
      'best-architecture-for-the-react-project',
    ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      meta_title: [
        {
          type: 'paragraph',
          text: 'Best Architecture for the React Project | Mad Devs Blog',
          spans: [],
        },
      ],
      meta_description: [
        {
          type: 'paragraph',
          text: 'What the arc.js is - the advantages and disadvantages of arc.js architecture. Solving problems related to the implementation of arc.js architecture.',
          spans: [],
        },
      ],
      title: [
        {
          type: 'heading1',
          text: 'Best architecture for the React Project',
          spans: [],
        },
      ],
      subtitle: [
        {
          type: 'paragraph',
          text: '',
          spans: [],
        },
      ],
      date: '2018-07-06',
      featured_image: {
        dimensions: {
          width: 983,
          height: 533,
        },
        alt: 'Best architecture for the React Project.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/0af584bc-4da6-469d-954a-ae4f2d6b7e37_react.jpg?auto=compress,format&rect=0,390,6240,3383&w=983&h=533',
      },
      introduction_paragraph: [],
      post_author: {
        id: 'YG85WRAAAFF19uAO',
        type: 'author',
        tags: [],
        slug: 'alexander-vishnyakov',
        lang: 'en-us',
        uid: 'alexander-vishnyakov',
        link_type: 'Document',
        isBroken: false,
      },
      author: [
        {
          type: 'paragraph',
          text: 'Alexander Vishnyakov',
          spans: [],
        },
      ],
      author_title: 'Full stack developer',
      author_image: {
        dimensions: {
          width: 40,
          height: 40,
        },
        alt: 'Alexander Vishnyakov.',
        copyright: null,
        url: 'https://images.prismic.io/superpupertest/a46734d2-35f8-4508-a7e3-7c8c39160979_1_eVhokCn81jDjA64R5plVuA.png?auto=compress,format&rect=0,0,96,96&w=40&h=40',
      },
      table_of_contents: [],
      schema_org_snippets: [
        {
          single_snippet: [
            {
              type: 'preformatted',
              text: '<script type="application/ld+json">\n{ "@context": "https://schema.org", \n "@type": "BlogPosting",\n "mainEntityOfPage": {\n         "@type": "WebPage",\n         "@id": "https://maddevs.io/blog/best-architecture-for-the-react-project/"\n      },\n "headline": "Best Architecture for the React Project",\n "alternativeHeadline": "Brief description of arc.js architecture\n",\n "image":\n"https://images.prismic.io/superpupertest/0af584bc-4da6-469d-954a-ae4f2d6b7e37_react.jpg?auto=compress,format",\n "editor": "Alexander Vishnyakov", \n "genre": "Backend development", \n "keywords": " arc.js architecture\n", \n "publisher": {\n   },\n "url":\n"https://maddevs.io/blog/best-architecture-for-the-react-project/",\n "datePublished": "2017-07-06",\n "dateCreated": "2017-07-06,",\n "dateModified": "2021-02-10",\n "description": " What the arc.js is - the advantages and disadvantages of arc.js architecture. Solving problems related to the implementation of arc.js architecture. ",\n "articleBody": "Brief description of arc.js architecture\nWhat is the arc.js approach? Firstly, it is atom approach to the design of the components.\nAtoms are the smallest components that are responsible for one specific function. For example, button with label, text field, spinner, etc. \n\n ",\n   "author": {\n    "@type": "Person",\n    "name": "Alexander"\n  }\n },\n</script>',
              spans: [],
            },
          ],
        },
      ],
      body: [
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
                text: 'Usually, at the preparatory stages of project developers think of the project skeleton to avoid a lot of mistakes and reworks in the future.',
                spans: [],
              },
              {
                type: 'heading2',
                text: 'Brief description of arc.js architecture',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'What is the arc.js approach? Firstly, it is atom approach to the design of the components.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Atoms are the smallest components that are responsible for one specific function. For example, button with label, text field, spinner, etc.',
                spans: [
                  {
                    start: 0,
                    end: 5,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 6,
                    type: 'strong',
                  },
                  {
                    start: 95,
                    end: 139,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Molecule is the component that includes several Atom components, but it is not the fullest one. A molecule may be modal window or button with an icon inside.',
                spans: [
                  {
                    start: 0,
                    end: 9,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 9,
                    type: 'strong',
                  },
                  {
                    start: 48,
                    end: 52,
                    type: 'em',
                  },
                  {
                    start: 48,
                    end: 52,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Organisms are usually components responsible for the specific function of the application. For example, registration form, table with data and filters.',
                spans: [
                  {
                    start: 0,
                    end: 9,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 10,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Honestly, sometimes it is not so easy to divide components into these three groups, but with arc.js you can easily transfer these components between the groups.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The structure of the skeleton is the following:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Components folder is responsible for the storage of all the components (atoms, molecules, organisms). The folder also includes pages, templates, themes and, in particular, contains the main entry of the project — index.js and App.js. In this folder, dumb components are placed as well.',
                spans: [
                  {
                    start: 0,
                    end: 11,
                    type: 'strong',
                  },
                  {
                    start: 250,
                    end: 266,
                    type: 'strong',
                  },
                  {
                    start: 284,
                    end: 285,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Dumb component is a component that has no business logic, operating only with actions and modifying its simplest state (if necessary) to change its appearance.',
                spans: [
                  {
                    start: 0,
                    end: 159,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 14,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Containers is a folder that contains smart components that are responsible for the state management and actions dispatching.',
                spans: [
                  {
                    start: 0,
                    end: 10,
                    type: 'strong',
                  },
                  {
                    start: 37,
                    end: 53,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Smart component dispatches actions, gets action results from the state and maps statuses of errors or data loading. In simple words, smart components contain the meaningful information that is not available for dumb component. Smart component covers dumb one and endows additional skills to it according to the “decorator” pattern principle.',
                spans: [
                  {
                    start: 0,
                    end: 341,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 16,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Services/api folder has necessary methods to work with REST API, i.e. in this case, the simplest implementation of error handling and the usage of “fetch” to make requests to the server.',
                spans: [
                  {
                    start: 0,
                    end: 12,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Services/validation folder contains all necessary validators to check the correctness of the data (may be used together with redux-form)',
                spans: [
                  {
                    start: 0,
                    end: 19,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Store/entities folder has introduction of schemes, middleware for processing of api data and their transformation into the entity, that is convenient for the further usage. This is implemented through normalizr (you can read about this in details here: https://github.com/paularmstrong/normalizr). It is very cool mechanism for two-side mapping, especially if it is necessary to change the way how the data is presented for display. Herewith, it sends the data to the server as it was before. Irreplaceable tool.',
                spans: [
                  {
                    start: 0,
                    end: 14,
                    type: 'strong',
                  },
                  {
                    start: 80,
                    end: 83,
                    type: 'strong',
                  },
                  {
                    start: 123,
                    end: 129,
                    type: 'strong',
                  },
                  {
                    start: 201,
                    end: 212,
                    type: 'strong',
                  },
                  {
                    start: 253,
                    end: 295,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/paularmstrong/normalizr',
                      target: '_blank',
                    },
                  },
                  {
                    start: 295,
                    end: 296,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Store/resource folder contains everything that is necessary to interact with api through redux-saga.',
                spans: [
                  {
                    start: 0,
                    end: 14,
                    type: 'strong',
                  },
                  {
                    start: 89,
                    end: 99,
                    type: 'strong',
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'embed',
          slice_label: null,
          items: [
            {
              embed: {
                url: 'https://maddevs.io/blog/amazing-template-for-react-application/',
                embed_url: 'https://maddevs.io/blog/amazing-template-for-react-application/',
                type: 'link',
                version: '1.0',
                title: 'An Amazing Template for Your React Application | Mad Devs Blog',
                author_name: null,
                author_url: null,
                provider_name: 'website',
                provider_url: null,
                cache_age: null,
                thumbnail_url: 'https://images.prismic.io/superpupertest/4fa5af62-98e9-4beb-9fa4-aee11b5cc686_An+amazing+template+for+your+React+application.jpg?auto=compress,format',
                thumbnail_width: null,
                thumbnail_height: null,
                html: '<div data-type="website"><a href="https://maddevs.io/blog/amazing-template-for-react-application/"><h1>An Amazing Template for Your React Application | Mad Devs Blog</h1><img src="https://images.prismic.io/superpupertest/4fa5af62-98e9-4beb-9fa4-aee11b5cc686_An+amazing+template+for+your+React+application.jpg?auto=compress,format"><p>This article shows you the template that we actively use when creating new React application projects. The template includes everything you need and describes some additional useful things such as typescript and cypress.</p></a></div>',
              },
              embed_title: 'An amazing template for your React application',
              embed_description: 'This article shows you the template that we actively use when creating new React application projects. The template includes everything you need and describes some additional useful things such as typescript and cypress.',
            },
          ],
          primary: {},
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
                type: 'heading2',
                text: 'Advantages of arc.js architecture:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'As a layer between business logic and display of data, redux-saga is used. This allows dividing the logic into modules. For example, authorization via social media and requests to api sources may work absolutely independent. They know nothing about each other. Such division allows keeping actions, sags, reducers and selectors separately for each module.',
                spans: [
                  {
                    start: 55,
                    end: 66,
                    type: 'strong',
                  },
                  {
                    start: 290,
                    end: 328,
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
                width: 293,
                height: 446,
              },
              alt: 'Advantages of arc.js Architecture.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/d74bf098-5dc3-4547-8056-fb8ddc3067b4_0_tDf9l8sayDejyd0l.png?auto=compress,format',
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
                type: 'list-item',
                text: 'Simplifying the mapping and transformation of data from API.',
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
                width: 800,
                height: 358,
              },
              alt: 'Simplifying the Mapping and Transformation of Data from API.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/7957c454-81d9-4231-a8b7-c35d4e0bd86e_0_OKnMrulI4Xc_AcOX.png?auto=compress,format',
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
                type: 'list-item',
                text: 'Usage of normalizr data schemes.',
                spans: [
                  {
                    start: 9,
                    end: 19,
                    type: 'strong',
                  },
                  {
                    start: 31,
                    end: 32,
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
                width: 791,
                height: 69,
              },
              alt: 'Normalizr Data Schemes.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/8ab1ca81-5065-4799-acd9-0da60ebbff0c_0_7pG6DDGyePq77svc.png?auto=compress,format',
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
                text: 'scheme title = resource title',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Implementation of resource approach and Flat REST. Thus, in fact, we use the same code to interact with different resources without the duplicating (tracking of statuses and data works separately!).',
                spans: [
                  {
                    start: 18,
                    end: 27,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Resource is a disposable url, that does not have any nestings and definitely tells about the undertaken action. For example, in Flat REST it is necessary to make /posts?userId=1 (here posts is a resource) request for data filtering to get user’s posts. While in simple REST the request is usually done in the following way: /users/1/posts (this may have multiple nestings like /users/1/posts/1/comments, etc.).',
                spans: [
                  {
                    start: 0,
                    end: 410,
                    type: 'em',
                  },
                  {
                    start: 0,
                    end: 8,
                    type: 'strong',
                  },
                  {
                    start: 128,
                    end: 138,
                    type: 'strong',
                  },
                  {
                    start: 162,
                    end: 178,
                    type: 'strong',
                  },
                  {
                    start: 184,
                    end: 190,
                    type: 'strong',
                  },
                  {
                    start: 324,
                    end: 338,
                    type: 'strong',
                  },
                  {
                    start: 377,
                    end: 402,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'Since a resource is always a plural noun (posts, users, comments, etc.), looking at the resource title and understand what you will get as the result!',
                spans: [
                  {
                    start: 42,
                    end: 47,
                    type: 'strong',
                  },
                  {
                    start: 49,
                    end: 54,
                    type: 'strong',
                  },
                  {
                    start: 56,
                    end: 64,
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
                width: 800,
                height: 146,
              },
              alt: 'Resource.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/79d167b5-68c6-43bc-9135-147d40d094af_0_ofQVUvF1DL4Djy3K.png?auto=compress,format',
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
                text: 'The example of sag generator to get the array of data through resource title or aliases.',
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
                width: 627,
                height: 400,
              },
              alt: 'The Example of Sag Generator.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/48ca7763-de92-4ebb-b11f-5d1a25908613_0_Slnhcct8Gp5XKH-V.png?auto=compress,format',
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
                text: 'As the endpoint, we mention resource title, useful load — as data, additional parameters and the value of headers (ex: authorization token — as settings).',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The usage of selectors to choose the data from state hides the details of selection (since there may be multiple nesting in the object of data state). By this, the duplication of the code decreases as well. The approach allows changing the methods of data requesting through selector in such a way that changes will be applied only for certain part of the code. For example, instead of state.resource.detail we will use fromResource.getDetail(state), and inside of the method state.resource.detail will be hidden.',
                spans: [
                  {
                    start: 386,
                    end: 407,
                    type: 'strong',
                  },
                  {
                    start: 420,
                    end: 449,
                    type: 'strong',
                  },
                  {
                    start: 476,
                    end: 498,
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
                width: 595,
                height: 233,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/0d9aa731-f619-42ba-8117-0bfcc6b1218d_0_Oxs6NZj43vRynO2k.png?auto=compress,format',
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
                text: 'This is how the selectors look like, where resource is posts, users or comments',
                spans: [
                  {
                    start: 55,
                    end: 60,
                    type: 'strong',
                  },
                  {
                    start: 62,
                    end: 67,
                    type: 'strong',
                  },
                  {
                    start: 71,
                    end: 79,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'The convenience of testing and writing tests for the components! This is a very important feature since we can run tests for a single component and it is not necessary to look for the test in the whole list since the test is placed in the folder with the component. It increases the portability and self-sufficiency of the component. If you run yarn test:watch command, a worker will clearly identify the list of test to be run since they are in the same folder as component code. You can also easily edit or add tests.',
                spans: [
                  {
                    start: 345,
                    end: 361,
                    type: 'strong',
                  },
                  {
                    start: 368,
                    end: 369,
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
                width: 213,
                height: 90,
              },
              alt: 'Folders.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/29b4034a-9333-43e3-9b9c-22f1bd1f4b5f_0_xW4wshxeYToDEET2.png?auto=compress,format',
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
                text: 'Here is the view of the component folder with tests',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Mapping of selectors, sags, components, containers is automatic that allows not to think whether you have included “import” to index.js or not. You simply use the following format of syntax:',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'import { SomeComponent } from ‘components’',
                spans: [
                  {
                    start: 0,
                    end: 42,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'or',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'import { fromResource } from ‘store/selectors’',
                spans: [
                  {
                    start: 0,
                    end: 46,
                    type: 'em',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'Such approach allows transferring components between different folders like components/atoms or components/molecules. Herewith, you may not care that something will be broken since using relative routes like ‘../molecules/SomeComponent’ the component location is strictly defined. Therefore, with the transfer of the component, you have to change the link to the component (if we decided that it is not a molecule, but an atom or an organism). Due to this, it is impossible to create cyclical links when one module refers to the other one that refers to another module referring to the first one. Thus, it is necessary to think and use DI principle to divide dependencies and get them as parameters.',
                spans: [
                  {
                    start: 209,
                    end: 237,
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
                width: 800,
                height: 194,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/2e7c87ec-1536-4342-ae7f-c3e1f9ba52f3_0_2FAXp_epz6KEEmy1.png?auto=compress,format',
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
                text: 'This is an example of module from auth folder that requires specifying a component to display “Signing in” state in authorization process to show the user what is going on if the process will take more time than assumed.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The solution for this is obvious: since we cannot import a component — import { SigningInPage } from ‘components’, we can use DI and specify the parameter to pass component into the function creating the auth wrapper. As a result, we use a function in the following way:',
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
                width: 800,
                height: 28,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/ffd9c1e6-9e29-4390-8166-456a4755106f_0_52FFGZ6VV6QkbCdi.png?auto=compress,format',
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
                text: 'Thus, we do not have any cyclical links and we can specify different Loading pages for wrapped components of the pages. Herewith, components or auth wrappers are not aware of specific component details and of how the wrapping works.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'The example of code that joins all the components into namespace_components and containers:',
                spans: [
                  {
                    start: 55,
                    end: 75,
                    type: 'strong',
                  },
                  {
                    start: 80,
                    end: 91,
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
                width: 800,
                height: 198,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/f8bc0006-ff86-4fa3-9169-08bf313d35a1_0_m24VB9nBEMjgVmmQ.png?auto=compress,format',
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
                type: 'heading2',
                text: 'Disadvantages of arc.js implementation and solutions to them',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Here is important to say that disadvantages are specific to each project.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'I revealed the following disadvantages from my practice:',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'The absence of alias set up for the same source. Alias is required to make a request for the same source but without the data overlapping. For example, if in one of your forms you request the list of all cities and in the other form you select cities given country, there may be data conflict. To avoid this, it is necessary to add aliases. For each alias, there are specific data schemes in entities. Thus, the requests may be made to posts, but the data may be placed into the collection called social_posts (if we choose posts with “social” type), thanks to aliases. Then with selectors, we may get data from fromResource.getList(state, ‘social_posts’)',
                spans: [
                  {
                    start: 15,
                    end: 20,
                    type: 'strong',
                  },
                  {
                    start: 49,
                    end: 55,
                    type: 'strong',
                  },
                  {
                    start: 332,
                    end: 341,
                    type: 'strong',
                  },
                  {
                    start: 350,
                    end: 357,
                    type: 'strong',
                  },
                  {
                    start: 392,
                    end: 400,
                    type: 'strong',
                  },
                  {
                    start: 436,
                    end: 442,
                    type: 'strong',
                  },
                  {
                    start: 497,
                    end: 510,
                    type: 'strong',
                  },
                  {
                    start: 561,
                    end: 568,
                    type: 'strong',
                  },
                  {
                    start: 612,
                    end: 655,
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
                width: 800,
                height: 20,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/239eb1db-b825-40b8-9eb9-e0ab63008c79_0_TQxbqQSfQ6SPFgwp.png?auto=compress,format',
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
                text: 'In resourceAlias “posts” are set up and in resource — “social_posts”. As a result, the requests will be made to posts, but the data will be saved into social_posts',
                spans: [
                  {
                    start: 3,
                    end: 16,
                    type: 'strong',
                  },
                  {
                    start: 17,
                    end: 25,
                    type: 'strong',
                  },
                  {
                    start: 43,
                    end: 51,
                    type: 'strong',
                  },
                  {
                    start: 54,
                    end: 70,
                    type: 'strong',
                  },
                  {
                    start: 112,
                    end: 119,
                    type: 'strong',
                  },
                  {
                    start: 150,
                    end: 163,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'It is impossible to get response data separately from API titles and json data.',
                spans: [
                  {
                    start: 69,
                    end: 73,
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
                width: 604,
                height: 246,
              },
              alt: 'Code.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/ae9acacd-0dfd-4472-b938-2b62a55aaa30_0_HZkLeUxb_tp762sf.png?auto=compress,format',
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
                text: 'To solve this, we partially change method parsing server responses. In headers we write the information from titles and data from response body is written into json attribute.',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'Inability to go over the component code through Ctrl+Click, using the namespace of components or containers type. Yet, I think it is not a big problem since you always can find the component by its name.',
                spans: [
                  {
                    start: 48,
                    end: 70,
                    type: 'em',
                  },
                  {
                    start: 70,
                    end: 80,
                    type: 'strong',
                  },
                  {
                    start: 83,
                    end: 93,
                    type: 'strong',
                  },
                  {
                    start: 97,
                    end: 108,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Conclusion',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'In conclusion, it is not always necessary to use arc.js skeleton to set up supported architecture, but the skill to notice cool features of this architecture that may significantly simplify your work is very important.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'For example, the simplest solution for the check of status.ok response status and generation of exceptions in case of status.ok = false inside services/api allows to avoid the insertion of the code duplication for the check and exception generation with every revoke of API in the modules, used this call.',
                spans: [
                  {
                    start: 52,
                    end: 61,
                    type: 'strong',
                  },
                  {
                    start: 118,
                    end: 136,
                    type: 'strong',
                  },
                  {
                    start: 143,
                    end: 155,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The usage of url = resource approach allows not to create the same code for each URL that processes server response, except the change of url, and set up of parameters in a given order. We use a generic-like approach that is beneficial in code reuse.',
                spans: [
                  {
                    start: 13,
                    end: 28,
                    type: 'strong',
                  },
                  {
                    start: 115,
                    end: 116,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'The usage of selectors allows hiding the branching of data in the state from the user who applies selector. Due to this we can display the same result with different data structures and by making changes only in one place.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Any skeleton definitely has to be finalized to make it satisfy all the requirements. Skeleton without any modifications is rarely used.',
                spans: [],
              },
              {
                type: 'paragraph',
                text: 'Putting the logic of api interactions into the redux-saga modules allows transparent response processing and setting isPending, hasFailed and other statuses. Herewith, the amount of code significantly decreases. The approach also enables usage of generators that are becoming popular now due to the simplicity of their implementation and testing.',
                spans: [
                  {
                    start: 47,
                    end: 58,
                    type: 'strong',
                  },
                  {
                    start: 117,
                    end: 126,
                    type: 'strong',
                  },
                  {
                    start: 128,
                    end: 137,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'paragraph',
                text: 'What is more important is that the same things may be done by Saga! It allows to get different states with different resources without attachment to specific details as referring to the data works with selectors and redux-saga slide-effects. The approach is similar to the usage of interfaces in the strongly typed languages where you know what methods are represented by the interface but says nothing about their implementation. It also allows avoiding cyclical links and complicated distribution of attributes to nesting components.',
                spans: [
                  {
                    start: 216,
                    end: 227,
                    type: 'strong',
                  },
                ],
              },
              {
                type: 'heading2',
                text: 'Useful links',
                spans: [],
              },
              {
                type: 'list-item',
                text: 'https://github.com/diegohaz/arc',
                spans: [
                  {
                    start: 0,
                    end: 31,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/diegohaz/arc',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'https://github.com/paularmstrong/normalizr',
                spans: [
                  {
                    start: 0,
                    end: 42,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/paularmstrong/normalizr',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'https://github.com/redux-saga/redux-saga',
                spans: [
                  {
                    start: 0,
                    end: 40,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/redux-saga/redux-saga',
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'list-item',
                text: 'https://github.com/diegohaz/redux-saga-thunk',
                spans: [
                  {
                    start: 0,
                    end: 44,
                    type: 'hyperlink',
                    data: {
                      link_type: 'Web',
                      url: 'https://github.com/diegohaz/redux-saga-thunk',
                      target: '_blank',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          slice_type: 'image_with_attributes',
          slice_label: null,
          items: [
            {},
          ],
          primary: {
            image: {
              dimensions: {
                width: 1200,
                height: 300,
              },
              alt: 'Custom Software and Mobile App Development.',
              copyright: null,
              url: 'https://images.prismic.io/superpupertest/c0413167-765e-4a39-8ed2-b00c4a794806_Frame+1.png?auto=compress,format&rect=0,0,4800,1200&w=1200&h=300',
            },
            target: '_self',
            title: [],
            url: [
              {
                type: 'paragraph',
                text: 'https://maddevs.io/services/?utm_source=blog&utm_medium=architecture-react-project#software-development',
                spans: [],
              },
            ],
            enable_zoom: 'disable',
          },
        },
      ],
    },
  },
]
