import getExtension from '@/helpers/getExtension';

describe('getExtension helper', () => {
  test('should return the correct string with the extension of the image from prismic', () => {
    let url =
      'https://images.prismic.io/superpupertest/614c9f98-ac56-4aa4-8f78-afbeb5d8bbac_Frame+1938.jpg?auto=compress,format';
    let extension = getExtension(url);
    expect(extension).toBe('jpg');
  });

  test('should return the correct string with the extension from string with the filename', () => {
    let fileName = 'test_filename.vue';
    let extension = getExtension(fileName);
    expect(extension).toBe('vue');
  });

  test('should return null for param, that is not a string', () => {
    let notString = 23;
    let extension = getExtension(notString);
    expect(extension).toBe(null);
  });
});
