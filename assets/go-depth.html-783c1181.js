const e=JSON.parse('{"key":"v-5aa00416","path":"/posts/program/golang/%E5%BA%95%E5%B1%82/Go%E8%AF%AD%E8%A8%80%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86/go-depth.html","title":"Go 语言底层剖析","lang":"zh-CN","frontmatter":{"icon":"grommet-icons:golang","date":"2021-11-23T00:00:00.000Z","isOriginal":true,"headerDepth":4,"category":["tutorial"],"tag":["golang"],"description":"Go 语言底层剖析 GMP 数据结构 G — 表示 Goroutine，它是一个待执行的任务； M — 表示操作系统的线程，它由操作系统的调度器调度和管理； P — 表示处理器，它可以被看做运行在线程上的本地调度器； 我们先在这里介绍一下不同的数据结构, 作用以及运行期间可能的状态:","head":[["meta",{"property":"og:url","content":"https://yanglixin.com/posts/program/golang/%E5%BA%95%E5%B1%82/Go%E8%AF%AD%E8%A8%80%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86/go-depth.html"}],["meta",{"property":"og:title","content":"Go 语言底层剖析"}],["meta",{"property":"og:description","content":"Go 语言底层剖析 GMP 数据结构 G — 表示 Goroutine，它是一个待执行的任务； M — 表示操作系统的线程，它由操作系统的调度器调度和管理； P — 表示处理器，它可以被看做运行在线程上的本地调度器； 我们先在这里介绍一下不同的数据结构, 作用以及运行期间可能的状态:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-05T02:57:17.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2021-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-05T02:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go 语言底层剖析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-05T02:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":3,"title":"GMP","slug":"gmp","link":"#gmp","children":[{"level":4,"title":"G","slug":"g","link":"#g","children":[]},{"level":4,"title":"M","slug":"m","link":"#m","children":[]},{"level":4,"title":"P","slug":"p","link":"#p","children":[]},{"level":4,"title":"创建 Goroutine","slug":"创建-goroutine","link":"#创建-goroutine","children":[]}]},{"level":3,"title":"Chan 底层","slug":"chan-底层","link":"#chan-底层","children":[{"level":4,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]}]},{"level":3,"title":"Interface 接口的底层实现","slug":"interface-接口的底层实现","link":"#interface-接口的底层实现","children":[{"level":4,"title":"数据结构","slug":"数据结构-1","link":"#数据结构-1","children":[]},{"level":4,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[]}]},{"level":3,"title":"Go同步原句与锁","slug":"go同步原句与锁","link":"#go同步原句与锁","children":[{"level":4,"title":"Mutex","slug":"mutex","link":"#mutex","children":[]},{"level":4,"title":"RWMutex","slug":"rwmutex","link":"#rwmutex","children":[]},{"level":4,"title":"WaitGroup","slug":"waitgroup","link":"#waitgroup","children":[]}]},{"level":3,"title":"Once","slug":"once","link":"#once","children":[{"level":4,"title":"Cond","slug":"cond","link":"#cond","children":[]}]},{"level":3,"title":"内存分配","slug":"内存分配","link":"#内存分配","children":[{"level":4,"title":"内存布局","slug":"内存布局","link":"#内存布局","children":[]},{"level":4,"title":"小于32KB的内存分配","slug":"小于32kb的内存分配","link":"#小于32kb的内存分配","children":[]},{"level":4,"title":"小于16kb对象的分配","slug":"小于16kb对象的分配","link":"#小于16kb对象的分配","children":[]}]}],"git":{"createdTime":1695044843000,"updatedTime":1696474637000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":4}]},"readingTime":{"minutes":45.19,"words":13557},"filePathRelative":"posts/program/golang/底层/Go语言底层原理/go-depth.md","localizedDate":"2021年11月23日","excerpt":"<h1> Go 语言底层剖析</h1>\\n<h3> GMP</h3>\\n<p>数据结构</p>\\n<ul>\\n<li>G — 表示 Goroutine，它是一个待执行的任务；</li>\\n<li>M — 表示操作系统的线程，它由操作系统的调度器调度和管理；</li>\\n<li>P — 表示处理器，它可以被看做运行在线程上的本地调度器；</li>\\n</ul>\\n<p>我们先在这里介绍一下不同的数据结构, 作用以及运行期间可能的状态:<br>\\n<img src=\\"https://cdn.learnku.com/uploads/images/202003/11/58489/j37FX8nek9.png!large\\" alt=\\"\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};
