import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Democracy 2.0',
  description:
    'Modern Democracy for people based on the principles of the open source movement.',
  base: '/demo2',
  srcDir: './book',
  outDir: './dist',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  //rewrites: {
  //'nodes_n_fields.md': 'nodes-and-fields.md',
  //'off_the_island.md': 'off-island.md',
  //},

  vite: {
    envDir: './../',
    ssr: {
      noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
    },
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
  themeConfig: {
    logo: '/images/d9book.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Attribution', link: '/attribution' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Fork me', link: 'https://github.com/selwynpolit/demo2/fork' },
    ],

    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/selwynpolit/demo2/edit/gh-pages/book/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: generateSidebar({
      documentRootPath: 'book',
      useTitleFromFrontmatter: true,
      sortMenusByName: true,
      hyphenToSpace: true,
      excludePattern: [
        'about.md',
        'blank.md',
        'attribution.md',
        'contribute.md',
        'structure.md',
        'open_source.md',
        'change_log.md',
        'open_source_trends.md'
      ],
    }),

    socialLinks: [
      { icon: 'x', link: '//x.com/selwynpolit' },
      { icon: 'github', link: '//github.com/selwynpolit' },
    ],

    footer: {
      message:
        '<span>\n' +
        '  <a property="dct:title" rel="cc:attributionURL" href="//selwynpolit.github.io/demo2">Democracy 2.0</a>\n' +
        '  by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="//drupal.org/u/selwynpolit">Selwyn Polit</a>\n' +
        '  is licensed under <a href="//creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0\n' +
        '  </a><br>more info here</span>',
    },
  },
});
