import Vue from 'vue'
import VueHorizontalTree from '../src/entry-global-component'

Vue.use(VueHorizontalTree)

var app = new Vue({
    el: '#app',
    data: {
        treeData: {
            name: 'root',
            children: [{
                name: 'child1',
                children: [{
                    name: 'child1-1',
                    children: [],
                }, {
                    name: 'child1-2',
                    children: [],
                }],
            }, {
                name: 'child2',
                children: [],
            }]
        },
    }
})