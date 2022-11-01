import{_ as e,r as d,o as f,c as r,a,w as s,b as p,d as v,e as n}from"./app.cdc9b93b.js";const x=JSON.parse('{"title":"Watermark \u6C34\u5370","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F","link":"#\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u80CC\u666F","slug":"\u81EA\u5B9A\u4E49\u80CC\u666F","link":"#\u81EA\u5B9A\u4E49\u80CC\u666F","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/watermark.md","lastUpdated":1667266352000}'),D={name:"components/watermark.md"},F=n('<h1 id="watermark-\u6C34\u5370" tabindex="-1" data-v-1047fd5c>Watermark \u6C34\u5370 <a class="header-anchor" href="#watermark-\u6C34\u5370" aria-hidden="true" data-v-1047fd5c>#</a></h1><p data-v-1047fd5c>\u636E\u8BF4\u6C34\u5370\u5BB9\u6613\u8BA9\u4EBA\u8BA8\u538C\uFF1F</p><ul data-v-1047fd5c><li data-v-1047fd5c><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/watermark" target="_blank" rel="noreferrer" data-v-1047fd5c>\u6E90\u4EE3\u7801</a></li><li data-v-1047fd5c><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/watermark.md" target="_blank" rel="noreferrer" data-v-1047fd5c>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-1047fd5c>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-1047fd5c>#</a></h2><p data-v-1047fd5c><code data-v-1047fd5c>content</code> \u53EF\u4EE5\u914D\u7F6E\u60F3\u8981\u663E\u793A\u7684\u6587\u5B57\u5185\u5BB9\uFF0C<code data-v-1047fd5c>height</code> \u548C <code data-v-1047fd5c>width</code> \u53EF\u4EE5\u914D\u7F6E\u80CC\u666F\u56FE\u7247\u7684\u5C3A\u5BF8</p>',5),y=n(`<details class="details custom-block" data-v-1047fd5c><summary data-v-1047fd5c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-1047fd5c><button title="Copy Code" class="copy" data-v-1047fd5c></button><span class="lang" data-v-1047fd5c>html</span><pre class="shiki" data-v-1047fd5c><code data-v-1047fd5c><span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>content</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>\u673A\u5BC6\u6587\u4EF6</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>:height</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>100</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>:width</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>130</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>title</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>\u7EDD\u5BF9\u673A\u5BC6</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-avatar</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>round</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>src</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>https://tianyuhao.cn/images/auto/my.jpg</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c> /&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>block</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span><span style="color:#A6ACCD;" data-v-1047fd5c>\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6</span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>scoped</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-watermark</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>display</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> flex</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>justify-content</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>align-items</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>height</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>500px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-card</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>width</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>240px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F" tabindex="-1" data-v-1047fd5c>\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6587\u5B57\u6837\u5F0F" aria-hidden="true" data-v-1047fd5c>#</a></h2><p data-v-1047fd5c><code data-v-1047fd5c>font-color</code> \u548C <code data-v-1047fd5c>font-size</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u4F60\u9700\u8981\u7684\u6587\u5B57\u5927\u5C0F\u548C\u989C\u8272</p>`,3),i=n(`<details class="details custom-block" data-v-1047fd5c><summary data-v-1047fd5c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-1047fd5c><button title="Copy Code" class="copy" data-v-1047fd5c></button><span class="lang" data-v-1047fd5c>html</span><pre class="shiki" data-v-1047fd5c><code data-v-1047fd5c><span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>content</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>\u673A\u5BC6\u6587\u4EF6</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>:height</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>100</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>:width</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>130</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>font-color</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>red</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>font-size</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>16px</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>  &gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>title</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>\u7EDD\u5BF9\u673A\u5BC6</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-avatar</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>round</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>src</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>https://tianyuhao.cn/images/auto/my.jpg</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c> /&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>block</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span><span style="color:#A6ACCD;" data-v-1047fd5c>\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6</span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>scoped</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-watermark</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>display</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> flex</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>justify-content</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>align-items</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>height</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>500px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-card</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>width</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>240px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u80CC\u666F" tabindex="-1" data-v-1047fd5c>\u81EA\u5B9A\u4E49\u80CC\u666F <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u80CC\u666F" aria-hidden="true" data-v-1047fd5c>#</a></h2><p data-v-1047fd5c>\u5982\u679C\u4F60\u4E0D\u559C\u6B22\u6587\u5B57\u7684\u80CC\u666F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4F60\u559C\u6B22\u7684\u81EA\u5B9A\u4E49\u56FE\u7247\u5F53\u4F5C\u80CC\u666F\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 <code data-v-1047fd5c>image</code> \u4F20\u5165\u4E00\u4E2A\u5730\u5740\u5373\u53EF</p><p data-v-1047fd5c><code data-v-1047fd5c>image</code> \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E <code data-v-1047fd5c>content</code> \u7684\u6C34\u5370\u5185\u5BB9</p>`,4),C=n(`<details class="details custom-block" data-v-1047fd5c><summary data-v-1047fd5c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-1047fd5c><button title="Copy Code" class="copy" data-v-1047fd5c></button><span class="lang" data-v-1047fd5c>html</span><pre class="shiki" data-v-1047fd5c><code data-v-1047fd5c><span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>    </span><span style="color:#C792EA;" data-v-1047fd5c>image</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>https://tianyuhao.cn/images/fighting-design/FightingDesign.svg</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>  &gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>title</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>\u7EDD\u5BF9\u673A\u5BC6</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-avatar</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>round</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>src</span><span style="color:#89DDFF;" data-v-1047fd5c>=</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#C3E88D;" data-v-1047fd5c>https://tianyuhao.cn/images/auto/my.jpg</span><span style="color:#89DDFF;" data-v-1047fd5c>&quot;</span><span style="color:#89DDFF;" data-v-1047fd5c> /&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>      </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>block</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span><span style="color:#A6ACCD;" data-v-1047fd5c>\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6</span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-text</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-card</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>f-watermark</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>template</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c> </span><span style="color:#C792EA;" data-v-1047fd5c>scoped</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-watermark</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>display</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> flex</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>justify-content</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>align-items</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> center</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>height</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>500px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>.</span><span style="color:#FFCB6B;" data-v-1047fd5c>f-card</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>    </span><span style="color:#B2CCD6;" data-v-1047fd5c>width</span><span style="color:#89DDFF;" data-v-1047fd5c>:</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#F78C6C;" data-v-1047fd5c>240px</span><span style="color:#89DDFF;" data-v-1047fd5c>;</span></span>
<span class="line" data-v-1047fd5c><span style="color:#A6ACCD;" data-v-1047fd5c>  </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span></span>
<span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>&lt;/</span><span style="color:#F07178;" data-v-1047fd5c>style</span><span style="color:#89DDFF;" data-v-1047fd5c>&gt;</span></span>
<span class="line" data-v-1047fd5c></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-1047fd5c>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-1047fd5c>#</a></h2><div class="vp-table__container" data-v-1047fd5c><table data-v-1047fd5c><thead data-v-1047fd5c><tr data-v-1047fd5c><th data-v-1047fd5c>\u53C2\u6570</th><th data-v-1047fd5c>\u8BF4\u660E</th><th data-v-1047fd5c>\u7C7B\u578B</th><th data-v-1047fd5c>\u53EF\u9009\u503C</th><th data-v-1047fd5c>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-1047fd5c><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>content</code></td><td data-v-1047fd5c>\u6C34\u5370\u5185\u5BB9</td><td data-v-1047fd5c>string</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>\u2014\u2014</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>width</code></td><td data-v-1047fd5c>\u6C34\u5370\u7684\u5BBD\u5EA6</td><td data-v-1047fd5c>number</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>280</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>height</code></td><td data-v-1047fd5c>\u6C34\u5370\u7684\u9AD8\u5EA6</td><td data-v-1047fd5c>number</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>200</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>fontSize</code></td><td data-v-1047fd5c>\u6587\u5B57\u5927\u5C0F</td><td data-v-1047fd5c>string / number</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>30px</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>fontColor</code></td><td data-v-1047fd5c>\u6587\u5B57\u989C\u8272</td><td data-v-1047fd5c>string</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>#333</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>image</code></td><td data-v-1047fd5c>\u81EA\u5B9A\u4E49\u56FE\u7247\u6C34\u5370</td><td data-v-1047fd5c>string</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>\u2014\u2014</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>block</code></td><td data-v-1047fd5c>\u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20</td><td data-v-1047fd5c>boolean</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>false</td></tr><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>zIndex</code></td><td data-v-1047fd5c>\u539F\u751F <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer" data-v-1047fd5c>z-index</a> \u5C5E\u6027</td><td data-v-1047fd5c>number</td><td data-v-1047fd5c>\u2014\u2014</td><td data-v-1047fd5c>100</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-1047fd5c>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-1047fd5c>#</a></h2><div class="vp-table__container" data-v-1047fd5c><table data-v-1047fd5c><thead data-v-1047fd5c><tr data-v-1047fd5c><th data-v-1047fd5c>\u540D\u79F0</th><th data-v-1047fd5c>\u8BF4\u660E</th></tr></thead><tbody data-v-1047fd5c><tr data-v-1047fd5c><td data-v-1047fd5c><code data-v-1047fd5c>default</code></td><td data-v-1047fd5c>\u6C34\u5370\u8986\u76D6\u7684\u5185\u5BB9</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-1047fd5c>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-1047fd5c>#</a></h2><p data-v-1047fd5c>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-1047fd5c><button title="Copy Code" class="copy" data-v-1047fd5c></button><span class="lang" data-v-1047fd5c>ts</span><pre class="shiki" data-v-1047fd5c><code data-v-1047fd5c><span class="line" data-v-1047fd5c><span style="color:#89DDFF;" data-v-1047fd5c>import</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>type</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>{</span><span style="color:#F07178;" data-v-1047fd5c> </span><span style="color:#A6ACCD;" data-v-1047fd5c>WatermarkInstance</span><span style="color:#89DDFF;" data-v-1047fd5c>,</span><span style="color:#F07178;" data-v-1047fd5c> </span><span style="color:#A6ACCD;" data-v-1047fd5c>WatermarkPropsType</span><span style="color:#F07178;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>}</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>from</span><span style="color:#A6ACCD;" data-v-1047fd5c> </span><span style="color:#89DDFF;" data-v-1047fd5c>&#39;</span><span style="color:#C3E88D;" data-v-1047fd5c>fighting-design</span><span style="color:#89DDFF;" data-v-1047fd5c>&#39;</span></span>
<span class="line" data-v-1047fd5c></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-1047fd5c>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-1047fd5c>#</a></h2>`,9),A={href:"https://github.com/Tyh2001",target:"_blank"};function h(g,u,_,m,b,k){const t=d("f-avatar"),c=d("f-text"),l=d("f-card"),o=d("f-watermark");return f(),r("div",null,[F,a(o,{content:"\u673A\u5BC6\u6587\u4EF6",height:100,width:130},{default:s(()=>[a(l,{title:"\u7EDD\u5BF9\u673A\u5BC6"},{default:s(()=>[a(t,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),a(c,{block:""},{default:s(()=>[p("\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6")]),_:1})]),_:1})]),_:1}),y,a(o,{content:"\u673A\u5BC6\u6587\u4EF6",height:100,width:130,"font-color":"red","font-size":"16px"},{default:s(()=>[a(l,{title:"\u7EDD\u5BF9\u673A\u5BC6"},{default:s(()=>[a(t,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),a(c,{block:""},{default:s(()=>[p("\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6")]),_:1})]),_:1})]),_:1}),i,a(o,{image:"https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"},{default:s(()=>[a(l,{title:"\u7EDD\u5BF9\u673A\u5BC6"},{default:s(()=>[a(t,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),a(c,{block:""},{default:s(()=>[p("\u8FD9\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u4EF6")]),_:1})]),_:1})]),_:1}),C,v("a",A,[a(t,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const q=e(D,[["render",h],["__scopeId","data-v-1047fd5c"]]);export{x as __pageData,q as default};
