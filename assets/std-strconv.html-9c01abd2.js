import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-7092e565.js";const o={},e=t(`<h1 id="go-strconv包详解" tabindex="-1"><a class="header-anchor" href="#go-strconv包详解" aria-hidden="true">#</a> Go strconv包详解</h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Strconv包也是我们在Go语言中经常会使用到的包，通常用于在字符串与基本数据类型之间进行转换。它提供了一系列函数来处理字符串的解析（parsing）和格式化（formatting）操作。</p></div><h3 id="简要介绍" tabindex="-1"><a class="header-anchor" href="#简要介绍" aria-hidden="true">#</a> 简要介绍</h3><p>strconv 包是 Go 标准库中的一个包，用于进行字符串和基本数据类型之间的相互转换。它提供了一系列的函数，包括将基本类型转换为字符串的函数，以及将字符串转换为基本类型的函数。</p><p>该包的常用函数和功能包括：</p><ol><li><p><strong>Parse 系列函数</strong>：用于将字符串解析为基本类型的值，例如 <code>ParseBool</code>、<code>ParseInt</code>、<code>ParseFloat</code> 等函数。</p></li><li><p><strong>Format 系列函数</strong>：用于将基本类型的值格式化为字符串的表示形式，例如 <code>FormatBool</code>、<code>FormatInt</code>、<code>FormatFloat</code> 等函数。</p></li><li><p><strong>Append 系列函数</strong>：用于将基本类型的值追加到字节切片中，例如 <code>AppendBool</code>、<code>AppendInt</code>、<code>AppendFloat</code> 等函数。</p></li><li><p><strong>Quote 系列函数</strong>：用于将基本类型的值转换为其在 Go 语言中的源代码表示形式的字符串，例如 <code>Quote</code>、<code>QuoteRune</code>、<code>QuoteRuneToASCII</code> 等函数。</p></li><li><p><strong>字符串转换函数</strong>：包括 <code>Atoi</code>、<code>Itoa</code>、<code>ParseUint</code>、<code>FormatUint</code> 等函数，用于处理字符串和整数类型之间的转换。</p></li><li><p><strong>字符串和浮点数类型之间的转换</strong>：包括 <code>Atof</code>、<code>FormatFloat</code>、<code>ParseFloat</code> 等函数，用于处理字符串和浮点数类型之间的转换。</p></li></ol><p>下面是strconv包中一些常用的函数和其功能的简要介绍：</p><ol><li><p><strong>strconv.Itoa</strong>：将整数转换为字符串。它接受一个整数值，并返回表示该整数的字符串形式。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num <span class="token operator">:=</span> <span class="token number">42</span>
    str <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;42&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>strconv.Atoi</strong>：将字符串转换为整数。它接受一个表示整数的字符串，并返回对应的整数值。如果转换失败，它会返回错误信息。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;42&quot;</span>
    num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;转换失败:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 输出: 42</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>strconv.ParseFloat</strong>：将字符串转换为浮点数。接受一个表示浮点数的字符串、指定的位数（32或64）以及对应位数的浮点数类型，并返回对应的浮点数值。如果转换失败，它会返回错误信息。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;3.14&quot;</span>
    num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;转换失败:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 输出: 3.14</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>strconv.FormatInt / strconv.FormatFloat</strong>：将整数或浮点数转换为字符串。接受一个整数或浮点数值，以及指定的基数（如10进制、16进制等），并返回对应的字符串形式。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num <span class="token operator">:=</span> <span class="token number">42</span>
    str <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;42&quot;</span>

    pi <span class="token operator">:=</span> <span class="token number">3.14159</span>
    str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span>pi<span class="token punctuation">,</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;3.14&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这些只是strconv包提供的一些常用函数，它还提供了其他函数用于更复杂的转换操作，比如处理布尔值、Unicode字符等。</p><h3 id="appendxxx-简要介绍" tabindex="-1"><a class="header-anchor" href="#appendxxx-简要介绍" aria-hidden="true">#</a> AppendXXX 简要介绍</h3><p><code>AppendXXX</code> 函数用于将基本类型的值追加到字节切片（<code>[]byte</code>）中。</p><ol><li><p><strong><code>AppendBool</code> 函数</strong></p><p><code>func AppendBool(dst []byte, b bool) []byte</code></p><p><code>AppendBool</code> 函数将布尔值 <code>b</code> 转换为字符串表示形式，并将结果追加到字节切片 <code>dst</code> 中。返回值是追加后的字节切片。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> dst <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
