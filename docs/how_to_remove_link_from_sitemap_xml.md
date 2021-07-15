# How to remove link from sitemap.xml

If you need to exclude a link from the sitemap.xml file, which is located in the `./dist` folder, this documentation will help you.

## Steps

1. Open the file `./utils/getRoutes.js`

2. In the `IGNORE_ROUTES` global variable add the link to be excluded.

3. Important: The link must not have a slash(/) at the end of the line.

4. Run command `npm run build & npm run generate`

5. After running the commands, the `sitemap.xml` file will be generated in the `./dist` folder

6. The ignored link must not be in the sitemap.xml file.

