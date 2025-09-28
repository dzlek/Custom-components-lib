import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-BbbVpsky.js";import"./preload-helper-D9Z9MdNV.js";const x="_wrapper_tdri2_1",b="_label_tdri2_7",_="_disabled_tdri2_17",f="_input_tdri2_20",h="_errorInput_tdri2_32",T="_helperText_tdri2_45",g="_errorHelperText_tdri2_50",e={wrapper:x,label:b,disabled:_,input:f,errorInput:h,helperText:T,errorHelperText:g};function c({label:o,disabled:s=!1,error:n=!1,helperText:d,className:i="",...u}){const p=m.useId();return r.jsxs("div",{className:e.wrapper,children:[o&&r.jsx("label",{htmlFor:p,className:`${e.label} ${s?e.disabled:""}`,children:o}),r.jsx("input",{id:p,className:`${e.input} ${n?e.errorInput:""} ${i}`,disabled:s,...u}),d&&r.jsx("span",{className:`${e.helperText} ${n?e.errorHelperText:""} ${s?e.disabled:""}`,children:d})]})}c.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const y={title:"Components/TextField",component:c,argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},helperText:{control:"text"},onChange:{action:"changed"}}},a={args:{label:"Name",placeholder:"Enter your name"}},t={args:{label:"Disabled",placeholder:"Inactive",disabled:!0}},l={args:{label:"Email",placeholder:"Error",error:!0,helperText:"Invalid format"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Inactive',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Error',
    error: true,
    helperText: 'Invalid format'
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","Disabled","Error"];export{a as Default,t as Disabled,l as Error,N as __namedExportsOrder,y as default};
