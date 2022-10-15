import{j as o,r as d,o as y,c as i,a as n,d as F,e as l}from"./app.c03d3b73.js";const C=l('<h1 id="rate-\u8BC4\u5206" tabindex="-1">Rate \u8BC4\u5206 <a class="header-anchor" href="#rate-\u8BC4\u5206" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u8BC4\u5206\u6216\u6253\u661F</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/rate" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/rate.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p>',5),u=l(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u989C\u8272" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u989C\u8272" aria-hidden="true">#</a></h2><p><code>effect-color</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u661F\u661F\u9009\u4E2D\u65F6\u7684\u989C\u8272\uFF0C<code>invalid-color</code>\u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u661F\u661F\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272</p>`,3),A=l(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">effect-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">invalid-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#eee</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u8F85\u52A9\u6587\u5B57" tabindex="-1">\u8F85\u52A9\u6587\u5B57 <a class="header-anchor" href="#\u8F85\u52A9\u6587\u5B57" aria-hidden="true">#</a></h2><p><code>text-show</code> \u548C <code>text-arr</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u661F\u661F\u9009\u4E2D\u65F6\u63D0\u793A\u7684\u6587\u5B57</p>`,3),h=l(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-rate</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">text-show</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:text-arr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;1\u661F&#39;, &#39;2\u661F&#39;, &#39;3\u661F&#39;, &#39;4\u661F&#39;, &#39;5\u661F&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49-icon" tabindex="-1">\u81EA\u5B9A\u4E49 icon <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-icon" aria-hidden="true">#</a></h2><p><code>icon</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>icon</code></p>`,3),m=l(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f-icon-Daytimemode-fill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>max</code></td><td>\u6700\u5927\u5206\u503C\uFF0C\u5C55\u793A\u7684\u661F\u661F\u6570\u91CF</td><td>number</td><td>\u2014\u2014</td><td>5</td></tr><tr><td><code>effect-color</code></td><td>\u9009\u4E2D\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#fcc202</td></tr><tr><td><code>invalid-color </code></td><td>\u672A\u9009\u4E2D\u7684\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>#eef</td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49 icon</td><td>string</td><td>\u2014\u2014</td><td>f-icon-collection-fill</td></tr><tr><td><code>size</code></td><td>\u661F\u661F\u5C3A\u5BF8</td><td>string / number</td><td></td><td>25px</td></tr><tr><td><code>text-show</code></td><td>\u662F\u5426\u5C55\u793A\u8F85\u52A9\u6587\u5B57</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>text-color</code></td><td>\u8F85\u52A9\u6587\u5B57\u989C\u8272</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>text-arr</code></td><td>\u8F85\u52A9\u6587\u5B57\u6570\u7EC4</td><td>[]</td><td>\u2014\u2014</td><td>[&#39;\u6781\u5DEE&#39;, &#39;\u5931\u671B&#39;, &#39;\u4E00\u822C&#39;, &#39;\u4E0D\u9519&#39;, &#39;\u5F88\u68D2&#39;]</td></tr><tr><td><code>text-size</code></td><td>\u8F85\u52A9\u6587\u5B57\u5C3A\u5BF8</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5F53\u5206\u6570\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td></tr></tbody></table><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RatePropsType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RateInstance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,9),_={href:"https://github.com/Tyh2001",target:"_blank"},g={href:"https://github.com/caicailv",target:"_blank"},T=JSON.parse('{"title":"Rate \u8BC4\u5206","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u989C\u8272","slug":"\u81EA\u5B9A\u4E49\u989C\u8272","link":"#\u81EA\u5B9A\u4E49\u989C\u8272","children":[]},{"level":2,"title":"\u8F85\u52A9\u6587\u5B57","slug":"\u8F85\u52A9\u6587\u5B57","link":"#\u8F85\u52A9\u6587\u5B57","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49 icon","slug":"\u81EA\u5B9A\u4E49-icon","link":"#\u81EA\u5B9A\u4E49-icon","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/rate.md","lastUpdated":1665800609000}'),f={name:"components/rate.md"},V=Object.assign(f,{setup(v){const e=o(2),p=o(3),r=o(4),c=o(4);return(b,s)=>{const t=d("f-rate"),D=d("f-avatar");return y(),i("div",null,[C,n(t,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=a=>e.value=a)},null,8,["modelValue"]),u,n(t,{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=a=>p.value=a),"effect-color":"red","invalid-color":"#eee"},null,8,["modelValue"]),A,n(t,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=a=>r.value=a),"text-show":"","text-arr":["1\u661F","2\u661F","3\u661F","4\u661F","5\u661F"]},null,8,["modelValue"]),h,n(t,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=a=>c.value=a),icon:"f-icon-Daytimemode-fill"},null,8,["modelValue"]),m,F("a",_,[n(D,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),F("a",g,[n(D,{round:"",src:"https://avatars.githubusercontent.com/u/46363316?v=4"})])])}}});export{T as __pageData,V as default};