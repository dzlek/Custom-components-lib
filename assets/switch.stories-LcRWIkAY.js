import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-Bnh9wKJQ.js";import"./preload-helper-D9Z9MdNV.js";const h={switch:"_switch_5luym_1"};function n({disabled:d=!1,className:i="",isChecked:e,onChange:l,...u}){const[p,o]=c.useState(e??!1);c.useEffect(()=>{e!==void 0&&o(e)},[e]);const m=r=>{e===void 0&&o(r.target.checked),l?.(r)};return f.jsx("input",{type:"checkbox",role:"switch",className:`${h.switch} ${i}`,disabled:d,checked:p,onChange:m,...u})}n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{isChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const C={title:"Components/Switch",tags:["autodocs"],component:n,parameters:{docs:{description:{component:`
Switch toggles between two states, such as on/off.  
Similar to Checkbox but styled for binary options.
      `}}},argTypes:{isChecked:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"changed"}}},s={args:{}},a={args:{isChecked:!0}},t={args:{disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","Checked","Disabled"];export{a as Checked,s as Default,t as Disabled,S as __namedExportsOrder,C as default};
