// pages/offLineRes/offLineRes.js
const app = getApp();
Page({
  data: {
    maxIndex: 0,
    name: "",
    value:[{}],
    dies:[]
  },
  onLoad: function (options) {
    for (let index = 0; index < app.globalData.res.length; index++) {
      if (app.globalData.res[this.data.maxIndex] < app.globalData.res[index]) {
        this.data.maxIndex = index
      }
    }
    this.setData({
      name: app.globalData.value[this.data.maxIndex],
      value:app.globalData.value,
      dies:app.globalData.dies
    })
  },
})