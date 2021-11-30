"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[878],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"part",title:"Zoned Block Device Partition Support",sidebar_label:"Zoned Block Device Partition Support"},l={unversionedId:"linux/part",id:"linux/part",isDocsHomePage:!1,title:"Zoned Block Device Partition Support",description:"Support for partition tables on zoned block devices depends on the kernel",source:"@site/docs/linux/part.md",sourceDirName:"linux",slug:"/linux/part",permalink:"/zonedstorage.io/docs/linux/part",version:"current",sidebar_label:"Zoned Block Device Partition Support",frontMatter:{id:"part",title:"Zoned Block Device Partition Support",sidebar_label:"Zoned Block Device Partition Support"},sidebar:"docs",previous:{title:"Write Ordering Control",permalink:"/zonedstorage.io/docs/linux/sched"},next:{title:"Device Mapper",permalink:"/zonedstorage.io/docs/linux/dm"}},d=[{value:"Kernel Versions 4.10 to 5.4",id:"kernel-versions-410-to-54",children:[]},{value:"Kernel Versions 5.5 and later",id:"kernel-versions-55-and-later",children:[]}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Support for partition tables on zoned block devices depends on the kernel\nversion being used."),(0,i.kt)("h2",{id:"kernel-versions-410-to-54"},"Kernel Versions 4.10 to 5.4"),(0,i.kt)("p",null,"All kernels from version 4.10.0 (first kernel including zoned block\ndevice support) to version 5.4 support partition tables on zoned block\ndevices. For these kernels, the start sector and the size of the partitions on\nthe zoned block device must be aligned to the zone boundaries of the device.\nIn other words: a partition must start with the first sector of a zone and end\non the last sector of a zone."),(0,i.kt)("p",null,"A zone report operation on a partition device (as opposed to a zone report for\nthe entire container device) reports zone sector information (zone start\nsector and write pointer position) relative to the partition start sector.\nSimilarly, a zone reset operation must specify a target zone range relative to\nthe partition start sector. In effect, a zoned block device partition can be\ntreated exactly like a regular disk: the partition zoned block device is used\nwith a start sector of 0. All zone and IO operations will be executed\ncorrectly, taking into account the partition start sector and size."),(0,i.kt)("p",null,"For host-aware zoned block device models, creating partitions using standard\ntools like ",(0,i.kt)("a",{href:"https://gparted.org",target:"_blank"},"gparted")," works as\nexpected. Because these standard partitioning tools do not have\nzoned-block-device support implemented, users must manually align the partitions\nto the zone's boundaries in order to satisfy kernel constraints. This alignment\nis not automatically done by the partitioning tool."),(0,i.kt)("p",null,"The lack of zoned-block device support for partition management tools\ncan result in write-IO errors for host-managed zoned disk models. If the zones\nthat are used to store the partition table data are sequential write-required\nzones, then the partition tool must be able to write-align (1) the partition\ntable information on the disk with (2) the write pointer position of the zones\nto be written. For instance, with the GUID partition table format, if the last\nzone of the disk is a sequential write required zone, the secondary GPT header\nand table entries will not necessarily be writable at the end of the disk LBA\nspace (the end of the last zone of the disk). Although performing this\nalignment, manually without support from the partition management tool, is\npossible, such a procedure would be very difficult and unreliable."),(0,i.kt)("p",null,"We recommend using the ",(0,i.kt)("a",{parentName:"p",href:"/zonedstorage.io/docs/linux/dm#dm-linear"},(0,i.kt)("em",{parentName:"a"},"dm-linear"))," device mapper\ntarget to isolate smaller portions of large host-managed devices, as this is\na better solution than partitions. Users should assume that partitions are\nnot supported for host-managed zoned block devices."),(0,i.kt)("h2",{id:"kernel-versions-55-and-later"},"Kernel Versions 5.5 and later"),(0,i.kt)("p",null,"As of kernel version 5.5.0, partition support for host-managed zoned\nblock devices is no longer provided. If a well-formatted partition table is\ndetected on a host-managed zoned block device, the kernel will ignore it and\nwill not create the block device files that represent the partitions."),(0,i.kt)("p",null,"For host-aware zoned block devices, partitions are still supported. However,\nthe kernel behavior differs from previous versions. If a valid partition table\nis detected on a host-aware zoned device, the device zone model is changed to\n",(0,i.kt)("em",{parentName:"p"},"none"),", which disables the use of the device and the use of its partitions as\nzoned block devices. In other words, a partitioned host-aware device is, under\nthese conditions, always turned into a logical regular block device. Deleting\nthe device partition table will re-enable the use of the host-aware device as\na zoned block device."))}p.isMDXComponent=!0}}]);