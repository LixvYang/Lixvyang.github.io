const t=JSON.parse('{"key":"v-18827cdf","path":"/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-fmt.html","title":"Go fmt 包详解","lang":"zh-CN","frontmatter":{"icon":"snow","date":"2023-05-16T00:00:00.000Z","isOriginal":true,"title":"Go fmt 包详解","category":["tutorial"],"tag":["golang"],"description":"Go fmt 包详解 相关信息 相信很多人入坑Go语言都是从官网的fmt.Println(\\"Hello World\\")入门的 这篇文章带你好好了解一下fmt包还可以做哪些事情。 相关信息 在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/program/golang/%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/%E5%AE%98%E6%96%B9%E6%A0%87%E5%87%86%E5%BA%93%E5%AD%A6%E4%B9%A0/std-fmt.html"}],["meta",{"property":"og:title","content":"Go fmt 包详解"}],["meta",{"property":"og:description","content":"Go fmt 包详解 相关信息 相信很多人入坑Go语言都是从官网的fmt.Println(\\"Hello World\\")入门的 这篇文章带你好好了解一下fmt包还可以做哪些事情。 相关信息 在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-03T03:26:17.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-03T03:26:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go fmt 包详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-03T03:26:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"Print 系列函数","slug":"print-系列函数","link":"#print-系列函数","children":[]},{"level":2,"title":"Sprint 系列函数","slug":"sprint-系列函数","link":"#sprint-系列函数","children":[]},{"level":2,"title":"Fprint 系列函数","slug":"fprint-系列函数","link":"#fprint-系列函数","children":[]},{"level":2,"title":"Errors","slug":"errors","link":"#errors","children":[]},{"level":2,"title":"Scan 系列函数","slug":"scan-系列函数","link":"#scan-系列函数","children":[]},{"level":2,"title":"Fscan 系列函数","slug":"fscan-系列函数","link":"#fscan-系列函数","children":[]},{"level":2,"title":"Sscan 系列函数","slug":"sscan-系列函数","link":"#sscan-系列函数","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693711577000,"updatedTime":1693711577000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":1}]},"readingTime":{"minutes":5.84,"words":1753},"filePathRelative":"posts/program/golang/标准库学习/官方标准库学习/std-fmt.md","localizedDate":"2023年5月16日","excerpt":"<h1> Go fmt 包详解</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>相信很多人入坑Go语言都是从官网的<code>fmt.Println(\\"Hello World\\")</code>入门的</p>\\n<p>这篇文章带你好好了解一下<code>fmt</code>包还可以做哪些事情。</p>\\n</div>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。</p>\\n</div>","autoDesc":true}');export{t as data};
