import{g as F,j as u,r as a,o as y,c as h,a as s,w as c,d as t,e as p,b as e}from"./app.ead8128f.js";const m=p('<h1 id="input-number-数字输入框" tabindex="-1">Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-hidden="true">#</a></h1><p>这个文本框只能输入数字哦</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input-number" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input-number.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h2><p>使用 <code>v-model</code> 绑定一个值，<code>model</code> 可配置不同的模式</p>',6),C=t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-space"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"vertical"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-input-number"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"value1"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-input-number"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"value1"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"model"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"switch"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-input-number"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"value1"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"model"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"button"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"f-space"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"lang"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ts"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"setup"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"ref"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"from"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"vue"),t("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," value1 "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#A6ACCD"}},"("),t("span",{style:{color:"#F78C6C"}},"3"),t("span",{style:{color:"#A6ACCD"}},")")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}},">")]),e(`
`),t("span",{class:"line"})])])],-1),b=p(`<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定值</td><td>number</td><td>——</td><td>1</td></tr><tr><td><code>model</code></td><td>不同模式</td><td>string</td><td><code>default</code> <code>button</code> <code>switch</code></td><td>default</td></tr><tr><td><code>precision</code></td><td>数值精度</td><td>number</td><td>——</td><td>0</td></tr><tr><td><code>step</code></td><td>步长</td><td>number</td><td>——</td><td>1</td></tr><tr><td><code>size</code></td><td>尺寸</td><td><a href="/components/interface.html#fightingsize">FightingSize</a></td><td><code>large</code> <code>middle</code> <code>small</code> <code>mini</code></td><td>middle</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>max</code></td><td>最大值</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>min</code></td><td>最小值</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>max-length</code></td><td>最大输入长度</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>autofocus</code></td><td>是否自动聚焦</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>name</code></td><td>原生 name 属性</td><td>string</td><td>——</td><td>f-input-number</td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>clear</code></td><td>是否可清空</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>on-blur</code></td><td>失去焦点触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr><tr><td><code>on-focus</code></td><td>获取焦点触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr><tr><td><code>on-input</code></td><td>原生 input 事件回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr><tr><td><code>on-change</code></td><td>绑定值发生变化时触发的回调</td><td><a href="/components/interface.html#inputchange">InputChange</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">InputNumberInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">InputNumberProps</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">InputNumberModel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="inputnumbermodel" tabindex="-1">InputNumberModel <a class="header-anchor" href="#inputnumbermodel" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InputNumberModel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">switch</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,8),A={href:"https://github.com/Tyh2001",target:"_blank"},f={href:"https://github.com/unnm",target:"_blank"},g={href:"https://github.com/xluoyu",target:"_blank"},N=JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"InputNumberModel","slug":"inputnumbermodel","link":"#inputnumbermodel","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/input-number.md","lastUpdated":1670925826000}'),v={name:"components/input-number.md"},x=F({...v,setup(_){const o=u(3);return(E,l)=>{const d=a("f-input-number"),i=a("f-space"),D=a("vp-demo"),r=a("f-avatar");return y(),h("div",null,[m,s(D,{source:""},{source:c(()=>[s(i,{vertical:""},{default:c(()=>[s(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n)},null,8,["modelValue"]),s(d,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n),model:"switch"},null,8,["modelValue"]),s(d,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=n=>o.value=n),model:"button"},null,8,["modelValue"])]),_:1})]),default:c(()=>[C]),_:1}),b,t("a",A,[s(r,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),t("a",f,[s(r,{round:"",src:"https://avatars.githubusercontent.com/u/49176117?v=4"})]),t("a",g,[s(r,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});export{N as __pageData,x as default};