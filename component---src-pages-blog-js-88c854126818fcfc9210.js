"use strict";(self.webpackChunkAdiela_Abishua_Portfolio_Website=self.webpackChunkAdiela_Abishua_Portfolio_Website||[]).push([[7],{8534:function(e,t,a){var l=a(7294),i=a(5381);t.Z=e=>{let{children:t}=e;return l.createElement(i.Z,null,l.createElement("div",{className:"blog-wrapper"},l.createElement("main",null,t),l.createElement("footer",{id:"blog-footer"},"© ",(new Date).getFullYear(),", Built by"," ",l.createElement("a",{href:"https://www.github.com/adiela"},"Adiela Abishua"),"  with ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},8771:function(e,t,a){var l=a(7294),i=a(1883),n=a(8032);t.Z=()=>{var e,t;const r=(0,i.useStaticQuery)("230163734"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/adiela_abishua.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1839)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,l.createElement("a",{href:"https://github.com/"+((null==o?void 0:o.github)||"")},c.name))," ",(null==c?void 0:c.summary)||null))}},9357:function(e,t,a){var l=a(7294),i=a(1883);t.Z=e=>{var t,a,n;let{description:r,title:c,children:o}=e;const{site:s}=(0,i.useStaticQuery)("2841359383"),m=r||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,d?c+" | "+d:c),l.createElement("meta",{name:"description",content:m}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:m}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:m}),o)}},5502:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var l=a(7294),i=a(1883),n=a(8771),r=a(8534),c=a(9357);t.default=e=>{var t;let{data:a,location:c}=e;const o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes;return 0===s.length?l.createElement(r.Z,{location:c,title:o},l.createElement(n.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:c,title:o},l.createElement(n.Z,null),l.createElement("ol",{style:{listStyle:"none"}},s.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const o=()=>l.createElement(c.Z,{title:"All posts"})},1839:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/468f89f39ee374c1434cd7fb2c2aed36/d24ee/adiela_abishua.jpg","srcSet":"/static/468f89f39ee374c1434cd7fb2c2aed36/d24ee/adiela_abishua.jpg 50w,\\n/static/468f89f39ee374c1434cd7fb2c2aed36/64618/adiela_abishua.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/468f89f39ee374c1434cd7fb2c2aed36/d4bf4/adiela_abishua.avif 50w,\\n/static/468f89f39ee374c1434cd7fb2c2aed36/ee81f/adiela_abishua.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/468f89f39ee374c1434cd7fb2c2aed36/3faea/adiela_abishua.webp 50w,\\n/static/468f89f39ee374c1434cd7fb2c2aed36/6a679/adiela_abishua.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-blog-js-88c854126818fcfc9210.js.map