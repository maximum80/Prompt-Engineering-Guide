(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{436:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/cot",function(){return t(6118)}])},7178:function(e,n,t){"use strict";t.d(n,{w:function(){return l}});var a=t(5893),s=t(6010),i=t(5675),r=t.n(i);function l(e){let{src:n,alt:t,full:i}=e;return(0,a.jsx)("div",{className:(0,s.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",i?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(r(),{src:n,alt:t,className:(0,s.Z)("w-auto select-none bg-white",i?"":"ring-1 ring-gray-200")})})}},9369:function(e,n,t){"use strict";var a=t(5893);t(7294);var s=t(5391);let i={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),head:function(){let{title:e}=(0,s.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/SKgkVT8BGJ"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"}};n.Z=i},6118:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(5893),s=t(8863),i=t(5391),r=t(9369);t(9966);var l=t(1151);t(5675);var o=t(7178),c={src:"/Prompt-Engineering-Guide//_next/static/media/cot.1933d9fe.png",height:473,width:940,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEX19fXM2eXa4OTp6uv+/P3u8OrX4tTf7Nrj6/Hn5eW/1r6n1pS0zuS52quw258peu1TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBhQEAIAzAsM6YIP+fS0JJo9pgasiRIhfMrIBwv/vlBwmYAKSSj7s8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},d={src:"/Prompt-Engineering-Guide//_next/static/media/zero-cot.79793bee.png",height:508,width:944,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEXr7e3z8/Tl5uY6UMA3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nB3IwREAAAxEQPRfdObyswCkIDSe7ri08AAByQAbChTU7QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};function h(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",em:"em",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Chain-of-Thoughtプロンプティング"}),"\n","\n",(0,a.jsx)(n.h2,{id:"chain-of-thought-cot-プロンプティング",children:"Chain-of-Thought (CoT) プロンプティング"}),"\n",(0,a.jsx)(o.w,{src:c,alt:"COT"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2201.11903",children:"Wei et al. (2022)"}),"で紹介されたchain-of-thought (CoT)プロンプティングは、中間的な推論ステップを介して複雑な推論能力を可能にします。few-shot promptingと組み合わせることで、推論が必要なより複雑なタスクでより良い結果を得ることができます。"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 4、8、9、15、12、2、1。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 奇数を全て加えると(9, 15, 1)25になります。答えはFalseです。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 17、10、19、4、8、12、24。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 奇数を全て加えると(17, 19)36になります。答えはTrueです。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 16、11、14、4、8、13、24。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 奇数を全て加えると(11, 13)24になります。答えはTrueです。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 17、9、10、12、13、4、2。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 奇数を全て加えると(17, 9, 13)39になります。答えはFalseです。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 15、32、5、13、82、7、1。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"奇数を全て加えると(15, 5, 13, 7, 1)41になります。答えはFalseです。"})})})}),"\n",(0,a.jsx)(n.p,{children:"素晴らしい！推論ステップが提供された場合、完璧な結果が得られます。実際、より少ない例を提供するだけで、つまり1つの例だけでこのタスクを解決することができます。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 4、8、9、15、12、2、1。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 奇数を全て加えると(9, 15, 1)25になります。答えはFalseです。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"このグループの奇数を合計すると偶数になります。: 15、32、5、13、82、7、1。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"奇数を全て加えると(15, 5, 13, 7, 1)41になります。答えはFalseです。"})})})}),"\n",(0,a.jsx)(n.p,{children:"著者たちは、これが十分に大きな言語モデルで生じる新興能力であると主張しています。"}),"\n",(0,a.jsx)(n.h2,{id:"zero-shot-cot-prompting",children:"Zero-shot COT Prompting"}),"\n",(0,a.jsx)(o.w,{src:d,alt:"Zero-shot COT"}),"\n",(0,a.jsxs)(n.p,{children:["画像の出典：",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2205.11916",children:"Kojima et al. (2022)"})]}),"\n",(0,a.jsxs)(n.p,{children:["より最近提唱されたアイデアの1つは、",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2205.11916",children:"zero-shot CoT"})," (Kojima et al. 2022)のアイデアです。これは、元のプロンプトに「ステップバイステップで考えてみましょう」という文言を追加することを含みます。単純な問題を試して、モデルがどのように機能するかを見てみましょう。"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"私は市場に行って10個のリンゴを買いました。隣人に2つ、修理工に2つ渡しました。それから5つのリンゴを買って1つ食べました。残りは何個ですか？"})})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"11個のリンゴ"})})})}),"\n",(0,a.jsx)(n.p,{children:"答えは不正解です！それでは、特別なプロンプトで試してみましょう。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"私は市場に行って10個のリンゴを買いました。隣人に2つ、修理工に2つ渡しました。それから5つのリンゴを買って1つ食べました。残りは何個ですか？"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"ステップバイステップで考えてみましょう。"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"最初に、10個のリンゴから始めました。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"隣人と修理工に合わせて、リンゴを2つずつ渡し、残りは6個になりました。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"次に、5つのリンゴを買い、11個になりました。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"最後に、1つのリンゴを食べたため、残りは10個になります。"})})]})}),"\n",(0,a.jsx)(n.p,{children:"この単純なプロンプトがこのタスクで効果的であることは驚くべきことです。これは、プロンプトに使用できる例があまりない場合に特に有用です。"})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/techniques/cot.mdx",route:"/techniques/cot",headings:[{depth:1,value:"Chain-of-Thoughtプロンプティング",id:"chain-of-thoughtプロンプティング"},{depth:2,value:"Chain-of-Thought (CoT) プロンプティング",id:"chain-of-thought-cot-プロンプティング"},{depth:2,value:"Zero-shot COT Prompting",id:"zero-shot-cot-prompting"}],timestamp:1679576093e3,pageMap:[{kind:"Meta",data:{index:"Prompt Engineering",introduction:"はじめに",techniques:"テクニック",applications:"アプリケーション",models:"モデル",risks:"リスクと誤用",papers:"論文",tools:"ツール",notebooks:"ノートブック",datasets:"データセット",readings:"参考文献",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/dair_ai",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{pal:"PAL（プログラム支援言語モデル）",generating:"データ生成"}},{kind:"MdxPage",name:"generating",route:"/applications/generating"},{kind:"MdxPage",name:"pal",route:"/applications/pal"}]},{kind:"MdxPage",name:"applications",route:"/applications"},{kind:"MdxPage",name:"datasets",route:"/datasets"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",data:{settings:"LLM設定",basics:"基本的なプロンプティング",elements:"プロンプトの要素",tips:"プロンプトをデザインする一般的なTips",examples:"プロンプトの例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics"},{kind:"MdxPage",name:"elements",route:"/introduction/elements"},{kind:"MdxPage",name:"examples",route:"/introduction/examples"},{kind:"MdxPage",name:"settings",route:"/introduction/settings"},{kind:"MdxPage",name:"tips",route:"/introduction/tips"}]},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",data:{flan:"Flan",chatgpt:"ChatGPT","gpt-4":"GPT-4"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt"},{kind:"MdxPage",name:"flan",route:"/models/flan"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4"}]},{kind:"MdxPage",name:"models",route:"/models"},{kind:"MdxPage",name:"notebooks",route:"/notebooks"},{kind:"MdxPage",name:"papers",route:"/papers"},{kind:"MdxPage",name:"readings",route:"/readings"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",data:{adversarial:"敵対的Prompting",factuality:"事実性",biases:"バイアス"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial"},{kind:"MdxPage",name:"biases",route:"/risks/biases"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality"}]},{kind:"MdxPage",name:"risks",route:"/risks"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",data:{zeroshot:"Zero-shotプロンプティング",fewshot:"Few-shotプロンプティング",cot:"Chain-of-Thoughtプロンプティング",consistency:"自己整合性（Self-Consistency）",knowledge:"知識生成プロンプティング",ape:"自動プロンプトエンジニア",activeprompt:"アクティブプロンプト",dsp:"方向性刺激プロンプティング",react:"ReAct",multimodalcot:"マルチモーダルCoT",graph:"グラフプロンプト（GraphPrompts）"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency"},{kind:"MdxPage",name:"cot",route:"/techniques/cot"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot"},{kind:"MdxPage",name:"graph",route:"/techniques/graph"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot"},{kind:"MdxPage",name:"react",route:"/techniques/react"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot"}]},{kind:"MdxPage",name:"techniques",route:"/techniques"},{kind:"MdxPage",name:"tools",route:"/tools"}],flexsearch:{codeblocks:!0},title:"Chain-of-Thoughtプロンプティング"},pageNextRoute:"/techniques/cot",nextraLayout:i.ZP,themeConfig:r.Z};var p=(0,s.j)(x)}},function(e){e.O(0,[256,774,888,179],function(){return e(e.s=436)}),_N_E=e.O()}]);