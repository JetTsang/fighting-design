import{j as p,r as n,o as r,c,a,d as i,e}from"./app.93705338.js";const D=e('<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6846</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/input" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/input.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u9700\u8981\u4F7F\u7528 <code>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p>',5),F=e(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF7\u8F93\u5165....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model / model-value</code></td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>type</code></td><td>\u7C7B\u578B</td><td>string</td><td><code>text</code> <code>password</code></td><td>text</td></tr><tr><td><code>size</code></td><td>\u5C3A\u5BF8</td><td>string</td><td><code>large</code> <code>middle</code> <code>small</code> <code>mini</code></td><td>middle</td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>id</code></td><td>\u539F\u751F id \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>max</code></td><td>\u6700\u5927\u503C</td><td>number</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>min</code></td><td>\u6700\u5C0F\u503C</td><td>number</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>max-length</code></td><td>\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E0A\u9650</td><td>number</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>autofocus</code></td><td>\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>name</code></td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>f-input</td></tr><tr><td><code>placeholder</code></td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>clear</code></td><td>\u662F\u5426\u53EF\u6E05\u7A7A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>search</code></td><td>\u662F\u5426\u4E3A\u641C\u7D22\u6846</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>enter-search</code></td><td>\u662F\u5426\u6309\u4E0B\u56DE\u8F66\u89E6\u53D1\u641C\u7D22</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49\u524D\u7F00 icon</td><td>object (VNode / Component)</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>on-search</code></td><td>\u70B9\u51FB\u641C\u7D22\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>on-change</code></td><td>\u7ED1\u5B9A\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>on-blur</code></td><td>\u5931\u53BB\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>on-focus</code></td><td>\u83B7\u53D6\u7126\u70B9\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr><tr><td><code>on-enter</code></td><td>\u6309\u4E0B\u56DE\u8F66\u89E6\u53D1\u7684\u56DE\u8C03</td><td>Function</td><td>\u2014\u2014</td><td>null</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>searchBtn</code></td><td>\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE</td></tr></tbody></table><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputSizeType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputFocusInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputChangeInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputSearchInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">InputEnterInterface</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,9),y={href:"https://github.com/Tyh2001",target:"_blank"},g=JSON.parse('{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/input.md","lastUpdated":1666422932000}'),u={name:"components/input.md"},m=Object.assign(u,{setup(h){const t=p("");return(C,s)=>{const o=n("f-input"),l=n("f-avatar");return r(),c("div",null,[D,a(o,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=d=>t.value=d),type:"text",placeholder:"\u8BF7\u8F93\u5165...."},null,8,["modelValue"]),F,i("a",y,[a(l,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{g as __pageData,m as default};
