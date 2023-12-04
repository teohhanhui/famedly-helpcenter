"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(n),p=l,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||r;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:l,a[1]=u;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294),l=n(4334);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,a),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var i=n(7462),l=n(7294),r=n(4334),a=n(2466),u=n(6550),o=n(1980),d=n(7392),s=n(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:l}}=e;return{value:t,label:n,attributes:i,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=m(e),[a,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[o,d]=h({queryString:n,groupId:i}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,s.Nk)(n);return[i,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),f=(()=>{const e=o??c;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:u,selectValue:o,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),i=d[n].value;i!==u&&(c(t),o(i))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:a}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},a,{className:(0,r.Z)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":u===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function g(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(y,(0,i.Z)({},e,t)),l.createElement(v,(0,i.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return l.createElement(g,(0,i.Z)({key:String(t)},e))}},3745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(7462),l=(n(7294),n(3905)),r=n(4866),a=n(5162),u=n(4996);const o={sidebar_label:"Dateien teilen",title:"Dateien teilen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},d=void 0,s={unversionedId:"help-center/using-famedly/share-files",id:"help-center/using-famedly/share-files",title:"Dateien teilen",description:"Dateien teilen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/share-files.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/share-files",permalink:"/helpcenter/de/help-center/using-famedly/share-files",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"td",lastUpdatedAt:1701704567,formattedLastUpdatedAt:"4. Dez. 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Dateien teilen",title:"Dateien teilen",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},sidebar:"helpcenterSidebar",previous:{title:"Nachrichten",permalink:"/helpcenter/de/help-center/using-famedly/messages"},next:{title:"Audio & Video",permalink:"/helpcenter/de/help-center/using-famedly/audio-video"}},c={},m=[{value:"Dateien in Famedly teilen",id:"dateien-in-famedly-teilen",level:2},{value:"Bilder und Videos teilen",id:"bilder-und-videos-teilen",level:2},{value:"Dateien und Bilder herunterladen",id:"dateien-und-bilder-herunterladen",level:2},{value:"Bildabschnitte schw\xe4rzen",id:"bildabschnitte-schw\xe4rzen",level:2}],p={toc:m},h="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"hero hero--primary"},(0,l.kt)("div",{class:"container"},(0,l.kt)("h2",{class:"hero__title"},"Dateien teilen"),(0,l.kt)("p",{class:"hero__subtitle"},"Das Teilen von Dateien kann Ihre Arbeit verbessern."),(0,l.kt)("p",null,"In Famedly ist es m\xf6glich, verschiedene Dateien zu teilen."))),(0,l.kt)("h2",{id:"dateien-in-famedly-teilen"},"Dateien in Famedly teilen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie eine Gruppe oder einen Privatchat, mit dem Sie die Datei teilen m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"B\xfcroklammer-Symbol"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie die Datei aus, die Sie freigeben m\xf6chten und best\xe4tigen Sie.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen Dokumente auch in den Chat ziehen, wo Sie sie verschicken m\xf6chten.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Kopierte dateien k\xf6nnen auch direkt in den Chat eingef\xfcgt werden, entweder durch das Rechtsklickmen\xfc in der Nachrichtenzeile oder durch ein Tastenk\xfcrzel. Unter Firefox kann nur eine Datei gleichzeitig eingef\xfcgt werden."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie eine Gruppe oder einen Privatchat, mit dem Sie die Datei teilen m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"B\xfcroklammer-Symbol"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie ",(0,l.kt)("b",null,"Dokument"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie die Datei aus, die Sie freigeben m\xf6chten und best\xe4tigen Sie.")))),(0,l.kt)("img",{alt:"Create Groupchat",src:(0,u.Z)("/img/chatroom_private_1.PNG.png"),width:"40%"}),(0,l.kt)("img",{alt:"Create Groupchat",src:(0,u.Z)("/img/chatroom_private_mediasharing_1.PNG.png"),width:"40%"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bilder-und-videos-teilen"},"Bilder und Videos teilen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie eine Gruppe oder einen Privatchat, mit dem Sie ein Bild oder Vide teilen m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"B\xfcroklammer-Symbol"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie das Bild/Video aus Ihrem Dateisystem aus."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Ja"),", um das Teilen zu best\xe4tigen..")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen Bilder oder Videos auch in den Chat ziehen, wo Sie sie verschicken m\xf6chten.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Kopierte Bilder oder Videos k\xf6nnen auch direkt in den Chat eingef\xfcgt werden, entweder durch das Rechtsklickmen\xfc in der Nachrichtenzeile oder durch ein Tastenk\xfcrzel. Unter Firefox kann nur eine Datei gleichzeitig eingef\xfcgt werden."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie eine Gruppe oder einen Privatchat, mit dem Sie ein Bild oder Vido teilen m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie ",(0,l.kt)("b",null,"Video"),", ",(0,l.kt)("b",null,"Galerie")," oder ",(0,l.kt)("b",null,"Kamera"),"."),(0,l.kt)("li",null,"W\xe4hlen Sie ein Bild/Video oder machen Sie ein Bild/Video mit der Kamera."),(0,l.kt)("li",null,"Optional: Tippen Sie auf ",(0,l.kt)("b",null,"Schwarz")," wenn Sie Teile des Bildes schw\xe4rzen m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf das ",(0,l.kt)("b",null,"H\xe4kchensymbol"),".")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"dateien-und-bilder-herunterladen"},"Dateien und Bilder herunterladen"),(0,l.kt)("p",null,"Sie k\xf6nnen Dateien und Bilder, die Sie in einem Chat erhalten haben, herunterladen."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Chat mit der Datei, die Sie herunterladen m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf die Datei, dann auf den Downloadpfeil in der oberen rechten Ecke."),(0,l.kt)("li",null,"Best\xe4tigen Sie die Benachrichtigung."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Chat mit der Datei, die Sie herunterladen m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf die Datei, dann auf den Downloadpfeil in der oberen rechten Ecke."),(0,l.kt)("li",null,"Best\xe4tigen Sie die Benachrichtigung.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bildabschnitte-schw\xe4rzen"},"Bildabschnitte schw\xe4rzen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Folgen Sie den Schritten zum Teilen eines Bildes."),(0,l.kt)("li",null,"Bevor Sie auf das ",(0,l.kt)("b",null,"H\xe4kchensymbol")," tippen, k\xf6nnen Sie die Farben schwarz oder wei\xdf ausw\xe4hlen, indem Sie auf das kleine Maler Scroll-Symbol in der unteren rechten Ecke der App klicken, wenn Sie ein Bild ausgew\xe4hlt haben."),(0,l.kt)("li",null,"Tippe auf das ",(0,l.kt)("b",null,"Checkmark-Symbol")," nachdem du fertig bist.")))))}b.isMDXComponent=!0}}]);