<template>
    <div>
      <textarea v-model="chartDefinition" @input="updateChart" rows="10" cols="50"></textarea>
      <div ref="chartContainer"></div>
    </div>
  </template>
  
  <script>
  import flowchart from 'flowchart.js';
  
  export default {
    data() {
      return {
        chartDefinition: 'st=>start: Start\nop=>operation: My Operation\ncond=>condition: Yes or No?\ne=>end: End\n\nst->op->cond\ncond(yes)->e\ncond(no)->op',
        chart: null // チャートオブジェクトを保持するための変数を追加
      };
    },
    methods: {
      updateChart() {
        if (this.chart) {
          this.chart.clean(); // 古いチャートをクリーンアップする
        }
        this.$nextTick(() => {
          this.chart = flowchart.parse(this.chartDefinition);
          this.chart.drawSVG(this.$refs.chartContainer);
        });
      }
    },
    mounted() {
      this.updateChart();
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.clean(); // コンポーネントが破棄される前にクリーンアップする
      }
    }
  };
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    margin-bottom: 20px;
  }
  </style>