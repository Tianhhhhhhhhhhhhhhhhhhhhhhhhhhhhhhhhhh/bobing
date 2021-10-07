// pages/offLine5/offLine5.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums: [],
  },
  tapNext() {
    app.globalData.index=app.globalData.index+1
    if (app.globalData.index < app.globalData.value.length) {
      wx.redirectTo({
        url: '../offLine3/offLine3',
      })
    } else {
      wx.navigateTo({
        url: '../offLineRes/offLineRes',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      nums: app.getDies()
    })
    if (app.globalData.index == 0) {
      var a = [app.getScore(this.data.nums)]
      app.globalData.res = a
    } else {
      app.globalData.res.push(app.getScore(this.data.nums))
    }
    console.log(app.globalData.res)
    for (let index = 0; index < 6; index++) {
      this.data.nums[index] = "../images/die" + this.data.nums[index] + ".png";
    }
    this.setData({
      nums: this.data.nums
    })
    this.data.nums.sort()
    if (app.globalData.index == 0) {
      var a = [this.data.nums[0]]
      app.globalData.dies = a
      for (let index = 1; index < 6; index++) {
        app.globalData.dies.push(this.data.nums[index])
      }
    } else {
      for (let index = 0; index < 6; index++) {
        app.globalData.dies.push(this.data.nums[index])
      }
    }
    console.log(app.globalData.dies)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})