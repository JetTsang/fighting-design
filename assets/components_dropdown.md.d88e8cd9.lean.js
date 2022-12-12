import{_ as D,r as n,o as c,g as y,w as s,a as l,b as t,c as F,F as h,h as u,d as o,e as i}from"./app.e93cce2a.js";const f={};function C(d,p){const r=n("f-button"),e=n("f-dropdown-item"),a=n("f-dropdown");return c(),y(a,null,{content:s(()=>[l(e,null,{default:s(()=>[t("猕猴桃")]),_:1}),l(e,null,{default:s(()=>[t("哈密瓜")]),_:1}),l(e,null,{default:s(()=>[t("火龙果")]),_:1}),l(e,null,{default:s(()=>[t("柠檬")]),_:1})]),default:s(()=>[l(r,{type:"primary"},{default:s(()=>[t("下拉菜单")]),_:1})]),_:1})}const A=D(f,[["render",C]]),_={};function m(d,p){const r=n("f-button"),e=n("f-dropdown-item"),a=n("f-dropdown");return c(),F(h,null,[l(a,{disabled:""},{content:s(()=>[l(e,null,{default:s(()=>[t("猕猴桃")]),_:1}),l(e,null,{default:s(()=>[t("哈密瓜")]),_:1}),l(e,null,{default:s(()=>[t("火龙果")]),_:1}),l(e,null,{default:s(()=>[t("柠檬")]),_:1})]),default:s(()=>[l(r,null,{default:s(()=>[t("全部禁用")]),_:1})]),_:1}),l(a,{style:{"margin-left":"20px"}},{content:s(()=>[l(e,null,{default:s(()=>[t("猕猴桃")]),_:1}),l(e,{disabled:""},{default:s(()=>[t("哈密瓜")]),_:1}),l(e,null,{default:s(()=>[t("火龙果")]),_:1}),l(e,null,{default:s(()=>[t("柠檬")]),_:1})]),default:s(()=>[l(r,null,{default:s(()=>[t("禁用指定的")]),_:1})]),_:1})],64)}const b=D(_,[["render",m]]),w=i('<h1 id="dropdown-下拉菜单" tabindex="-1">Dropdown 下拉菜单 <a class="header-anchor" href="#dropdown-下拉菜单" aria-hidden="true">#</a></h1><p>你永远不知道下拉菜单里有什么</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/dropdown" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/dropdown.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h2><p>默认插槽可插入触发器，<code>content</code> 插槽插入展示的内容</p>',5),g=o("div",{class:"language-html"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"html"),o("pre",{class:"shiki"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"下拉菜单"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"}),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"#content"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"猕猴桃"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"哈密瓜"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"火龙果"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"柠檬"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"})])])],-1),v=o("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-hidden":"true"},"#")],-1),k=o("div",{class:"language-html"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"html"),o("pre",{class:"shiki"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"全部禁用"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"}),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"#content"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"猕猴桃"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"哈密瓜"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"火龙果"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"柠檬"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"}),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin-left: 20px"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"禁用指定的"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-button"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"}),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"#content"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"猕猴桃"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"哈密瓜"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"火龙果"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"柠檬"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"f-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),t(`
`),o("span",{class:"line"})])])],-1),x=i(`<h2 id="dropdown-attributes" tabindex="-1">Dropdown Attributes <a class="header-anchor" href="#dropdown-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>spacing</code></td><td>触发器和内容直接的间距</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>trigger</code></td><td>触发方式</td><td>string</td><td><code>click</code> <code>hover</code></td><td>hover</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>arrow</code></td><td>是否带有箭头</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>enter-duration</code></td><td>弹出动画持续时间</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>leave-duration</code></td><td>关闭动画持续时间</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>on-change</code></td><td>弹窗状态改变时触发的回调</td><td>Function</td><td>——</td><td>——</td></tr><tr><td><code>on-open</code></td><td>弹窗状态打开时触发的回调</td><td>Function</td><td>——</td><td>——</td></tr><tr><td><code>on-close</code></td><td>弹窗状态关闭时触发的回调</td><td>Function</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="dropdownitem-attributes" tabindex="-1">DropdownItem Attributes <a class="header-anchor" href="#dropdownitem-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>是否禁用</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>on-click</code></td><td>点击之后的回调函数</td><td>Function</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>触发器内容</td></tr><tr><td><code>content</code></td><td>下拉菜单内容</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DropdownInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DropdownPropsType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DropdownItemInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DropdownItemPropsType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,10),E={href:"https://github.com/Tyh2001",target:"_blank"},N=JSON.parse('{"title":"Dropdown 下拉菜单","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"Dropdown Attributes","slug":"dropdown-attributes","link":"#dropdown-attributes","children":[]},{"level":2,"title":"DropdownItem Attributes","slug":"dropdownitem-attributes","link":"#dropdownitem-attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/dropdown.md","lastUpdated":1670814958000}'),I={name:"components/dropdown.md"},B=u({...I,setup(d){return(p,r)=>{const e=n("vp-demo"),a=n("f-avatar");return c(),F("div",null,[w,l(e,{source:""},{source:s(()=>[l(A)]),default:s(()=>[g]),_:1}),v,l(e,{source:""},{source:s(()=>[l(b)]),default:s(()=>[k]),_:1}),x,o("a",E,[l(a,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{N as __pageData,B as default};