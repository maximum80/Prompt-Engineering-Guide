# Prompting Introduction

プロンプトエンジニアリングは、幅広いアプリケーションや研究トピックで言語モデル（LM）を効率的に利用するためのプロンプトを開発・最適化する比較的新しい分野です。プロンプトエンジニアリングのスキルは、大規模言語モデル（LLM）の能力と制約をよりよく理解するのに役立ちます。研究者は、プロンプトエンジニアリングを用いて、質問応答や算術推論などの一般的で複雑なタスクに対するLLMの性能を向上させます。開発者は、プロンプトエンジニアリングを用いて、LLMや他のツールと連携する堅牢で効果的なプロンプティング技術を設計します。

このガイドでは、標準的なプロンプトの基本を説明し、プロンプトを使用して大規模言語モデル（LLM）と対話し、指示する方法について説明します。

すべての例は、特に指定がない限り、`text-davinci-003`（OpenAIのプレイグラウンドを使用）でテストされています。デフォルトの設定としては、 `temperature=0.7` と `top-p=1` を使用しています。

トピック:
- [基本プロンプト](#basic-prompts)
- [LLMの設定に関する単語](#a-word-on-llm-settings)
- [標準プロンプト](#standard-prompts)
- [プロンプトの要素](#elements-of-a-prompt)
- [プロンプトをデザインするための一般的なヒント](#general-tips-for-designing-prompts)

---

## 基本プロンプト

プロンプトを使えばすでに多くのことが実現できますが、結果の質はプロンプトにどれだけの情報を与えるかによって決まります。プロンプトには、モデルに渡す `指示` や `質問` のような情報を含めることができ、`入力` や `例` のような他の詳細も含めることができます。

ここでは、簡単なプロンプトの基本例を紹介します:

*プロンプト*
```
空が
```

*アウトプット:*
```
青いのはなぜですか？

空が青く見える理由は、太陽からの光が大気中の微粒子や気体分子と相互作用することによります。太陽光は、さまざまな波長の光を含む白色光です。大気中では、光が散乱する現象が起こります。これは、光が大気中の粒子や気体分子にぶつかり、さまざまな方向に散らばることを意味します。
```

ご覧のように、言語モデルは、文脈`"空が"`を考慮した意味のある文字列を続けて出力します。
この出力は予想外のものであったり、達成したいタスクからかけ離れたものであったりするかもしれません。

この基本的な例では、具体的に何を実現したいのか、もっと文脈や指示を与える必要性があることがわかります。

少し改良してみましょう:

*プロンプト:*
```
次の単語に続く文を10文字以内で完成させてください：

空が
```

*アウトプット:*

```
青くて綺麗。
```

いかがでしょうか？
これは、モデルに文章を完成させるように指示した結果であり、私たちが指示したこと（「文章を完成させる」）に忠実に従うので、より良く見えます。このように、モデルにタスクを実行させるために最適なプロンプトを設計するアプローチは、**プロンプトエンジニアリング**と呼ばれます。

上の例は、現在のLLMで可能なことを示す基本的なものです。今日のLLMは、テキストの要約から数学的推論、コード生成に至るまで、あらゆる種類の高度なタスクを実行することができます。

---
## LLMの設定に関するパラメーター

プロンプトを扱う場合、APIを介して、または直接LLMと対話することになります。いくつかのパラメータを設定することで、プロンプトに異なる結果を得ることができます。

**Temperature** - 簡潔に言うと、この値が低ければ低いほど、最も確率が最も高いものが常に選ばれるため、結果はより決定論的になります。この値を上げると、ランダム性が増し、より多様で創造的なアウトプットが可能になります。つまり、他の回答の可能性のある重みを増やすことになります。応用例としては、事実に基づくQAなどでは、この値を低くして、より事実に基づいた簡潔な回答を促すとよいでしょう。逆に、詩の生成やその他の創造的なタスクでは、temperatureを上げると効果的かもしれません。


**Top_p** - 同様に、核サンプリングと呼ばれるサンプリング手法であるtop_pでは、モデルが応答を生成する際の決定性をコントロールすることができます。正確で事実に基づいた回答を求めるのであれば、この値を低くしておきます。より多様な回答を求めるのであれば、より高い値にします。

一般的には、両方ではなく、どちらかを変更することをお勧めします。

基本的な例から始める前に、あなたの使っているLLMのバージョンによって結果が異なる可能性があることを予めご承知おきください。

---
## Standard Prompts

We have tried a very simple prompt above. A standard prompt has the following format:

```
<Question>?
```
 
This can be formatted into a QA format, which is standard in a lot of QA dataset, as follows:

```
Q: <Question>?
A: 
```

Given the standard format above, one popular and effective technique for prompting is referred to as few-shot prompting where we provide exemplars. Few-shot prompts can be formatted as follows:

```
<Question>?
<Answer>

<Question>?
<Answer>

<Question>?
<Answer>

<Question>?

```


And you can already guess that its QA format version would look like this:

```
Q: <Question>?
A: <Answer>

Q: <Question>?
A: <Answer>

Q: <Question>?
A: <Answer>

Q: <Question>?
A:
```

Keep in mind that it's not required to use QA format. The format depends on the task at hand. For instance, you can perform a simple classification task and give exemplars that demonstrate the task as follows:

*Prompt:*
```
This is awesome! // Positive
This is bad! // Negative
Wow that movie was rad! // Positive
What a horrible show! //
```

*Output:*
```
Negative
```

Few-shot prompts enable in-context learning which is the ability of language models to learn tasks given only a few examples. We will see more of this in action in the upcoming guides.

---
## Elements of a Prompt

As we cover more and more examples and applications that are possible with prompt engineering, you will notice that there are certain elements that make up a prompt. 

A prompt can contain any of the following components:

**Instruction** - a specific task or instruction you want the model to perform

**Context** - can involve external information or additional context that can steer the model to better responses

**Input Data** - is the input or question that we are interested to find a response for

**Output Indicator** - indicates the type or format of the output.

Not all the components are required for a prompt and the format depends on the task at hand. We will touch on more concrete examples in upcoming guides.

---
## General Tips for Designing Prompts

Here are some tips to keep in mind while you are designing your prompts:


### Start Simple
As you get started with designing prompts, you should keep in mind that it is an iterative process that requires a lot of experimentation to get optimal results. Using a simple playground like OpenAI's or Cohere's is a good starting point. 

You can start with simple prompts and keep adding more elements and context as you aim for better results. Versioning your prompt along the way is vital for this reason. As we read the guide you will see many examples where specificity, simplicity, and conciseness will often give you better results.

When you have a big task that involves many different subtasks, you can try to break down the task into simpler subtasks and keep building up as you get better results. This avoids adding too much complexity to the prompt design process at the beginning.

### The Instruction
You can design effective prompts for various simple tasks by using commands to instruct the model what you want to achieve such as "Write", "Classify", "Summarize", "Translate", "Order", etc.

Keep in mind that you also need to experiment a lot to see what works best. Try different instructions with different keywords, contexts, and data and see what works best for your particular use case and task. Usually, the more specific and relevant the context is to the task you are trying to perform, the better. We will touch on the importance of sampling and adding more context in the upcoming guides.

Others recommend that instructions are placed at the beginning of the prompt. It's also recommended that some clear separator like "###" is used to separate the instruction and context. 

For instance:

*Prompt:*
```
### Instruction ###
Translate the text below to Spanish:

Text: "hello!"
```

*Output:*
```
¡Hola!
```

### Specificity
Be very specific about the instruction and task you want the model to perform. The more descriptive and detailed the prompt is, the better the results. This is particularly important when you have a desired outcome or style of generation you are seeking. There aren't specific tokens or keywords that lead to better results. It's more important to have a good format and descriptive prompt. Providing examples in the prompt is very effective to get desired output in specific formats. 

When designing prompts you should also keep in mind the length of the prompt as there are limitations regarding how long this can be. Thinking about how specific and detailed you should be is something to consider. Too many unnecessary details are not necessarily a good approach. The details should be relevant and contribute to the task at hand. This is something you will need to experiment with a lot. We encourage a lot of experimentation and iteration to optimize prompts for your applications.

As an example, let's try a simple prompt to extract specific information from a piece of text.

*Prompt:*
```
Extract the name of places in the following text. 

Desired format:
Place: <comma_separated_list_of_company_names>

Input: "Although these developments are encouraging to researchers, much is still a mystery. “We often have a black box between the brain and the effect we see in the periphery,” says Henrique Veiga-Fernandes, a neuroimmunologist at the Champalimaud Centre for the Unknown in Lisbon. “If we want to use it in the therapeutic context, we need to understand the mechanism."
```

*Output:*
```
Place: Champalimaud Centre for the Unknown, Lisbon
```

The input text is obtained from [this Nature article](https://www.nature.com/articles/d41586-023-00509-z).

### Avoid Impreciseness

Given the tips above about being detailed and improving format, it's easy to fall into the trap of wanting to be too clever about prompts and potentially creating imprecise descriptions. It's often better to be specific and direct. The analogy here is very similar to effective communication -- the more direct, the more effective the message gets across.

For example, you might be interested in learning the concept of prompt engineering. You might try something like:

```
Explain the concept of prompt engineering. Keep the explanation short, only a few sentences, and don't be too descriptive.
```

It's not clear from the prompt above how many sentences to use and what style. You might still somewhat get good responses with the above prompts but the better prompt would be one that is very specific, concise, and to the point. Something like:

```
Use 2-3 sentences to explain the concept of prompt engineering to a high school student.
```

### To do or not to do?
Another common tip when designing prompts is to avoid saying what not to do but say what to do instead. This encourages more specificity and focuses on the details that lead to good responses from the model.

Here is an example of a movie recommendation chatbot failing at exactly what I don't want it to do because of how I wrote the instruction -- focusing on what not to do. 

*Prompt:*
```
The following is an agent that recommends movies to a customer. DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.

Customer: Please recommend a movie based on my interests.
Agent: 
```

*Output:*
```
Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?
```

Here is a better prompt:

*Prompt:*
```
The following is an agent that recommends movies to a customer. The agent is responsible to recommend a movie from the top global trending movies. It should refrain from asking users for their preferences and avoid asking for personal information. If the agent doesn't have a movie to recommend, it should respond "Sorry, couldn't find a movie to recommend today.".

Customer: Please recommend a movie based on my interests.
Agent:
```

*Output:*
```
Sorry, I don't have any information about your interests. However, here's a list of the top global trending movies right now: [list of movies]. I hope you find something you like!
```

Some of the examples above were adopted from the ["Best practices for prompt engineering with OpenAI API" article.](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)


---
[Next Section (Basic Prompting)](./prompts-basic-usage.md)
