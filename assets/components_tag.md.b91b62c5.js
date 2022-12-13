import{_ as F,r,o as y,c as d,a as t,w as l,b as s,d as a,e as D,p as b,f as i}from"./app.ead8128f.js";const L=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"简约的","slug":"简约的","link":"#简约的","children":[]},{"level":2,"title":"线性的","slug":"线性的","link":"#线性的","children":[]},{"level":2,"title":"自定义颜色","slug":"自定义颜色","link":"#自定义颜色","children":[]},{"level":2,"title":"标签大小","slug":"标签大小","link":"#标签大小","children":[]},{"level":2,"title":"块级元素","slug":"块级元素","link":"#块级元素","children":[]},{"level":2,"title":"可关闭的","slug":"可关闭的","link":"#可关闭的","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/tag.md","lastUpdated":1670925826000}'),v={name:"components/tag.md"},e=c=>(b("data-v-9ab28b17"),c=c(),i(),c),C=D('<h1 id="tag-标签" tabindex="-1" data-v-9ab28b17>Tag 标签 <a class="header-anchor" href="#tag-标签" aria-hidden="true" data-v-9ab28b17>#</a></h1><p data-v-9ab28b17>一个标签</p><ul data-v-9ab28b17><li data-v-9ab28b17><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tag" target="_blank" rel="noreferrer" data-v-9ab28b17>源代码</a></li><li data-v-9ab28b17><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tag.md" target="_blank" rel="noreferrer" data-v-9ab28b17>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-9ab28b17>基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true" data-v-9ab28b17>#</a></h2><p data-v-9ab28b17><code data-v-9ab28b17>type</code> 属性可以配置不同的按钮类型，展示不同的颜色状态</p>',5),g=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"普通"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"失败"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),h=e(()=>a("h2",{id:"简约的",tabindex:"-1"},[s("简约的 "),a("a",{class:"header-anchor",href:"#简约的","aria-hidden":"true"},"#")],-1)),u=e(()=>a("p",null,[a("code",null,"simple"),s(" 属性可以配置简约的提示，样式依然由 "),a("code",null,"type"),s(" 控制")],-1)),f=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"simple"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"simple"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"普通"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"simple"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"simple"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"simple"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"失败"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),_=e(()=>a("h2",{id:"线性的",tabindex:"-1"},[s("线性的 "),a("a",{class:"header-anchor",href:"#线性的","aria-hidden":"true"},"#")],-1)),A=e(()=>a("p",null,[a("code",null,"line"),s(" 属性可以配置线性的提示，样式依然由 "),a("code",null,"type"),s(" 控制")],-1)),E=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"line"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"line"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"普通"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"line"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"line"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"line"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"失败"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),m=e(()=>a("h2",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-hidden":"true"},"#")],-1)),k=e(()=>a("p",null,[a("code",null,"background"),s(" 和 "),a("code",null,"color"),s(" 可以自定义标签颜色，将覆盖原有的 "),a("code",null,"type")],-1)),T=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"background"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"skyblue"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"天蓝色"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"background"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"blue"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"#fff"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"深蓝色"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),x=e(()=>a("h2",{id:"标签大小",tabindex:"-1"},[s("标签大小 "),a("a",{class:"header-anchor",href:"#标签大小","aria-hidden":"true"},"#")],-1)),w=e(()=>a("p",null,[a("code",null,"size"),s(" 自定义标签大小")],-1)),S=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"large"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"大标签"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"middle"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"中等标签"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"small"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"小标签"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"mini"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"超小标签"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),I=e(()=>a("h2",{id:"块级元素",tabindex:"-1"},[s("块级元素 "),a("a",{class:"header-anchor",href:"#块级元素","aria-hidden":"true"},"#")],-1)),z=e(()=>a("p",null,[s("通过 "),a("code",null,"block"),s(" 属性可以将标签设置为块级元素。")],-1)),V=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"普通"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"失败"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),N=e(()=>a("h2",{id:"可关闭的",tabindex:"-1"},[s("可关闭的 "),a("a",{class:"header-anchor",href:"#可关闭的","aria-hidden":"true"},"#")],-1)),P=e(()=>a("p",null,[a("code",null,"close"),s(" 可配置可以关闭的")],-1)),$=e(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"close"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"default"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"默认"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"close"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"primary"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"普通"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"close"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"warning"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"警告"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"close"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"success"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"成功"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"close"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"type"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"danger"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"失败"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-tag"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),B=D(`<h2 id="attributes" tabindex="-1" data-v-9ab28b17>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-9ab28b17>#</a></h2><div class="vp-table__container" data-v-9ab28b17><table data-v-9ab28b17><thead data-v-9ab28b17><tr data-v-9ab28b17><th data-v-9ab28b17>参数</th><th data-v-9ab28b17>说明</th><th data-v-9ab28b17>类型</th><th data-v-9ab28b17>可选值</th><th data-v-9ab28b17>默认值</th></tr></thead><tbody data-v-9ab28b17><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>type</code></td><td data-v-9ab28b17>标签类型</td><td data-v-9ab28b17><a href="/components/interface.html#fightingtype" data-v-9ab28b17>FightingType</a></td><td data-v-9ab28b17><code data-v-9ab28b17>default</code> <code data-v-9ab28b17>success</code> <code data-v-9ab28b17>danger</code> <code data-v-9ab28b17>warning</code> <code data-v-9ab28b17>primary</code></td><td data-v-9ab28b17>——</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>close</code></td><td data-v-9ab28b17>是否可关闭</td><td data-v-9ab28b17>boolean</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>false</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>line</code></td><td data-v-9ab28b17>线性的</td><td data-v-9ab28b17>boolean</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>false</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>round</code></td><td data-v-9ab28b17>圆角</td><td data-v-9ab28b17>boolean</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>false</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>background</code></td><td data-v-9ab28b17>自定义背景色</td><td data-v-9ab28b17>string</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>——</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>color</code></td><td data-v-9ab28b17>自定义文字颜色</td><td data-v-9ab28b17>string</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>——</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>before-icon</code></td><td data-v-9ab28b17>左侧 icon</td><td data-v-9ab28b17><a href="/components/interface.html#fightingicon" data-v-9ab28b17>FightingIcon</a></td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>——</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>after-icon</code></td><td data-v-9ab28b17>右侧 icon</td><td data-v-9ab28b17><a href="/components/interface.html#fightingicon" data-v-9ab28b17>FightingIcon</a></td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>——</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>size</code></td><td data-v-9ab28b17>标签大小</td><td data-v-9ab28b17><a href="/components/interface.html#fightingsize" data-v-9ab28b17>FightingSize</a></td><td data-v-9ab28b17><code data-v-9ab28b17>large</code> <code data-v-9ab28b17>middle</code> <code data-v-9ab28b17>small</code> <code data-v-9ab28b17>mini</code></td><td data-v-9ab28b17>small</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>simple</code></td><td data-v-9ab28b17>是否为简约模式</td><td data-v-9ab28b17>boolean</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>false</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>block</code></td><td data-v-9ab28b17>是否为块级元素</td><td data-v-9ab28b17>boolean</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>false</td></tr><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>on-close</code></td><td data-v-9ab28b17>点击关闭按钮触发的回调</td><td data-v-9ab28b17>Function</td><td data-v-9ab28b17>——</td><td data-v-9ab28b17>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-9ab28b17>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-9ab28b17>#</a></h2><div class="vp-table__container" data-v-9ab28b17><table data-v-9ab28b17><thead data-v-9ab28b17><tr data-v-9ab28b17><th data-v-9ab28b17>名称</th><th data-v-9ab28b17>说明</th></tr></thead><tbody data-v-9ab28b17><tr data-v-9ab28b17><td data-v-9ab28b17><code data-v-9ab28b17>default</code></td><td data-v-9ab28b17>tag 的内容</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-9ab28b17>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-9ab28b17>#</a></h2><p data-v-9ab28b17>组件导出以下类型定义：</p><div class="language-ts" data-v-9ab28b17><button title="Copy Code" class="copy" data-v-9ab28b17></button><span class="lang" data-v-9ab28b17>ts</span><pre class="shiki" data-v-9ab28b17><code data-v-9ab28b17><span class="line" data-v-9ab28b17><span style="color:#89DDFF;" data-v-9ab28b17>import</span><span style="color:#A6ACCD;" data-v-9ab28b17> </span><span style="color:#89DDFF;" data-v-9ab28b17>type</span><span style="color:#A6ACCD;" data-v-9ab28b17> </span><span style="color:#89DDFF;" data-v-9ab28b17>{</span><span style="color:#F07178;" data-v-9ab28b17> </span><span style="color:#A6ACCD;" data-v-9ab28b17>TagInstance</span><span style="color:#89DDFF;" data-v-9ab28b17>,</span><span style="color:#F07178;" data-v-9ab28b17> </span><span style="color:#A6ACCD;" data-v-9ab28b17>TagProps</span><span style="color:#F07178;" data-v-9ab28b17> </span><span style="color:#89DDFF;" data-v-9ab28b17>}</span><span style="color:#A6ACCD;" data-v-9ab28b17> </span><span style="color:#89DDFF;" data-v-9ab28b17>from</span><span style="color:#A6ACCD;" data-v-9ab28b17> </span><span style="color:#89DDFF;" data-v-9ab28b17>&#39;</span><span style="color:#C3E88D;" data-v-9ab28b17>fighting-design</span><span style="color:#89DDFF;" data-v-9ab28b17>&#39;</span></span>
<span class="line" data-v-9ab28b17></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-9ab28b17>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-9ab28b17>#</a></h2>`,8),R={href:"https://github.com/Tyh2001",target:"_blank"},J={href:"https://github.com/konvyi",target:"_blank"};function O(c,U,j,q,G,H){const o=r("f-tag"),n=r("vp-demo"),p=r("f-avatar");return y(),d("div",null,[C,t(n,{source:""},{source:l(()=>[t(o,{type:"default"},{default:l(()=>[s("默认")]),_:1}),t(o,{type:"primary"},{default:l(()=>[s("普通")]),_:1}),t(o,{type:"warning"},{default:l(()=>[s("警告")]),_:1}),t(o,{type:"success"},{default:l(()=>[s("成功")]),_:1}),t(o,{type:"danger"},{default:l(()=>[s("失败")]),_:1})]),default:l(()=>[g]),_:1}),h,u,t(n,{source:""},{source:l(()=>[t(o,{simple:"",type:"default"},{default:l(()=>[s("默认")]),_:1}),t(o,{simple:"",type:"primary"},{default:l(()=>[s("普通")]),_:1}),t(o,{simple:"",type:"warning"},{default:l(()=>[s("警告")]),_:1}),t(o,{simple:"",type:"success"},{default:l(()=>[s("成功")]),_:1}),t(o,{simple:"",type:"danger"},{default:l(()=>[s("失败")]),_:1})]),default:l(()=>[f]),_:1}),_,A,t(n,{source:""},{source:l(()=>[t(o,{line:"",type:"default"},{default:l(()=>[s("默认")]),_:1}),t(o,{line:"",type:"primary"},{default:l(()=>[s("普通")]),_:1}),t(o,{line:"",type:"warning"},{default:l(()=>[s("警告")]),_:1}),t(o,{line:"",type:"success"},{default:l(()=>[s("成功")]),_:1}),t(o,{line:"",type:"danger"},{default:l(()=>[s("失败")]),_:1})]),default:l(()=>[E]),_:1}),m,k,t(n,{source:""},{source:l(()=>[t(o,{background:"skyblue"},{default:l(()=>[s("天蓝色")]),_:1}),t(o,{background:"blue",color:"#fff"},{default:l(()=>[s("深蓝色")]),_:1})]),default:l(()=>[T]),_:1}),x,w,t(n,{source:""},{source:l(()=>[t(o,{type:"primary",size:"large"},{default:l(()=>[s("大标签")]),_:1}),t(o,{type:"primary",size:"middle"},{default:l(()=>[s("中等标签")]),_:1}),t(o,{type:"primary",size:"small"},{default:l(()=>[s("小标签")]),_:1}),t(o,{type:"primary",size:"mini"},{default:l(()=>[s("超小标签")]),_:1})]),default:l(()=>[S]),_:1}),I,z,t(n,{source:""},{source:l(()=>[t(o,{block:"",type:"default"},{default:l(()=>[s("默认")]),_:1}),t(o,{block:"",type:"primary"},{default:l(()=>[s("普通")]),_:1}),t(o,{block:"",type:"warning"},{default:l(()=>[s("警告")]),_:1}),t(o,{block:"",type:"success"},{default:l(()=>[s("成功")]),_:1}),t(o,{block:"",type:"danger"},{default:l(()=>[s("失败")]),_:1})]),default:l(()=>[V]),_:1}),N,P,t(n,{source:""},{source:l(()=>[t(o,{close:"",type:"default"},{default:l(()=>[s("默认")]),_:1}),t(o,{close:"",type:"primary"},{default:l(()=>[s("普通")]),_:1}),t(o,{close:"",type:"warning"},{default:l(()=>[s("警告")]),_:1}),t(o,{close:"",type:"success"},{default:l(()=>[s("成功")]),_:1}),t(o,{close:"",type:"danger"},{default:l(()=>[s("失败")]),_:1})]),default:l(()=>[$]),_:1}),B,a("a",R,[t(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",J,[t(p,{round:"",src:"https://avatars.githubusercontent.com/u/44802220?v=4"})])])}const M=F(v,[["render",O],["__scopeId","data-v-9ab28b17"]]);export{L as __pageData,M as default};