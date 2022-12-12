import{_ as g,r as c,o as i,g as u,w as l,d as s,a as o,p as C,f as m,h as _,c as f,u as A,e as D,b as t}from"./app.e93cce2a.js";const b={},p=r=>(C("data-v-a7de2d49"),r=r(),m(),r),E={class:"image-block"},v=p(()=>s("code",null,"fill",-1)),x={class:"image-block"},k=p(()=>s("code",null,"contain",-1)),w={class:"image-block"},j=p(()=>s("code",null,"cover",-1)),I={class:"image-block"},S=p(()=>s("code",null,"none",-1)),z={class:"image-block"},N=p(()=>s("code",null,"scale-down",-1));function U(r,d){const e=c("f-image"),F=c("f-space");return i(),u(F,{spacing:"large"},{default:l(()=>[s("div",E,[v,o(e,{width:"110px",height:"110px",fit:"fill",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),s("div",x,[k,o(e,{width:"110px",height:"110px",fit:"contain",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),s("div",w,[j,o(e,{width:"110px",height:"110px",fit:"cover",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),s("div",I,[S,o(e,{width:"110px",height:"110px",fit:"none",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),s("div",z,[N,o(e,{width:"110px",height:"110px",fit:"scale-down",src:"https://tianyuhao.cn/images/auto/4.jpg"})])]),_:1})}const $=g(b,[["render",U],["__scopeId","data-v-a7de2d49"]]),B=D('<h1 id="image-图片" tabindex="-1">Image 图片 <a class="header-anchor" href="#image-图片" aria-hidden="true">#</a></h1><p>预览图片</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/image.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h2><p>使用 <code>src</code> 属性设置图片的路径，<code>width</code> 设置图片的宽度，<code>height</code> 可以设置图片的高度</p>',5),T=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"})])])],-1),H=s("h2",{id:"使用本地图片",tabindex:"-1"},[t("使用本地图片 "),s("a",{class:"header-anchor",href:"#使用本地图片","aria-hidden":"true"},"#")],-1),P=s("p",null,[t("如需要使用本地图片，需要使用 "),s("a",{href:"https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url",target:"_blank",rel:"noreferrer"},[t("new URL(url, i"),s("wbr"),t("mport.meta.url)")]),t(" 手动导入图片资源使用：")],-1),V=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," url "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"URL"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"./image/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"meta"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"url)"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"href")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"url"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"})])])],-1),L=s("h2",{id:"适应容器方式",tabindex:"-1"},[t("适应容器方式 "),s("a",{class:"header-anchor",href:"#适应容器方式","aria-hidden":"true"},"#")],-1),R=s("p",null,[s("code",null,"fit"),t(" 属性可以配置不同的适应容器的方式，详见原生 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it",target:"_blank",rel:"noreferrer"},"object-fit"),t(" 属性")],-1),W=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fill"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"contain"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"cover"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"none"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"110px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"fit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"scale-down"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"})])])],-1),J=s("h2",{id:"圆角图片",tabindex:"-1"},[t("圆角图片 "),s("a",{class:"header-anchor",href:"#圆角图片","aria-hidden":"true"},"#")],-1),M=s("p",null,[s("code",null,"round"),t(" 属性可以配置圆角图片，你需要传入一个具体的数值单位")],-1),O=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"round"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"30px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"190px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/4.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"})])])],-1),q=s("h2",{id:"懒加载",tabindex:"-1"},[t("懒加载 "),s("a",{class:"header-anchor",href:"#懒加载","aria-hidden":"true"},"#")],-1),G=s("p",null,[s("code",null,"lazy"),t(" 属性可以设置图片懒加载，详情可参考 "),s("code",null,"DevTools"),t(" 的 "),s("code",null,"Network")],-1),K=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lazy"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/5.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"})])])],-1),Q=D('<h2 id="加载失败" tabindex="-1">加载失败 <a class="header-anchor" href="#加载失败" aria-hidden="true">#</a></h2><p><code>Fighting Design</code> 对于图片加载失败做了很多的处理，下面分别介绍一下</p><p><code>err-src</code> 可以在 <code>src</code> 加载失败的时候，备用进行加载</p><p><code>alt</code> 属性可以在图片加载失败的时候，展示信息</p><p>你也可以使用 <code>error</code> 插槽自定义你的错误信息展示</p>',5),X=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"err-src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/1.jpg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"200px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"err-src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://abc.com/1.png"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"alt"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"error"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"})])])],-1),Y=D(`<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td>图片路径</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>err-src</code></td><td>src 加载失败时加载的地址</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>alt</code></td><td>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt" target="_blank" rel="noreferrer">alt</a> 属性</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>draggable</code></td><td>是否可以拖动</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>lazy</code></td><td>是否懒加载图片</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>root-margin</code></td><td>触发懒加载的距离</td><td>string / number</td><td>——</td><td>100px</td></tr><tr><td><code>width</code></td><td>图片的宽度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>height</code></td><td>图片的高度</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>block</code></td><td>是否为块级元素</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>fit</code></td><td>如何适应容器，原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it" target="_blank" rel="noreferrer">object-fit</a> 属性</td><td><a href="#imagefit">ImageFit</a></td><td><code>fill</code> <code>contain</code> <code>cover</code> <code>none</code><br> <code>scale-down</code></td><td>——</td></tr><tr><td><code>no-select</code></td><td>是否禁止选择</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>referrer-policy</code></td><td>原生 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax" target="_blank" rel="noreferrer">referrerPolicy</a> 属性</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>round</code></td><td>配置圆角，传入一个数值</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>title</code></td><td>img 的 title</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>on-load</code></td><td>图片加载成功触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr><tr><td><code>on-error</code></td><td>图片加载失败触发的回调</td><td><a href="/components/interface.html#handleevent">HandleEvent</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>插槽名称</th><th>说明说明</th></tr></thead><tbody><tr><td><code>error</code></td><td>自定义加载失败提示</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ImageInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ImageProps</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ImageFit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="imagefit" tabindex="-1">ImageFit <a class="header-anchor" href="#imagefit" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImageFit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fill</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">contain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cover</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scale-down</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,10),Z={href:"https://github.com/Tyh2001",target:"_blank"},os=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"使用本地图片","slug":"使用本地图片","link":"#使用本地图片","children":[]},{"level":2,"title":"适应容器方式","slug":"适应容器方式","link":"#适应容器方式","children":[]},{"level":2,"title":"圆角图片","slug":"圆角图片","link":"#圆角图片","children":[]},{"level":2,"title":"懒加载","slug":"懒加载","link":"#懒加载","children":[]},{"level":2,"title":"加载失败","slug":"加载失败","link":"#加载失败","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"ImageFit","slug":"imagefit","link":"#imagefit","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/image.md","lastUpdated":1670814958000}'),ss={name:"components/image.md"},ls=_({...ss,setup(r){const d=new URL("/assets/1.aa9c3858.jpg",self.location).href;return(e,F)=>{const a=c("f-image"),n=c("vp-demo"),y=c("f-space"),h=c("f-avatar");return i(),f("div",null,[B,o(n,{source:""},{source:l(()=>[o(a,{width:"200px",src:"https://tianyuhao.cn/images/auto/1.jpg"})]),default:l(()=>[T]),_:1}),H,P,o(n,{source:""},{source:l(()=>[o(a,{src:A(d)},null,8,["src"])]),default:l(()=>[V]),_:1}),L,R,o(n,{source:""},{source:l(()=>[o($)]),default:l(()=>[W]),_:1}),J,M,o(n,{source:""},{source:l(()=>[o(a,{round:"30px",height:"190px",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),default:l(()=>[O]),_:1}),q,G,o(n,{source:""},{source:l(()=>[o(a,{lazy:"",width:"200px",src:"https://tianyuhao.cn/images/auto/5.jpg"})]),default:l(()=>[K]),_:1}),Q,o(n,{source:""},{source:l(()=>[o(y,{spacing:"large"},{default:l(()=>[o(a,{width:"200px",src:"https://abc.com/1.png","err-src":"https://tianyuhao.cn/images/auto/1.jpg"}),o(a,{width:"200px",src:"https://abc.com/1.png","err-src":"https://abc.com/1.png",alt:"error"})]),_:1})]),default:l(()=>[X]),_:1}),Y,s("a",Z,[o(h,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{os as __pageData,ls as default};