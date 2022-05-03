(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[319],{3905:function(e,A,n){"use strict";n.d(A,{Zo:function(){return f},kt:function(){return d}});var t=n(7294);function i(e,A,n){return A in e?Object.defineProperty(e,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[A]=n,e}function a(e,A){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?a(Object(n),!0).forEach((function(A){i(e,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(n,A))}))}return e}function r(e,A){if(null==e)return{};var n,t,i=function(e,A){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],A.indexOf(n)>=0||(i[n]=e[n]);return i}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var A=t.useContext(s),n=A;return e&&(n="function"==typeof e?e(A):o(o({},A),e)),n},f=function(e){var A=l(e.components);return t.createElement(s.Provider,{value:A},e.children)},c={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},p=t.forwardRef((function(e,A){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?t.createElement(g,o(o({ref:A},f),{},{components:n})):t.createElement(g,o({ref:A},f))}));function d(e,A){var n=arguments,i=A&&A.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var r={};for(var s in A)hasOwnProperty.call(A,s)&&(r[s]=A[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7993:function(e,A,n){"use strict";var t=n(7294);A.Z=function(e){var A=e.src,i=e.title;return t.createElement("div",{className:"container text--center"},t.createElement("figure",null,t.createElement("img",{src:n(7356)("./"+A).default,width:"640","max-width":"100%"}),t.createElement("figcaption",null,t.createElement("em",null,i))))}},9621:function(e,A,n){"use strict";n.r(A),n.d(A,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return p}});var t=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(7993),r=["components"],s={id:"config",title:"Kernel Configuration",sidebar_label:"Kernel Configuration"},l="Kernel Configuration",f={unversionedId:"linux/config",id:"linux/config",title:"Kernel Configuration",description:"Several kernel compilation configuration options control zoned block device",source:"@site/docs/linux/config.md",sourceDirName:"linux",slug:"/linux/config",permalink:"/docs/linux/config",tags:[],version:"current",frontMatter:{id:"config",title:"Kernel Configuration",sidebar_label:"Kernel Configuration"},sidebar:"docs",previous:{title:"Linux Kernel Zoned Storage Support",permalink:"/docs/linux/overview"},next:{title:"Zoned Block Device User Interface",permalink:"/docs/linux/zbd-api"}},c={},p=[{value:"Block Layer",id:"block-layer",level:2},{value:"Zoned Block Devices Core Support",id:"zoned-block-devices-core-support",level:3},{value:"Write Ordering Control",id:"write-ordering-control",level:2},{value:"Device Drivers Configuration",id:"device-drivers-configuration",level:2},{value:"<em>null_blk</em> Logical Device",id:"null_blk-logical-device",level:3},{value:"ZBC and ZAC Hard-Disks Support",id:"zbc-and-zac-hard-disks-support",level:3},{value:"NVMe Zoned Namespace Solid State Disks Support",id:"nvme-zoned-namespace-solid-state-disks-support",level:3},{value:"Device Mapper",id:"device-mapper",level:2},{value:"File Systems",id:"file-systems",level:2},{value:"<em>f2fs</em>",id:"f2fs",level:3},{value:"<em>zonefs</em>",id:"zonefs",level:3},{value:"Kernel Compilation",id:"kernel-compilation",level:2},{value:"Kernel Installation",id:"kernel-installation",level:2}],d={toc:p};function g(e){var A=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kernel-configuration"},"Kernel Configuration"),(0,a.kt)("p",null,"Several kernel compilation configuration options control zoned block device\nsupport features."),(0,a.kt)("h2",{id:"block-layer"},"Block Layer"),(0,a.kt)("h3",{id:"zoned-block-devices-core-support"},"Zoned Block Devices Core Support"),(0,a.kt)("p",null,"To allow supported zoned block devices to be exposed as block device files,\nenable the block-layer configuration option ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED"),". This option\nis part of the ",(0,a.kt)("em",{parentName:"p"},"Enable the block layer")," top menu of ",(0,a.kt)("inlineCode",{parentName:"p"},"make menuconfig"),"."),(0,a.kt)(o.Z,{src:"linux-config-zbd.png",titel:"Block layer zoned block device support option with make menuconfig",mdxType:"Image"}),(0,a.kt)("p",null,"Setting this configuration option gives users access to the ZBD interface. If\nthis configuration option is not set, users do not have access to the ZBD\ninterface and support for zoned block devices is disabled in all kernel\nsubsystems that include support for these devices (this includes I/O schedulers,\ndevice mappers, and file systems)."),(0,a.kt)("h2",{id:"write-ordering-control"},"Write Ordering Control"),(0,a.kt)("p",null,"Write ordering control is achieved through the ",(0,a.kt)("em",{parentName:"p"},"deadline")," (legacy single queue\nblock I/O path) and ",(0,a.kt)("em",{parentName:"p"},"mq-deadline")," (multi-queue block I/O path) block I/O\nscheduler (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/linux/sched"},"Write Ordering Control"),"). ",(0,a.kt)("em",{parentName:"p"},"deadline")," and ",(0,a.kt)("em",{parentName:"p"},"mq-deadline"),"\nzoned block device support is automatically enabled if the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," configuration option is set."),(0,a.kt)("p",null,"It is mandatory to enable this scheduler for zoned block devices. The\nconfiguration option ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_MQ_IOSCHED_DEADLINE")," enables the ",(0,a.kt)("em",{parentName:"p"},"mq-deadline"),"\nscheduler. The configuration option ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_IOSCHED_DEADLINE")," enables the\n",(0,a.kt)("em",{parentName:"p"},"deadline")," scheduler. Both options can be selected from the ",(0,a.kt)("em",{parentName:"p"},"IO Schedulers")," top\nmenu."),(0,a.kt)(o.Z,{src:"linux-config-sched.png",title:"I/O scheduler configuration with make menuconfig",mdxType:"Image"}),(0,a.kt)("p",null,"As of kernel version 5.0, support for the legacy block-layer single-queue I/O\npath has been removed. Only the ",(0,a.kt)("em",{parentName:"p"},"mq-deadline")," scheduler remains. As of kernel\nversion 5.2, ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_MQ_IOSCHED_DEADLINE")," is automatically selected when the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," configuration option is set."),(0,a.kt)("h2",{id:"device-drivers-configuration"},"Device Drivers Configuration"),(0,a.kt)("h3",{id:"null_blk-logical-device"},(0,a.kt)("em",{parentName:"h3"},"null_blk")," Logical Device"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," configuration option automatically enables support\nfor zoned block device emulation that uses the ",(0,a.kt)("em",{parentName:"p"},"null_blk")," device driver."),(0,a.kt)("h3",{id:"zbc-and-zac-hard-disks-support"},"ZBC and ZAC Hard-Disks Support"),(0,a.kt)("p",null,"SCSI subsystem support for ZBC and ZAC SMR disks is automatically enabled with\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," configuration option."),(0,a.kt)("h3",{id:"nvme-zoned-namespace-solid-state-disks-support"},"NVMe Zoned Namespace Solid State Disks Support"),(0,a.kt)("p",null,"The NVM Express Zoned Namespace Command Set depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_NVME_CORE"),". It is automatically built if both of these configuration\noptions are enabled."),(0,a.kt)("p",null,"This driver requires the device to support the Zone Append command to\nsuccessfully bind to a zoned namespace. It does not support Zone Excursions.\nSee ",(0,a.kt)("a",{parentName:"p",href:"../introduction/zns"},"Zoned Namespace (ZNS) SSDs")," for more details about these\nfeatures."),(0,a.kt)("h2",{id:"device-mapper"},"Device Mapper"),(0,a.kt)("p",null,"Zoned block device support for the device mapper subsystem is automatically\nenabled when the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," option is set. This enables support for\n",(0,a.kt)("em",{parentName:"p"},"dm-linear")," and ",(0,a.kt)("em",{parentName:"p"},"dm-flakey")," targets. Note that the ",(0,a.kt)("em",{parentName:"p"},"dm-zoned")," device mapper\ntarget must be enabled to be usable."),(0,a.kt)("p",null,"Enable the ",(0,a.kt)("em",{parentName:"p"},"dm-zoned")," target by selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_DM_ZONED")," option from the\nmenu ",(0,a.kt)("em",{parentName:"p"},"Device Drivers --\x3e Multiple devices driver support (RAID and LVM) --\x3e\nDevice mapper support --\x3e Drive-managed zoned block device target support"),"."),(0,a.kt)(o.Z,{src:"linux-config-dm.png",title:"dm-zoned device mapper target configuration with make menuconfig",mdxType:"Image"}),(0,a.kt)("h2",{id:"file-systems"},"File Systems"),(0,a.kt)("h3",{id:"f2fs"},(0,a.kt)("em",{parentName:"h3"},"f2fs")),(0,a.kt)("p",null,"Support for zoned block devices in the ",(0,a.kt)("a",{parentName:"p",href:"./fs#f2fs"},(0,a.kt)("em",{parentName:"a"},"f2fs")," file system")," is\nautomatically enabled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," configuration option."),(0,a.kt)("h3",{id:"zonefs"},(0,a.kt)("em",{parentName:"h3"},"zonefs")),(0,a.kt)("p",null,"Enable compilation of the ",(0,a.kt)("em",{parentName:"p"},"zonefs")," file system by selecting the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_ZONEFS_FS")," option from the menu ",(0,a.kt)("em",{parentName:"p"},"File systems -> zonefs filesystem\nsupport"),". This option is available only if the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," option is\nset to enable zoned block device support."),(0,a.kt)(o.Z,{src:"linux-config-zonefs.png",title:"zonefs filesystem configuration with make menuconfig",mdxType:"Image"}),(0,a.kt)("h2",{id:"kernel-compilation"},"Kernel Compilation"),(0,a.kt)("p",null,"The kernel compilation process is the same regardless of whether the kernel has\nbeen configured to enable zoned block device support. When the kernel has been\nconfigured to enable zoned block device support, the following commands will\nbuild the kernel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ make all\n")),(0,a.kt)("p",null,"The kernel build infrastructure also allows you to build ",(0,a.kt)("em",{parentName:"p"},".rpm")," or ",(0,a.kt)("em",{parentName:"p"},"i.deb"),"\npackages. To build RPM packages, use the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ make rpm-pkg\n")),(0,a.kt)("h2",{id:"kernel-installation"},"Kernel Installation"),(0,a.kt)("p",null,"The procedure for installing a zoned-block-device-enabled kernel is the same as\nthe procedure for installing a regular kernel. Use the following command to\ninstall the kernel locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo make modules_install install\n")),(0,a.kt)("p",null,"Follow this command by configuring the system bootloader (if your distribution\nrequires it). Some distributions might not require you to configure the system\nbootloader."),(0,a.kt)("p",null,"Then restart the host system to execute the newly-compiled and newly-installed\nkernel, on which you have enabled support for zoned block devices."),(0,a.kt)("p",null,"At this point in the installation process, we highly recommend reinstalling the\nkernel headers. By reinstalling the kernel headers, the file\n",(0,a.kt)("em",{parentName:"p"},"/usr/include/linux/blkzoned.h")," will be installed, which will allow applications\nto be compiled against the ",(0,a.kt)("a",{parentName:"p",href:"./zbd-api"},"zoned block device API")," supported by\nthe kernel."),(0,a.kt)("p",null,"Run the following command to install the kernel user header files. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo make headers_install\n")),(0,a.kt)("p",null,"See the kernel's ",(0,a.kt)("inlineCode",{parentName:"p"},"make help")," output for more information on this directive."),(0,a.kt)("p",null,"After the the kernel user header files have been installed, we recommend that\nyou recompile from source any package that will be used to manage and access\nzoned block devices. In particular, recompiling and re-installing\n",(0,a.kt)("a",{parentName:"p",href:"../tools/util-linux"},"Linux system utilities")," is highly recommended because\nmany packages rely on ",(0,a.kt)("em",{parentName:"p"},"util-linux")," zoned block device features (e.g. file\nsystems that use ",(0,a.kt)("em",{parentName:"p"},"libblkid"),")."),(0,a.kt)("p",null,"The installation of the kernel and the installation of the user header files can\nbe simplified by using the RPM packages that are generated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"make\nrpm-pkg")," command. If you install all of the packages generated by that command,\nyou will install the kernel core itself, the associated driver modules, and the\nuser API herder files. The RPM package ",(0,a.kt)("inlineCode",{parentName:"p"},"kernel-headers-<version>.<arch>.rpm"),"\nmust be installed in order for the kernel user API header files to be updated."))}g.isMDXComponent=!0},5:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-linux-zbd-f4ba5756b82ac441113bd7f9c9dd1dc6.png"},8477:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-smr-tracks-2277a1473f60e1e862f8bb5916422533.png"},6020:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-smr-zones-6296257d2459f5d1872bc28dcfa36ccd.png"},6525:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-zns-128e951b7035733479ad228844c9e7ab.png"},3006:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-zone-append-890c07f2624fe7dcf7c5ee61fe2a6f0b.png"},7702:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-zoned-storage-82ce755eb4ac58c0b289d5bcb8b8c361.png"},1328:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/intro-zonesize-vs-capacity-0f94861db037e13632def2968998b611.png"},26:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-dm-9e8a3c8f8b9a480f921d7d263a9dc113.png"},7690:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-pscsi-e7c9db15cc4aebcf65fb21db3521a144.png"},7876:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-sched-70e55f9f3df2c81df464b476b1c4f636.png"},4659:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-tcm1-7684c969474b143f4f71318501623f6f.png"},6245:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-tcm2-6bbd5067f606b5e32db5520dea899278.png"},2623:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-vhost-21cc5561b882aa8097fb30aa35664908.png"},4959:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-zbd-2e5d1a6b239c372fbd3e44f5e3282ebe.png"},4670:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-config-zonefs-34a6f41797ebee8de18ee798e45eb6ea.png"},672:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-dm-zoned-7f01ae74923ff02b8d01c92fef2d376d.png"},4791:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-iopath-3ad49009873f1211b8e873f9ba540a38.png"},530:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/linux-versions-da4843f4c91f84aa8ef57f001bb6e8f1.png"},9889:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/percona-server-logo-93e864d0f923e386d855f6a8ea67fc8f.png"},308:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tests-zbc-hba-4a57d56fc6c4d400eadc1692b1907a27.png"},8695:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tests-zbc-kernel-166564aae2e5ad8dc156175fbf8f2e85.png"},6312:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-libzbc-gzbc-5d6b525337b567661f392ef6d06ad83e.png"},8920:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-libzbc-9dc574a0bfec08d195e6e4179d6cd272.png"},6925:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-libzbd-gzbd-viewer-63527beb07ac767d890a1b9616c85add.png"},5922:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-libzbd-gzbd-3a358277b4b4b8a9ea5629ce574afad4.png"},5089:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-tcmu-gzbc-11fb58818ee21d5116da8329d0d479af.png"},6479:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/tools-tcmu-dc8b8095c58f25df749406030dcc1b25.png"},9972:function(e,A,n){"use strict";n.r(A),A.default="data:image/vnd.microsoft.icon;base64,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WP/47uz/0YFb/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9KDXf/9+fj/15V6/9GAWf/RgFnf0YBZ/9GAWf/RgFr/04hm/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/26OO//Xp5f/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//br6P/erJn/0YBZ/9GAWf/RgFn/0YBZ/9OIZf/9+/r/0oRf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/ShWH/3amX/+vRyf/37er/2qGM/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/8+Tf/+G1pf/RgFn/0YBZ/9GAWf/RgFn/04hk//79/P/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/dqZf/8d7Z//br5//t1c7/4LKi/9KEYP/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/y4dz/4bSk/9GAWf/RgFn/0YBZ/9GAWf/RgFn//fn4/9eWev/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/4riq//Xo5P/aoYz/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Hf2v/cp5P/0YBZ/9GAWf/RgFnf0YBZ/9GAWf/26ub/4LCg/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/05+T/15V7/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/04hm/9KDXv/RgFn/0YBZ39GAWa7RgFn/0YBZ/+vQyP/s0cn/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ//Xp5v/UjW7/0YBZ/9GAWf/RgFn/0YBZ/9WPcv/htab/0oNf/9GAWf/RgFn/0YBZ/9GAWf/RgFn/0YBZ/+fHvP/58O3/2Jh//9GAWf/RgFmu0YBZb9GAWf/RgFn/3KaS//r08v/ShWH/0YBZ/9GAWf/RgFn/0YBZ/9GAWf/RgFn/5sO4/+3Wz//ShGH/0YBZ/9GAWf/RgVr/79rU////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"},51:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/images/zs-logo-178d9855350307325549778e41354d29.png"},6334:function(e,A,n){"use strict";n.r(A),A.default=n.p+"assets/medias/tools-libzbd-gzbd-viewer-example-b3b4ef97af02e55f8b536f5b1b3c32d0.mp4"},7356:function(e,A,n){var t={"./intro-linux-zbd.png":5,"./intro-smr-tracks.png":8477,"./intro-smr-zones.png":6020,"./intro-zns.png":6525,"./intro-zone-append.png":3006,"./intro-zoned-storage.png":7702,"./intro-zonesize-vs-capacity.png":1328,"./linux-config-dm.png":26,"./linux-config-pscsi.png":7690,"./linux-config-sched.png":7876,"./linux-config-tcm1.png":4659,"./linux-config-tcm2.png":6245,"./linux-config-vhost.png":2623,"./linux-config-zbd.png":4959,"./linux-config-zonefs.png":4670,"./linux-dm-zoned.png":672,"./linux-iopath.png":4791,"./linux-versions.png":530,"./percona-server-logo.png":9889,"./tests-zbc-hba.png":308,"./tests-zbc-kernel.png":8695,"./tools-libzbc-gzbc.png":6312,"./tools-libzbc.png":8920,"./tools-libzbd-gzbd-viewer-example.mp4":6334,"./tools-libzbd-gzbd-viewer.png":6925,"./tools-libzbd-gzbd.png":5922,"./tools-tcmu-gzbc.png":5089,"./tools-tcmu.png":6479,"./zs-logo.ico":9972,"./zs-logo.png":51};function i(e){var A=a(e);return n(A)}function a(e){if(!n.o(t,e)){var A=new Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=a,e.exports=i,i.id=7356}}]);