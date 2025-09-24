import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-B2AQRbed.js";import"./preload-helper-D9Z9MdNV.js";const S="_wrapper_1g0zg_1",O="_label_1g0zg_7",w="_disabled_1g0zg_17",j="_select_1g0zg_20",z="_errorSelect_1g0zg_35",N="_arrow_1g0zg_43",$="_options_1g0zg_47",k="_option_1g0zg_47",q="_selectedOption_1g0zg_68",A="_helperText_1g0zg_72",C="_errorHelperText_1g0zg_77",e={wrapper:S,label:O,disabled:w,select:j,errorSelect:z,arrow:N,options:$,option:k,selectedOption:q,helperText:A,errorHelperText:C};function f({label:u,error:g=!1,disabled:a=!1,helperText:m,options:b,value:c,onChange:v}){const[_,h]=d.useState(!1),[p,x]=d.useState(c||"");d.useEffect(()=>{x(c??"")},[c]);const T=b.find(r=>r.value===p),y=r=>{x(r),v?.(r),h(!1)};return s.jsxs("div",{className:e.wrapper,children:[u&&s.jsx("label",{className:`${e.label} ${a?e.disabled:""}`,children:u}),s.jsxs("div",{className:`${e.select} ${g?e.errorSelect:""} ${a?e.disabled:""}`,onClick:()=>!a&&h(r=>!r),children:[s.jsx("span",{className:e.selectedValue,children:T?T.label:""}),s.jsx("span",{className:e.arrow,children:_?"▲":"▼"})]}),_&&!a&&s.jsx("ul",{className:e.options,role:"listbox",children:b.map(r=>s.jsx("li",{className:`${e.option} ${p===r.value?e.selectedOption:""}`,role:"option","aria-selected":p===r.value,onClick:()=>y(r.value),children:r.label},r.value))}),m&&s.jsx("span",{className:`${e.helperText} ${g?e.errorHelperText:""} ${a?e.disabled:""}`,children:m})]})}f.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:`{
  label: string;
  value: string;
}[]`},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const D={title:"Components/Select",component:f,argTypes:{label:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"},helperText:{control:"text"},onChange:{action:"changed"}}},i=[{label:"None",value:"0"},{label:"Ten",value:"10"},{label:"Twenty",value:"20"},{label:"Thirty",value:"30"}],t={args:{label:"Age",options:i,helperText:"Choose age"}},l={args:{label:"Age",options:i,disabled:!0,helperText:"Field disabled"}},n={args:{label:"Age",options:i,error:!0,helperText:"Invalid selection"}},o={args:{label:"Age",options:i,helperText:"Should be Ten",value:"10"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    options: mockOptions,
    helperText: 'Choose age'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    options: mockOptions,
    disabled: true,
    helperText: 'Field disabled'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    options: mockOptions,
    error: true,
    helperText: 'Invalid selection'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Age',
    options: mockOptions,
    helperText: 'Should be Ten',
    value: '10'
  }
}`,...o.parameters?.docs?.source}}};const H=["Default","Disabled","Error","ValueViaProps"];export{t as Default,l as Disabled,n as Error,o as ValueViaProps,H as __namedExportsOrder,D as default};
