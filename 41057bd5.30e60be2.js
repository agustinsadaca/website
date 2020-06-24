(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(6),a=n(0),s=n(175),c=n(177),r=n(176),l={id:"multi-sort",title:"Multi column sort",keywords:["javascript","table","javascript table","gridjs","grid js","multi sort","multi column sort","column sort"]},m={id:"examples/multi-sort",isDocsHomePage:!1,title:"Multi column sort",description:"Grid.js supports multi column sorting by default. Hold the shift key and click on multiple columns to activate it:",source:"@site/docs/examples/multi-sort.md",permalink:"/docs/examples/multi-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/multi-sort.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592139438,sidebar:"sidebar",previous:{title:"React Component in cells",permalink:"/docs/examples/react-cells"},next:{title:"Custom sort",permalink:"/docs/examples/custom-sort"}},d=[],u={rightToc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Grid.js supports multi column sorting by default. Hold the ",Object(s.b)("inlineCode",{parentName:"p"},"shift")," key and click on multiple columns to activate it:"),Object(s.b)(r.a,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Age',\n    'Email',\n  ],\n  sort: true,\n  data: [\n    ['Mark',  25, 'john@example.com'],\n    ['Nancy', 25, 'n99@gmail.com'],\n    ['Eoin',  55, 'eo3n@yahoo.com'],\n    ['Nisen', 60, 'nis900@gmail.com']\n  ]\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:r.a,useEffect:a.useEffect,useRef:a.useRef},mdxType:"CodeBlock"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Click on a sort button while you're holding the shift key to remove the sort from that column."))))}p.isMDXComponent=!0}}]);