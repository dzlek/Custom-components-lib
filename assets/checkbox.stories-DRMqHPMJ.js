import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BbbVpsky.js";import"./preload-helper-D9Z9MdNV.js";const C="_wrapper_6lqrl_1",x="_checkbox_6lqrl_7",_="_label_6lqrl_43",q="_disabled_6lqrl_47",r={wrapper:C,checkbox:x,label:_,disabled:q};function b({label:a,disabled:d=!1,className:m="",isChecked:e,onChange:h,...g}){const i=n.useId(),[f,p]=n.useState(e??!1);n.useEffect(()=>{e!==void 0&&p(e)},[e]);const k=u=>{e===void 0&&p(u.target.checked),h?.(u)};return t.jsxs("div",{className:r.wrapper,children:[t.jsx("input",{id:i,type:"checkbox",className:`${r.checkbox} ${m}`,disabled:d,checked:f,onChange:k,...g}),a&&t.jsx("label",{htmlFor:i,className:`${r.label} ${d?r.disabled:""}`,children:a})]})}b.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const y={title:"Components/Checkbox",component:b,argTypes:{label:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},onChange:{action:"changed"}}},s={args:{label:"Label"}},o={args:{label:"Checked",isChecked:!0}},l={args:{label:"Controlled",isChecked:!0,onChange:a=>console.log(a.target.checked)}},c={args:{label:"Disabled",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    isChecked: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Controlled',
    isChecked: true,
    onChange: e => console.log(e.target.checked)
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","Checked","Controlled","Disabled"];export{o as Checked,l as Controlled,s as Default,c as Disabled,N as __namedExportsOrder,y as default};
