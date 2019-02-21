import treeNode from './lib/treeNode'

const VueHorizontalTree = {}

VueHorizontalTree.install = (Vue) => {
    Vue.component('treeNode', treeNode)
}

export default VueHorizontalTree