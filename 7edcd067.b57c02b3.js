(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{137:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return p})),t.d(e,"metadata",(function(){return d})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return m}));var a=t(2),i=t(6),r=t(0),o=t(175),c=t(177),s=t(176),p={id:"pagination",title:"Pagination",keywords:["javascript","table","javascript table","gridjs","grid js","page","table page","pagination"]},d={id:"examples/pagination",isDocsHomePage:!1,title:"Pagination",description:"Pagination can be enabled by setting pagination",source:"@site/docs/examples/pagination.md",permalink:"/docs/examples/pagination",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/pagination.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592139438,sidebar:"sidebar",previous:{title:"From HTML Table",permalink:"/docs/examples/from"},next:{title:"Search",permalink:"/docs/examples/search"}},u=[],l={rightToc:u};function m(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pagination can be enabled by setting ",Object(o.b)("inlineCode",{parentName:"p"},"pagination: true"),":"),Object(o.b)(s.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(n){return"\nfunction () {\n  "+n+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:s.a,useEffect:r.useEffect,useRef:r.useRef},mdxType:"CodeBlock"}),Object(o.b)("p",null,"You can also change the default settings of the pagination plugin:"),Object(o.b)(s.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: {\n    limit: 1\n  },\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(n){return"\nfunction () {\n  "+n+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:s.a,useEffect:r.useEffect,useRef:r.useRef},mdxType:"CodeBlock"}))}m.isMDXComponent=!0}}]);