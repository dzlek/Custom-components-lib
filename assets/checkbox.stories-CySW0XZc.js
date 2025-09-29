import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-Bnh9wKJQ.js";import"./preload-helper-D9Z9MdNV.js";const C="_wrapper_6lqrl_1",x="_checkbox_6lqrl_7",_="_label_6lqrl_43",q="_disabled_6lqrl_47",o={wrapper:C,checkbox:x,label:_,disabled:q};function b({label:a,disabled:d=!1,className:m="",isChecked:e,onChange:h,...g}){const i=n.useId(),[f,p]=n.useState(e??!1);n.useEffect(()=>{e!==void 0&&p(e)},[e]);const k=u=>{e===void 0&&p(u.target.checked),h?.(u)};return c.jsxs("div",{className:o.wrapper,children:[c.jsx("input",{id:i,type:"checkbox",className:`${o.checkbox} ${m}`,disabled:d,checked:f,onChange:k,...g}),a&&c.jsx("label",{htmlFor:i,className:`${o.label} ${d?o.disabled:""}`,children:a})]})}b.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const j={title:"Components/Checkbox",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
Checkbox allows the user to toggle a single option on or off.  
Supports controlled and uncontrolled modes, with optional label and disabled state.
        `}}},argTypes:{label:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},onChange:{action:"changed"}}},s={args:{label:"Label"}},r={args:{label:"Checked",isChecked:!0}},l={args:{label:"Controlled",isChecked:!0,onChange:a=>console.log(a.target.checked)}},t={args:{label:"Disabled",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    isChecked: true
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Controlled',
    isChecked: true,
    onChange: e => console.log(e.target.checked)
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","Checked","Controlled","Disabled"];export{r as Checked,l as Controlled,s as Default,t as Disabled,v as __namedExportsOrder,j as default};
