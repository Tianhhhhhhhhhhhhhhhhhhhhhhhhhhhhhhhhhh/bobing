// pages/offLineRes/offLineRes.js
const app = getApp();
Page({
  data: {
    maxIndex: 0,
    name: "",
    value:[{}],
    dies:[]
  },
  tapAgain(){
    wx.redirectTo({
      url: '../offLine1/offLine1',
    })
  },
  tapStop(){
    wx.redirectTo({
      url: '../begin/begin',
    })
  },
  onLoad: function (options) {
    console.log(app.globalData.res)
    for (let index = 0; index < app.globalData.res.length; index++) {
      if (app.globalData.res[this.data.maxIndex] < app.globalData.res[index]) {
        this.data.maxIndex = index
      }
    }
    var resArr = app.globalData.res.reduce((obj, num) => {
      if (num in obj) {
        obj[num]++
      } else {
        obj[num] = 1
      }
      return obj
    }, {})
    var n=""
    if (resArr[app.globalData.res[this.data.maxIndex]]>1) {
      for (let index = 0; index < app.globalData.res.length; index++) {
        if (app.globalData.res[this.data.maxIndex] == app.globalData.res[index]) {
          n+=app.globalData.value[index]+" "
        }
      }
      this.setData({
        name: n,
      })
    }else{
      this.setData({
        name: app.globalData.value[this.data.maxIndex],
      })
    }
    this.setData({
      value:app.globalData.value,
      dies:app.globalData.dies
    })
  },
})