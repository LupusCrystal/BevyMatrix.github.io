import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      source: '**/*.md', // Specify the source files
      type: 'page' // Define the collection type
    })
  }
})