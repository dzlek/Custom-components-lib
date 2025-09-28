import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-BbbVpsky.js";import{r as m}from"./index-WTqD2Q6A.js";import"./preload-helper-D9Z9MdNV.js";const d="_backdrop_1varn_1",c="_modal_1varn_13",n={backdrop:d,modal:c};var p=m();function u({open:e,onClose:i,children:a}){return r.useEffect(()=>{const o=l=>{l.key==="Escape"&&i()};return e?(document.addEventListener("keydown",o),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""}},[e,i]),e?p.createPortal(t.jsx("div",{className:n.backdrop,"data-testid":"backdrop",onClick:i,children:t.jsx("div",{className:n.modal,onClick:o=>o.stopPropagation(),children:a})}),document.body):null}const h={title:"Components/Modal",component:u,argTypes:{open:{control:"boolean"},onClose:{action:"closed"},children:{control:"text"}}},s={render:e=>{const[i,a]=r.useState(!1);return t.jsxs("div",{children:[t.jsx("div",{onClick:()=>a(!0),children:"Open Modal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, facere consequatur. Sed nostrum, repellendus veritatis dolor sint pariatur quis est illum cumque facilis repellat voluptates provident laudantium eos nemo inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere sequi nemo doloribus eum veritatis rem, facilis rerum in esse architecto quibusdam iure recusandae quam sint earum ea, officiis mollitia. Minima unde necessitatibus similique explicabo sapiente exercitationem possimus! Illo repellat neque rem, aut impedit facere, quia ut fugit est nihil laborum autem explicabo cum id, nisi labore blanditiis assumenda dolore! Sunt est dolore, harum atque quasi labore nihil repellat, quaerat culpa esse neque deserunt quos velit blanditiis. Ab distinctio cum harum aspernatur impedit! Dolores neque, molestias vero ad tempora quam. Nostrum nisi quidem neque nam, repellendus maxime aut error, magni sed hic, illum enim dolor at doloribus vel voluptates perferendis unde. Ad similique illo voluptas veritatis deserunt commodi quasi animi? Voluptate veritatis totam impedit facere ea vel eveniet atque. Adipisci, sint! Nemo accusantium laudantium ipsam, quasi, neque quaerat voluptates officia optio sunt possimus provident dolores quod veritatis quo sint soluta!"}),t.jsx(u,{...e,open:i,onClose:()=>{a(!1),e.onClose?.()},children:e.children||"Modal content"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <div onClick={() => setOpen(true)}>
          Open Modal. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora, facere consequatur. Sed nostrum, repellendus veritatis dolor
          sint pariatur quis est illum cumque facilis repellat voluptates
          provident laudantium eos nemo inventore! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus facere sequi nemo doloribus
          eum veritatis rem, facilis rerum in esse architecto quibusdam iure
          recusandae quam sint earum ea, officiis mollitia. Minima unde
          necessitatibus similique explicabo sapiente exercitationem possimus!
          Illo repellat neque rem, aut impedit facere, quia ut fugit est nihil
          laborum autem explicabo cum id, nisi labore blanditiis assumenda
          dolore! Sunt est dolore, harum atque quasi labore nihil repellat,
          quaerat culpa esse neque deserunt quos velit blanditiis. Ab distinctio
          cum harum aspernatur impedit! Dolores neque, molestias vero ad tempora
          quam. Nostrum nisi quidem neque nam, repellendus maxime aut error,
          magni sed hic, illum enim dolor at doloribus vel voluptates
          perferendis unde. Ad similique illo voluptas veritatis deserunt
          commodi quasi animi? Voluptate veritatis totam impedit facere ea vel
          eveniet atque. Adipisci, sint! Nemo accusantium laudantium ipsam,
          quasi, neque quaerat voluptates officia optio sunt possimus provident
          dolores quod veritatis quo sint soluta!
        </div>
        <Modal {...args} open={open} onClose={() => {
        setOpen(false);
        args.onClose?.();
      }}>
          {args.children || 'Modal content'}
        </Modal>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,h as default};
