"use strict";(self.webpackChunk_trufflesone_truffles_ui=self.webpackChunk_trufflesone_truffles_ui||[]).push([[620],{"./src/components/Tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("./node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs");const[$69cb30bb0017df05$var$createTabsContext,$69cb30bb0017df05$export$355f5bd209d7b13a]=(0,react_context_dist.b)("Tabs",[react_roving_focus_dist.Pc]),$69cb30bb0017df05$var$useRovingFocusGroupScope=(0,react_roving_focus_dist.Pc)(),[$69cb30bb0017df05$var$TabsProvider,$69cb30bb0017df05$var$useTabsContext]=$69cb30bb0017df05$var$createTabsContext("Tabs"),$69cb30bb0017df05$export$b2539bed5023c21c=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value:valueProp,onValueChange,defaultValue,orientation="horizontal",dir,activationMode="automatic",...tabsProps}=props,direction=(0,react_direction_dist.gm)(dir),[value,setValue]=(0,react_use_controllable_state_dist.T)({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue});return(0,react.createElement)($69cb30bb0017df05$var$TabsProvider,{scope:__scopeTabs,baseId:(0,react_id_dist.M)(),value,onValueChange:setValue,orientation,dir:direction,activationMode},(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({dir:direction,"data-orientation":orientation},tabsProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$9712d22edc0d78c1=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,loop=!0,...listProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsList",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);return(0,react.createElement)(react_roving_focus_dist.fC,(0,esm_extends.Z)({asChild:!0},rovingFocusGroupScope,{orientation:context.orientation,dir:context.dir,loop}),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({role:"tablist","aria-orientation":context.orientation},listProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$8114b9fdfdf9f3ba=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,disabled=!1,...triggerProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsTrigger",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value;return(0,react.createElement)(react_roving_focus_dist.ck,(0,esm_extends.Z)({asChild:!0},rovingFocusGroupScope,{focusable:!disabled,active:isSelected}),(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button",role:"tab","aria-selected":isSelected,"aria-controls":contentId,"data-state":isSelected?"active":"inactive","data-disabled":disabled?"":void 0,disabled,id:triggerId},triggerProps,{ref:forwardedRef,onMouseDown:(0,dist.M)(props.onMouseDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey?event.preventDefault():context.onValueChange(value)})),onKeyDown:(0,dist.M)(props.onKeyDown,(event=>{[" ","Enter"].includes(event.key)&&context.onValueChange(value)})),onFocus:(0,dist.M)(props.onFocus,(()=>{const isAutomaticActivation="manual"!==context.activationMode;isSelected||disabled||!isAutomaticActivation||context.onValueChange(value)}))})))})),$69cb30bb0017df05$export$bd905d70e8fd2ebb=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,forceMount,children,...contentProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsContent",__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value,isMountAnimationPreventedRef=(0,react.useRef)(isSelected);return(0,react.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,react.createElement)(react_presence_dist.z,{present:forceMount||isSelected},(({present})=>(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({"data-state":isSelected?"active":"inactive","data-orientation":context.orientation,role:"tabpanel","aria-labelledby":triggerId,hidden:!present,id:contentId,tabIndex:0},contentProps,{ref:forwardedRef,style:{...props.style,animationDuration:isMountAnimationPreventedRef.current?"0s":void 0}}),present&&children)))}));function $69cb30bb0017df05$var$makeTriggerId(baseId,value){return`${baseId}-trigger-${value}`}function $69cb30bb0017df05$var$makeContentId(baseId,value){return`${baseId}-content-${value}`}const $69cb30bb0017df05$export$be92b6f5f03c0fe9=$69cb30bb0017df05$export$b2539bed5023c21c,$69cb30bb0017df05$export$54c2e3dc7acea9f5=$69cb30bb0017df05$export$9712d22edc0d78c1,$69cb30bb0017df05$export$41fb9f06171c75f4=$69cb30bb0017df05$export$8114b9fdfdf9f3ba,$69cb30bb0017df05$export$7c6e2c02157bb7d2=$69cb30bb0017df05$export$bd905d70e8fd2ebb;var class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tabs=$69cb30bb0017df05$export$be92b6f5f03c0fe9,tabsListVariants=(0,class_variance_authority_dist.j)("inline-flex h-12 items-center justify-center p-1",{variants:{variant:{primary:"bg-grey-100 rounded-md",secondary:""}},defaultVariants:{variant:"primary"}}),TabsList=react.forwardRef((({className,variant,...props},ref)=>(0,jsx_runtime.jsx)($69cb30bb0017df05$export$54c2e3dc7acea9f5,{ref,className:(0,utils.cn)(tabsListVariants({variant,className})),...props})));TabsList.displayName=$69cb30bb0017df05$export$54c2e3dc7acea9f5.displayName;const tabsTriggerVariants=(0,class_variance_authority_dist.j)("inline-flex items-center justify-center whitespace-nowrap px-10 py-2 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=inactive]:text-grey-600",{variants:{variant:{primary:"rounded-md data-[state=active]:bg-white data-[state=active]:text-grey-900 data-[state=active]:shadow",secondary:"data-[state=active]:border-b-2 data-[state=active]:border-grey-900 border-b-[1px]"}},defaultVariants:{variant:"primary"}}),TabsTrigger=react.forwardRef((({className,variant,...props},ref)=>(0,jsx_runtime.jsx)($69cb30bb0017df05$export$41fb9f06171c75f4,{ref,className:(0,utils.cn)(tabsTriggerVariants({variant,className})),...props})));TabsTrigger.displayName=$69cb30bb0017df05$export$41fb9f06171c75f4.displayName;const TabsContent=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)($69cb30bb0017df05$export$7c6e2c02157bb7d2,{ref,className:(0,utils.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",className),...props})));TabsContent.displayName=$69cb30bb0017df05$export$7c6e2c02157bb7d2.displayName;const Tabs_Tabs=Tabs;try{TabsList.displayName="TabsList",TabsList.__docgenInfo={description:"",displayName:"TabsList",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#TabsList"]={docgenInfo:TabsList.__docgenInfo,name:"TabsList",path:"src/components/Tabs/Tabs.tsx#TabsList"})}catch(__react_docgen_typescript_loader_error){}try{TabsTrigger.displayName="TabsTrigger",TabsTrigger.__docgenInfo={description:"",displayName:"TabsTrigger",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#TabsTrigger"]={docgenInfo:TabsTrigger.__docgenInfo,name:"TabsTrigger",path:"src/components/Tabs/Tabs.tsx#TabsTrigger"})}catch(__react_docgen_typescript_loader_error){}try{TabsContent.displayName="TabsContent",TabsContent.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#TabsContent"]={docgenInfo:TabsContent.__docgenInfo,name:"TabsContent",path:"src/components/Tabs/Tabs.tsx#TabsContent"})}catch(__react_docgen_typescript_loader_error){}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Tabs_stories={title:"Components/Tabs",component:Tabs_Tabs},Primary={render:args=>(0,jsx_runtime.jsxs)(Tabs_Tabs,{defaultValue:"account",...args,children:[(0,jsx_runtime.jsxs)(TabsList,{variant:"primary",children:[(0,jsx_runtime.jsx)(TabsTrigger,{value:"account",children:"Account"}),(0,jsx_runtime.jsx)(TabsTrigger,{value:"password",children:"Password"})]}),(0,jsx_runtime.jsx)(TabsContent,{value:"account",children:"Make changes to your account here."}),(0,jsx_runtime.jsx)(TabsContent,{value:"password",children:"Change your password here."})]})},Secondary={render:args=>(0,jsx_runtime.jsxs)(Tabs_Tabs,{defaultValue:"account",...args,children:[(0,jsx_runtime.jsxs)(TabsList,{variant:"secondary",children:[(0,jsx_runtime.jsx)(TabsTrigger,{value:"account",variant:"secondary",children:"Account"}),(0,jsx_runtime.jsx)(TabsTrigger,{value:"password",variant:"secondary",children:"Password"})]}),(0,jsx_runtime.jsx)(TabsContent,{value:"account",children:"Make changes to your account here."}),(0,jsx_runtime.jsx)(TabsContent,{value:"password",children:"Change your password here."})]})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: args => <Tabs defaultValue="account" {...args}>\n      <TabsList variant="primary">\n        <TabsTrigger value="account">Account</TabsTrigger>\n        <TabsTrigger value="password">Password</TabsTrigger>\n      </TabsList>\n      <TabsContent value="account">\n        Make changes to your account here.\n      </TabsContent>\n      <TabsContent value="password">Change your password here.</TabsContent>\n    </Tabs>\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  render: args => <Tabs defaultValue="account" {...args}>\n      <TabsList variant="secondary">\n        <TabsTrigger value="account" variant="secondary">\n          Account\n        </TabsTrigger>\n        <TabsTrigger value="password" variant="secondary">\n          Password\n        </TabsTrigger>\n      </TabsList>\n      <TabsContent value="account">\n        Make changes to your account here.\n      </TabsContent>\n      <TabsContent value="password">Change your password here.</TabsContent>\n    </Tabs>\n}',...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);