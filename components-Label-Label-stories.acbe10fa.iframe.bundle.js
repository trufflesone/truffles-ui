"use strict";(self.webpackChunk_trufflesone_truffles_ui=self.webpackChunk_trufflesone_truffles_ui||[]).push([[224],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>$6ed0406888f73fc4$export$43e446d32b3d21af,e:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WV:()=>$8927f6f2acc4f386$export$250ffa63cdc0d034,jH:()=>$8927f6f2acc4f386$export$6d1a0317bde7de7f});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.g7:node;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target,event){target&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A4:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45,g7:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.Z)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(forwardedRef,children.ref):children.ref}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./src/components/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Label__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Label/Label.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Label",component:_Label__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Normal=Template.bind({});Normal.args={children:"This is a Label"},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <Label {...args} />",...Normal.parameters?.docs?.source}}};const __namedExportsOrder=["Normal"]},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Label_Label});var react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const $b73a6c6685e72184$export$b04be29aa201d4f5=(0,react.forwardRef)(((props,forwardedRef)=>(0,react.createElement)(dist.WV.label,(0,esm_extends.Z)({},props,{ref:forwardedRef,onMouseDown:event=>{var _props$onMouseDown;null===(_props$onMouseDown=props.onMouseDown)||void 0===_props$onMouseDown||_props$onMouseDown.call(props,event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}})))),$b73a6c6685e72184$export$be92b6f5f03c0fe9=$b73a6c6685e72184$export$b04be29aa201d4f5;var class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const labelVariants=(0,class_variance_authority_dist.j)("text-sm text-grey-900 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)($b73a6c6685e72184$export$be92b6f5f03c0fe9,{ref,className:(0,utils.cn)(labelVariants(),className),...props})));Label.displayName=$b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;const Label_Label=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);