dst <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendBool</span><span class="token punctuation">(</span>dst<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>dst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;true&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>AppendFloat</code> 函数</strong></p><p><code>func AppendFloat(dst []byte, f float64, fmt byte, prec, bitSize int) []byte</code></p><p><code>AppendFloat</code> 函数将浮点数 <code>f</code> 转换为字符串表示形式，并将结果追加到字节切片 <code>dst</code> 中。<code>fmt</code> 参数指定格式，<code>prec</code> 参数指定精度，<code>bitSize</code> 参数指定浮点数位数。</p><p>示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> dst <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
dst <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">AppendFloat</span><span class="token punctuation">(</span>dst<span class="token punctuation">,</span> <span class="token number">3.14159</span><span class="token punctuation">,</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>dst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;3.1416&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>请注意，这些 <code>AppendXXX</code> 函数用于将字符串形式的基本类型值追加到字节切片中，而不是在现有的字节切片中修改值。这些函数通常在需要将基本类型值转换为字符串并将其添加到字节切片中的情况下使用。</p><h3 id="quotexxx-简要介绍quotexxx-函数是-strconv-包中的一组函数-用于将基本类型的值转换为其在-go-语言中的源代码表示形式-并返回该表示形式的字符串。" tabindex="-1"><a class="header-anchor" href="#quotexxx-简要介绍quotexxx-函数是-strconv-包中的一组函数-用于将基本类型的值转换为其在-go-语言中的源代码表示形式-并返回该表示形式的字符串。" aria-hidden="true">#</a> QuoteXXX 简要介绍<code>QuoteXXX</code> 函数是 <code>strconv</code> 包中的一组函数，用于将基本类型的值转换为其在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。</h3><p>以下是 <code>QuoteXXX</code> 函数的作用和示例：</p><ol><li><p><strong><code>Quote</code> 函数</strong></p><p><code>func Quote(s string) string</code></p><p><code>Quote</code> 函数将字符串 <code>s</code> 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。它将特殊字符进行转义，使字符串可以直接在源代码中使用。</p><p>示例用法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>str <span class="token operator">:=</span> <span class="token string">\`Hello, &quot;Gopher&quot;\`</span>
quoted <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Quote</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>quoted<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;Hello, \\&quot;Gopher\\&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>QuoteRune</code> 函数</strong></p><p><code>func QuoteRune(r rune) string</code></p><p><code>QuoteRune</code> 函数将 Unicode 字符 <code>r</code> 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的字符串。</p><p>示例用法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token builtin">rune</span> <span class="token operator">:=</span> <span class="token char">&#39;♥&#39;</span>
quoted <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">QuoteRune</span><span class="token punctuation">(</span><span class="token builtin">rune</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>quoted<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;&#39;♥&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>QuoteRuneToASCII</code> 函数</strong></p><p><code>func QuoteRuneToASCII(r rune) string</code></p><p><code>QuoteRuneToASCII</code> 函数将 Unicode 字符 <code>r</code> 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的 ASCII 字符串。它将非 ASCII 字符进行转义。</p><p>示例用法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token builtin">rune</span> <span class="token operator">:=</span> <span class="token char">&#39;♥&#39;</span>
quoted <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">QuoteRuneToASCII</span><span class="token punctuation">(</span><span class="token builtin">rune</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>quoted<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;&#39;\\\\u2665&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>QuoteRuneToGraphic</code> 函数</strong></p><p><code>func QuoteRuneToGraphic(r rune) string</code></p><p><code>QuoteRuneToGraphic</code> 函数将 Unicode 字符 <code>r</code> 转换为它在 Go 语言中的源代码表示形式，并返回该表示形式的可打印字符的字符串。它将非图形字符进行转义。</p><p>示例用法：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token builtin">rune</span> <span class="token operator">:=</span> <span class="token char">&#39;\\u2022&#39;</span> <span class="token comment">// 中文的&quot;点&quot;字符</span>
quoted <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">QuoteRuneToGraphic</span><span class="token punctuation">(</span><span class="token builtin">rune</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>quoted<span class="token punctuation">)</span> <span class="token comment">// 输出: &quot;&#39;•&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这些 <code>QuoteXXX</code> 函数可以用于生成源代码字符串的表示形式，特别是在需要将字符串或字符嵌入到源代码中时，可以确保它们的表示形式是正确的，并且不会导致语法错误。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>strconv 包提供了灵活且简便的方法来处理字符串和基本数据类型之间的转换，使得我们可以方便地进行数据格式转换和处理。</p></div>`,19),p=[e];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","std-strconv.html.vue"]]);export{r as default};