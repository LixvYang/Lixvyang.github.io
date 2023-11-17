import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c as r,f as c,b as o,d as e,a as d,e as n}from"./app-3e03db51.js";const s={},p=o("h1",{id:"solidity基础学习",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#solidity基础学习","aria-hidden":"true"},"#"),e(" Solidity基础学习")],-1),m={href:"https://remix.ethereum.org/",target:"_blank",rel:"noopener noreferrer"},_=n("<p>Solidity的基础数据类型:<code>boolean</code>、<code>uint</code>、<code>int</code>、<code>address</code>、<code>bytes</code>。</p><p>基础函数：</p><p>变量有四种不同的可见域:</p><ul><li>public 任何都可见</li><li>private 本合约可看</li><li>external 外部合约可看</li><li>internal 内部合约+继承本合约可看</li></ul><p>pure、view不会消耗gas。</p><p>evm有六种存储数据的方式:</p><ul><li>stack</li><li>memory</li><li>storage</li><li>calldata</li><li>code</li><li>logs</li></ul><p>calldata合memory的区别是如果最终不想改变变量名，就使用calldata</p>",8);function u(h,f){const l=i("ExternalLinkIcon");return a(),r("div",null,[c(" more "),p,o("p",null,[e("学习Solidity 最简单的方式就是通过在线的"),o("a",m,[e("Remix"),d(l)]),e("学习，如果运行的代码没问题，那么就可以编译通过，反之就是代码有问题。")]),_])}const b=t(s,[["render",u],["__file","base-solidity.html.vue"]]);export{b as default};
