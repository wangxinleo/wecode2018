module.exports = {
  base: '/',
  title: 'OA-DEVHELPDOC',
  description: '五株科技BPM开发帮助文档',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'OA-DEVHELPDOC',
      description: '五株科技BPM开发帮助文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'OA-DEVHELPDOC',
      description: 'WuZhu Technology BPM Development Assistance Documents',
    },
  },
  themeConfig: {
    logo: '/img/logo.png',
    // nav: [
    //   { text: '主页', link: '/' },
    //   { text: '概述', link: '/summary/' },
    //   { text: 'Github', link: 'https://google.com', target: '_blank' },
    // ],
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        // displayAllHeaders: true, // 侧边栏子项展开
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        nav: [
          { text: '主页', link: '/' },
          { text: '概述', link: '/BPM/' },
          { text: '代码速查', link: '/codePath/' },
          { text: '项目集成', link: '/expand/' },
          { text: '首页改版', link: '/changeIndex/' },
          { text: '了解更多', link: '/more/' },
          {
            text: 'Github',
            link: 'https://github.com/wangxinleo',
            target: '_blank',
          },
        ],
        sidebar: {
          '/BPM/': [
            {
              title: 'Lotus Notes Domino BPM',
              // false 为默认展开
              collapsable: false,
              children: [
                { title: '概述', path: '/BPM/' },
                { title: '应用开发', path: '/BPM/directoryStructure' },
                { title: '调试方法', path: '/BPM/debug' },
              ],
            },
            {
              title: 'H3 BPM',
              // false 为默认展开
              collapsable: false,
              children: [
                { title: '概述', path: '/BPM/H3/' },
                { title: '项目结构', path: '/BPM/H3/directoryStructure' },
              ],
            },
          ],
          '/expand/': [
            {
              title: '项目集成',
              // false 为默认展开
              collapsable: false,
              children: [
                {
                  title: '办公自动化支持系统 OASS',
                  path: '/expand/',
                },
                {
                  title: '固定资产设备信息管理池',
                  path: '/expand/fixedAssetsManagement',
                },
              ],
            },
          ],
          '/changeIndex/': [
            {
              title: '首页改版',
              // false 为默认展开
              displayAllHeaders: true, // 侧边栏子项展开
              collapsable: false,
              children: [
                {
                  title: '介绍',
                  path: '/changeIndex/',
                },
              ],
            },
          ],
        },
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lang: 'en-US',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          {
            text: 'Github',
            link: 'https://github.com/wangxinleo',
            target: '_blank',
          },
        ],
        // 当前 locale 的 algolia docsearch 选项
        // algolia: {},
        // nav: [{ text: 'Nested', link: '/nested/' }],
        // sidebar: {
        //   '/en/': [''],
        //   '/en/nested/': [''],
        // },
      },
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ],
}
