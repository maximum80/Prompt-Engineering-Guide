(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[392],{1867:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction/tips",function(){return t(6230)}])},9369:function(e,n,t){"use strict";var a=t(5893);t(7294);var i=t(5391);let s={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),head:function(){let{title:e}=(0,i.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/SKgkVT8BGJ"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"}};n.Z=s},6230:function(e,n,t){"use strict";t.r(n);var a=t(5893),i=t(8863),s=t(5391),r=t(9369);t(9966);var l=t(1151);function d(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",em:"em",pre:"pre",code:"code",span:"span",a:"a"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"プロンプトの設計に関する一般的なヒント"}),"\n",(0,a.jsx)(n.p,{children:"プロンプトを設計する際には以下のことに注意するとよいでしょう。"}),"\n",(0,a.jsx)(n.h3,{id:"簡単に始める",children:"簡単に始める"}),"\n",(0,a.jsx)(n.p,{children:"プロンプトの設計を始める際には、最適な結果を得るために多くの実験が必要な反復的なプロセスであることを念頭に置く必要があります。OpenAIやCohereのようなシンプルなプレイグラウンドから始めると良いでしょう。"}),"\n",(0,a.jsx)(n.p,{children:"シンプルなプロンプトから始め、結果を向上させるために要素や文脈を追加していくことができます。そのためにはプロンプトのバージョン管理が重要です。このガイドを読むと、具体性、簡潔さ、明確さがより良い結果をもたらすことがわかるでしょう。"}),"\n",(0,a.jsx)(n.p,{children:"多くの異なるサブタスクを含む大きなタスクがある場合、タスクをよりシンプルなサブタスクに分解し、結果が改善されるにつれて徐々に構築していくことができます。これにより、プロンプトの設計プロセスにあまり複雑さを加えることがなくなります。"}),"\n",(0,a.jsx)(n.h3,{id:"指示",children:"指示"}),"\n",(0,a.jsx)(n.p,{children:"「書く」「分類する」「要約する」「翻訳する」「並べ替える」などのコマンドを使用して、モデルに達成したいことを指示することで、さまざまなシンプルなタスクに対する効果的なプロンプトを設計することができます。"}),"\n",(0,a.jsx)(n.p,{children:"最適な結果を得るためには、異なるキーワード、文脈、データを使用した異なる指示を試して、特定のユースケースやタスクに最適なものを見つける必要があります。通常、タスクに関連した文脈が具体的であるほど、結果が良くなります。次のガイドで、サンプリングやより多くの文脈を追加することの重要性について触れます。"}),"\n",(0,a.jsx)(n.p,{children:"また、指示はプロンプトの最初に配置し、指示と文脈を区切るために「###」のような明確な区切り記号を使用することが推奨されています。"}),"\n",(0,a.jsx)(n.p,{children:"例えば："}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"### 指示 ###"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下のテキストをスペイン語に翻訳してください。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'Text: "hello!"'})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"\xa1Hola!"})})})}),"\n",(0,a.jsx)(n.h3,{id:"特異性",children:"特異性"}),"\n",(0,a.jsx)(n.p,{children:"モデルに実行してほしい指示やタスクについて、非常に具体的に説明してください。プロンプトが詳細で具体的であるほど、結果はよくなります。特定の出力やスタイルを望む場合には、特に重要です。より良い結果をもたらすトークンやキーワードはありません。良いフォーマットと詳細なプロンプトを用意することが重要です。実際、プロンプトに例を提供することは、特定のフォーマットで出力を得るために非常に効果的です。"}),"\n",(0,a.jsx)(n.p,{children:"プロンプトを設計する際には、プロンプトの長さに関する制限があるため、考慮する必要があります。どの程度具体的かつ詳細にするかを考える必要があります。余計な詳細を含めることは必ずしも良いアプローチではありません。詳細は関連性があり、課題に貢献する必要があります。これは多くの実験と反復を必要とすることです。アプリケーションに最適なプロンプトを最適化するために、多くの実験と反復をお勧めします。"}),"\n",(0,a.jsx)(n.p,{children:"例えば、次のテキストから特定の場所の名前を抽出する簡単なプロンプトを試してみましょう。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下のテキストから場所の名前を抽出してください。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"望ましいフォーマット："})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Place: <comma_separated_list_of_company_names>"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"入力：「これらの進展は研究者にとって励みになっていますが、まだ多くのことが謎のままです。リスボンのシャンパリマウド・センター・フォー・ジ・アンノウンの神経免疫学者であるヘンリーク・ヴェイガ・フェルナンデスは、「脳と周辺部で見られる効果の間にはしばしばブラックボックスがあります」「治療的な文脈で使用したい場合、実際には作用機序を理解する必要があります。」」"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Place: Champalimaud Centre for the Unknown, Lisbon"})})})}),"\n",(0,a.jsxs)(n.p,{children:["入力テキストは、",(0,a.jsx)(n.a,{href:"https://www.nature.com/articles/d41586-023-00509-z",children:"このNature記事"}),"から取得されています。"]}),"\n",(0,a.jsx)(n.h3,{id:"不正確さを避ける",children:"不正確さを避ける"}),"\n",(0,a.jsx)(n.p,{children:"上記の詳細でフォーマットを改善するヒントに加えて、プロンプトについて賢くなりすぎて、不正確な説明を作り出すことが容易になります。具体的で直接的である方が良い結果が得られます。ここでの類似性は、効果的なコミュニケーションと非常に類似しています--直接的であるほど、効果的にメッセージが伝わります。"}),"\n",(0,a.jsx)(n.p,{children:"例えば、プロンプトエンジニアリングの概念を学びたいと思うかもしれません。"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"プロンプトエンジニアリングの概念を説明してください。説明は短く、数文で、あまり詳しくしないでください。"})})})}),"\n",(0,a.jsx)(n.p,{children:"上記のプロンプトから、どのように文を数え、スタイルを指定するかは明確ではありません。上記のプロンプトでも、まだ良い回答を得ることができますが、非常に具体的かつ簡潔で、的を射たプロンプトの方が良いでしょう。以下のようなものです。"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"高校生に対して、プロンプトエンジニアリングの概念を2〜3文で説明してください。"})})})}),"\n",(0,a.jsx)(n.h3,{id:"するかしないか",children:"するかしないか？"}),"\n",(0,a.jsx)(n.p,{children:"プロンプトを設計する際のもう一つの一般的なヒントは、「しないこと」を言わず、「すること」を言うことです。これにより、より具体的になり、モデルから良い回答を得るための詳細に焦点が当てられます。"}),"\n",(0,a.jsx)(n.p,{children:"以下は、映画の推薦チャットボットが、私が指示を書いた方法のために、正確にやりたくないことに失敗した例です--何をしないでくださいということに焦点を当てています。"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下は、顧客に映画を推薦するエージェントです。興味を尋ねないで、個人情報を尋ねないでください。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"顧客：私の興味に基づいて映画をお勧めください。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"エージェント："})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"はい、あなたの興味に基づいて映画をお勧めできます。アクション、コメディ、ロマンス、それともその他の何か、どのような映画がお好きですか？"})})})}),"\n",(0,a.jsx)(n.p,{children:"以下は改善されたプロンプトです："}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"プロンプト："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下は、顧客に映画を推薦するエージェントです。エージェントは、上位のグローバルトレンド映画から映画をお勧めする責任があります。ユーザーの好みを尋ねることを避け、個人情報を尋ねることを避ける必要があります。エージェントがおすすめ映画を持っていない場合は、「申し訳ありませんが、今日お勧めする映画が見つかりませんでした。」と返答する必要があります。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"顧客：私の興味に基づいて映画をお勧めください。"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"エージェント："})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"出力："})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"申し訳ありませんが、あなたの興味に関する情報はありません。しかし、ここに今一番トレンディーな映画のリストがあります：[リストの映画]。お好きなものが見つかることを願っています！"})})})}),"\n",(0,a.jsxs)(n.p,{children:["上記の例のいくつかは、",(0,a.jsx)(n.a,{href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",children:"'Best practices for prompt engineering with OpenAI API'"}),"から採用されました。"]})]})}t(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/introduction/tips.mdx",route:"/introduction/tips",headings:[{depth:1,value:"プロンプトの設計に関する一般的なヒント",id:"プロンプトの設計に関する一般的なヒント"},{depth:3,value:"簡単に始める",id:"簡単に始める"},{depth:3,value:"指示",id:"指示"},{depth:3,value:"特異性",id:"特異性"},{depth:3,value:"不正確さを避ける",id:"不正確さを避ける"},{depth:3,value:"するかしないか？",id:"するかしないか"}],timestamp:1679576093e3,pageMap:[{kind:"Meta",data:{index:"Prompt Engineering",introduction:"はじめに",techniques:"テクニック",applications:"アプリケーション",models:"モデル",risks:"リスクと誤用",papers:"論文",tools:"ツール",notebooks:"ノートブック",datasets:"データセット",readings:"参考文献",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/dair_ai",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{pal:"PAL（プログラム支援言語モデル）",generating:"データ生成"}},{kind:"MdxPage",name:"generating",route:"/applications/generating"},{kind:"MdxPage",name:"pal",route:"/applications/pal"}]},{kind:"MdxPage",name:"applications",route:"/applications"},{kind:"MdxPage",name:"datasets",route:"/datasets"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",data:{settings:"LLM設定",basics:"基本的なプロンプティング",elements:"プロンプトの要素",tips:"プロンプトをデザインする一般的なTips",examples:"プロンプトの例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics"},{kind:"MdxPage",name:"elements",route:"/introduction/elements"},{kind:"MdxPage",name:"examples",route:"/introduction/examples"},{kind:"MdxPage",name:"settings",route:"/introduction/settings"},{kind:"MdxPage",name:"tips",route:"/introduction/tips"}]},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",data:{flan:"Flan",chatgpt:"ChatGPT","gpt-4":"GPT-4"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt"},{kind:"MdxPage",name:"flan",route:"/models/flan"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4"}]},{kind:"MdxPage",name:"models",route:"/models"},{kind:"MdxPage",name:"notebooks",route:"/notebooks"},{kind:"MdxPage",name:"papers",route:"/papers"},{kind:"MdxPage",name:"readings",route:"/readings"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",data:{adversarial:"敵対的Prompting",factuality:"事実性",biases:"バイアス"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial"},{kind:"MdxPage",name:"biases",route:"/risks/biases"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality"}]},{kind:"MdxPage",name:"risks",route:"/risks"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",data:{zeroshot:"Zero-shotプロンプティング",fewshot:"Few-shotプロンプティング",cot:"Chain-of-Thoughtプロンプティング",consistency:"自己整合性（Self-Consistency）",knowledge:"知識生成プロンプティング",ape:"自動プロンプトエンジニア",activeprompt:"アクティブプロンプト",dsp:"方向性刺激プロンプティング",react:"ReAct",multimodalcot:"マルチモーダルCoT",graph:"グラフプロンプト（GraphPrompts）"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency"},{kind:"MdxPage",name:"cot",route:"/techniques/cot"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot"},{kind:"MdxPage",name:"graph",route:"/techniques/graph"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot"},{kind:"MdxPage",name:"react",route:"/techniques/react"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot"}]},{kind:"MdxPage",name:"techniques",route:"/techniques"},{kind:"MdxPage",name:"tools",route:"/tools"}],flexsearch:{codeblocks:!0},title:"プロンプトの設計に関する一般的なヒント"},pageNextRoute:"/introduction/tips",nextraLayout:s.ZP,themeConfig:r.Z};n.default=(0,i.j)(o)}},function(e){e.O(0,[256,774,888,179],function(){return e(e.s=1867)}),_N_E=e.O()}]);