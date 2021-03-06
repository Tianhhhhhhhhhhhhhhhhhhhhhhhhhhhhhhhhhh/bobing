// pages/begin/begin.js
Page({
  tapOnline() {
    wx.navigateTo({
      url: '../online1/online1',
    })
  },
  tapOffLine() {
    wx.navigateTo({
      url: '../offLine1/offLine1',
    })
  },
  tapHowTo() {
    wx.navigateTo({
      url: '../howTo/howTo',
    })
  },
  tapLeaving() {
    wx.navigateTo({
      url: '../leaving/leaving',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('again').where({
      room: getApp().globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
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