"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[754],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||r;return t?o.createElement(u,s(s({ref:n},c),{},{components:t})):o.createElement(u,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9884:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return f}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),s=["components"],i={id:"zns",title:"Linux Tools for ZNS",sidebar_label:"ZNS Tools"},l="ZNS Tools",p={unversionedId:"tools/zns",id:"tools/zns",title:"Linux Tools for ZNS",description:"Zoned namespace support was added to the Linux kernel in version 5.9. The",source:"@site/docs/tools/zns.md",sourceDirName:"tools",slug:"/tools/zns",permalink:"/docs/tools/zns",tags:[],version:"current",frontMatter:{id:"zns",title:"Linux Tools for ZNS",sidebar_label:"ZNS Tools"},sidebar:"docs",previous:{title:"Linux System Utilities",permalink:"/docs/tools/util-linux"},next:{title:"SCSI Generic Utilities",permalink:"/docs/tools/sg3utils"}},c={},f=[{value:"nvme-cli",id:"nvme-cli",level:2},{value:"Identify ZNS Controller",id:"identify-zns-controller",level:3},{value:"Identify ZNS Namespace",id:"identify-zns-namespace",level:3},{value:"Reporting Zones",id:"reporting-zones",level:3},{value:"Resetting a Zone",id:"resetting-a-zone",level:3},{value:"Opening a Zone",id:"opening-a-zone",level:3},{value:"Closing a Zone",id:"closing-a-zone",level:3},{value:"Finishing a Zone",id:"finishing-a-zone",level:3},{value:"Offlining a Zone",id:"offlining-a-zone",level:3},{value:"Zone Append",id:"zone-append",level:3}],d={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zns-tools"},"ZNS Tools"),(0,r.kt)("p",null,'Zoned namespace support was added to the Linux kernel in version 5.9. The\ninitial driver release requires the namespace to implement the "Zone Append"\ncommand in order to work with the kernel\'s block stack.'),(0,r.kt)("h2",{id:"nvme-cli"},"nvme-cli"),(0,r.kt)("p",null,"Open source tooling for zns is provided by ",(0,r.kt)("a",{href:"https://github.com/linux-nvme/nvme-cli",target:"_blank"},"nvme-cli")," in\nthe current master branch (version 1.12 and later).  We recommend that you use\nthe latest version. "),(0,r.kt)("p",null,"The ZNS-specific commands all use the ",(0,r.kt)("em",{parentName:"p"},"zns")," command line prefix. See more ",(0,r.kt)("em",{parentName:"p"},"zns"),"\ncommands by running the ",(0,r.kt)("em",{parentName:"p"},"zns help")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns help\nnvme-1.12\nusage: nvme zns <command> [<device>] [<args>]\n\nThe '<device>' may be either an NVMe character device (ex: /dev/nvme0) or an\nnvme block device (ex: /dev/nvme0n1).\n\nZoned Namespace Command Set\n\nThe following are all implemented sub-commands:\n  id-ctrl             Retrieve ZNS controller identification\n  id-ns               Retrieve ZNS namespace identification\n  zone-mgmt-recv      Sends the zone management receive command\n  zone-mgmt-send      Sends the zone management send command\n  report-zones        Retrieve the Report Zones report\n  close-zone          Closes one or more zones\n  finish-zone         Finishes one or more zones\n  open-zone           Opens one or more zones\n  reset-zone          Resets one or more zones\n  offline-zone        Offlines one or more zones\n  set-zone-desc       Attaches zone descriptor extension data\n  zone-append         Writes data and metadata (if applicable), appended to the end of the requested zone\n  changed-zone-list   Retrieves the changed zone list log\n")),(0,r.kt)("h3",{id:"identify-zns-controller"},"Identify ZNS Controller"),(0,r.kt)("p",null,"The Zoned Namespace Command Set specification currently defines only one field\nin the command set's Identify Controller: the Zone Append Size Limit (ZASL).\nThe Zone Append Size Limit (ZASL) encodes the maximum command size for a Zone\nAppend command. The example below returns '5', which corresponds to 128k bytes\n(the maximum size that can be appended in this example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns id-ctrl /dev/nvme1n1\nNVMe ZNS Identify Controller:\nzasl    : 5\n")),(0,r.kt)("h3",{id:"identify-zns-namespace"},"Identify ZNS Namespace"),(0,r.kt)("p",null,"Information specific to a Zoned Namespace can be found in this command set's\nIdentify Namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns id-ns /dev/nvme1n1\nZNS Command Set Identify Namespace:\nzoc     : 0\nozcs    : 1\nmar     : 0xffffffff\nmor     : 0xffffffff\nrrl     : 0\nfrl     : 0\nlbafe  0: zsze:0x100000 zdes:0 (in use)\n")),(0,r.kt)("p",null,"Find more detailed information with the '-H' (human readable) option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns id-ns /dev/nvme1n1  -H\nZNS Command Set Identify Namespace:\nzoc     : 0   Zone Operation Characteristics\n  [1:1] : 0     Zone Active Excursions: No\n  [0:0] : 0     Variable Zone Capacity: No\n\nozcs    : 1   Optional Zoned Command Support\n  [2:2] : 0x1   Read Across Zone Boundaries: Yes\n\nmar     : 0xffffffff\nmor     : 0xffffffff\nrrl     : Not Reported\nfrl     : Not Reported\nLBA Format Extension  0 : Zone Size: 0x100000 LBAs - Zone Descriptor Extension Size: 0 bytes (in use)\n")),(0,r.kt)("p",null,"If you want to process the output with another script, you can request a more\ncomputer-friendly json format by using the '-o json' option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'# nvme zns id-ns /dev/nvme1n1  -o json\n{\n  "zoc" : 0,\n  "ozcs" : 1,\n  "mar" : 4294967295,\n  "mor" : 4294967295,\n  "rrl" : 0,\n  "frl" : 0,\n  "lbafe" : [\n    {\n      "zsze" : 1048576,\n      "zdes" : 0\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"reporting-zones"},"Reporting Zones"),(0,r.kt)("p",null,"The 'report-zones' command provides information on individual zones, including\ntheir current zone state and write pointer. The following example retreives the\nfirst 10 zone descriptors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 10\nnr_zones: 373\nSLBA: 0x0        WP: 0x2000     Cap: 0x100000   State: IMP_OPENED   Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x200000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x300000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x400000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x500000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x600000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x700000   WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x800000   WP: 0x8c1000   Cap: 0x100000   State: IMP_OPENED   Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x900000   WP: 0x900000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"resetting-a-zone"},"Resetting a Zone"),(0,r.kt)("p",null,"To reset the write pointer and return a zone to the EMPTY state, use the\n'zone-reset' command. The following example resets all zones (the '-a'\noption means \"all zones\") (WARNING: this effectively deletes the zone's data)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns reset-zone /dev/nvme1n1 -a\nzns-reset-zone: Success, action:4 zone:0 nsid:1\n")),(0,r.kt)("p",null,"'report-zones' now shows that all the zones have been reset to the empty state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 10\nnr_zones: 373\nSLBA: 0x0        WP: 0x0        Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x200000   WP: 0x200000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x300000   WP: 0x300000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x400000   WP: 0x400000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x500000   WP: 0x500000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x600000   WP: 0x600000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x700000   WP: 0x700000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x800000   WP: 0x800000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x900000   WP: 0x900000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"opening-a-zone"},"Opening a Zone"),(0,r.kt)("p",null,"Explicitly opening a zone makes it ready for immediate write access and\nconsumes an Open Resource. Run this command to open the first zone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns open-zone /dev/nvme1n1\nzns-open-zone: Success, action:3 zone:0 nsid:1\n")),(0,r.kt)("p",null,"Verify its current state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 2\nnr_zones: 373\nSLBA: 0x0        WP: 0x0        Cap: 0x100000   State: EXP_OPENED   Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"closing-a-zone"},"Closing a Zone"),(0,r.kt)("p",null,"Closing the zone releases the open resource and can be done on both explicitly\nopen zones and implicitly open zones. Run this command to close the first zone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns close-zone /dev/nvme1n1\nzns-close-zone: Success, action:1 zone:0 nsid:1\n")),(0,r.kt)("p",null,"Verify its current state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 2\nnr_zones: 373\nSLBA: 0x0        WP: 0x0        Cap: 0x100000   State: CLOSED       Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"finishing-a-zone"},"Finishing a Zone"),(0,r.kt)("p",null,"Finishing a zone sets its state to 'full'. Run this command to finish the first\nzone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns finish-zone /dev/nvme1n1\nzns-finish-zone: Success, action:2 zone:0 nsid:1\n")),(0,r.kt)("p",null,"Verify its current state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 2\nnr_zones: 373\nSLBA: 0x0        WP: 0xffffffffffffffff Cap: 0x100000   State: FULL         Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"offlining-a-zone"},"Offlining a Zone"),(0,r.kt)("p",null,"Offlining a zone makes the zone inaccessible. The data on the offlined zone\nwill no longer be accessible, and writes to the zone will not be possible until\nthe zone is reset. Run this command to offline the first zone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns offline-zone /dev/nvme1n1\nzns-offline-zone: Success, action:5 zone:0 nsid:1\n")),(0,r.kt)("p",null,"Verify its current state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 2\nnr_zones: 373\nSLBA: 0x0        WP: 0          Cap: 0x100000   State: OFFLINE      Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")),(0,r.kt)("h3",{id:"zone-append"},"Zone Append"),(0,r.kt)("p",null,"You can append data to specific zones. In this method, you specify only which zone to append data to. The device returns the LBA where it stored the data. Below are some examples:"),(0,r.kt)("p",null,'Append "hello world" to the first zone block (512 bytes in this example):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'# echo "hello world" | nvme zns zone-append /dev/nvme1n1 -z 512\nSuccess appended data to LBA 0\n')),(0,r.kt)("p",null,"Read the data back from LBA 0 to verify that it saved our data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme read /dev/nvme1n1 -z 512\nhello world\nread: Success\n")),(0,r.kt)("p",null,"Append more data and verify its contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'# echo "goodbye world" | nvme zns zone-append /dev/nvme1n1 -z 512\nSuccess appended data to LBA 1\n\n# nvme read /dev/nvme1n1 -z 512 -s 1\ngoodbye world\nread: Success\n')),(0,r.kt)("p",null,'Because two blocks have been appended to zone 0, we can check the current\n"report-zones" output to verify the current write pointer: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# nvme zns report-zones /dev/nvme1n1 -d 2\nnr_zones: 373\nSLBA: 0x0        WP: 0x2        Cap: 0x100000   State: IMP_OPENED   Type: SEQWRITE_REQ   Attrs: 0x0\nSLBA: 0x100000   WP: 0x100000   Cap: 0x100000   State: EMPTY        Type: SEQWRITE_REQ   Attrs: 0x0\n")))}m.isMDXComponent=!0}}]);