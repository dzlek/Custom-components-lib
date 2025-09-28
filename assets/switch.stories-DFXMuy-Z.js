import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BbbVpsky.js";import"./preload-helper-D9Z9MdNV.js";const h={switch:"_switch_5luym_1"};function n({disabled:d=!1,className:i="",isChecked:e,onChange:l,...u}){const[p,t]=c.useState(e??!1);c.useEffect(()=>{e!==void 0&&t(e)},[e]);const m=o=>{e===void 0&&t(o.target.checked),l?.(o)};return f.jsx("input",{type:"checkbox",role:"switch",className:`${h.switch} ${i}`,disabled:d,checked:p,onChange:m,...u})}n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{isChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const k={title:"Components/Switch",component:n,argTypes:{isChecked:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"changed"}}},a={args:{}},s={args:{isChecked:!0}},r={args:{disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","Checked","Disabled"];export{s as Checked,a as Default,r as Disabled,w as __namedExportsOrder,k as default};
