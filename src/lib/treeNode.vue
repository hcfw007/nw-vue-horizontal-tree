<template>
  <div style="display: inline-block;">
    <div class="node-container">
      <div class="node">
        <div :class="['level-' + String(level), treeData.id]" class="node-normal" v-if="!treeData.type || treeData.type === 'normal'">
          <span>{{ treeData.name }}</span>
        </div>
        <div :class="['level-' + String(level), treeData.id]" class="node-input" v-if="treeData.type === 'input'">
          <input type="text" v-model="treeData.value">
        </div>
        <div :class="['level-' + String(level), treeData.id]" class="node-select" v-if="treeData.type === 'select'">
          <select name="" id="">
            <option v-for="option in treeData.options" :value="option.value" v-bind:key="option.value">{{ option.label }}</option>
          </select>
        </div>
      </div>
      <div class="line-1" :class="treeData.id" v-if="treeData.children && treeData.children.length > 0" />
      <div class="child-nodes" v-if="treeData.children && treeData.children.length > 0">
        <div class="child-node-container" v-for="(child, index) in treeData.children" :key="treeData.name + String(index)">
          <div class="line-2" :class="child.id" />
          <div class="line-3" :class="child.id" />
          <treeNode :treeData="child" :level="level + 1" @pass="passEvent('pass', $event)" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeNode',
  props: {
    treeData: {
      type: Object,
      default: function() {
        return {
          name: 'root',
          children: [],
          type: 'normal',
          value: undefined,
        }
      },
    },
    level: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      value: undefined,
    }
  },
  methods: {
    passEvent: function(type, payload) {
      if (!payload.target) {
        payload.target = this
      } else if (this.treeData.children.indexOf(payload.target) > -1) {
        payload.parent = this
      }
      this.$emit(type, payload)
    },
  },
}
</script>

<style>
.node-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.child-nodes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.line-1, .line-3 {
  height: 0;
  width: 20px;
  border: solid 1px #e5f2fd;
  vertical-align: middle;
}

.line-2 {
  width: 0;
  border: solid 1px #e5f2fd;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}

.line-3 {
  display: inline-block;
}

.child-node-container {
    position: relative;
    top: -1px;
}

.child-node-container:first-child>.line-2 {
  top: 50%;
  bottom: 0;
}

.child-node-container:last-child>.line-2 {
  top: 0;
  bottom: 50%;
}

.child-node-container:first-child:last-child>.line-2 {
  height: 0;
}

.node {
  vertical-align: middle;
  height: 100%;
  margin: 15px 10px;
  position: relative;
}


[class*=level-] {
  font-size: 14px;
  color: #0083ef;
  background-color: #ffffff;
  border: solid 1px #0083ef;
  border-radius: 20px;
  height: 40px;
  min-width: 100px;
  text-align: center;
  line-height: 40px;
}

.level-0 {
  font-size: 14px;
  color: #0083ef;
  background-color: #e5f2fd;
  border-radius: 20px;
  height: 40px;
  min-width: 100px;
  text-align: center;
  line-height: 40px;
}

.level-1 {
  font-size: 14px;
  color: #0083ef;
  background-color: #f7f6fb;
  border-radius: 20px;
  height: 40px;
  min-width: 100px;
  text-align: center;
  line-height: 40px;
}

.level-2 {
  font-size: 14px;
  color: #0083ef;
  background-color: #ffffff;
  border: solid 1px #0083ef;
  border-radius: 20px;
  height: 40px;
  min-width: 100px;
  text-align: center;
  line-height: 40px;
}

input, select {
  border: none;
  margin: 0 5px;
}
</style>
