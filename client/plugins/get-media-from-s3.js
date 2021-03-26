import Vue from 'vue'

Vue.mixin({
  methods: {
    getMediaFromS3(path) {
      if (!path) throw new ReferenceError('Add the path to the file in s3. Example: /images/file.jpg')
      // if (path[0] !== '/') throw new ReferenceError('The path must begin with a slash. Example: /images/file.jpg')
      try {
        return `${process.env.s3PublicUrl}${path}`
      } catch (error) {
        throw new Error(error)
      }
    },
  },
})
