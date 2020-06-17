# nw-vue-horizontal-tree

[English](https://github.com/hcfw007/nw-vue-horizontal-tree/blob/master/readme-en.md)

>又一个vue的树状图组件

前段时间在板砖的时候有个需求，是横向展示一个树状图类似的东西。找了一圈没找到特别好的现成的东西，就自己写了一个，至少我用起来还行吧。

## 样例
![image](https://raw.githubusercontent.com/hcfw007/nw-vue-horizontal-tree/master/demo/imgs/basic-demo.png)

# 如何使用

## 通过 \<script\> 标签引用
### 第一步:
下载 dist/tree.global.js
### 第二步:
在引入Vue之后使用\<script\>标签引入下载的文件

不需要使用Vue.use进行安装
### 第三步:
直接当做全局组件使用
```\
<tree-node :tree-data="treeData" />
```

## 模块化引用
### 第一步:
通过npm安装模块
```
npm install nw-vue-horizontal-tree -S
```
### 第二步:
引用模块
```
import treeNode from 'nw-vue-horizontal-tree'
Vue.use(treeNode)
```
### 第三步:
直接当做全局组件使用
```\
<tree-node :tree-data="treeData" />
```
如果在字符串模板或单文件组件中使用，也可以用驼峰命名法。
```
<treeNode :treeData="treeData" />
```

## 树状图数据结构
```
treeData = {
    name: 'root',
    children: [{
        name: 'child1',
        children: [{
            name: 'child1-1',
            children: [],
        }, {
            name: 'child1-2',
            type: 'input',
            children: [],
        }],
    }, {
        name: 'child2',
        children: [{
            name: 'child2-1',
            children: [{
                name: 'child2-1-1',
                children: [],
            }, {
                name: 'child2-2-2',
                children: [],
            }, {
                name: 'child2-2-3',
                type: 'select',
                options: options,
                children: [],
            }],
        }, {
            name: 'child2-2',
            children: [],
        }],
    }]
},
```
name: (String)节点名称

children: (Array)子节点列表

type: (enum)节点类型。目前支持的节点类型如下：

* normal: 普通节点，只能显示字符串
* select: 选择节点，可以在option选项中添加选项的label和value
* input: 输入节点，可以输入文字内容

options: (Array)当节点类型为select时生效，定义选项的值和标签。形式如下：
```
const options = [
    {
        value: 1,
        label: 'option 1'
    }, {
        value: 2,
        label: 'option 2'
    }, {
        value: 3,
        label: 'option 3'
    },
]
```

## 计划
不知道有没有人真的用，我工作上暂时没更多需求了，所以好久没看了，也不太清楚有什么问题或者更多功能可以添加。

如果发现了什么问题或者需要什么功能，请发起issue。如果帮到了你，请给一个star。谢谢。

# 注意
请确保容器有足够的空间来显示整个树状图，因为使用了css的flex布局，当空间不足时会产生混乱的显示结果。