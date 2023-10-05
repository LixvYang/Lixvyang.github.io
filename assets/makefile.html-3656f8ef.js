const e=JSON.parse('{"key":"v-ff67f860","path":"/posts/program/golang/%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6%E5%B7%A5%E5%85%B7/common/makefile.html","title":"Makefile在Go程序中的应用","lang":"zh-CN","frontmatter":{"icon":"carbon:tool-kit","date":"2023-09-28T00:00:00.000Z","isOriginal":true,"category":["tutorial"],"tag":["golang","makefile"],"description":"我们经常可以在C/C++项目中看到Makefie，Makefile是一个非常重要的项目自动化管理工具，它用于描述项目如何编译、安装、测试等任务。 但是在Go的程序中却很少使用到，原因是Go的命令本身已经非常简单，CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main，就可以编译出任意平台可运行的程序，但在Go程序中使用Makefile本身就可以帮助我们不需要手动输入上述的语法，可以极大简化项目编译的过程。","head":[["meta",{"property":"og:url","content":"https://yanglixin.com/posts/program/golang/%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6%E5%B7%A5%E5%85%B7/common/makefile.html"}],["meta",{"property":"og:title","content":"Makefile在Go程序中的应用"}],["meta",{"property":"og:description","content":"我们经常可以在C/C++项目中看到Makefie，Makefile是一个非常重要的项目自动化管理工具，它用于描述项目如何编译、安装、测试等任务。 但是在Go的程序中却很少使用到，原因是Go的命令本身已经非常简单，CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main，就可以编译出任意平台可运行的程序，但在Go程序中使用Makefile本身就可以帮助我们不需要手动输入上述的语法，可以极大简化项目编译的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-05T02:57:17.000Z"}],["meta",{"property":"article:author","content":"离心"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:tag","content":"makefile"}],["meta",{"property":"article:published_time","content":"2023-09-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-05T02:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Makefile在Go程序中的应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-05T02:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"离心\\"}]}"]]},"headers":[{"level":2,"title":"make简介","slug":"make简介","link":"#make简介","children":[]},{"level":2,"title":"Makefile简介","slug":"makefile简介","link":"#makefile简介","children":[{"level":3,"title":"Makefile 在Go程序中使用","slug":"makefile-在go程序中使用","link":"#makefile-在go程序中使用","children":[]}]},{"level":2,"title":"goreleaser 一键发布你的Go代码","slug":"goreleaser-一键发布你的go代码","link":"#goreleaser-一键发布你的go代码","children":[]}],"git":{"createdTime":1694662587000,"updatedTime":1696474637000,"contributors":[{"name":"lixin","email":"lixin@lixins-MacBook-Pro.local","commits":4}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"posts/program/golang/常用框架工具/common/makefile.md","localizedDate":"2023年9月28日","excerpt":"<p>我们经常可以在C/C++项目中看到Makefie，Makefile是一个非常重要的项目自动化管理工具，它用于描述项目如何编译、安装、测试等任务。</p>\\n<p>但是在Go的程序中却很少使用到，原因是Go的命令本身已经非常简单，<code>CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main</code>，就可以编译出任意平台可运行的程序，但在Go程序中使用Makefile本身就可以帮助我们不需要手动输入上述的语法，可以极大简化项目编译的过程。</p>\\n","autoDesc":true}');export{e as data};
