(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{7931:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var a=o(6750),r=o(431),n=o(6006),i=o(9791),l=o(4552),s=o(7562),d=o(3343),c=o(5457),p=o(8006),u=o(351),v=o(8473),h=o(8539),m=o(3809);function x(e){return(0,m.Z)("MuiButton",e)}let g=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=n.createContext({});var f=o(9268);let Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:o,fullWidth:a,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,v.Z)(t)}`,`size${(0,v.Z)(n)}`,`${i}Size${(0,v.Z)(n)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(n)}`]},c=(0,s.Z)(d,x,l);return(0,r.Z)({},l,c)},z=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,a;let n="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:n,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),C=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},z(e))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},z(e))),$=n.forwardRef(function(e,t){let o=n.useContext(b),s=(0,l.Z)(o,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:u="primary",component:v="button",className:h,disabled:m=!1,disableElevation:x=!1,disableFocusRipple:g=!1,endIcon:z,focusVisibleClassName:$,fullWidth:I=!1,size:R="medium",startIcon:k,type:M,variant:N="text"}=d,B=(0,a.Z)(d,Z),E=(0,r.Z)({},d,{color:u,component:v,disabled:m,disableElevation:x,disableFocusRipple:g,fullWidth:I,size:R,type:M,variant:N}),P=S(E),j=k&&(0,f.jsx)(C,{className:P.startIcon,ownerState:E,children:k}),W=z&&(0,f.jsx)(w,{className:P.endIcon,ownerState:E,children:z});return(0,f.jsxs)(y,(0,r.Z)({ownerState:E,className:(0,i.Z)(o.className,P.root,h),component:v,disabled:m,focusRipple:!g,focusVisibleClassName:(0,i.Z)(P.focusVisible,$),ref:t,type:M},B,{classes:P,children:[j,c,W]}))});var I=$},7095:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var a=o(431),r=o(6750),n=o(6006),i=o(9791),l=o(7562),s=o(5457),d=o(8006),c=o(5991),p=o(8539),u=o(3809);function v(e){return(0,u.Z)("MuiCard",e)}(0,p.Z)("MuiCard",["root"]);var h=o(9268);let m=["className","raised"],x=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},v,t)},g=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),b=n.forwardRef(function(e,t){let o=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=o,s=(0,r.Z)(o,m),c=(0,a.Z)({},o,{raised:l}),p=x(c);return(0,h.jsx)(g,(0,a.Z)({className:(0,i.Z)(p.root,n),elevation:l?8:void 0,ref:t,ownerState:c},s))});var f=b},8235:function(e,t,o){"use strict";o.d(t,{Z:function(){return b}});var a=o(431),r=o(6750),n=o(6006),i=o(9791),l=o(7562),s=o(5457),d=o(8006),c=o(8539),p=o(3809);function u(e){return(0,p.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var v=o(9268);let h=["className","component"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)},x=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=n.forwardRef(function(e,t){let o=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=o,s=(0,r.Z)(o,h),c=(0,a.Z)({},o,{component:l}),p=m(c);return(0,v.jsx)(x,(0,a.Z)({as:l,className:(0,i.Z)(p.root,n),ownerState:c,ref:t},s))});var b=g},7588:function(e,t,o){Promise.resolve().then(o.bind(o,5652))},5652:function(e,t,o){"use strict";o.r(t);var a=o(9268);o(6006);var r=o(7095),n=o(8235),i=o(4240),l=o(7931);t.default=()=>(0,a.jsx)(r.Z,{children:(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(i.Z,{variant:"h5",align:"center",children:"List of articles"}),(0,a.jsx)("p",{children:(0,a.jsx)(l.Z,{size:"small",href:"/upsc/articles/pvtg",children:"Particularly Vulnerable Tribal Group"})})]})})}},function(e){e.O(0,[990,351,667,488,744],function(){return e(e.s=7588)}),_N_E=e.O()}]);