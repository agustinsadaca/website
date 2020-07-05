(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),i=(n(0),n(179)),a=n(180),s={id:"multi-sort",title:"Multi column sort",keywords:["javascript","table","javascript table","gridjs","grid js","multi sort","multi column sort","column sort"]},c={id:"examples/multi-sort",isDocsHomePage:!1,title:"Multi column sort",description:"Grid.js supports multi column sorting by default. Hold the shift key and click on multiple columns to activate it:",source:"@site/docs/examples/multi-sort.md",permalink:"/docs/examples/multi-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/multi-sort.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Virtual DOM",permalink:"/docs/examples/virtual-dom"},next:{title:"Custom sort",permalink:"/docs/examples/custom-sort"}},l=[],m={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grid.js supports multi column sorting by default. Hold the ",Object(i.b)("inlineCode",{parentName:"p"},"shift")," key and click on multiple columns to activate it:"),Object(i.b)(a.a,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Age',\n    'Email',\n  ],\n  sort: true,\n  data: [\n    ['Mark',  25, 'john@example.com'],\n    ['Nancy', 25, 'n99@gmail.com'],\n    ['Eoin',  55, 'eo3n@yahoo.com'],\n    ['Nisen', 60, 'nis900@gmail.com']\n  ]\n});\n",mdxType:"LiveExample"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Click on a sort button while you're holding the shift key to remove the sort from that column."))))}d.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(182),r=n(181),i=n(0),a=n.n(i),s=n(183);class c extends i.Component{render(){return a.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:o.b,html:o.e,h:o.d,gCreateRef:o.c,gComponent:o.a,CodeBlock:r.a,useEffect:i.useEffect,useRef:i.useRef,faker:s,...this.props.scope}})}}}}]);