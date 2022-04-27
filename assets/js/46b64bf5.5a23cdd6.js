(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[403],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return p}});var A=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,A,a=function(e,n){if(null==e)return{};var t,A,a={},i=Object.keys(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=A.createContext({}),c=function(e){var n=A.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return A.createElement(r.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},d=A.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,g=d["".concat(r,".").concat(p)]||d[p]||f[p]||i;return t?A.createElement(g,o(o({ref:n},l),{},{components:t})):A.createElement(g,o({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return A.createElement.apply(null,o)}return A.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7993:function(e,n,t){"use strict";var A=t(7294);n.Z=function(e){var n=e.src,a=e.title;return A.createElement("div",{className:"container text--center"},A.createElement("figure",null,A.createElement("img",{src:t(7356)("./"+n).default,width:"640","max-width":"100%"}),A.createElement("figcaption",null,A.createElement("em",null,a))))}},1835:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return g}});var A=t(3117),a=t(102),i=t(7294),o=t(3905),s=t(7993);var r=function(e){var n=e.src,t=e.title,A=e.url;return i.createElement("div",{className:"container text--center"},i.createElement("a",{href:A,target:"_blank"},i.createElement("figure",null,i.createElement("img",{src:n,width:"640","max-width":"100%"}),i.createElement("figcaption",null,i.createElement("em",null,t)))))},c=["components"],l={id:"zns",title:"NVMe Zoned Namespaces (ZNS) SSDs",sidebar_label:"NVMe Zoned Namespaces (ZNS) SSDs"},f="NVMe Zoned Namespaces (ZNS) SSDs",d={unversionedId:"introduction/zns",id:"introduction/zns",title:"NVMe Zoned Namespaces (ZNS) SSDs",description:"Zoned Namespace (ZNS) SSDs represent a new division of functionality between",source:"@site/docs/introduction/zns.md",sourceDirName:"introduction",slug:"/introduction/zns",permalink:"/docs/introduction/zns",tags:[],version:"current",frontMatter:{id:"zns",title:"NVMe Zoned Namespaces (ZNS) SSDs",sidebar_label:"NVMe Zoned Namespaces (ZNS) SSDs"},sidebar:"docs",previous:{title:"Shingled Magnetic Recording",permalink:"/docs/introduction/smr"},next:{title:"Overview",permalink:"/docs/getting-started"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"The ZNS Zoned Storage Model",id:"the-zns-zoned-storage-model",level:2},{value:"Zone types",id:"zone-types",level:3},{value:"Zone Capacity and Zone Size",id:"zone-capacity-and-zone-size",level:3},{value:"Active Zones",id:"active-zones",level:3},{value:"Zone Append",id:"zone-append",level:3},{value:"Presentations",id:"presentations",level:2}],u={toc:g};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,A.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nvme-zoned-namespaces-zns-ssds"},"NVMe Zoned Namespaces (ZNS) SSDs"),(0,o.kt)("p",null,"Zoned Namespace (ZNS) SSDs represent a new division of functionality between\nhost software and flash-based SSDs. A ZNS SSD groups its capacity into zones,\nwhere each zone can be read in any order but must be written sequentially. These\ncharacteristics allow a ZNS SSD to improve its internal data placement and thus\nlead to higher performance through higher write throughput, lower QoS, and\nincreased capacity."),(0,o.kt)("p",null,"ZNS SSDs implement\nthe ",(0,o.kt)("a",{href:"https://nvmexpress.org/developers/nvme-command-set-specifications/",target:"_blank_"},"NVMe ZNS Command Set specification")," as defined by the NVM\nExpress (NVMe) organization and released as part of the NVMe 2.0 specifications.\nThe latest revision available is 1.1."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{href:"https://www.usenix.org/conference/atc21/presentation/bjorling",target:"_blank_"},"ZNS: Avoiding the Flash-Based Block Interface Tax for\nFlash-Based SSDs")," for a deep dive on ZNS SSDs. The article was published\nat USENIX ATC 2021."))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ZNS SSD follows the Zoned Storage Model. This standards-based architecture,\nwhich takes a unified approach to storage that enables both Shingled Magnetic\nRecording (SMR) in HDDs and ZNS SSDs to share a unified software stack.\nSpecifically for ZNS SSDs, the zone abstraction allows the host aligning its\nwrites to the sequential write required properties of flash-based SSDs, and\nthereby optimizes data placement onto the SSD's media. Note that the management\nof media reliability continues to be the sole responsibility of the ZNS SSD and\nshould be managed the same way as conventional SSDs."),(0,o.kt)(s.Z,{src:"intro-zns.png",title:"Conventional SSDs and ZNS SSDs internal data placement",mdxType:"Image"}),(0,o.kt)("h2",{id:"the-zns-zoned-storage-model"},"The ZNS Zoned Storage Model"),(0,o.kt)("p",null,"The ZNS Command Set specification builds upon the existing\n",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/smr#host-managed-model"},"Host Managed Zoned Storage Model")," introduced for SMR\nhard-disks with the SCSI ZBC (Zoned Block Command) standard and the ATA ZAC\n(Zoned ATA Commands) standard. A compatible zone state machine was defined, and\na similar set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/smr#zone-block-commands"},"Zone Block Commands")," was defined."),(0,o.kt)("p",null,"These similarities simplify the implementation of the host storage stack and\napplications for simultaneously supporting both host-managed SMR hard-disks and\nZNS SSDs."),(0,o.kt)("p",null,"Given that ZNS SSDs typically is implemented using non-volatile memory, the ZNS\nspecification introduces extra functionalities to enable this type of media and\nis described below."),(0,o.kt)("h3",{id:"zone-types"},"Zone types"),(0,o.kt)("p",null,"ZBC and ZAC SMR hard-disks can optionally expose a number of conventional zones\nwhich accept random write operations. The ZNS specification does not define this\noptional set of random write zones, as NVMe supports multiple namespace, and\ntherefore can expose a separate namespace that supports conventional I/O\naccesses."),(0,o.kt)("h3",{id:"zone-capacity-and-zone-size"},"Zone Capacity and Zone Size"),(0,o.kt)("p",null,"The ZNS specification introduces the concept of a Zone\nCapacity. This concept is not defined in the ZBC and ZAC standards."),(0,o.kt)("p",null,"Similar to ZBC and ZAC standards, ZNS defines the zone size as the total\nnumber of logical blocks within a zone. A zone capacity is an additional\nper-zone attribute that indicates the number of usable logical blocks within\neach zone, starting from the first logical block of each zone. A zone capacity\nis always smaller or equal to the zone size."),(0,o.kt)("p",null,"This new attribute was introduced to allow for the zone size to remain a power\nof two number of logical blocks (facilitating easy logical block to zone number\nconversions) while allowing optimized mapping of a zone storage capacity to the\nunderlying media characteristics. For instance, in the case a flash based\ndevice, a zone capacity can be aligned to the size of flash erase blocks without\nrequiring that the device implements a power-of-two sized erased block."),(0,o.kt)("p",null,"The figure below illustrates the zone capacity concept."),(0,o.kt)(s.Z,{src:"intro-zonesize-vs-capacity.png",title:"Zone Size and Zone Capacity",mdxType:"Image"}),(0,o.kt)("p",null,"As the logical block addresses between the zone capacity and the end of the\nzone are not mapped to any physical storage blocks, write accesses to\nthese blocks will result in an error. Therefore, reading in this area is handled\nin the same way as when reading unwritted blocks."),(0,o.kt)("p",null,"A zone with a zone capacity smaller than the zone size will be transitioned to a\nfull condition when the number of written blocks equals the zone capacity."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The total namespace capacity reported by a controller is always equal to the\ntotal number of logical blocks defined by the zones. In other words, this\nreported capacity includes unusable logical blocks of zones with a zone capacity\nlower than the zone size. The usable capacity of the namespace is equal to the\nsum of all zones capacities. This usable capacity is always smaller than the\nreported namespace capacity if the namespace contains zones with a zone capacity\nlower than the zone size."))),(0,o.kt)("h3",{id:"active-zones"},"Active Zones"),(0,o.kt)("p",null,"A controller implementation typically requires the allocation of internal\nresources (e.g. a write buffer) to execute write operations into zones.\nTherefore, limitations on the total amount of resources available to the\ncontroller may imply a limit on the total number of zones that can be\nsimultaneously in the implicit open or explicit open conditions. This potential\nlimit on the maximum number of open zones is similarly defined in the ZNS, ZBC,\nand ZAC standards."),(0,o.kt)("p",null,"The ZNS specification however defines an additional limit on the number of zones\nthat can be in the implicit open, explicit open or closed conditions. Any zone\nwith such condition is defined as an active zone and correspond to any zone that\nis being written or that has been only partially written. A ZNS SSD may impose a\nlimit on the maximum number of zones that can be active. This limit is always\nequal or larger than the limit on the maximum number of open zones."),(0,o.kt)("p",null,"This new limit imposes new constraints on user applications. While the maximum\nnumber of open zones of a namespace only limits the number of zones that an\napplication can simultaneously write, the maximum number of active zones imposes\na limit on the number of zones that an application can choose for storing data.\nIf the maximum number of active zones is reached, the application must either\nreset or finish some active zones before being able to chose other zones for\nstoring data."),(0,o.kt)("p",null,"Similar to the limit on the maximum number of open zones, a limit on the\nmaximum number of active zones for a namespace does not affect read operations.\nAny zone that is not offline can always be accessed for reading regardless of\nthe current number of open and active zones."),(0,o.kt)("h3",{id:"zone-append"},"Zone Append"),(0,o.kt)("p",null,"The NVMe specifications allow a device controller to execute commands present\nin the several submission queues available in any order. This has implications\nfor the host IO stack, namely, even if the host submits write commands directed\nat a zone sequentially, the commands may be reordered before they are processed\nand violate the sequential write requirement, resulting in errors. Host software\ncan avoid such error by limiting the number of write commands outstanding per\nzone to one. This can potentially result in poor performance, especially for\nworkloads issuing mostly small write operations."),(0,o.kt)("p",null,"To avoid this problem, the ZNS specification introduced the new ",(0,o.kt)("em",{parentName:"p"},"Zone\nAppend")," command."),(0,o.kt)("p",null,"A zone append command is a write operation that specifies the first\nlogical block of a zone as the write position. When executing the command, the\ndevice controller write the data within the zone indicated, but do so at the\ncurrent zone write pointer position. This change in the write position is\nautomatic and the effective write position for the data is indicated to the host\nthrough the command completion information. This mechanism allows a host to\nsimultaneously submit several zone append operations and let the device process\nthese in any order."),(0,o.kt)("p",null,"The figure below illustrates the differences between regular write operations\nand zone append write operations."),(0,o.kt)(s.Z,{src:"intro-zone-append.png",title:"Regular Writes and Zone Append Writes",mdxType:"Image"}),(0,o.kt)("p",null,"In the example above, the host must issue to the same zone three different\nwrite operations for data A (4KB), B (8KB), and C (16KB). Using regular write\ncommands, this can be done safely only at a write queue depth of 1 per zone,i\nthat is, the host must wait for the completion of an outstanding write\noperation before issuing the next write request. For each write request,\nthe write position must be equal to the zone write pointer position. This result\nin the data being stored in the zone in the same order as issued."),(0,o.kt)("p",null,"Using zone append write operations, the write queue depth constraint is removed\nand the host can issue all three write requests simultaneously. Upon completion\nof all write requests, the zone write pointer position is identical to the\nprevious case as the total amount of data written is equal. However, the\nlocation of the written data within the zone may not correspond to the\nhost command issuing order as the device controller is free to reorder command\nexecution as it sees fit. The host can discover the effective write position\nof each request through the zone append completion information."),(0,o.kt)("h2",{id:"presentations"},"Presentations"),(0,o.kt)("p",null,"The following OCP 2019 Global Summit presentation covers the motivation for\nZNS SSDs, the journey, and a general overview of the interface."),(0,o.kt)(r,{src:"https://img.youtube.com/vi/9yVWb3rbces/0.jpg",title:"From Open-Channel SSDs to Zoned Namespaces, OCP 2019 Global Summit.",url:"https://www.youtube.com/watch?v=9yVWb3rbces",mdxType:"ImageLink"}),(0,o.kt)("p",null,"The following SNIA SDC presentations illustrate how ZNS SSDs can be used with\nreal-world applications."),(0,o.kt)(r,{src:"https://img.youtube.com/vi/qpbBuyYT6fc/0.jpg",url:"https://www.youtube.com/watch?v=qpbBuyYT6fc",title:"File System Native Support of Zoned Block Devices: Regular vs Append\nWrites, SDC2020",mdxType:"ImageLink"}),(0,o.kt)(r,{src:"https://img.youtube.com/vi/FwMQqIGZFsE/0.jpg",title:"Zoned Block Device Support in Hadoop HDFS, SDC2020",url:"https://www.youtube.com/watch?v=FwMQqIGZFsE",mdxType:"ImageLink"}),(0,o.kt)(r,{src:"https://img.youtube.com/vi/cbX3P56Jp0o/0.jpg",title:"Zoned Namespaces (ZNS) SSDs: Disrupting the Storage Industry, SDC2020",url:"https://www.youtube.com/watch?v=cbX3P56Jp0o",mdxType:"ImageLink"}))}m.isMDXComponent=!0},5:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},4659:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},308:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:function(e,n,t){"use strict";t.r(n),n.default="data:image/vnd.microsoft.icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRgFkA0YBZGtGAWW/RgFmu0YBZ39GAWf/RgFn/0YBZ/9GAWf/RgFnf0YBZrtGAWW/RgFka0YBZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRgFkA0YBZP9GAWbbRgFn90YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf3RgFm20YBZP9GAWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZEtGAWaTRgFn/0YBZ/9GAWf/RgFn/0YBZ/9OGYv/ZnYX/3quY/96tm//booz/1Y1u/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZqtGAWRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGAWTXRgFnm0YBZ/9GAWf/RgFn/1Itr/+bCtf/05+L//fv6//r08v/26+j/9urm//nx7v/9+/r/+O/s/+vPxv/YmoL/0YBZ/9GAWf/RgFn/0YBZ5tGAWTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRgFlS0YBZ+tGAWf/RgFn/0oRf/+jHvP/8+Pb/8+Ld/+K4qf/Vj3H/0YBa/9GAWf/RgFn/0YBZ/9OGY//erJn/7dbO//z5+P/w29T/1pJ2/9GAWf/RgFn/0YBZ+tGAWVIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YBZNdGAWfrRgFn/0YBZ/9eWfP/26+f/9ejk/9uijP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/1Y9y/+3Wzv/79/X/4LCg/9GAWf/RgFn/0YBZ+tGAWTUAAAAAAAAAAAAAAAAAAAAAAAAAANGAWRLRgFnm0YBZ/9GAWf/ZnYX/+/Xz/+rNw//Sg13/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+Cwn//79/b/5L2v/9GAWf/RgFn/0YBZ5tGAWRIAAAAAAAAAAAAAAADRgFkA0YBZqtGAWf/RgFn/1pJ1//r08v/mw7f/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9ulkf/8+Pb/4LKi/9GAWf/RgFn/0YBZqtGAWQAAAAAAAAAAANGAWT/RgFn/0YBZ/9GBW//z5N//7dPL/9GAWf/RgFn/1Y9y/+vPx//qz8f/6s/H/+rPx//qz8f/6s/H/+rPx//qz8f/6s/H/+rPx//qz8f/6s/H/96tm//RgFn/0YBZ/9+vnf/89/b/15V5/9GAWf/RgFn/0YBZPwAAAADRgFkA0YBZttGAWf/RgFn/47mq//rz8f/Th2X/0YBZ/9GAWf/Ui2z/+vX0//ju7P/qzcX/6s3F/+rNxf/qzcX/6s3F/+rNxf/qzcX/6s3F/+rNxf/qzcX/3qua/9GAWf/RgFn/0YBZ/+zTy//x3df/0YBZ/9GAWf/RgFm20YBZANGAWRrRgFn90YBZ/9GCXP/48O3/4LOj/9GAWf/RgFn/0YBZ/9GAWf/cqJX//fv6/9+xof/Timn/36+f/+XCtv/lwLT/3auZ/9KDX//RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/1Y1u//z49//an4j/0YBZ/9GAWf3RgFka0YBZb9GAWf/RgFn/4LKh//nx7v/RgVv/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/qzsX///////jx7v/oysD/4bWm/+G2qP/qzsb/9ejl/9iag//RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/7NLJ/+zTy//RgFn/0YBZ/9GAWW/RgFmu0YBZ/9KFYP/8+fj//fr5/9OHZP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9ujjv/58e//4beo/9GAWf/RgFn/0YBZ/9GAWf/aoYv/8+Tg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/cpZH/+vTx/9GAWf/RgFn/0YBZrtGAWd/RgFn/0YBZ/+7Xz//v2dH/0YFa/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU////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"},51:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},7356:function(e,n,t){var A={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":4659,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zs-logo.ico":9972,"./zs-logo.png":51};function a(e){var n=i(e);return t(n)}function i(e){if(!t.o(A,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return A[e]}a.keys=function(){return Object.keys(A)},a.resolve=i,e.exports=a,a.id=7356}}]);