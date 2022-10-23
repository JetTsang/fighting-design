import{j as E,k as n,r as i,o as m,c as h,a as s,d as t,e as d,p as g,g as q,b as o,_ as b}from"./app.c75b8b6e.js";const v=p=>(g("data-v-ce4a5e0f"),p=p(),q(),p),_=v(()=>t("h1",{id:"swap-\u5207\u6362",tabindex:"-1"},[o("Swap \u5207\u6362 "),t("a",{class:"header-anchor",href:"#swap-\u5207\u6362","aria-hidden":"true"},"#")],-1)),V=v(()=>t("p",null,[t("code",null,"Swap"),o(" \u662F\u4E00\u4E2A\u5207\u6362\u7EC4\u4EF6")],-1)),B=v(()=>t("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[o("\u57FA\u672C\u4F7F\u7528 "),t("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1)),w=v(()=>t("p",null,[t("code",null,"Swap"),o(" \u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528 "),t("code",null,"v-model"),o(" \u7ED1\u5B9A\u4E00\u4E2A\u503C")],-1)),z=d(`<details class="details custom-block" data-v-ce4a5e0f><summary data-v-ce4a5e0f>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ce4a5e0f><button title="Copy Code" class="copy" data-v-ce4a5e0f></button><span class="lang" data-v-ce4a5e0f>html</span><pre data-v-ce4a5e0f><code data-v-ce4a5e0f><span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value1</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value2</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>lang</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>ts</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>setup</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>import</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>{</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>ref</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>}</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>from</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>vue</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value1 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value2 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>false</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5927\u5C0F" tabindex="-1" data-v-ce4a5e0f>\u4E0D\u540C\u5927\u5C0F <a class="header-anchor" href="#\u4E0D\u540C\u5927\u5C0F" aria-hidden="true" data-v-ce4a5e0f>#</a></h2><p data-v-ce4a5e0f><code data-v-ce4a5e0f>size</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u5927\u5C0F\u7684 <code data-v-ce4a5e0f>swap</code></p>`,3),k=d(`<details class="details custom-block" data-v-ce4a5e0f><summary data-v-ce4a5e0f>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ce4a5e0f><button title="Copy Code" class="copy" data-v-ce4a5e0f></button><span class="lang" data-v-ce4a5e0f>html</span><pre data-v-ce4a5e0f><code data-v-ce4a5e0f><span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value3</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>large</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value3</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value3</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>small</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>lang</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>ts</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>setup</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>import</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>{</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>ref</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>}</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>from</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>vue</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value3 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>false</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span></code></pre></div></details><h2 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1" data-v-ce4a5e0f>\u4E0D\u540C\u7C7B\u578B <a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true" data-v-ce4a5e0f>#</a></h2><p data-v-ce4a5e0f><code data-v-ce4a5e0f>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-ce4a5e0f>swap</code></p>`,3),x=d(`<details class="details custom-block" data-v-ce4a5e0f><summary data-v-ce4a5e0f>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ce4a5e0f><button title="Copy Code" class="copy" data-v-ce4a5e0f></button><span class="lang" data-v-ce4a5e0f>html</span><pre data-v-ce4a5e0f><code data-v-ce4a5e0f><span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value4</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>type</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>sound</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value5</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>type</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>theme</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value6</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>type</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>flip</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value7</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>type</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>favorites</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>lang</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>ts</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>setup</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>import</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>{</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>ref</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>}</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>from</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>vue</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value4 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value5 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value6 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value7 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span></code></pre></div></details><h2 id="\u56FE\u6807\u8F6C\u6362" tabindex="-1" data-v-ce4a5e0f>\u56FE\u6807\u8F6C\u6362 <a class="header-anchor" href="#\u56FE\u6807\u8F6C\u6362" aria-hidden="true" data-v-ce4a5e0f>#</a></h2><p data-v-ce4a5e0f><code data-v-ce4a5e0f>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-ce4a5e0f>swap</code></p>`,3),S=d(`<details class="details custom-block" data-v-ce4a5e0f><summary data-v-ce4a5e0f>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ce4a5e0f><button title="Copy Code" class="copy" data-v-ce4a5e0f></button><span class="lang" data-v-ce4a5e0f>html</span><pre data-v-ce4a5e0f><code data-v-ce4a5e0f><span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>f-swap</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>v-model</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>value9</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>size</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>middle</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>type</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>rotate</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> /&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>template</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>lang</span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>ts</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&quot;</span><span style="color:#89DDFF;" data-v-ce4a5e0f> </span><span style="color:#C792EA;" data-v-ce4a5e0f>setup</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#89DDFF;" data-v-ce4a5e0f>import</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>{</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>ref</span><span style="color:#F07178;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>}</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>from</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>vue</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#A6ACCD;" data-v-ce4a5e0f>  </span><span style="color:#C792EA;" data-v-ce4a5e0f>const</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> value9 </span><span style="color:#89DDFF;" data-v-ce4a5e0f>=</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#82AAFF;" data-v-ce4a5e0f>ref</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>(</span><span style="color:#FF9CAC;" data-v-ce4a5e0f>true</span><span style="color:#A6ACCD;" data-v-ce4a5e0f>)</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>&lt;/</span><span style="color:#F07178;" data-v-ce4a5e0f>script</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&gt;</span></span>
<span class="line" data-v-ce4a5e0f></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-ce4a5e0f>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-ce4a5e0f>#</a></h2><table data-v-ce4a5e0f><thead data-v-ce4a5e0f><tr data-v-ce4a5e0f><th data-v-ce4a5e0f>\u53C2\u6570</th><th data-v-ce4a5e0f>\u8BF4\u660E</th><th data-v-ce4a5e0f>\u7C7B\u578B</th><th data-v-ce4a5e0f>\u53EF\u9009\u503C</th><th data-v-ce4a5e0f>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-ce4a5e0f><tr data-v-ce4a5e0f><td data-v-ce4a5e0f><code data-v-ce4a5e0f>v-model</code></td><td data-v-ce4a5e0f>\u7ED1\u5B9A\u503C</td><td data-v-ce4a5e0f>string</td><td data-v-ce4a5e0f>\u2014\u2014</td><td data-v-ce4a5e0f>false</td></tr><tr data-v-ce4a5e0f><td data-v-ce4a5e0f><code data-v-ce4a5e0f>size</code></td><td data-v-ce4a5e0f>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-ce4a5e0f>string</td><td data-v-ce4a5e0f><code data-v-ce4a5e0f>large</code> <code data-v-ce4a5e0f>middle</code> <code data-v-ce4a5e0f>small</code></td><td data-v-ce4a5e0f>middle</td></tr><tr data-v-ce4a5e0f><td data-v-ce4a5e0f><code data-v-ce4a5e0f>type</code></td><td data-v-ce4a5e0f>\u7C7B\u578B</td><td data-v-ce4a5e0f>string</td><td data-v-ce4a5e0f><code data-v-ce4a5e0f>sound</code> <code data-v-ce4a5e0f>theme</code> <code data-v-ce4a5e0f>rotate</code> <code data-v-ce4a5e0f>flip</code> <code data-v-ce4a5e0f>favorites</code></td><td data-v-ce4a5e0f>sound</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-ce4a5e0f>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-ce4a5e0f>#</a></h2><p data-v-ce4a5e0f>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-ce4a5e0f><button title="Copy Code" class="copy" data-v-ce4a5e0f></button><span class="lang" data-v-ce4a5e0f>ts</span><pre data-v-ce4a5e0f><code data-v-ce4a5e0f><span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>import</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>type</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>{</span><span style="color:#F07178;" data-v-ce4a5e0f> </span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#F07178;" data-v-ce4a5e0f>  </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>SwapPropsType</span><span style="color:#89DDFF;" data-v-ce4a5e0f>,</span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#F07178;" data-v-ce4a5e0f>  </span><span style="color:#A6ACCD;" data-v-ce4a5e0f>SwapInstance</span><span style="color:#89DDFF;" data-v-ce4a5e0f>,</span><span style="color:#F07178;" data-v-ce4a5e0f> </span></span>
<span class="line" data-v-ce4a5e0f><span style="color:#89DDFF;" data-v-ce4a5e0f>}</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>from</span><span style="color:#A6ACCD;" data-v-ce4a5e0f> </span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span><span style="color:#C3E88D;" data-v-ce4a5e0f>fighting-design</span><span style="color:#89DDFF;" data-v-ce4a5e0f>&#39;</span></span>
<span class="line" data-v-ce4a5e0f></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-ce4a5e0f>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-ce4a5e0f>#</a></h2>`,7),U={href:"https://github.com/Tyh2001",target:"_blank"},I={href:"https://github.com/ChetSerenade",target:"_blank"},J=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5927\u5C0F","slug":"\u4E0D\u540C\u5927\u5C0F","link":"#\u4E0D\u540C\u5927\u5C0F","children":[]},{"level":2,"title":"\u4E0D\u540C\u7C7B\u578B","slug":"\u4E0D\u540C\u7C7B\u578B","link":"#\u4E0D\u540C\u7C7B\u578B","children":[]},{"level":2,"title":"\u56FE\u6807\u8F6C\u6362","slug":"\u56FE\u6807\u8F6C\u6362","link":"#\u56FE\u6807\u8F6C\u6362","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1666494412000}'),N={name:"components/swap.md"},T=E({...N,setup(p){const f=n(!0),r=n(!1),c=n(!1),F=n(!0),D=n(!0),u=n(!0),y=n(!0);n(!0);const C=n(!0);return(P,a)=>{const l=i("f-swap"),A=i("f-avatar");return m(),h("div",null,[_,V,B,w,s(l,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e)},null,8,["modelValue"]),s(l,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e)},null,8,["modelValue"]),z,s(l,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),size:"large"},null,8,["modelValue"]),s(l,{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=e=>c.value=e),size:"middle"},null,8,["modelValue"]),s(l,{modelValue:c.value,"onUpdate:modelValue":a[4]||(a[4]=e=>c.value=e),size:"small"},null,8,["modelValue"]),k,s(l,{modelValue:F.value,"onUpdate:modelValue":a[5]||(a[5]=e=>F.value=e),size:"middle",type:"sound"},null,8,["modelValue"]),s(l,{modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e),size:"middle",type:"theme"},null,8,["modelValue"]),s(l,{modelValue:u.value,"onUpdate:modelValue":a[7]||(a[7]=e=>u.value=e),size:"middle",type:"flip"},null,8,["modelValue"]),s(l,{modelValue:y.value,"onUpdate:modelValue":a[8]||(a[8]=e=>y.value=e),size:"middle",type:"favorites"},null,8,["modelValue"]),x,s(l,{modelValue:C.value,"onUpdate:modelValue":a[9]||(a[9]=e=>C.value=e),size:"middle",type:"rotate"},null,8,["modelValue"]),S,t("a",U,[s(A,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),t("a",I,[s(A,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const O=b(T,[["__scopeId","data-v-ce4a5e0f"]]);export{J as __pageData,O as default};
