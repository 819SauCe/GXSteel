import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html',
      strict: false
    }),
    paths: {
      base: ''
    },
    prerender: {
      crawl: true,
      entries: ['*']
    }
  }
};
