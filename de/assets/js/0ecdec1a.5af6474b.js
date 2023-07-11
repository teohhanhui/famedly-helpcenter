"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[338],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,h=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(7462),a=t(7294),i=t(6010),l=t(2466),o=t(6550),u=t(1980),s=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,s]=h({queryString:t,groupId:r}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),k=(()=>{const e=u??d;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,i]),tabValues:i}}var k=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==o&&(d(n),u(r))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function y(e){const n=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function S(e){const n=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},2574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));t(4866),t(5162);const i={sidebar_label:"Fehlerbehebung",title:"Fehlerbehebung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},l=void 0,o={unversionedId:"help-center/your-account/troubleshoot",id:"help-center/your-account/troubleshoot",title:"Fehlerbehebung",description:"Fehlerbehebung und Zur\xfccksetzen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/troubleshoot.mdx",sourceDirName:"help-center/your-account",slug:"/help-center/your-account/troubleshoot",permalink:"/helpcenter/de/help-center/your-account/troubleshoot",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Fehlerbehebung",title:"Fehlerbehebung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Einstellungen",permalink:"/helpcenter/de/help-center/your-account/account-settings"},next:{title:"Verschl\xfcsselung & Sicherheit",permalink:"/helpcenter/de/help-center/your-account/encryption-security"}},u={},s=[{value:"Allgemein",id:"allgemein",level:2},{value:"Mobil",id:"mobil",level:2},{value:"Browser",id:"browser",level:2},{value:"Browser zur\xfccksetzen",id:"browser-zur\xfccksetzen",level:3},{value:"Chrome",id:"chrome",level:4},{value:"Safari",id:"safari",level:4},{value:"Firefox",id:"firefox",level:4},{value:"Microsoft Edge",id:"microsoft-edge",level:4},{value:"Aufzeichnen von HAR-Dateien",id:"aufzeichnen-von-har-dateien",level:3}],c={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Fehlerbehebung und Zur\xfccksetzen"),(0,a.kt)("h3",null,"Manchmal funktioniert nicht alles wie beabsichtigt. Lesen Sie weiter, um zu erfahren, wie Sie Famedly zur\xfccksetzen k\xf6nnen."))),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Wenn etwas nicht funktioniert, k\xf6nnen Sie unseren Support erreichen, indem Sie auf den Knopf mit einem Fragezeichen (\u2753) klicken. Dies finden Sie in der unteren linken Ecke auf dem Desktop und in der oberen rechten Ecke auf mobilen Ger\xe4ten."),(0,a.kt)("p",null,"Du kannst auch ein Support-Ticket erstellen, indem Sie auf den folgenden Link klicken: ",(0,a.kt)("a",{parentName:"p",href:"https://famedly.atlassian.net/servicedesk/customer/portal/7"},"Support-Ticket erstellen")," ."),(0,a.kt)("h2",{id:"mobil"},"Mobil"),(0,a.kt)("p",null,"Wenn Famedly auf Ihrem mobilen Ger\xe4t nicht korrekt funktioniert, haben Sie folgende M\xf6glichkeiten:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die App neu starten."),(0,a.kt)("li",{parentName:"ul"},"Das mobile Ger\xe4t neu starten.")),(0,a.kt)("h2",{id:"browser"},"Browser"),(0,a.kt)("p",null,"Wenn Famedly im Browser nicht korrekt funktioniert, haben Sie folgende M\xf6glichkeiten:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schlie\xdfen Sie den Browser."),(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie Famedly erneut.")),(0,a.kt)("p",null,'Wenn Famedly nach diesen Schritten immer noch nicht korrekt funktioniert, befolgen Sie bitte die Anweisungen im Kapitel "Browser zur\xfccksetzen" um Ihren Browser zur\xfcckzusetzen.'),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Das Zur\xfccksetzen des App- oder Browser-Caches f\xfchrt zur Abmeldung von Ihrem aktiven Famedly-Konto. Stellen Sie sicher, dass Sie Ihre Anmeldedaten und die Passphrase griffbereit haben, um sich nach dem Zur\xfccksetzen wieder anzumelden und auf das Chat-Backup zugreifen zu k\xf6nnen!")),(0,a.kt)("h3",{id:"browser-zur\xfccksetzen"},"Browser zur\xfccksetzen"),(0,a.kt)("h4",{id:"chrome"},"Chrome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie die Entwickleroptionen mit ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd + Option + i")," f\xfcr Mac oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Strg + Umschalt + i")," f\xfcr Windows."),(0,a.kt)("li",{parentName:"ul"},"Lassen Sie die Entwickler-Konsole ge\xf6ffnet und klicken Sie mit der rechten Maustaste auf die Aktualisierungsschaltfl\xe4che oben."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Cache leeren und erneut laden"),"."),(0,a.kt)("li",{parentName:"ul"},"Navigieren Sie zu ",(0,a.kt)("inlineCode",{parentName:"li"},"Anwendung")," und erweitern Sie die Cookies auf der linken Seite."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie mit der rechten Maustaste auf den Famedly Link und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"L\xf6schen"),".")),(0,a.kt)("h4",{id:"safari"},"Safari"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie das ",(0,a.kt)("inlineCode",{parentName:"li"},"Safari Men\xfc")," in Ihrer Systemleiste und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Einstellungen"),"."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie im Bereich ",(0,a.kt)("inlineCode",{parentName:"li"},"Datenschutz")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Website-Daten verwalten"),"."),(0,a.kt)("li",{parentName:"ul"},'Suche Sie nach "Famedly", w\xe4hlen Sie es aus und klicken Sie dann auf ',(0,a.kt)("inlineCode",{parentName:"li"},"Alle entfernen"),".")),(0,a.kt)("h4",{id:"firefox"},"Firefox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Klicken Sie links neben der URL auf das ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud83d\udd12")," Symbol."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie auf ",(0,a.kt)("inlineCode",{parentName:"li"},"Cookies und Websitedaten l\xf6schen"),"."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie auf ",(0,a.kt)("inlineCode",{parentName:"li"},"Entfernen"),".")),(0,a.kt)("h4",{id:"microsoft-edge"},"Microsoft Edge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie die Entwickleroptionen mit ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd + Option + i")," f\xfcr Mac oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Strg + Umschalt + i")," f\xfcr Windows."),(0,a.kt)("li",{parentName:"ul"},"Lassen Sie die Entwickler-Konsole ge\xf6ffnet und klicken Sie mit der rechten Maustaste auf die Aktualisierungsschaltfl\xe4che oben."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Cache leeren und erneut laden"),"."),(0,a.kt)("li",{parentName:"ul"},"Navigieren Sie zu ",(0,a.kt)("inlineCode",{parentName:"li"},"Anwendung")," und erweitern Sie die Cookies auf der linken Seite."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie mit der rechten Maustaste auf den Famedly Link und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"L\xf6schen"),".")),(0,a.kt)("h3",{id:"aufzeichnen-von-har-dateien"},"Aufzeichnen von HAR-Dateien"),(0,a.kt)("p",null,"HAR ist ein Archivdateiformat, das Informationen \xfcber Ihre Sitzung mit Software aufzeichnet. Wenn Sie ein Problem mit Famedly beheben m\xf6chten, kann es manchmal hilfreich sein, eine HAR-Datei aufzuzeichnen und mit unserem Support zu teilen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/admanager/answer/10358597?hl=de"},"Anleitung f\xfcr Chrome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#opening-the-network-monitor"},"Anleitung f\xfcr Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/#current"},"Anleitung f\xfcr Safari")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network/"},"Edge instructions"))))}m.isMDXComponent=!0}}]);