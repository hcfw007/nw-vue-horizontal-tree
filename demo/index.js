import Vue from 'vue'
import VueHorizontalTree from '../src/entry-global-component'

Vue.use(VueHorizontalTree)

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
    }
})