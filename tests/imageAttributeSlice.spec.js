// import {
//   mount
// } from '@vue/test-utils';
// import ImageAttributesSlice from '../client/components/Blog/slices/ImageAttributesSlice';
//
// describe('Image attribute slice component', () => {
//   let wrapper;
//
//   const slice = {
//     items: [{}],
//     primary: {
//       image: {
//         alt: 'alt text',
//         copyright: null,
//         dimensions: {height:298, width:1200},
//         url: 'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298'
//       },
//       target: '_blank',
//       title: [{
//         spans: [],
//         text: 'Tired banner',
//         type: 'paragraph'
//       }],
//       url: [{
//         spans: [],
//         text: 'https://blog.maddevs.io',
//         type: 'paragraph'
//       }]
//
//     },
//     slice_label: null,
//     slice_type: 'codeblock'
//   };
//
//   beforeEach(() => {
//     wrapper = mount(ImageAttributesSlice, {
//       propsData: {slice}
//     });
//   });
//
//   test('is vue component', () => {
//     expect(wrapper.exists()).toBeTruthy();
//   });
//
//   test('renders correctly', () => {
//     expect(wrapper.element).toMatchSnapshot();
//   });
// });
