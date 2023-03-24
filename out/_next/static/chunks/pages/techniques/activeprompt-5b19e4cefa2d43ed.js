(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{7963:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/activeprompt",function(){return n(2395)}])},7178:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var i=n(5893),a=n(6010),r=n(5675),o=n.n(r);function s(e){let{src:t,alt:n,full:r}=e;return(0,i.jsx)("div",{className:(0,a.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",r?"bg-white":"bg-zinc-100"),children:(0,i.jsx)(o(),{src:t,alt:n,className:(0,a.Z)("w-auto select-none bg-white",r?"":"ring-1 ring-gray-200")})})}},9369:function(e,t,n){"use strict";var i=n(5893);n(7294);var a=n(5391);let r={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,i.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),head:function(){let{title:e}=(0,a.ZR)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,i.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,i.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/SKgkVT8BGJ"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"}};t.Z=r},2395:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),a=n(8863),r=n(5391),o=n(9369);n(9966);var s=n(1151);n(5675);var d=n(7178),c={src:"/_next/static/media/active-prompt.f739657b.png",height:572,width:1137,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEXt7e35+fnx8vLl5t729fLj5ujDzNbi1/3YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nAXBgQEAMAyCMFC7/09eAoQ4OSjraKm8g4jGDwQjADu9ZpuGAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};function u(e){let t=Object.assign({h1:"h1",p:"p",a:"a",em:"em"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"アクティブプロンプト"}),"\n","\n",(0,i.jsx)(t.h1,{children:"Active-Prompt"}),"\n",(0,i.jsxs)(t.p,{children:["Chain-of-thought (CoT)メソッドは、固定された人間による注釈付きの例のセットに依存しています。これには、例が異なるタスクに対して最も効果的なものでない可能性があるという問題があります。",(0,i.jsx)(t.a,{href:"https://arxiv.org/pdf/2302.12246.pdf",children:"Diaoら(2023)"}),"は、最近、異なるタスク固有の例のプロンプト(人間によるCoT推論で注釈付けされたもの)に適応するための新しいプロンプトアプローチであるActive-Promptを提案しました。"]}),"\n",(0,i.jsxs)(t.p,{children:["以下は、このアプローチの概要図です。最初のステップは、LLMに対してCoT例をいくつか含めて問い合わせます。一連のトレーニング質問に対して、",(0,i.jsx)(t.em,{children:"k"}),"個の可能な回答が生成されます。",(0,i.jsx)(t.em,{children:"k"}),"個の回答に基づいて不確実性メトリックが計算されます(不一致を使用)。最も不確実な質問が人間によって注釈付けされます。新しい注釈付きの例は、それぞれの質問の推論に使用されます。"]}),"\n",(0,i.jsx)(d.w,{src:c,alt:"ACTIVE"}),"\n",(0,i.jsxs)(t.p,{children:["Image Source: ",(0,i.jsx)(t.a,{href:"https://arxiv.org/pdf/2302.12246.pdf",children:"Diao et al., (2023)"})]})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/techniques/activeprompt.mdx",route:"/techniques/activeprompt",headings:[{depth:1,value:"アクティブプロンプト",id:"アクティブプロンプト"},{depth:1,value:"Active-Prompt",id:"active-prompt"}],timestamp:1679576093e3,pageMap:[{kind:"Meta",data:{index:"Prompt Engineering",introduction:"はじめに",techniques:"テクニック",applications:"アプリケーション",models:"モデル",risks:"リスクと誤用",papers:"論文",tools:"ツール",notebooks:"ノートブック",datasets:"データセット",readings:"参考文献",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/dair_ai",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{pal:"PAL（プログラム支援言語モデル）",generating:"データ生成"}},{kind:"MdxPage",name:"generating",route:"/applications/generating"},{kind:"MdxPage",name:"pal",route:"/applications/pal"}]},{kind:"MdxPage",name:"applications",route:"/applications"},{kind:"MdxPage",name:"datasets",route:"/datasets"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",data:{settings:"LLM設定",basics:"基本的なプロンプティング",elements:"プロンプトの要素",tips:"プロンプトをデザインする一般的なTips",examples:"プロンプトの例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics"},{kind:"MdxPage",name:"elements",route:"/introduction/elements"},{kind:"MdxPage",name:"examples",route:"/introduction/examples"},{kind:"MdxPage",name:"settings",route:"/introduction/settings"},{kind:"MdxPage",name:"tips",route:"/introduction/tips"}]},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",data:{flan:"Flan",chatgpt:"ChatGPT","gpt-4":"GPT-4"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt"},{kind:"MdxPage",name:"flan",route:"/models/flan"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4"}]},{kind:"MdxPage",name:"models",route:"/models"},{kind:"MdxPage",name:"notebooks",route:"/notebooks"},{kind:"MdxPage",name:"papers",route:"/papers"},{kind:"MdxPage",name:"readings",route:"/readings"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",data:{adversarial:"敵対的Prompting",factuality:"事実性",biases:"バイアス"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial"},{kind:"MdxPage",name:"biases",route:"/risks/biases"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality"}]},{kind:"MdxPage",name:"risks",route:"/risks"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",data:{zeroshot:"Zero-shotプロンプティング",fewshot:"Few-shotプロンプティング",cot:"Chain-of-Thoughtプロンプティング",consistency:"自己整合性（Self-Consistency）",knowledge:"知識生成プロンプティング",ape:"自動プロンプトエンジニア",activeprompt:"アクティブプロンプト",dsp:"方向性刺激プロンプティング",react:"ReAct",multimodalcot:"マルチモーダルCoT",graph:"グラフプロンプト（GraphPrompts）"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency"},{kind:"MdxPage",name:"cot",route:"/techniques/cot"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot"},{kind:"MdxPage",name:"graph",route:"/techniques/graph"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot"},{kind:"MdxPage",name:"react",route:"/techniques/react"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot"}]},{kind:"MdxPage",name:"techniques",route:"/techniques"},{kind:"MdxPage",name:"tools",route:"/tools"}],flexsearch:{codeblocks:!0},title:"Active-Prompt"},pageNextRoute:"/techniques/activeprompt",nextraLayout:r.ZP,themeConfig:o.Z};var l=(0,a.j)(g)}},function(e){e.O(0,[256,774,888,179],function(){return e(e.s=7963)}),_N_E=e.O()}]);