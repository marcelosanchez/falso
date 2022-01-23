"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[315],{5318:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=a.createContext({}),p=function(e){var n=a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(g,l(l({ref:n},c),{},{components:r})):a.createElement(g,l({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3477:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=r(5773),t=r(808),o=(r(7378),r(5318)),l=["components"],i={slug:"/internet"},d="Internet",p={unversionedId:"auto-generated/internet",id:"auto-generated/internet",title:"Internet",description:"`randDomainName`",source:"@site/docs/auto-generated/internet.mdx",sourceDirName:"auto-generated",slug:"/internet",permalink:"/falso/docs/internet",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/internet.mdx",tags:[],version:"current",frontMatter:{slug:"/internet"},sidebar:"falso",previous:{title:"Git",permalink:"/falso/docs/git"},next:{title:"Jobs",permalink:"/falso/docs/jobs"}},c=[{value:"<code>randDomainName</code>",id:"randdomainname",children:[],level:3},{value:"<code>randDomainSuffix</code>",id:"randdomainsuffix",children:[],level:3},{value:"<code>randEmailProvider</code>",id:"randemailprovider",children:[],level:3},{value:"<code>randOAuthProvider</code>",id:"randoauthprovider",children:[],level:3},{value:"<code>randBrowser</code>",id:"randbrowser",children:[],level:3},{value:"<code>randHttpMethod</code>",id:"randhttpmethod",children:[],level:3},{value:"<code>randIntegration</code>",id:"randintegration",children:[],level:3},{value:"<code>randIp</code>",id:"randip",children:[],level:3},{value:"<code>randIpv6</code>",id:"randipv6",children:[],level:3},{value:"<code>randPort</code>",id:"randport",children:[],level:3},{value:"<code>randProtocol</code>",id:"randprotocol",children:[],level:3},{value:"<code>randSemver</code>",id:"randsemver",children:[],level:3},{value:"<code>randSocial</code>",id:"randsocial",children:[],level:3},{value:"<code>randUrl</code>",id:"randurl",children:[],level:3},{value:"<code>randUserAgent</code>",id:"randuseragent",children:[],level:3}],s={toc:c};function u(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"internet"},"Internet"),(0,o.kt)("h3",{id:"randdomainname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randDomainName")),(0,o.kt)("p",null,"Generate a random domain name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDomainName } from '@ngneat/falso';\n\nrandDomainName()\nrandDomainName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDomainName()}/>;\n}\n")),(0,o.kt)("h3",{id:"randdomainsuffix"},(0,o.kt)("inlineCode",{parentName:"h3"},"randDomainSuffix")),(0,o.kt)("p",null,"Generate a random domain suffix."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDomainSuffix } from '@ngneat/falso';\n\nrandDomainSuffix()\nrandDomainSuffix({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDomainSuffix()}/>;\n}\n")),(0,o.kt)("h3",{id:"randemailprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"randEmailProvider")),(0,o.kt)("p",null,"Generate a random email provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEmailProvider } from '@ngneat/falso';\n\nrandEmailProvider()\nrandEmailProvider({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randEmailProvider()}/>;\n}\n")),(0,o.kt)("h3",{id:"randoauthprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"randOAuthProvider")),(0,o.kt)("p",null,"Generate a random OAuth provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randOAuthProvider } from '@ngneat/falso';\n\nrandOAuthProvider()\nrandOAuthProvider({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randOAuthProvider()}/>;\n}\n")),(0,o.kt)("h3",{id:"randbrowser"},(0,o.kt)("inlineCode",{parentName:"h3"},"randBrowser")),(0,o.kt)("p",null,"Generate a random browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBrowser } from '@ngneat/falso';\n\nrandBrowser()\nrandBrowser({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBrowser()}/>;\n}\n")),(0,o.kt)("h3",{id:"randhttpmethod"},(0,o.kt)("inlineCode",{parentName:"h3"},"randHttpMethod")),(0,o.kt)("p",null,"Generate a random http method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randHttpMethod } from '@ngneat/falso';\n\nrandHttpMethod()\nrandHttpMethod({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randHttpMethod()}/>;\n}\n")),(0,o.kt)("h3",{id:"randintegration"},(0,o.kt)("inlineCode",{parentName:"h3"},"randIntegration")),(0,o.kt)("p",null,"Generate a random integration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIntegration } from '@ngneat/falso';\n\nrandIntegrations()\nrandIntegrations({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIntegration()}/>;\n}\n")),(0,o.kt)("h3",{id:"randip"},(0,o.kt)("inlineCode",{parentName:"h3"},"randIp")),(0,o.kt)("p",null,"Generate a random ip."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIp } from '@ngneat/falso';\n\nrandIp()\nrandIp({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIp()}/>;\n}\n")),(0,o.kt)("h3",{id:"randipv6"},(0,o.kt)("inlineCode",{parentName:"h3"},"randIpv6")),(0,o.kt)("p",null,"Generate a random ipv6."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIpv6 } from '@ngneat/falso';\n\nrandIpv6()\nrandIpv6({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIpv6()}/>;\n}\n")),(0,o.kt)("h3",{id:"randport"},(0,o.kt)("inlineCode",{parentName:"h3"},"randPort")),(0,o.kt)("p",null,"Generate a random port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPort } from '@ngneat/falso';\n\nrandPort()\nrandPort({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPort()}/>;\n}\n")),(0,o.kt)("h3",{id:"randprotocol"},(0,o.kt)("inlineCode",{parentName:"h3"},"randProtocol")),(0,o.kt)("p",null,"Generate a random protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProtocol } from '@ngneat/falso';\n\nrandProtocol()\nrandProtocol({ length: 10 })\nrandProtocol({ fullName: true })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProtocol()}/>;\n}\n")),(0,o.kt)("h3",{id:"randsemver"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSemver")),(0,o.kt)("p",null,"Generate a random semantic version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSemver } from '@ngneat/falso';\n\nrandSemver()\nrandSemver({ length: 10 })\nrandSemver({ prefix: 'v' })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSemver()}/>;\n}\n")),(0,o.kt)("h3",{id:"randsocial"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSocial")),(0,o.kt)("p",null,"Generate random social network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSocial } from '@ngneat/falso';\n\nrandSocial()\nrandSocial({ length: 2 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSocial()}/>;\n}\n")),(0,o.kt)("h3",{id:"randurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"randUrl")),(0,o.kt)("p",null,"Generate a random url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUrl } from '@ngneat/falso';\n\nrandUrl()\nrandUrl({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUrl()}/>;\n}\n")),(0,o.kt)("h3",{id:"randuseragent"},(0,o.kt)("inlineCode",{parentName:"h3"},"randUserAgent")),(0,o.kt)("p",null,"Generate a random user agent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUserAgent } from '@ngneat/falso';\n\nrandUserAgent()\nrandUserAgent({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUserAgent()}/>;\n}\n")))}u.isMDXComponent=!0}}]);