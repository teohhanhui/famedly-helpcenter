"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),a=t(7294),i=t(4334),l=t(2466),s=t(6550),u=t(1980),o=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,o]=m({queryString:t,groupId:r}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=u??d;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),b(e)}),[o,b,i]),tabValues:i}}var f=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==s&&(d(n),u(r))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function y(e){const n=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function w(e){const n=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},6075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),i=t(4866),l=t(5162),s=t(4996);const u={sidebar_label:"Erste Anmeldung",title:"Erste Anmeldung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},o=void 0,c={unversionedId:"help-center/first-steps/first-login",id:"help-center/first-steps/first-login",title:"Erste Anmeldung",description:"Erster Login",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/first-steps/first-login.mdx",sourceDirName:"help-center/first-steps",slug:"/help-center/first-steps/first-login",permalink:"/helpcenter/de/help-center/first-steps/first-login",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"rvanwaveren",lastUpdatedAt:1697643248,formattedLastUpdatedAt:"18. Okt. 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Erste Anmeldung",title:"Erste Anmeldung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},sidebar:"helpcenterSidebar",previous:{title:"Installation von Famedly Apps",permalink:"/helpcenter/de/help-center/first-steps/installation"},next:{title:"Famedly nutzen",permalink:"/helpcenter/de/using-famedly"}},d={},p=[{value:"Allgemein",id:"allgemein",level:2},{value:"Login",id:"login",level:3},{value:"Chat-Backup aktivieren",id:"chat-backup-aktivieren",level:3},{value:"Bildschirmsperre einrichten",id:"bildschirmsperre-einrichten",level:3}],h={toc:p},m="wrapper";function b(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Erster Login"),(0,a.kt)("p",{class:"hero__subtitle"},"Folgen Sie den unteren Schritten um sich das erste Mal bei Famedly einzuloggen."))),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Benutzerkonten werden immer durch Ihre Organisation vergeben. Der Arbeitgeber wird Ihnen ein Willkommensblatt zur Verf\xfcgung stellen, das Ihnen einen schnellen und einfachen Zugang zu Famedly erm\xf6glicht."),(0,a.kt)("h3",{id:"login"},"Login"),(0,a.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"desktop",label:"Desktop",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Geben Sie Ihre Organisations-URL in Ihrem Browser ein."),(0,a.kt)("li",null,"Geben Sie ",(0,a.kt)("code",null,"Benutzername")," und ",(0,a.kt)("code",null,"Passwort")," ein."),(0,a.kt)("li",null,"Stellen Sie einen Profilbild ein auf der Willkommensseite."))),(0,a.kt)(l.Z,{value:"mobil",label:"Mobil",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Installieren Sie Famedly auf Ihrem Smartphone."),(0,a.kt)("li",null,"Geben Sie die Organisations-URL ein."),(0,a.kt)("li",null,"Geben Sie ",(0,a.kt)("code",null,"Benutzername")," und ",(0,a.kt)("code",null,"Passwort")," ein."),(0,a.kt)("li",null,"Stellen Sie ein Profilbild ein auf der Willkommensseite.")))),(0,a.kt)("h3",{id:"chat-backup-aktivieren"},"Chat-Backup aktivieren"),(0,a.kt)("p",null,"Es ist sehr wichtig, das Chat-Backup zu aktivieren. Folgen Sie diesen Schritten, um das Chat-Backup zu aktivieren."),(0,a.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"desktop",label:"Desktop",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Klicken Sie auf Ihren Profilbild oder Ihre Initialen um die Einstellungen zu \xf6ffnen."),(0,a.kt)("li",null,"Klicken Sie auf ",(0,a.kt)("b",null,"Chat-Backup"),"."),(0,a.kt)("li",null,"Klicken Sie auf ",(0,a.kt)("b",null,"Chat-Backup aktivieren"),"."),(0,a.kt)("li",null,"Heben Sie die Passphrase an einem sicheren Ort auf."),(0,a.kt)("li",null,"Klicken Sie auf ",(0,a.kt)("b",null,"Aktivieren"),"."))),(0,a.kt)(l.Z,{value:"mobil",label:"Mobil",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tippen Sie auf Ihren Profilbild oder Ihre Initialen um die Einstellungen zu \xf6ffnen."),(0,a.kt)("li",null,"Tippen Sie auf ",(0,a.kt)("b",null,"Chat-Backup"),"."),(0,a.kt)("li",null,"Tippen Sie auf ",(0,a.kt)("b",null,"Chat-Backup aktivieren"),"."),(0,a.kt)("li",null,"Heben Sie die Passphrase an einem sicheren Ort auf."),(0,a.kt)("li",null,"Tippen Sie auf ",(0,a.kt)("b",null,"Aktivieren"),".")))),(0,a.kt)("img",{alt:"Passphrase",src:(0,s.Z)("/img/passphrase.PNG.png"),width:"40%"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Wie kann ich eine Passphrase erstellen?")),(0,a.kt)("p",{parentName:"admonition"},"Wenn Sie noch kein Chat-Backup erstellt und noch keine Passphrase erhalten haben, k\xf6nnen Sie eine einrichten, wenn Sie sich das erste Mal im Web-Browser oder in der mobilen App anmelden."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Wann brauche ich die Passphrase?")),(0,a.kt)("p",{parentName:"admonition"},"Sie ben\xf6tigen die Passphrase nur, wenn Sie auf allen Ger\xe4ten abgemeldet sind und die Verifikation zwischen zwei Ger\xe4ten deshalb nicht m\xf6glich ist. In diesem Fall muss die Passphrase eingegeben werden, sodass alle alten Nachrichten nach dem Login entschl\xfcsselt werden. "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Wie kann ich weitere Ger\xe4te verifizieren?")),(0,a.kt)("p",{parentName:"admonition"},"Wenn Sie bereits ein eingeloggtes Ger\xe4t haben, k\xf6nnen Sie weitere Ger\xe4te mittels der ",(0,a.kt)("a",{parentName:"p",href:"../using-famedly/qr-verification"},(0,a.kt)("strong",{parentName:"a"},"QR-Verifikation"))," hinzuf\xfcgen. Falls beide Ger\xe4te keine QR-Codes scannen k\xf6nnen, k\xf6nnen Sie stattdessen Nummern vergleichen. Wenn Sie keinen Zugriff auf Ihr anderes Ger\xe4t haben, bleibt noch die M\xf6glichkeit, die Passphrase einzugeben. "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Was passiert, wenn ich die Passphrase verloren habe und auf allen Ger\xe4ten abgemeldet wurde?")),(0,a.kt)("p",{parentName:"admonition"},"Wenn Sie Ihre Passphrase nicht sicher aufgehoben haben oder sie nicht mehr finden k\xf6nnen, und Sie von allen Ger\xe4ten abgemeldet wurden, k\xf6nnen Sie Ihr Konto nur noch zur\xfccksetzen. Ihre Kontakte und Gruppen bleiben behalten, aber vorherige Nachrichten k\xf6nnen nicht mehr entschl\xfcsselt werden. ")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Mit der Passphrase haben Sie Zugriff auf alle Ihre verschl\xfcsselten Daten und vorherigen Chatverl\xe4ufe. Die Passphrase kann nicht wiederhergestellt werden, wenn Sie sie verloren haben!\nSie ben\xf6tigen diese Passphrase, um Ihren Chatverlauf wiederherzustellen, wenn Sie auf allen Ger\xe4ten abgemeldet wurden.")),(0,a.kt)("h3",{id:"bildschirmsperre-einrichten"},"Bildschirmsperre einrichten"),(0,a.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"desktop",label:"Desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"  Aktuell wird die Bildschirmsperre auf Desktopsystemen nicht unterst\xfctzt.")),(0,a.kt)(l.Z,{value:"mobile",label:"Mobile",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  Wenn Sie auf Ihrem Ger\xe4t keine allgemeine Bildschirmsperre eingerichtet haben, werden Sie dazu verpflichtet, in Famedly eine Bildschirmsperre einzurichten. Wie das geht ist unter ",(0,a.kt)("a",{parentName:"p",href:"../your-account/account-settings#screen-lock"},(0,a.kt)("strong",{parentName:"a"},"Einstellungen"))," beschrieben.\nWenn eine Bildschirmsperre f\xfcr Sie in Famedly Pflicht ist, werden Sie automatisch dazu aufgefordert, eine einzurichten. Sie k\xf6nnen Ihren PIN zur\xfccksetzen, indem Sie sich aus- und wieder einloggen."))))}b.isMDXComponent=!0}}]);