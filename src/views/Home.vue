<template>
  <div id="main">
    <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
    <textarea v-model="dotInput" @input="renderGraph" rows="10"></textarea>
    <div id="graph" style="text-align: center; margin-top: 20px;"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { graphviz } from 'd3-graphviz';
import { Codemirror } from 'vue-codemirror';

export default {
  data() {
    return {
      dotInput: `digraph G {
        A -> B;
        B -> C;
        C -> A;
      }`
    };
  },
  mounted() {
    this.renderGraph();
  },
  methods: {
    renderGraph(){
      d3.select("#graph").graphviz()
        .renderDot(this.dotInput);
    }
  }
}
</script>

<style>
#main {
  text-align: center;
  margin-top: 20px;
}
textarea {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>