import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { head } from './utils/head'
import { defineConfig } from 'vitepress'
// import { mdPlugin } from './config/plugins'
import { tablePlugin } from './config/table'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
// import { renderPlugin, codePlugin } from 'vitepress-theme-demoblock'
import type MarkdownIt from 'markdown-it'

export default defineConfig({
  title: 'Fighting Design',
  head,
  description,
  lastUpdated: true,
  cacheDir: '../../node_modules', // https://vitepress.vuejs.org/config/app-configs#cachedir
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FightingDesign/fighting-design'
      }
    ],
    logo: 'https://tianyuhao.cn/images/fighting-design/FightingDesign.svg'
  },
  markdown: {
    // 自定义 markdown 语法
    config: (md: MarkdownIt): void => {
      md.use(tablePlugin)
      // md.use(codePlugin)
      // md.use(renderPlugin)
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom',
        cssPreprocessor: 'sass',
        // customStyleTagName: 'style lang="less"',
        scriptImports: ["import * as FightingDesign from 'fighting-design'", "import * as FightingIcon from '@fighting-design/fighting-icon'"],
        scriptReplaces: [
          {
            searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
            replaceValue: 'const { defineComponent: _defineComponent } = Vue'
          },
          {
            searchValue: /import ({.*}) from 'fighting-design'/g,
            replaceValue: (s, s1) => `const ${s1} = FightingDesign`
          },
          {
            searchValue: /import ({.*}) from '@fighting-design\/fighting-icon'/g,
            replaceValue: (s, s1) => `const ${s1} = FightingIcon`
          }
        ],
        styleReplaces: [
          {
            searchValue: '@import "docs/styles/index.css";',
            replaceValue: '@import "@docs/styles/index.css";'
          }
        ]
      })
    }
  }
})
