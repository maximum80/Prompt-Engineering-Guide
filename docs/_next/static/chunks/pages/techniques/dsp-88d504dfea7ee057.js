(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{4880:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/dsp",function(){return n(1055)}])},7178:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var i=n(5893),a=n(6010),r=n(5675),o=n.n(r);function s(e){let{src:t,alt:n,full:r}=e;return(0,i.jsx)("div",{className:(0,a.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",r?"bg-white":"bg-zinc-100"),children:(0,i.jsx)(o(),{src:t,alt:n,className:(0,a.Z)("w-auto select-none bg-white",r?"":"ring-1 ring-gray-200")})})}},9369:function(e,t,n){"use strict";var i=n(5893);n(7294);var a=n(5391);let r={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,i.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),head:function(){let{title:e}=(0,a.ZR)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,i.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,i.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/SKgkVT8BGJ"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"}};t.Z=r},1055:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),a=n(8863),r=n(5391),o=n(9369);n(9966);var s=n(1151);n(5675);var d=n(7178),c={src:"/Prompt-Engineering-Guide/_next/static/media/dsp.27a0005f.jpeg",height:649,width:1075,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIDEzFR0f/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCp1UTai8i3x+gAQ//Z",blurWidth:8,blurHeight:5};function g(e){let t=Object.assign({h1:"h1",p:"p",a:"a"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"方向性刺激プロンプティング"}),"\n","\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/2302.11520",children:"Li et al.、(2023)"}),"は、望ましい要約を生成するためにLLMをより適切に誘導するための新しいプロンプティング技術を提案しています。"]}),"\n",(0,i.jsx)(t.p,{children:"調整可能なポリシーLMは、刺激/ヒントを生成するためにトレーニングされます。RLの使用がLLMの最適化により多く見られるようになっています。"}),"\n",(0,i.jsx)(t.p,{children:"以下の図は、方向性刺激プロンプティング（Directional Stimulus Prompting）が標準的なプロンプティングと比較した場合の様子を示しています。ポリシーLMは小さく、ブラックボックスの凍結LLMを誘導するヒントを生成するために最適化されます。"}),"\n",(0,i.jsx)(d.w,{src:c,alt:"DSP"}),"\n",(0,i.jsxs)(t.p,{children:["Image Source: ",(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/2302.11520",children:"Li et al., (2023)"})]}),"\n",(0,i.jsx)(t.p,{children:"具体的な例は近日中に公開します！"})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)},pageOpts:{filePath:"pages/techniques/dsp.mdx",route:"/techniques/dsp",headings:[{depth:1,value:"方向性刺激プロンプティング",id:"方向性刺激プロンプティング"}],timestamp:1679576093e3,pageMap:[{kind:"Meta",data:{index:"Prompt Engineering",introduction:"はじめに",techniques:"テクニック",applications:"アプリケーション",models:"モデル",risks:"リスクと誤用",papers:"論文",tools:"ツール",notebooks:"ノートブック",datasets:"データセット",readings:"参考文献",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/dair_ai",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{pal:"PAL（プログラム支援言語モデル）",generating:"データ生成"}},{kind:"MdxPage",name:"generating",route:"/applications/generating"},{kind:"MdxPage",name:"pal",route:"/applications/pal"}]},{kind:"MdxPage",name:"applications",route:"/applications"},{kind:"MdxPage",name:"datasets",route:"/datasets"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",data:{settings:"LLM設定",basics:"基本的なプロンプティング",elements:"プロンプトの要素",tips:"プロンプトをデザインする一般的なTips",examples:"プロンプトの例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics"},{kind:"MdxPage",name:"elements",route:"/introduction/elements"},{kind:"MdxPage",name:"examples",route:"/introduction/examples"},{kind:"MdxPage",name:"settings",route:"/introduction/settings"},{kind:"MdxPage",name:"tips",route:"/introduction/tips"}]},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",data:{flan:"Flan",chatgpt:"ChatGPT","gpt-4":"GPT-4"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt"},{kind:"MdxPage",name:"flan",route:"/models/flan"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4"}]},{kind:"MdxPage",name:"models",route:"/models"},{kind:"MdxPage",name:"notebooks",route:"/notebooks"},{kind:"MdxPage",name:"papers",route:"/papers"},{kind:"MdxPage",name:"readings",route:"/readings"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",data:{adversarial:"敵対的Prompting",factuality:"事実性",biases:"バイアス"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial"},{kind:"MdxPage",name:"biases",route:"/risks/biases"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality"}]},{kind:"MdxPage",name:"risks",route:"/risks"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",data:{zeroshot:"Zero-shotプロンプティング",fewshot:"Few-shotプロンプティング",cot:"Chain-of-Thoughtプロンプティング",consistency:"自己整合性（Self-Consistency）",knowledge:"知識生成プロンプティング",ape:"自動プロンプトエンジニア",activeprompt:"アクティブプロンプト",dsp:"方向性刺激プロンプティング",react:"ReAct",multimodalcot:"マルチモーダルCoT",graph:"グラフプロンプト（GraphPrompts）"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency"},{kind:"MdxPage",name:"cot",route:"/techniques/cot"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot"},{kind:"MdxPage",name:"graph",route:"/techniques/graph"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot"},{kind:"MdxPage",name:"react",route:"/techniques/react"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot"}]},{kind:"MdxPage",name:"techniques",route:"/techniques"},{kind:"MdxPage",name:"tools",route:"/tools"}],flexsearch:{codeblocks:!0},title:"方向性刺激プロンプティング"},pageNextRoute:"/techniques/dsp",nextraLayout:r.ZP,themeConfig:o.Z};var l=(0,a.j)(u)}},function(e){e.O(0,[256,774,888,179],function(){return e(e.s=4880)}),_N_E=e.O()}]);