import{d as p,c as e,b as C,F as i,a as A}from"./chunks/f-icon-sun.0d664c40.js";import{j as h,k as l,r as E,o as g,c as q,a as t,u as c,d as f,e as o,_ as B}from"./app.816d99cf.js";import{F as m}from"./chunks/f-icon-face-smile.5dbcb7df.js";const I=o('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-ab9352cc>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-ab9352cc>#</a></h1><p data-v-ab9352cc>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-ab9352cc><li data-v-ab9352cc><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-ab9352cc>\u6E90\u4EE3\u7801</a></li><li data-v-ab9352cc><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-ab9352cc>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-ab9352cc>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-ab9352cc>#</a></h2><p data-v-ab9352cc>\u9700\u8981\u4F7F\u7528 <code data-v-ab9352cc>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-ab9352cc><code data-v-ab9352cc>icon-on</code> \u548C <code data-v-ab9352cc>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=o(`<details class="details custom-block" data-v-ab9352cc><summary data-v-ab9352cc>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ab9352cc><button title="Copy Code" class="copy" data-v-ab9352cc></button><span class="lang" data-v-ab9352cc>html</span><pre class="shiki" data-v-ab9352cc><code data-v-ab9352cc><span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value1</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconSun</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconMoon</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value2</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconSun</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconMoon</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>lang</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>ts</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>setup</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconSun</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconMoon</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#A6ACCD;" data-v-ab9352cc>ref</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>vue</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value1 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value2 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>false</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-ab9352cc>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-ab9352cc>#</a></h2><p data-v-ab9352cc><code data-v-ab9352cc>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=o(`<details class="details custom-block" data-v-ab9352cc><summary data-v-ab9352cc>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ab9352cc><button title="Copy Code" class="copy" data-v-ab9352cc></button><span class="lang" data-v-ab9352cc>html</span><pre class="shiki" data-v-ab9352cc><code data-v-ab9352cc><span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value5</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:size</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>50</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>  /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value6</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>size</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>30px</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconEye</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>  /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>lang</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>ts</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>setup</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconEye</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconEyeSlash</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#A6ACCD;" data-v-ab9352cc>ref</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>vue</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value3 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value4 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-ab9352cc>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-ab9352cc>#</a></h2><p data-v-ab9352cc><code data-v-ab9352cc>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=o(`<details class="details custom-block" data-v-ab9352cc><summary data-v-ab9352cc>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ab9352cc><button title="Copy Code" class="copy" data-v-ab9352cc></button><span class="lang" data-v-ab9352cc>html</span><pre class="shiki" data-v-ab9352cc><code data-v-ab9352cc><span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value5</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>type</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>default</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconEye</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>  /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value6</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>type</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>sound</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconSun</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconMoon</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>  /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>f-swap</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>v-model</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>value7</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>type</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>swap</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-on</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>    </span><span style="color:#C792EA;" data-v-ab9352cc>:icon-off</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>  /&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>template</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>lang</span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#C3E88D;" data-v-ab9352cc>ts</span><span style="color:#89DDFF;" data-v-ab9352cc>&quot;</span><span style="color:#89DDFF;" data-v-ab9352cc> </span><span style="color:#C792EA;" data-v-ab9352cc>setup</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconSun</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconMoon</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconEye</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>    </span><span style="color:#A6ACCD;" data-v-ab9352cc>FIconEyeSlash</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#A6ACCD;" data-v-ab9352cc>ref</span><span style="color:#F07178;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>vue</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value5 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value6 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#A6ACCD;" data-v-ab9352cc>  </span><span style="color:#C792EA;" data-v-ab9352cc>const</span><span style="color:#A6ACCD;" data-v-ab9352cc> value7 </span><span style="color:#89DDFF;" data-v-ab9352cc>=</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#82AAFF;" data-v-ab9352cc>ref</span><span style="color:#A6ACCD;" data-v-ab9352cc>(</span><span style="color:#FF9CAC;" data-v-ab9352cc>true</span><span style="color:#A6ACCD;" data-v-ab9352cc>)</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>&lt;/</span><span style="color:#F07178;" data-v-ab9352cc>script</span><span style="color:#89DDFF;" data-v-ab9352cc>&gt;</span></span>
<span class="line" data-v-ab9352cc></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-ab9352cc>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-ab9352cc>#</a></h2><div class="vp-table__container" data-v-ab9352cc><table data-v-ab9352cc><thead data-v-ab9352cc><tr data-v-ab9352cc><th data-v-ab9352cc>\u53C2\u6570</th><th data-v-ab9352cc>\u8BF4\u660E</th><th data-v-ab9352cc>\u7C7B\u578B</th><th data-v-ab9352cc>\u53EF\u9009\u503C</th><th data-v-ab9352cc>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-ab9352cc><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>v-model</code></td><td data-v-ab9352cc>\u7ED1\u5B9A\u503C</td><td data-v-ab9352cc>boolean</td><td data-v-ab9352cc>\u2014\u2014</td><td data-v-ab9352cc>false</td></tr><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>size</code></td><td data-v-ab9352cc>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-ab9352cc>string / number</td><td data-v-ab9352cc>\u2014\u2014</td><td data-v-ab9352cc>40</td></tr><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>type</code></td><td data-v-ab9352cc>\u52A8\u753B\u7C7B\u578B</td><td data-v-ab9352cc>string</td><td data-v-ab9352cc><code data-v-ab9352cc>sound</code> <code data-v-ab9352cc>swap</code> <code data-v-ab9352cc>default</code></td><td data-v-ab9352cc>default</td></tr><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>icon-on</code></td><td data-v-ab9352cc>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-ab9352cc>object (VNode / Component)</td><td data-v-ab9352cc>\u2014\u2014</td><td data-v-ab9352cc>null</td></tr><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>icon-off</code></td><td data-v-ab9352cc>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-ab9352cc>object (VNode / Component)</td><td data-v-ab9352cc>\u2014\u2014</td><td data-v-ab9352cc>null</td></tr><tr data-v-ab9352cc><td data-v-ab9352cc><code data-v-ab9352cc>on-change</code></td><td data-v-ab9352cc>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-ab9352cc>Function</td><td data-v-ab9352cc>\u2014\u2014</td><td data-v-ab9352cc>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-ab9352cc>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-ab9352cc>#</a></h2><p data-v-ab9352cc>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-ab9352cc><button title="Copy Code" class="copy" data-v-ab9352cc></button><span class="lang" data-v-ab9352cc>ts</span><pre class="shiki" data-v-ab9352cc><code data-v-ab9352cc><span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>import</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>type</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>{</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#A6ACCD;" data-v-ab9352cc>SwapInstance</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#A6ACCD;" data-v-ab9352cc>SwapPropsType</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#A6ACCD;" data-v-ab9352cc>SwapType</span><span style="color:#89DDFF;" data-v-ab9352cc>,</span></span>
<span class="line" data-v-ab9352cc><span style="color:#F07178;" data-v-ab9352cc>  </span><span style="color:#A6ACCD;" data-v-ab9352cc>SwapOnChangeInterface</span></span>
<span class="line" data-v-ab9352cc><span style="color:#89DDFF;" data-v-ab9352cc>}</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>from</span><span style="color:#A6ACCD;" data-v-ab9352cc> </span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span><span style="color:#C3E88D;" data-v-ab9352cc>fighting-design</span><span style="color:#89DDFF;" data-v-ab9352cc>&#39;</span></span>
<span class="line" data-v-ab9352cc></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-ab9352cc>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-ab9352cc>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667376964000}'),x={name:"components/swap.md"},U=h({...x,setup(z){const d=l(!0),v=l(!1),b=l(!0),r=l(!0),F=l(!0),D=l(!0),y=l(!0);return(M,a)=>{const n=E("f-swap"),u=E("f-avatar");return g(),q("div",null,[I,t(n,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=s=>d.value=s),"icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=s=>v.value=s),"icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=s=>b.value=s),size:50,"icon-on":c(m),"icon-off":c(C)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=s=>r.value=s),size:"30px","icon-on":c(i),"icon-off":c(A)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=s=>F.value=s),type:"default","icon-on":c(i),"icon-off":c(A)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=s=>D.value=s),type:"sound","icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=s=>y.value=s),type:"swap","icon-on":c(m),"icon-off":c(C)},null,8,["modelValue","icon-on","icon-off"]),V,f("a",S,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),f("a",k,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-ab9352cc"]]);export{O as __pageData,P as default};
