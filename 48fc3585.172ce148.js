(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(2),o=a(6),i=(a(0),a(176)),r={id:"data",title:"data"},c={id:"config/data",isDocsHomePage:!1,title:"data",description:"To define the rows and columns of the table.",source:"@site/docs/config/data.md",permalink:"/docs/config/data",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/data.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592045086,sidebar:"sidebar",previous:{title:"Server-side setup",permalink:"/docs/server-side"},next:{title:"from",permalink:"/docs/config/from"}},l=[],m={rightToc:l};function d(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To define the rows and columns of the table."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optional")," (either ",Object(i.b)("inlineCode",{parentName:"li"},"data"),", ",Object(i.b)("inlineCode",{parentName:"li"},"from")," or ",Object(i.b)("inlineCode",{parentName:"li"},"server")," must be provided)"),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("inlineCode",{parentName:"li"},"TCell[][]"),", ",Object(i.b)("inlineCode",{parentName:"li"},"{ [key: string]: TCell }[]")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Function")),Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/examples/hello-world"}),"Hello World"),", ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/examples/import-json"}),"Import JSON"),", ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/examples/import-async"}),"Async import")," and ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/examples/import-function"}),"Dynamic import"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"new Grid({\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"new Grid({\n  data: [\n    { name: 'John', email: 'john@example.com' },\n    { name: 'Mark', email: 'mark@gmail.com' },\n    { name: 'Eoin', email: 'eo3n@yahoo.com' },\n    { name: 'Nisen', email: 'nis900@gmail.com' }\n  ]\n});\n")))}d.isMDXComponent=!0}}]);