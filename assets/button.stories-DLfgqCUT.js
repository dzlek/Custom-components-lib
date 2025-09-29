import{j as f}from"./jsx-runtime-D_zvdyIk.js";const _="_button_25qqf_1",L="_contained_25qqf_10",h="_text_25qqf_19",q="_outlined_25qqf_26",v="_small_25qqf_34",x="_medium_25qqf_38",b="_large_25qqf_42",l={button:_,contained:L,text:h,outlined:q,small:v,medium:x,large:b};function i({variant:c="contained",size:d="medium",isLoading:u=!1,children:m,className:p="",...g}){return f.jsx("button",{className:`${l.button} ${l[c]} ${l[d]} ${p}`,...g,children:u?"Loading...":m})}i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'contained' | 'outlined'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const E={title:"Components/Button",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
Button triggers an action or event with a single click.  
Supports different states like default and disabled.
      `}}},argTypes:{children:{control:"text"},variant:{control:{type:"radio"},options:["text","contained","outlined"]},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:"boolean"},isLoading:{control:"boolean"},onClick:{action:"clicked"}}},e={args:{children:"CONTAINED MEDIUM"}},a={args:{children:"TEXT",variant:"text"}},r={args:{children:"OUTLINED",variant:"outlined"}},t={args:{children:"SMALL",size:"small"}},n={args:{children:"LARGE",size:"large"}},s={args:{children:"DISABLED",disabled:!0}},o={args:{children:"Button",isLoading:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'CONTAINED MEDIUM'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'TEXT',
    variant: 'text'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'OUTLINED',
    variant: 'outlined'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'SMALL',
    size: 'small'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'LARGE',
    size: 'large'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'DISABLED',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    isLoading: true
  }
}`,...o.parameters?.docs?.source}}};const S=["Default","Text","Outlined","Small","Large","Disabled","Loading"];export{e as Default,s as Disabled,n as Large,o as Loading,r as Outlined,t as Small,a as Text,S as __namedExportsOrder,E as default};
