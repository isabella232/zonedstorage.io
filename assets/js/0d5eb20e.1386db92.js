"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[931],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,p=h["".concat(s,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],l={id:"sched",title:"Write Ordering Control",sidebar_label:"Write Ordering Control"},s="Write Ordering Control",d={unversionedId:"linux/sched",id:"linux/sched",title:"Write Ordering Control",description:"Historically, the Linux&reg; kernel block I/O stack (i.e., the block layer and",source:"@site/docs/linux/sched.md",sourceDirName:"linux",slug:"/linux/sched",permalink:"/docs/linux/sched",tags:[],version:"current",frontMatter:{id:"sched",title:"Write Ordering Control",sidebar_label:"Write Ordering Control"},sidebar:"docs",previous:{title:"Zoned Block Device User Interface",permalink:"/docs/linux/zbd-api"},next:{title:"Zoned Block Device Partition Support",permalink:"/docs/linux/part"}},c={},m=[{value:"Zone Write Locking",id:"zone-write-locking",level:2},{value:"Initial Implementation",id:"initial-implementation",level:3},{value:"Improved Implementation: Block I/O Scheduler",id:"improved-implementation-block-io-scheduler",level:3},{value:"Block I/O Scheduler Configuration",id:"block-io-scheduler-configuration",level:2},{value:"Manual Configuration",id:"manual-configuration",level:3},{value:"Automatic Persistent Configuration",id:"automatic-persistent-configuration",level:3}],h={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-ordering-control"},"Write Ordering Control"),(0,o.kt)("p",null,"Historically, the Linux","\xae"," kernel block I/O stack (i.e., the block layer and\nthe SCSI layer) has never guaranteed the exact execution order of block I/O\nrequests. The exact execution order of block I/O requests cannot be guaranteed\ndue to the asynchronous nature of the execution in the kernel of block I/O\nrequests and the necessity of a fine-granularity lock model for the device\nrequest queue (to minimize lock-contention overhead when multiple contexts\nissue I/O requests to a block device at the same time)."),(0,o.kt)("p",null,"A direct result of this design is the inability to give guarantees to a well-\nbehaving ZBD-compliant application that write commands for a zone will be\ndelivered in increasing LBA order (matching the zone sequential write\nconstraint)."),(0,o.kt)("p",null,"To address this problem, the kernel ZBD support adds ",(0,o.kt)("em",{parentName:"p"},"zone write locking")," to\nensure that write requests are processed in order per zone."),(0,o.kt)("h2",{id:"zone-write-locking"},"Zone Write Locking"),(0,o.kt)("p",null,"Zone write locking implements a per-zone write lock to serialize the execution\nof write requests that target the same zone. This feature does not guarantee\nthat write commands are always issued at the location of the zone write\npointer: this is the responsibility of the write I/O issuer. Zone write\nlocking guarantees only that the order in which write commands are issued\nby an application, file system, or device mapper target will be respected by\nthe block I/O stack. A well-behaved user of zoned block devices will thus\navoid unaligned write command failures."),(0,o.kt)("p",null,"Zone write locking does not affect read commands in any way. Read requests are\nnot serialized and processed in exactly the same manner as with regular block\ndevices."),(0,o.kt)("h3",{id:"initial-implementation"},"Initial Implementation"),(0,o.kt)("p",null,"Zone write locking was first implemented in kernel 4.10 in the SCSI disk\ndriver (below the block layer), operating on requests already passed to the\ndevice dispatch queue by the block I/O scheduler."),(0,o.kt)("p",null,"This early implementation relied on the fact that the SCSI layer could delay\nissuing any request to the device. By maintaining a bitmap with one bit per\nzone, the SCSI disk driver marked a zone as ",(0,o.kt)("em",{parentName:"p"},"locked")," whenever it saw a write\ncommand. This algorithm is presented here in more detail:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the next command to be dispatched to the device is not a write command,\nthen the command is dispatched immediately.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the next command to by dispatched is a write command, then the zone\nwrite lock bit for the target zone of the command is inspected."),(0,o.kt)("ol",{type:"a"},(0,o.kt)("li",null,"If the target zone of the write command is not write locked (i.e., the bit is not set), then the zone is locked and the write command issued to the device.  Both operations are atomically executed under the device request queue spinlock."),(0,o.kt)("li",null,"If the target zone is already locked (i.e., the bit is set), then the SCSI disk driver temporarily delays issuing the command to the device until the zone write lock is released."),(0,o.kt)("li",null,"When a write command completes, the zone write lock for the target zone of the command is released and the dispatch process is resumed. This means that if the command at the head of the dispatch queue targets the same zone, then the command can be issued (when the write command completes) (step 2.a).")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Zone write locking that is implemented as shown above also prevents the\nunintended reordering of commands by the SAS HBAs or SATA adapters. The ",(0,o.kt)("em",{parentName:"p"},"AHCI"),"\nspecifications do not define a clear order for issuing commands to devices. As a\nresult, many chipsets are unable to guarantee the proper order of commands."))),(0,o.kt)("p",null,"Although this implementation provides write-ordering guarantees for the legacy\nsingle-queue block I/O path and is not dependent upon any particular HBA, it\nhas several limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Potential performance degradation")," Any write command to any zone results\nin the command dispatch processing being stalled. This prevents all other\ncommand from being dispatched, including read commands. This can limit\nperformance benefits that can be obtained with device-level command\nreordering when operating the device at high queue depth. The extreme case is\nan application issuing a write stream to a zone with asynchronous I/O system\ncalls (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"io_submit()"),"). In this case, the sequential write commands\nwould be queued in sequence in the device dispatch queue, resulting in the\ndrive being operated at a queue depth of one, one write command at a time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"No support for the block multi-queue I/O path")," Unlike the legacy single\nqueue block I/O interface, the multi-queue block I/O implementation does not\nheavily rely on the device queue spin-lock to process block I/O requests\nissued by the disk users (applications or kernel components). This results in\npotential block I/O request reordering happening before requests are passed\non to the device dispatch queue and the ineffectiveness of zone write\nlocking."))),(0,o.kt)("p",null,"These limitations led to the development of a new implementation of zone write\nlocking at a higher level in the I/O stack, using the block layer I/O\nschedulers."),(0,o.kt)("h3",{id:"improved-implementation-block-io-scheduler"},"Improved Implementation: Block I/O Scheduler"),(0,o.kt)("p",null,"By moving zone write locking implementation higher up in the I/O stack, the\nblock multi-queue (and SCSI multi-queue) infrastructure can also be supported.\nThis improvement was added with kernel version 4.16 and the SCSI layer\nimplementation of zone write locking was removed."),(0,o.kt)("p",null,"This new implementation of zone write locking relies on the block layer\n",(0,o.kt)("em",{parentName:"p"},"deadline")," and ",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," I/O schedulers and also addresses the performance\nlimitations of the previous implementation. In detail, the new algorithm is as\nfollows."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("em",{parentName:"p"},"deadline")," and ",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," schedulers operate by grouping commands per\ntype (reads vs writes) and always processsing these two groups of commands\nseparately, e.g. first issuing many reads, then many writes. This improves\nperformance by taking advantage of hardware features such as device-level\nread-ahead."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the scheduler is processing read commands..."),(0,o.kt)("ol",{type:"a"},(0,o.kt)("li",null,"...the first command queued in the list of read commands is allowed to proceed and is submitted to the device dispatch queue."),(0,o.kt)("li",null,"If no read commands are available, activate write processing (step 2)."),(0,o.kt)("li",null,"If the read-command processing time limit is reached, write-command processing (step 2) is activated to avoid write-command starvation."),(0,o.kt)("li",null,"If read commands are still available, restart at step 1."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When processing write commands, the list of write commands queued in the\nscheduler is scanned in order starting with the command at the head of the\nLBA ordered list or the first command in the arrival-time ordered list (when\nthere is a risk of starving commands)."),(0,o.kt)("ol",{type:"a"},(0,o.kt)("li",null,"If the target zone of the first write command is not write locked (zone bitmap bit not set), then the zone is locked and the write command is issued to the device. Both operations are atomically executed under a spinlock maintained by the scheduler."),(0,o.kt)("li",null,"If the target zone is already locked (bit set), the command is skipped and the first write command that targets a different zone is searched for in the LBA ordered list of write commands. If such a command is found, step 2 is executed again."),(0,o.kt)("li",null,"If all queued write commands target locked zones, the scheduler operation mode (batch mode) is switched to *read* and step 1 is called."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When a write command completes, the zone write lock for the target zone of\nthe command is released and the scheduler is activated. Operation is\nresumed at step 1 or 2 depending on the current batch mode."))),(0,o.kt)("p",null,"From this algorithm, it is clear that the device can now be operated at higher\nqueue depth and that only sequential writes that target the same zone will be\nthrottled. All read commands can proceed, always, and write commands that\ntarget different zones do not impact each other."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This new implementation does not guarantee overall command ordering.  Guarantees\nare given only for write commands that target the same zone.  The dispatch order\nof write commands that target different zones may be changed by the scheduler.\nFor any single sequential zone, at any time, there is always at most a single\nwrite command in-flight being executed. Overall disk operation at high queue\ndepth is possible when there are read accesses and if multiple zones are being\nwritten simultaneously."))),(0,o.kt)("h2",{id:"block-io-scheduler-configuration"},"Block I/O Scheduler Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"deadline")," and ",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," schedulers must be enabled in the kernel\ncompilation configuration. Refer to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/linux/config#write-ordering-control"},"Write Ordering Control")," section for details."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The legacy single queue block I/O path was removed from the kernel in version\n5.0. As of kernel version 5.0, the ",(0,o.kt)("em",{parentName:"p"},"deadline")," scheduler cannot be enabled. The\n",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," scheduler is the only ZBD compliant scheduler."))),(0,o.kt)("h3",{id:"manual-configuration"},"Manual Configuration"),(0,o.kt)("p",null,"A system may define a default I/O scheduler other than ",(0,o.kt)("em",{parentName:"p"},"deadline")," or\n",(0,o.kt)("em",{parentName:"p"},"mq-deadline"),". The block I/O scheduler for a zoned block device can be checked\nwith the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /sys/block/sdb/queue/scheduler\n[none] mq-deadline kyber bfq\n")),(0,o.kt)("p",null,"If the block I/O scheduler selected is not ",(0,o.kt)("em",{parentName:"p"},"deadline")," nor ",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," as in\nthe example above, the scheduler can be changed with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"# echo mq-deadline > /sys/block/sdb/queue/scheduler\n# cat sys/block/sdb/queue/scheduler\n[mq-deadline] kyber bfq none\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"deadline")," is an alias for the ",(0,o.kt)("em",{parentName:"p"},"mq-deadline")," scheduler. The following command\ncan therefore be used to get the same results in environments that use the\nlegacy single queue I/O path (kernels 4.16 to 4.20) and environments that use\nthe block multi-queue infrastructure (the sole possibility as of kernel\nversion 5.0)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"# echo deadline > /sys/block/sdb/queue/scheduler\n# cat sys/block/sdb/queue/scheduler\n[mq-deadline] kyber bfq none\n")),(0,o.kt)("h3",{id:"automatic-persistent-configuration"},"Automatic Persistent Configuration"),(0,o.kt)("p",null,"Automatically configuring the ",(0,o.kt)("em",{parentName:"p"},"deadline")," scheduler at system boot time can\nalso be done using a ",(0,o.kt)("em",{parentName:"p"},"udev")," rule. The procedure for defining a new ",(0,o.kt)("em",{parentName:"p"},"udev")," rule\nvaries slightly between distributions. Refer to your distribution\ndocumentation for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'ACTION=="add|change", KERNEL=="sd*[!0-9]", ATTRS{queue/zoned}=="host-managed", ATTR{queue/scheduler}="deadline"\n')),(0,o.kt)("p",null,"This rule sets up the ",(0,o.kt)("em",{parentName:"p"},"deadline")," scheduler for any host-managed zoned block\ndevice found in the system. A host-aware zoned block disk can accept random\nwrites and thus tolerate occasional write reordering within a zone sequential\nwrite stream. Nevertheless, write ordering can be maintained for these disks too\nby using the ",(0,o.kt)("em",{parentName:"p"},"deadline")," scheduler. The above ",(0,o.kt)("em",{parentName:"p"},"udev")," rule modified will\nautomatically enable this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'ACTION=="add|change", KERNEL=="sd*[!0-9]", ATTRS{queue/zoned}=="host-aware", ATTR{queue/scheduler}="deadline"\n')),(0,o.kt)("p",null,"The following single rule enables the ",(0,o.kt)("em",{parentName:"p"},"deadline")," scheduler for any zoned\nblock device, regardless of the device zone model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'ACTION=="add|change", KERNEL=="sd*[!0-9]", ATTRS{queue/zoned}!="none", ATTR{queue/scheduler}="deadline"\n')))}u.isMDXComponent=!0}}]);