// pages/onlineCreate/onlineCreate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room: 0,
    num: 0,
    name: ""
  },
  keyInputRoom(e) {
    this.data.room = e.detail.value
  },
  keyInputNum(e) {
    this.data.num = e.detail.value
  },
  keyInputName(e) {
    this.data.name = e.detail.value
  },

  go() {
    if (!this.data.room) {
      wx.showToast({
        title: '几号房啊你',
        duration: 1000,
        mask: true,
        icon: 'none'
      })
    } else if (this.data.num < 2) {
      wx.showToast({
        title: '几个人啊你',
        duration: 1000,
        mask: true,
        icon: 'none'
      })
    } else if (!this.data.name) {
      wx.showToast({
        title: '叫啥啊你啊',
        duration: 1000,
        mask: true,
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '../onlineBegin/onlineBegin',
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