// 1. Make sure to import 'vue' before declaring augmented types
import Vue from "vue";
import Chart = require("chart.js");
// import Chart from 'chart.js'

type ChartLib = typeof Chart;

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    // $_Chart: ChartLib;
    $_Chart: any;
  }
}

// @types 라이브러리가 제공되지 않는 라이브러리의 경우
declare module "라이브러리 이름";
