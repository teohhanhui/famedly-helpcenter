"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(4334),i=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},1504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162),r(4996);const o={sidebar_label:"Root or Jailbreak",title:"Root or Jailbreak",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:8},i=void 0,l={unversionedId:"help-center/using-famedly/root-or-jailbreak",id:"help-center/using-famedly/root-or-jailbreak",title:"Root or Jailbreak",description:"Root or Jailbreak",source:"@site/docs/help-center/using-famedly/root-or-jailbreak.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/root-or-jailbreak",permalink:"/helpcenter/help-center/using-famedly/root-or-jailbreak",draft:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/using-famedly/root-or-jailbreak.mdx",tags:[],version:"current",lastUpdatedBy:"Krille-chan",lastUpdatedAt:1698739441,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"Root or Jailbreak",title:"Root or Jailbreak",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:8},sidebar:"helpcenterSidebar",previous:{title:"Encrypted Messages",permalink:"/helpcenter/help-center/using-famedly/encrypted-messages"},next:{title:"Your Account",permalink:"/helpcenter/your-account"}},s={},u=[{value:"Why Shouldn&#39;t You Use Famedly on a Rooted or Jailbroken Device?",id:"why-shouldnt-you-use-famedly-on-a-rooted-or-jailbroken-device",level:3},{value:"Security Risks:",id:"security-risks",level:4},{value:"Increased Vulnerability:",id:"increased-vulnerability",level:4},{value:"Famedly&#39;s Warning and File Download Prevention:",id:"famedlys-warning-and-file-download-prevention",level:4},{value:"What to Do If You Receive a Warning:",id:"what-to-do-if-you-receive-a-warning",level:4},{value:"Conclusion:",id:"conclusion",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Root or Jailbreak"),(0,a.kt)("p",{class:"hero__subtitle"},"Why You Shouldn't Use Famedly App on a Rooted or Jailbroken Device"))),(0,a.kt)("p",null,"Famedly is committed to ensuring the security and integrity of its platform.\nTo maintain a safe and secure environment for all users, we strongly discourage the use of our app on\nrooted or jailbroken devices. In this article, we will explain why you should avoid using Famedly on\nsuch devices, the potential risks involved, and how Famedly protects its users."),(0,a.kt)("h3",{id:"why-shouldnt-you-use-famedly-on-a-rooted-or-jailbroken-device"},"Why Shouldn't You Use Famedly on a Rooted or Jailbroken Device?"),(0,a.kt)("h4",{id:"security-risks"},"Security Risks:"),(0,a.kt)("p",null,"Rooted (Android) or jailbroken (iOS) devices have had their default security measures bypassed,\nallowing users to gain superuser privileges. While this can be beneficial for some, it also exposes\nyour device to greater security risks. Apps and services on such devices can access sensitive system\nfiles and resources, potentially making it easier for malicious actors to exploit vulnerabilities."),(0,a.kt)("h4",{id:"increased-vulnerability"},"Increased Vulnerability:"),(0,a.kt)("p",null,"A rooted or jailbroken device becomes more vulnerable to malware and unauthorized access. These devices\nare more susceptible to various forms of attacks, including spyware, adware, and other malicious\nsoftware that can compromise your privacy and data."),(0,a.kt)("h4",{id:"famedlys-warning-and-file-download-prevention"},"Famedly's Warning and File Download Prevention:"),(0,a.kt)("p",null,"To protect our users and maintain a secure environment, Famedly has implemented measures to detect\nrooted or jailbroken devices. If you attempt to use our app on such a device, you will receive a\nwarning message notifying you that your device is not supported for security reasons. Additionally,\nfile downloads may be prevented to ensure your data remains secure."),(0,a.kt)("h4",{id:"what-to-do-if-you-receive-a-warning"},"What to Do If You Receive a Warning:"),(0,a.kt)("p",null,"If you encounter a warning message when using Famedly on a rooted or jailbroken device, we strongly\nrecommend discontinuing its use. To continue using our app securely, you should consider using an\nunaltered and up-to-date device."),(0,a.kt)("h4",{id:"conclusion"},"Conclusion:"),(0,a.kt)("p",null,"Famedly values the security and privacy of our users. We discourage the use of rooted or\njailbroken devices to ensure the safety and integrity of our platform. If you receive a warning\nmessage while attempting to use Famedly on such a device, please take it seriously and consider\nusing an unaltered device for the best and safest experience. Your security and the security of\nour community are of paramount importance to us."))}p.isMDXComponent=!0}}]);