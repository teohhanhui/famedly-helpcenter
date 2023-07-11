"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[62],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>k});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,h=u(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||r;return t?i.createElement(k,a(a({ref:n},h),{},{components:t})):i.createElement(k,a({ref:n},h))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[d]="string"==typeof e?e:l,a[1]=u;for(var o=2;o<r;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(7294),l=t(6010);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:t,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,a),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var i=t(7462),l=t(7294),r=t(6010),a=t(2466),u=t(6550),c=t(1980),o=t(7392),h=t(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}function s(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const i=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=s(e),[a,u]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,o]=k({queryString:t,groupId:i}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,h.Nk)(t);return[i,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=c??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),p(e)}),[o,p,r]),tabValues:r}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:u,selectValue:c,tabValues:o}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),s=e=>{const n=e.currentTarget,t=h.indexOf(n),i=o[t].value;i!==u&&(d(n),c(i))},m=e=>{let n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:a}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>h.push(e),onKeyDown:m,onClick:s},a,{className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":u===n})}),t??n)})))}function S(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function y(e){const n=p(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,i.Z)({},e,n)),l.createElement(S,(0,i.Z)({},e,n)))}function N(e){const n=(0,b.Z)();return l.createElement(y,(0,i.Z)({key:String(n)},e))}},4547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var i=t(7462),l=(t(7294),t(3905)),r=t(4866),a=t(5162);t(4996);const u={sidebar_label:"Nachrichten",title:"Nachrichten",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},c=void 0,o={unversionedId:"help-center/using-famedly/messages",id:"help-center/using-famedly/messages",title:"Nachrichten",description:"Nachrichten",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/messages.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/messages",permalink:"/helpcenter/de/help-center/using-famedly/messages",draft:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/help-center/using-famedly/messages.mdx",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1689082207,formattedLastUpdatedAt:"11. Juli 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Nachrichten",title:"Nachrichten",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:3},sidebar:"helpcenterSidebar",previous:{title:"Chats",permalink:"/helpcenter/de/help-center/using-famedly/chats"},next:{title:"Dateien teilen",permalink:"/helpcenter/de/help-center/using-famedly/share-files"}},h={},d=[{value:"Nachrichten senden",id:"nachrichten-senden",level:2},{value:"Neue Nachrichten lesen",id:"neue-nachrichten-lesen",level:2},{value:"Nachrichten bearbeiten",id:"nachrichten-bearbeiten",level:2},{value:"Nachrichten l\xf6schen",id:"nachrichten-l\xf6schen",level:2},{value:"Auf Nachrichten antworten",id:"auf-nachrichten-antworten",level:2},{value:"Emojis zu Ihren Nachrichten hinzuf\xfcgen",id:"emojis-zu-ihren-nachrichten-hinzuf\xfcgen",level:2},{value:"Mit einem Emoji auf eine Nachricht reagieren",id:"mit-einem-emoji-auf-eine-nachricht-reagieren",level:2},{value:"Reaktionen hinzuf\xfcgen",id:"reaktionen-hinzuf\xfcgen",level:3},{value:"Reaktionen entfernen",id:"reaktionen-entfernen",level:3},{value:"Jemanden in einer Nachricht erw\xe4hnen",id:"jemanden-in-einer-nachricht-erw\xe4hnen",level:2},{value:"Nachrichten weiterleiten",id:"nachrichten-weiterleiten",level:2},{value:"Nachrichteninhalt melden",id:"nachrichteninhalt-melden",level:2},{value:"Einsehen wer Nachrichten gelesen hat",id:"einsehen-wer-nachrichten-gelesen-hat",level:2},{value:"Nachrichten formatieren",id:"nachrichten-formatieren",level:2}],s={toc:d},m="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"hero hero--primary"},(0,l.kt)("div",{class:"container"},(0,l.kt)("h2",{class:"hero__title"},"Nachrichten"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Ein Dokument hinzuf\xfcgen"),(0,l.kt)("li",null,"Eine Sprachnachricht aufnehmen"),(0,l.kt)("li",null,"Ein Emoji hinzuf\xfcgen"),(0,l.kt)("li",null,"Jemand erw\xe4hnen"),(0,l.kt)("li",null,"Nachrichten weiterleiten")))),(0,l.kt)("h2",{id:"nachrichten-senden"},"Nachrichten senden"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Gruppenchat oder Privatchat, an den Sie eine Nachricht senden m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das Nachrichtenfeld."),(0,l.kt)("li",null,"Geben Sie Ihre Nachricht ein und f\xfcgen Sie alle gew\xfcnschten Emoji, Erw\xe4hnungen oder Formatierungen hinzu."),(0,l.kt)("li",null,"Dr\xfccken Sie ",(0,l.kt)("b",null,"Enter")," oder klicken Sie auf den ",(0,l.kt)("b",null,"Pfeil"),", um diese zu senden."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"\xd6ffnen Sie den Gruppenchat oder Privatchat, an den Sie eine Nachricht senden m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf das Nachrichtenfeld."),(0,l.kt)("li",null,"Geben Sie Ihre Nachricht ein und f\xfcgen Sie alle gew\xfcnschten Emoji, Erw\xe4hnungen oder Formatierungen hinzu."),(0,l.kt)("li",null,"Tippen Sie auf den ",(0,l.kt)("b",null,"Pfeil"),", um sie zu senden.")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Mit Shift + Eingabe k\xf6nnen Sie in eine neue Zeile springen.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"neue-nachrichten-lesen"},"Neue Nachrichten lesen"),(0,l.kt)("p",null,"Wird ein Gruppenchat oder Privatchat Chat-Liste\xa0",(0,l.kt)("b",null,"fett"),"\xa0angezeigt, bedeutet das, dass es in der Unterhaltung ungelesene Nachrichten gibt. Klicken oder tippen Sie auf den fetten Konversationsnamen, um die ungelesenen Nachrichten anzuzeigen."),(0,l.kt)("p",null,"Weil sich gelegentlich Fehler einschleichen, ist es in Famedly m\xf6glich, Nachrichten zu bearbeiten und zu l\xf6schen."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nachrichten-bearbeiten"},"Nachrichten bearbeiten"),(0,l.kt)("p",null,"Standardm\xe4\xdfig k\xf6nnen alle Mitglieder ihre Nachrichten bearbeiten."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Bewegen Sie den Cursor \xfcber die Nachricht, die Sie bearbeiten m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das \u270e ",(0,l.kt)("b",null,"Bleistift-Symbol"),"."),(0,l.kt)("li",null,"Bearbeiten Sie Ihre Nachricht im Textfeld."),(0,l.kt)("li",null,"Klicken Sie auf das \u2192",(0,l.kt)("b",null,"Senden Symbol"),"."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf die Nachricht, die Sie bearbeiten m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie ",(0,l.kt)("b",null,"Bearbeiten")," um \xc4nderungen vorzunehmen."),(0,l.kt)("li",null,"Bearbeiten Sie Ihre Nachricht im Textfeld."),(0,l.kt)("li",null,"Tippen Sie auf das \u2714\ufe0f ",(0,l.kt)("b",null,"H\xe4kchen Symbol")," um den Prozess abzuschlie\xdfen.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"nachrichten-l\xf6schen"},"Nachrichten l\xf6schen"),(0,l.kt)("p",null,"Standardm\xe4\xdfig k\xf6nnen alle Mitglieder ihre Nachrichten l\xf6schen."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Das L\xf6schen einer Nachricht ist permanent, also \xfcberlegen Sie es sich vorher gut.")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Bewegen Sie den Mauszeiger \xfcber die Nachricht, die Sie bearbeiten m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"Papierkorb-Symbol"),"."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Ja"),", um zu best\xe4tigen."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf die Nachricht, die Sie l\xf6schen m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"L\xf6schen"),", um die Nachricht zu l\xf6schen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Ja"),", um zu best\xe4tigen.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"auf-nachrichten-antworten"},"Auf Nachrichten antworten"),(0,l.kt)("p",null,"Mit der Antwortfunktion k\xf6nnen Sie in Gruppenchat oder Privatchat auf eine bestimmte Nachricht antworten."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Bewegen Sie den Mauszeiger \xfcber die Nachricht, die Sie beantworten m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"Antwort-Symbol"),"."),(0,l.kt)("li",null,"Geben Sie Ihre Antwort in das Textfeld ein."),(0,l.kt)("li",null,"Dr\xfccken Sie ",(0,l.kt)("b",null,"Enter")," oder klicken Sie auf den ",(0,l.kt)("b",null,"Pfeil"),", um die Antwort zu senden."))),(0,l.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf die Nachricht, die Sie beantworten m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Antwort"),"."),(0,l.kt)("li",null,"Geben Sie Ihre Antwort in das Textfeld ein."),(0,l.kt)("li",null,"Klicken Sie auf das ",(0,l.kt)("b",null,"Senden Symbol"),", um die Antwort zu senden.")))),(0,l.kt)("h2",{id:"emojis-zu-ihren-nachrichten-hinzuf\xfcgen"},"Emojis zu Ihren Nachrichten hinzuf\xfcgen"),(0,l.kt)("p",null,"Emojis sind eine Bilddarstellung von den textbasierten Emoticons. In Famedly sind Emojis sowohl unterhaltsam als auch\xa0praktisch f\xfcr effizienteres Arbeiten: Verwenden Sie Emojis, um ihre Nachrichten zu verfeinern oder f\xfcgen Sie Emoji-Reaktionen einer Nachricht hinzu, um schnell darauf zu reagieren."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"macos",label:"MacOS",default:!0,mdxType:"TabItem"},"Benutzen Sie die Emoji-Tastatur um ein Emoji zu versenden. Bitte schauen Sie sich den Link unten an, um zu sehen, wie Sie die Emoji-Tastatur \xf6ffnen k\xf6nnen.",(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-de/guide/mac-help/mchlp1560/mac#:~:text=Press%20Control-Command-Space.,and%20choose%20Show%20Emoji%20%26%20Symbols.&text=-E%20(if%20the%20Globe%20key,is%20available%20on%20the%20keyboard)."},"Mehr Informationen"))),(0,l.kt)(a.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"To send an emoji on windows, type ",(0,l.kt)("code",null,"windows-logo")," + ",(0,l.kt)("code",null,".")," to open the emoji keyboard"))),(0,l.kt)(a.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tap the message box to open the keyboard."),(0,l.kt)("li",null,"Tap the ",(0,l.kt)("b",null,"Emoji")," or ",(0,l.kt)("b",null,"Globe")," button on the keyboard."),(0,l.kt)("li",null,"Tap on an emoji to add it to your message."))),(0,l.kt)(a.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Use the native emoji keyboard of your system to insert an emoji.")))),(0,l.kt)("h2",{id:"mit-einem-emoji-auf-eine-nachricht-reagieren"},"Mit einem Emoji auf eine Nachricht reagieren"),(0,l.kt)("p",null,"Oftmals kann eine weitere Nachricht durch eine Emoji-Reaktion ersetzt werden. Sie k\xf6nnen sehen wer mit einem Emoji reagiert hat, indem Sie mit der Maus oder mit dem Finger die Emoji-Reaktion gedr\xfcckt halten."),(0,l.kt)("h3",{id:"reaktionen-hinzuf\xfcgen"},"Reaktionen hinzuf\xfcgen"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf die Nachricht, worauf Sie reagieren wollen."),(0,l.kt)("li",null,"W\xe4hlen Sie einen Emoji aus den Vorschl\xe4gen oder klicken Sie auf das ",(0,l.kt)("b",null,"\uff0b Plus-Symbol")," um ein anderes Emoji auszuw\xe4hlen."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf die Nachricht, worauf Sie reagieren wollen."),(0,l.kt)("li",null,"W\xe4hlen Sie einen Emoji aus den Vorschl\xe4gen oder tippen Sie auf das ",(0,l.kt)("b",null,"\uff0b Plus-Symbol")," um ein anderes Emoji auszuw\xe4hlen.")))),(0,l.kt)("h3",{id:"reaktionen-entfernen"},"Reaktionen entfernen"),(0,l.kt)("p",null,"Klicken oder tippen Sie einfach auf die Reaktion unter der Nachricht, um sie wieder zu entfernen."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen nur Ihre eigenen Reaktionen l\xf6schen.")),(0,l.kt)("h2",{id:"jemanden-in-einer-nachricht-erw\xe4hnen"},"Jemanden in einer Nachricht erw\xe4hnen"),(0,l.kt)("p",null,"Indem Sie mit dem @ jemanden in einer Nachricht erw\xe4hnen, k\xf6nnen Sie Personen direkt \xfcber etwas benachrichtigen, dass ihre Aufmerksamkeit in Famedly erfordert. Erfahren Sie, wie Sie Personen in Ihren Nachrichten erw\xe4hnen k\xf6nnen."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Schreiben Sie das ",(0,l.kt)("b",null,"@-Symbol"),", wenn Sie eine Nachricht schreiben."),(0,l.kt)("li",null,"Geben Sie den Namen eines Persons ein oder w\xe4hlen Sie eine Person aus der Liste. Sie k\xf6nnen diesen Schritt wiederholen f\xfcr jede Person, die Sie in einer Nachricht erw\xe4hnen wollen."),(0,l.kt)("li",null,"Verschicken Sie die Nachricht."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Schreiben Sie das ",(0,l.kt)("b",null,"@-Symbol")," in die Nachrichtenleiste."),(0,l.kt)("li",null,"Geben Sie den Namen von der Person, die Sie erw\xe4hnen wollen ein oder w\xe4hlen Sie sie aus der Liste aus. Sie k\xf6nnen diesen Schritt f\xfcr jede Person wiederholen, die Sie in Ihrer Nachricht erw\xe4hnen m\xf6chten."),(0,l.kt)("li",null,"Senden Sie Ihre Nachricht.")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen nur Personen erw\xe4hnen die Mitglieder der Unterhaltung sind, sowohl in private Unterhaltungen als auch in Gruppenchats. Wenn Sie eine Person erw\xe4hnen wollen, die nicht Mitglied der Gruppe ist, muss diese Person zuerst der Gruppe hinzugef\xfcgt werden.")),(0,l.kt)("h2",{id:"nachrichten-weiterleiten"},"Nachrichten weiterleiten"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf die Nachricht, die Sie weiterleiten m\xf6chten."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Nachricht weiterleiten")),(0,l.kt)("li",null,"W\xe4hlen Sie die Unterhaltung, in die Sie die Nachricht weiterleiten m\xf6chten."))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Tippen Sie auf die Nachricht, die Sie weiterleiten m\xf6chten."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Nachricht weiterleiten")),(0,l.kt)("li",null,"W\xe4hlen Sie die Unterhaltung, in die Sie die Nachricht weiterleiten m\xf6chten.")))),(0,l.kt)("h2",{id:"nachrichteninhalt-melden"},"Nachrichteninhalt melden"),(0,l.kt)("p",null,"Die Nachricht wird dem Administrator Ihrer Organisation gemeldet."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf die Nachricht, die Sie melden wollen."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Anst\xf6\xdfigen Inhalt melden")))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Halten Sie die Nachricht gedr\xfcckt mit der Maus oder mit Ihrem Finger."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"Anst\xf6\xdfigen Inhalt melden"))))),(0,l.kt)("h2",{id:"einsehen-wer-nachrichten-gelesen-hat"},"Einsehen wer Nachrichten gelesen hat"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Klicken Sie auf die Nachricht, von der Sie wissen wollen, wer sie gelesen hat."),(0,l.kt)("li",null,"Klicken Sie auf ",(0,l.kt)("b",null,"Gelesen")))),(0,l.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null,"Halten Sie die Nachricht lange gedr\xfcckt, von der Sie wissen wollen, wer sie gelesen hat."),(0,l.kt)("li",null,"Tippen Sie auf ",(0,l.kt)("b",null,"gelesen"))))),(0,l.kt)("h2",{id:"nachrichten-formatieren"},"Nachrichten formatieren"),(0,l.kt)("p",null,"Mit Hilfe der Formatierung k\xf6nnen Sie Ihre Nachrichten in Famedly detaillierter und klarer gestalten. Sie k\xf6nnen Markup-Sprache verwenden und den Text von ausgew\xe4hlten Sonderzeichen umgeben."),(0,l.kt)("p",null,"Wenn Sie Famedly auf Ihrem Desktop oder mobil verwenden, k\xf6nnen Sie Nachrichten mit diesen Befehlen formatieren."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fett"),(0,l.kt)("td",{parentName:"tr",align:null},"Text mit Sternen umgeben: ",(0,l.kt)("strong",{parentName:"td"},"Ihr Text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kursiv"),(0,l.kt)("td",{parentName:"tr",align:null},"Text mit Unterstrichen umgeben: ",(0,l.kt)("em",{parentName:"td"},"Ihr Text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Durchgestrichen"),(0,l.kt)("td",{parentName:"tr",align:null},"Text mit Tilden umgeben: ~Ihr Text~")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code"),(0,l.kt)("td",{parentName:"tr",align:null},"Text mit Backticks umgeben: ",(0,l.kt)("inlineCode",{parentName:"td"},"Ihr Text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zitat"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie eine spitze Klammer vor den Text: >Ihr Text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code block"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie drei Backticks vor und nach dem Text hinzu: ",(0,l.kt)("inlineCode",{parentName:"td"},"Ihr Text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xdcberschrift 1"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie eine Route ein und dr\xfccken Sie die Leertaste vor dem Text: # Ihr Text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xdcberschrift 2"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie zwei Routen ein und dr\xfccken Sie die Leertaste vor dem Text: ## Ihr Text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xdcberschrift 3"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie drei Routen ein und dr\xfccken Sie die Leertaste vor dem Text: ### Ihr Text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.  Nummerierte Liste"),(0,l.kt)("td",{parentName:"tr",align:null},"Schreiben Sie 1 und einen Punkt und dann ein Leerzeichen vor dem Text: 1. Ihr Text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-   Aufz\xe4hlungsliste"),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfcgen Sie ein Sternchen und ein Leerzeichen vor Ihrem Text ein.")))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);