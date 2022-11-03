import{d as p,c as d,b as u,F as C,a as i}from"./chunks/f-icon-sun.9bf6657e.js";import{j as h,k as l,r as A,o as g,c as q,a as t,u as s,d as E,e as o,_ as B}from"./app.ee41b8f8.js";import{F as m}from"./chunks/f-icon-face-smile.77812caa.js";const I=o('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-783fe3b3>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-783fe3b3>#</a></h1><p data-v-783fe3b3>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-783fe3b3><li data-v-783fe3b3><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-783fe3b3>\u6E90\u4EE3\u7801</a></li><li data-v-783fe3b3><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-783fe3b3>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-783fe3b3>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-783fe3b3>#</a></h2><p data-v-783fe3b3>\u9700\u8981\u4F7F\u7528 <code data-v-783fe3b3>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-783fe3b3><code data-v-783fe3b3>icon-on</code> \u548C <code data-v-783fe3b3>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=o(`<details class="details custom-block" data-v-783fe3b3><summary data-v-783fe3b3>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-783fe3b3><button title="Copy Code" class="copy" data-v-783fe3b3></button><span class="lang" data-v-783fe3b3>html</span><pre class="shiki" data-v-783fe3b3><code data-v-783fe3b3><span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value1</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconSun</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconMoon</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value2</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconSun</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconMoon</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>lang</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>ts</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>setup</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconSun</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconMoon</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#A6ACCD;" data-v-783fe3b3>ref</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>vue</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value1 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value2 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>false</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-783fe3b3>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-783fe3b3>#</a></h2><p data-v-783fe3b3><code data-v-783fe3b3>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=o(`<details class="details custom-block" data-v-783fe3b3><summary data-v-783fe3b3>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-783fe3b3><button title="Copy Code" class="copy" data-v-783fe3b3></button><span class="lang" data-v-783fe3b3>html</span><pre class="shiki" data-v-783fe3b3><code data-v-783fe3b3><span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value5</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:size</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>50</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>  /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value6</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>size</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>30px</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconEye</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>  /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>lang</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>ts</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>setup</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconEye</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconEyeSlash</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#A6ACCD;" data-v-783fe3b3>ref</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>vue</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value3 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value4 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-783fe3b3>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-783fe3b3>#</a></h2><p data-v-783fe3b3><code data-v-783fe3b3>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=o(`<details class="details custom-block" data-v-783fe3b3><summary data-v-783fe3b3>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-783fe3b3><button title="Copy Code" class="copy" data-v-783fe3b3></button><span class="lang" data-v-783fe3b3>html</span><pre class="shiki" data-v-783fe3b3><code data-v-783fe3b3><span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value5</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>type</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>default</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconEye</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>  /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value6</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>type</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>sound</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconSun</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconMoon</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>  /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>f-swap</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>v-model</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>value7</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>type</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>swap</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-on</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>    </span><span style="color:#C792EA;" data-v-783fe3b3>:icon-off</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>  /&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>template</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>lang</span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#C3E88D;" data-v-783fe3b3>ts</span><span style="color:#89DDFF;" data-v-783fe3b3>&quot;</span><span style="color:#89DDFF;" data-v-783fe3b3> </span><span style="color:#C792EA;" data-v-783fe3b3>setup</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconSun</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconMoon</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconEye</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>    </span><span style="color:#A6ACCD;" data-v-783fe3b3>FIconEyeSlash</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#A6ACCD;" data-v-783fe3b3>ref</span><span style="color:#F07178;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>vue</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value5 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value6 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#A6ACCD;" data-v-783fe3b3>  </span><span style="color:#C792EA;" data-v-783fe3b3>const</span><span style="color:#A6ACCD;" data-v-783fe3b3> value7 </span><span style="color:#89DDFF;" data-v-783fe3b3>=</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#82AAFF;" data-v-783fe3b3>ref</span><span style="color:#A6ACCD;" data-v-783fe3b3>(</span><span style="color:#FF9CAC;" data-v-783fe3b3>true</span><span style="color:#A6ACCD;" data-v-783fe3b3>)</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>&lt;/</span><span style="color:#F07178;" data-v-783fe3b3>script</span><span style="color:#89DDFF;" data-v-783fe3b3>&gt;</span></span>
<span class="line" data-v-783fe3b3></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-783fe3b3>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-783fe3b3>#</a></h2><div class="vp-table__container" data-v-783fe3b3><table data-v-783fe3b3><thead data-v-783fe3b3><tr data-v-783fe3b3><th data-v-783fe3b3>\u53C2\u6570</th><th data-v-783fe3b3>\u8BF4\u660E</th><th data-v-783fe3b3>\u7C7B\u578B</th><th data-v-783fe3b3>\u53EF\u9009\u503C</th><th data-v-783fe3b3>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-783fe3b3><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>v-model</code></td><td data-v-783fe3b3>\u7ED1\u5B9A\u503C</td><td data-v-783fe3b3>boolean</td><td data-v-783fe3b3>\u2014\u2014</td><td data-v-783fe3b3>false</td></tr><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>size</code></td><td data-v-783fe3b3>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-783fe3b3>string / number</td><td data-v-783fe3b3>\u2014\u2014</td><td data-v-783fe3b3>40</td></tr><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>type</code></td><td data-v-783fe3b3>\u52A8\u753B\u7C7B\u578B</td><td data-v-783fe3b3>string</td><td data-v-783fe3b3><code data-v-783fe3b3>sound</code> <code data-v-783fe3b3>swap</code> <code data-v-783fe3b3>default</code></td><td data-v-783fe3b3>default</td></tr><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>icon-on</code></td><td data-v-783fe3b3>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-783fe3b3>object (VNode / Component)</td><td data-v-783fe3b3>\u2014\u2014</td><td data-v-783fe3b3>null</td></tr><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>icon-off</code></td><td data-v-783fe3b3>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-783fe3b3>object (VNode / Component)</td><td data-v-783fe3b3>\u2014\u2014</td><td data-v-783fe3b3>null</td></tr><tr data-v-783fe3b3><td data-v-783fe3b3><code data-v-783fe3b3>on-change</code></td><td data-v-783fe3b3>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-783fe3b3>Function</td><td data-v-783fe3b3>\u2014\u2014</td><td data-v-783fe3b3>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-783fe3b3>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-783fe3b3>#</a></h2><p data-v-783fe3b3>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-783fe3b3><button title="Copy Code" class="copy" data-v-783fe3b3></button><span class="lang" data-v-783fe3b3>ts</span><pre class="shiki" data-v-783fe3b3><code data-v-783fe3b3><span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>import</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>type</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>{</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#A6ACCD;" data-v-783fe3b3>SwapInstance</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#A6ACCD;" data-v-783fe3b3>SwapPropsType</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#A6ACCD;" data-v-783fe3b3>SwapType</span><span style="color:#89DDFF;" data-v-783fe3b3>,</span></span>
<span class="line" data-v-783fe3b3><span style="color:#F07178;" data-v-783fe3b3>  </span><span style="color:#A6ACCD;" data-v-783fe3b3>SwapOnChangeInterface</span></span>
<span class="line" data-v-783fe3b3><span style="color:#89DDFF;" data-v-783fe3b3>}</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>from</span><span style="color:#A6ACCD;" data-v-783fe3b3> </span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span><span style="color:#C3E88D;" data-v-783fe3b3>fighting-design</span><span style="color:#89DDFF;" data-v-783fe3b3>&#39;</span></span>
<span class="line" data-v-783fe3b3></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-783fe3b3>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-783fe3b3>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667466512000}'),x={name:"components/swap.md"},U=h({...x,setup(z){const f=l(!0),c=l(!1),v=l(!0),b=l(!0),r=l(!0),F=l(!0),D=l(!0);return(M,a)=>{const n=A("f-swap"),y=A("f-avatar");return g(),q("div",null,[I,t(n,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),"icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e),"icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=e=>v.value=e),size:50,"icon-on":s(m),"icon-off":s(u)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),size:"30px","icon-on":s(C),"icon-off":s(i)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=e=>r.value=e),type:"default","icon-on":s(C),"icon-off":s(i)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:F.value,"onUpdate:modelValue":a[5]||(a[5]=e=>F.value=e),type:"sound","icon-on":s(p),"icon-off":s(d)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e),type:"swap","icon-on":s(m),"icon-off":s(u)},null,8,["modelValue","icon-on","icon-off"]),V,E("a",S,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),E("a",k,[t(y,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-783fe3b3"]]);export{O as __pageData,P as default};