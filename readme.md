# nw-vue-horizontal-tree
>yet another vue tree component

Last few days I was trying to find a light-weight Vue components to display tree charts(or relations? Not sure how this should be called) horizontally. But I failed, so I made one. Hope it might be helpful. At least it solved my problem.

## demo
![image](https://raw.githubusercontent.com/hcfw007/nw-vue-horizontal-tree/master/demo/imgs/basic-demo.png)

# how to use

## with \<script\> tag
### Step 1:
download dist/tree.global.js
### Step 2:
import with \<script\> tag AFTER Vue
(no Vue.use required)
### Step 3:
use as a global component directly in template
```\
<tree-node :tree-data="treeData" />
```

## with module system
### Step 1:
npm install nw-vue-horizontal-tree -D
### Step 2:
```
import treeNode from 'nw-vue-horizontal-tree'
Vue.use(treeNode)
```
### Step 3:
use as a global component directly in template
```\
<tree-node :tree-data="treeData" />
```
P.S. if you use String Templates or Single File Components(.Vue), you can use it as Camel-Case
```
<treeNode :treeData="treeData" />
```

# Note
Please make sure the width of the parent element is enough to contain the whole tree. Otherwise the flex layout will result in a mess.