import{V as h,_ as b,r as d,o as m,c as g,a as D,w as f,b as s,d as _,f as l}from"./app.22308a76.js";const{defineComponent:B}=h,E=B({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:n,resolveComponent:p,withCtx:o,createVNode:a,Fragment:C,openBlock:A,createElementBlock:F}=h;function y(V,N){const r=p("f-header"),t=p("f-main"),e=p("f-layout"),u=p("f-footer"),c=p("f-aside");return A(),F(C,null,[a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1}),a(u,null,{default:o(()=>[n("Footer")]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(c,null,{default:o(()=>[n("Aside")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(e,null,{default:o(()=>[a(c,null,{default:o(()=>[n("Aside")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1})]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(e,null,{default:o(()=>[a(c,{width:"70px"},{default:o(()=>[n("Aside1")]),_:1}),a(c,null,{default:o(()=>[n("Aside2")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1})]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(e,null,{default:o(()=>[a(t,null,{default:o(()=>[n("Main")]),_:1}),a(c,null,{default:o(()=>[n("Aside")]),_:1})]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(e,null,{default:o(()=>[a(c,null,{default:o(()=>[n("Aside")]),_:1}),a(e,null,{default:o(()=>[a(t,null,{default:o(()=>[n("Main")]),_:1}),a(u,null,{default:o(()=>[n("Footer")]),_:1})]),_:1})]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(c,null,{default:o(()=>[n("Aside")]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1})]),_:1})]),_:1}),a(e,null,{default:o(()=>[a(c,null,{default:o(()=>[n("Aside")]),_:1}),a(e,null,{default:o(()=>[a(r,null,{default:o(()=>[n("Header")]),_:1}),a(t,null,{default:o(()=>[n("Main")]),_:1}),a(u,null,{default:o(()=>[n("Footer")]),_:1})]),_:1})]),_:1})],64)}return{render:y,...{}}}()}}),I=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"基本布局","slug":"基本布局","link":"#基本布局","children":[]},{"level":2,"title":"layout Attributes","slug":"layout-attributes","link":"#layout-attributes","children":[]},{"level":2,"title":"Header Attributes","slug":"header-attributes","link":"#header-attributes","children":[]},{"level":2,"title":"Main Attributes","slug":"main-attributes","link":"#main-attributes","children":[]},{"level":2,"title":"Aside Attributes","slug":"aside-attributes","link":"#aside-attributes","children":[]},{"level":2,"title":"Footer Attributes","slug":"footer-attributes","link":"#footer-attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"LayoutDirection","slug":"layoutdirection","link":"#layoutdirection","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/layout.md","lastUpdated":1671086462000}');const v=_('<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-hidden="true">#</a></h1><p>处理常见的一些网页布局，实现快速搭建</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/layout" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/layout.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h2><ul><li><code>f-layout</code> 外层容器, 可以实现垂直、水平、嵌套布局</li><li><code>f-main</code> 主体容器</li><li><code>f-header</code> 头部容器</li><li><code>f-aside</code> 侧栏容器</li><li><code>f-footer</code> 底栏容器</li></ul><h2 id="基本布局" tabindex="-1">基本布局 <a class="header-anchor" href="#基本布局" aria-hidden="true">#</a></h2><p>下面是由 <code>Fighting Design</code> 提供的几种常见的页面布局演示</p>',7),x=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Footer"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"70px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside1"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside2"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Footer"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Aside"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-aside"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Header"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-header"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Main"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-main"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Footer"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-footer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-layout"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-header"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-footer"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"6b8bf5"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"fff"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"text-align"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"line-height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"60px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-aside"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"65adf0"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"fff"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"text-align"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"line-height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"200px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"f-main"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"3178c6"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#A6ACCD"}},"fff"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"text-align"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"line-height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"160px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),M=_(`<h2 id="layout-attributes" tabindex="-1">layout Attributes <a class="header-anchor" href="#layout-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>direction</code></td><td>排列方向</td><td><a href="#layoutdirection">LayoutDirection</a></td><td><code>horizontal</code> <code>vertical</code></td><td>——</td></tr></tbody></table></div><h2 id="header-attributes" tabindex="-1">Header Attributes <a class="header-anchor" href="#header-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>height</code></td><td>高度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>padding</code></td><td>内边距</td><td>string / number</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="main-attributes" tabindex="-1">Main Attributes <a class="header-anchor" href="#main-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>padding</code></td><td>内边距</td><td>string / number</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="aside-attributes" tabindex="-1">Aside Attributes <a class="header-anchor" href="#aside-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>width</code></td><td>宽度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>padding</code></td><td>内边距</td><td>string / number</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="footer-attributes" tabindex="-1">Footer Attributes <a class="header-anchor" href="#footer-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>height</code></td><td>高度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>padding</code></td><td>内边距</td><td>string / number</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">AsideProps</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">AsideInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">FooterInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">FooterProps</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">HeaderInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">HeaderProps</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">LayoutInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">LayoutProps</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">LayoutDirection</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">MainInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">MainProps</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="layoutdirection" tabindex="-1">LayoutDirection <a class="header-anchor" href="#layoutdirection" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LayoutDirection</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">horizontal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vertical</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,16),k={href:"https://github.com/Tyh2001",target:"_blank"},H={href:"https://github.com/XiaoLi-sach",target:"_blank"};function L(n,p,o,a,C,A){const F=d("render-demo-0"),y=d("demo"),i=d("f-avatar");return m(),g("div",null,[v,D(y,{sourceCode:`<template>
  <f-layout>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-main>Main</f-main>
    <f-footer>Footer</f-footer>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-main>Main</f-main>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside>Aside</f-aside>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside width="70px">Aside1</f-aside>
      <f-aside>Aside2</f-aside>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-main>Main</f-main>
      <f-aside>Aside</f-aside>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-header>Header</f-header>
    <f-layout>
      <f-aside>Aside</f-aside>
      <f-layout>
        <f-main>Main</f-main>
        <f-footer>Footer</f-footer>
      </f-layout>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-layout>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
    </f-layout>
  </f-layout>

  <f-layout>
    <f-aside>Aside</f-aside>
    <f-layout>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
      <f-footer>Footer</f-footer>
    </f-layout>
  </f-layout>
</template>

<style scoped>
  .f-header,
  .f-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .f-aside {
    background: #65adf0;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .f-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
`},{highlight:f(()=>[x]),default:f(()=>[D(F)]),_:1}),M,s("a",k,[D(i,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),s("a",H,[D(i,{round:"",src:"https://avatars.githubusercontent.com/u/55753927?v=4"})])])}const P=b(E,[["render",L]]);export{I as __pageData,P as default};
