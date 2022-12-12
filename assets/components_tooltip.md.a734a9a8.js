import{_ as F,r as d,o as y,c as i,a,w as o,d as t,b as s,e as r,p as f,f as v}from"./app.704dd628.js";const R=JSON.parse('{"title":"Tooltip 消息提示","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"不同状态","slug":"不同状态","link":"#不同状态","children":[]},{"level":2,"title":"没有箭头","slug":"没有箭头","link":"#没有箭头","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/tooltip.md","lastUpdated":1670838911000}'),C={name:"components/tooltip.md"},c=n=>(f("data-v-517fd94c"),n=n(),v(),n),h=r('<h1 id="tooltip-消息提示" tabindex="-1" data-v-517fd94c>Tooltip 消息提示 <a class="header-anchor" href="#tooltip-消息提示" aria-hidden="true" data-v-517fd94c>#</a></h1><p data-v-517fd94c>藏入你的提示内容</p><ul data-v-517fd94c><li data-v-517fd94c><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tooltip" target="_blank" rel="noreferrer" data-v-517fd94c>源代码</a></li><li data-v-517fd94c><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tooltip.md" target="_blank" rel="noreferrer" data-v-517fd94c>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-517fd94c>基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true" data-v-517fd94c>#</a></h2><p data-v-517fd94c><code data-v-517fd94c>content</code> 设置弹出的信息内容，<code data-v-517fd94c>position</code> 可以配置不同的弹出方向</p>',5),_={class:"tooltip-box"},A=c(()=>t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"上边的提示信息"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"primary"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"信息"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"下边的提示信息"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"bottom"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"success"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"信息"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"左边的提示信息"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"left"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"danger"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"信息"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"右边的提示信息"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"right"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"warning"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"信息"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"})])])],-1)),u=c(()=>t("h2",{id:"不同状态",tabindex:"-1"},[s("不同状态 "),t("a",{class:"header-anchor",href:"#不同状态","aria-hidden":"true"},"#")],-1)),g=c(()=>t("p",null,[t("code",null,"state"),s(" 属性可以配置不同的展示状态")],-1)),E={class:"tooltip-box"},b=c(()=>t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"Hover 展示"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"state"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"hover"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"primary"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"Hover 展示"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"Active 展示"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"state"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"active"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"success"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"Active 展示"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"Always 展示"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"state"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"always"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"warning"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"Always 展示"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"})])])],-1)),m=c(()=>t("h2",{id:"没有箭头",tabindex:"-1"},[s("没有箭头 "),t("a",{class:"header-anchor",href:"#没有箭头","aria-hidden":"true"},"#")],-1)),T=c(()=>t("p",null,[t("code",null,"no-arrow"),s(" 可以禁止显示箭头")],-1)),k={class:"tooltip-box"},w=c(()=>t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"Hover 展示"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"primary"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"有箭头的"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"no-arrow"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"Hover 展示"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"position"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"top"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"type"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"success"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"没有箭头"),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tag"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-tooltip"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"})])])],-1)),x=r(`<h2 id="attributes" tabindex="-1" data-v-517fd94c>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-517fd94c>#</a></h2><div class="vp-table__container" data-v-517fd94c><table data-v-517fd94c><thead data-v-517fd94c><tr data-v-517fd94c><th data-v-517fd94c>参数</th><th data-v-517fd94c>说明</th><th data-v-517fd94c>类型</th><th data-v-517fd94c>可选值</th><th data-v-517fd94c>默认值</th></tr></thead><tbody data-v-517fd94c><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>content</code></td><td data-v-517fd94c>提示内容</td><td data-v-517fd94c>string / umber</td><td data-v-517fd94c>——</td><td data-v-517fd94c>——</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>position</code></td><td data-v-517fd94c>弹出方向</td><td data-v-517fd94c>string</td><td data-v-517fd94c><code data-v-517fd94c>top</code> <code data-v-517fd94c>bottom</code> <code data-v-517fd94c>right</code> <code data-v-517fd94c>left</code></td><td data-v-517fd94c>bottom</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>disabled</code></td><td data-v-517fd94c>是否禁用</td><td data-v-517fd94c>boolean</td><td data-v-517fd94c>——</td><td data-v-517fd94c>false</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>state</code></td><td data-v-517fd94c>展示状态</td><td data-v-517fd94c>string</td><td data-v-517fd94c><code data-v-517fd94c>hover</code> <code data-v-517fd94c>active</code> <code data-v-517fd94c>always</code></td><td data-v-517fd94c>hover</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>no-arrow</code></td><td data-v-517fd94c>是否显示箭头</td><td data-v-517fd94c>boolean</td><td data-v-517fd94c>——</td><td data-v-517fd94c>false</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>bold</code></td><td data-v-517fd94c>是否加粗文字</td><td data-v-517fd94c>boolean</td><td data-v-517fd94c>——</td><td data-v-517fd94c>false</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>bright</code></td><td data-v-517fd94c>是否使用浅色主题</td><td data-v-517fd94c>boolean</td><td data-v-517fd94c>——</td><td data-v-517fd94c>false</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>background</code></td><td data-v-517fd94c>自定义背景色</td><td data-v-517fd94c>string</td><td data-v-517fd94c>——</td><td data-v-517fd94c>——</td></tr><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>font-color</code></td><td data-v-517fd94c>自定义文字颜色</td><td data-v-517fd94c>string</td><td data-v-517fd94c>——</td><td data-v-517fd94c>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-517fd94c>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-517fd94c>#</a></h2><div class="vp-table__container" data-v-517fd94c><table data-v-517fd94c><thead data-v-517fd94c><tr data-v-517fd94c><th data-v-517fd94c>名称</th><th data-v-517fd94c>说明</th></tr></thead><tbody data-v-517fd94c><tr data-v-517fd94c><td data-v-517fd94c><code data-v-517fd94c>default</code></td><td data-v-517fd94c>默认插槽</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-517fd94c>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-517fd94c>#</a></h2><p data-v-517fd94c>组件导出以下类型定义：</p><div class="language-ts" data-v-517fd94c><button title="Copy Code" class="copy" data-v-517fd94c></button><span class="lang" data-v-517fd94c>ts</span><pre class="shiki" data-v-517fd94c><code data-v-517fd94c><span class="line" data-v-517fd94c><span style="color:#89DDFF;" data-v-517fd94c>import</span><span style="color:#A6ACCD;" data-v-517fd94c> </span><span style="color:#89DDFF;" data-v-517fd94c>type</span><span style="color:#A6ACCD;" data-v-517fd94c> </span><span style="color:#89DDFF;" data-v-517fd94c>{</span><span style="color:#F07178;" data-v-517fd94c> </span><span style="color:#A6ACCD;" data-v-517fd94c>TooltipInstance</span><span style="color:#89DDFF;" data-v-517fd94c>,</span><span style="color:#F07178;" data-v-517fd94c> </span><span style="color:#A6ACCD;" data-v-517fd94c>TooltipPropsType</span><span style="color:#89DDFF;" data-v-517fd94c>,</span><span style="color:#F07178;" data-v-517fd94c> </span><span style="color:#A6ACCD;" data-v-517fd94c>TooltipPositionType</span><span style="color:#89DDFF;" data-v-517fd94c>,</span><span style="color:#F07178;" data-v-517fd94c> </span><span style="color:#A6ACCD;" data-v-517fd94c>TooltipStateType</span><span style="color:#F07178;" data-v-517fd94c> </span><span style="color:#89DDFF;" data-v-517fd94c>}</span><span style="color:#A6ACCD;" data-v-517fd94c> </span><span style="color:#89DDFF;" data-v-517fd94c>from</span><span style="color:#A6ACCD;" data-v-517fd94c> </span><span style="color:#89DDFF;" data-v-517fd94c>&#39;</span><span style="color:#C3E88D;" data-v-517fd94c>fighting-design</span><span style="color:#89DDFF;" data-v-517fd94c>&#39;</span></span>
<span class="line" data-v-517fd94c></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-517fd94c>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-517fd94c>#</a></h2>`,8),S={href:"https://github.com/Tyh2001",target:"_blank"};function I(n,V,N,P,H,$){const l=d("f-tag"),e=d("f-tooltip"),p=d("vp-demo"),D=d("f-avatar");return y(),i("div",null,[h,a(p,{source:""},{source:o(()=>[t("div",_,[a(e,{content:"上边的提示信息",position:"top"},{default:o(()=>[a(l,{type:"primary"},{default:o(()=>[s("上边的")]),_:1})]),_:1}),a(e,{content:"下边的提示信息",position:"bottom"},{default:o(()=>[a(l,{type:"success"},{default:o(()=>[s("下边的")]),_:1})]),_:1}),a(e,{content:"左边的提示信息",position:"left"},{default:o(()=>[a(l,{type:"danger"},{default:o(()=>[s("左边的")]),_:1})]),_:1}),a(e,{content:"右边的提示信息",position:"right"},{default:o(()=>[a(l,{type:"warning"},{default:o(()=>[s("右边的")]),_:1})]),_:1})])]),default:o(()=>[A]),_:1}),u,g,a(p,{source:""},{source:o(()=>[t("div",E,[a(e,{content:"Hover 展示",position:"top",state:"hover"},{default:o(()=>[a(l,{type:"primary"},{default:o(()=>[s("Hover 展示")]),_:1})]),_:1}),a(e,{content:"Active 展示",position:"top",state:"active"},{default:o(()=>[a(l,{type:"success"},{default:o(()=>[s("Active 展示")]),_:1})]),_:1}),a(e,{content:"Always 展示",position:"top",state:"always"},{default:o(()=>[a(l,{type:"warning"},{default:o(()=>[s("Always 展示")]),_:1})]),_:1})])]),default:o(()=>[b]),_:1}),m,T,a(p,{source:""},{source:o(()=>[t("div",k,[a(e,{content:"有箭头的",position:"top"},{default:o(()=>[a(l,{type:"primary"},{default:o(()=>[s("有箭头的")]),_:1})]),_:1}),a(e,{content:"没有箭头",position:"top","no-arrow":""},{default:o(()=>[a(l,{type:"success"},{default:o(()=>[s("没有箭头")]),_:1})]),_:1})])]),default:o(()=>[w]),_:1}),x,t("a",S,[a(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const J=F(C,[["render",I],["__scopeId","data-v-517fd94c"]]);export{R as __pageData,J as default};
