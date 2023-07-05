"use strict";(self.webpackChunk_trufflesone_truffles_ui=self.webpackChunk_trufflesone_truffles_ui||[]).push([[195],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithHelperText:()=>WithHelperText,WithInfoText:()=>WithInfoText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),utils=__webpack_require__("./src/lib/utils.ts"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=react.forwardRef((({className,type,infoText,helperText,...props},ref)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-end items-center relative",children:[(0,jsx_runtime.jsx)("input",{type,className:(0,utils.cn)("flex h-9 w-full rounded-md border border-grey-100 bg-white px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:bg-grey-50 disabled:placeholder:text-grey-300 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-800",className),ref,...props}),"text"===type&&infoText&&infoText.trim().length>0&&(0,jsx_runtime.jsx)("div",{className:"absolute mr-2 text-grey-600",children:(0,jsx_runtime.jsx)(Tooltip.pn,{children:(0,jsx_runtime.jsxs)(Tooltip.ZP,{children:[(0,jsx_runtime.jsx)(Tooltip.aJ,{children:(0,jsx_runtime.jsx)(index_esm.KpA,{"aria-label":"Info",className:"cursor-help"})}),(0,jsx_runtime.jsx)(Tooltip._v,{children:(0,jsx_runtime.jsx)("p",{children:infoText})})]})})})]}),helperText&&helperText.trim().length>0&&(0,jsx_runtime.jsx)("p",{className:"text-sm text-grey-600",children:helperText})]})));Input.displayName="Input";const Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{infoText:{defaultValue:null,description:"",name:"infoText",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"hidden"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"date"'},{value:'"time"'},{value:'"submit"'},{value:'"reset"'},{value:'"password"'},{value:'"file"'},{value:'"datetime-local"'},{value:'"week"'},{value:'"month"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}const Input_stories={title:"Components/Input",component:Input_Input},Template=args=>(0,jsx_runtime.jsx)(Input_Input,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={type:"text",placeholder:"This is a text input"};const WithInfoText=Template.bind({});WithInfoText.args={type:"text",placeholder:"This is a text input",infoText:"This is an info text"};const WithHelperText=Template.bind({});WithHelperText.args={type:"text",placeholder:"This is a text input",helperText:"This is a helper text"};const Disabled=Template.bind({});Disabled.args={type:"text",placeholder:"This is a text input",infoText:"This is an info text",helperText:"This is a helper text",disabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Default.parameters?.docs?.source}}},WithInfoText.parameters={...WithInfoText.parameters,docs:{...WithInfoText.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...WithInfoText.parameters?.docs?.source}}},WithHelperText.parameters={...WithHelperText.parameters,docs:{...WithHelperText.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...WithHelperText.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithInfoText","WithHelperText","Disabled"]},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,_v:()=>TooltipContent,aJ:()=>TooltipTrigger,pn:()=>TooltipProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TooltipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.zt,Tooltip=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.fC,TooltipTrigger=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.xz,TooltipContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,sideOffset=4,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.VY,{ref,sideOffset,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-xs text-black shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})));TooltipContent.displayName=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.VY.displayName;const __WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TooltipTrigger.displayName="TooltipTrigger",TooltipTrigger.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#TooltipTrigger"]={docgenInfo:TooltipTrigger.__docgenInfo,name:"TooltipTrigger",path:"src/components/Tooltip/Tooltip.tsx#TooltipTrigger"})}catch(__react_docgen_typescript_loader_error){}try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/components/Tooltip/Tooltip.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}try{TooltipProvider.displayName="TooltipProvider",TooltipProvider.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#TooltipProvider"]={docgenInfo:TooltipProvider.__docgenInfo,name:"TooltipProvider",path:"src/components/Tooltip/Tooltip.tsx#TooltipProvider"})}catch(__react_docgen_typescript_loader_error){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);