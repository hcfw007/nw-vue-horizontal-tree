import treeNode from './lib/treeNode.vue'

const VueHorizontalTree = {
    install: (Vue) => {
        Vue.component('treeNode', treeNode)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueHorizontalTree);
}

export default VueHorizontalTree
