"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[972],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5653:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"index",title:"Overview",sidebar_label:"Overview",slug:"/linux"},c={unversionedId:"linux/index",id:"linux/index",isDocsHomePage:!1,title:"Linux Kernel Support",description:"This collection of articles describes Linux&reg; kernel features supporting",source:"@site/docs/linux/index.md",sourceDirName:"linux",slug:"/linux",permalink:"/zonedstorage.io/docs/linux",version:"current",sidebar_label:"Overview",frontMatter:{id:"index",title:"Overview",sidebar_label:"Overview",slug:"/linux"},sidebar:"docs",previous:{title:"Getting Started with Emulated NVMe ZNS Devices",permalink:"/zonedstorage.io/docs/getting-started/zns-emulation"},next:{title:"Linux Zoned Storage Support Overview",permalink:"/zonedstorage.io/docs/linux/overview"}},p=[],u={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This collection of articles describes Linux","\xae"," kernel features supporting\nzoned storage devices."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/overview"},"Support Overview"),": See an overview of Linux kernel and Linux\necosystem support for zoned block devices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/config"},"Enabling Zoned Block Device Support"),": Learn how to configure,\ncompile and install a Linux kernel to enable zoned block device support.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/zbd-api"},"User Interface"),": Learn about the user application programming\ninterface provided by the kernel for managing and accessing zoned block\ndevices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/sched"},"Write Command Ordering"),": Learn how the kernel handles sequential\nwrite operations to zones to ensure a correct execution on zoned block\ndevices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/part"},"Partitions"),": Learn more about the kernel support for partition\ntables on zoned block devices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/dm"},"Device Mapper"),": Learn how to use the device mapper infrastructure and\nsetup device mapper targets with zoned block devices as backend storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/fs"},"File Systems"),": Learn about Linux native file systems support for\nzoned block devices."))))}s.isMDXComponent=!0}}]);