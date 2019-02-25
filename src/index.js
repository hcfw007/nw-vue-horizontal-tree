import treeNode from './lib/treeNode.vue'

const VueHorizontalTree = {}

VueHorizontalTree.install = (Vue) => {
    Vue.component('treeNode', treeNode)
}

export default VueHorizontalTree