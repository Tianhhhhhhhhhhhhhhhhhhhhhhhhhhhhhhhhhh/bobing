// pages/onlineBegin/onlineBegin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room: 0
  },
  go() {
    console.log(this.data.room)
    const db = wx.cloud.database()
    const playing = db.collection('playing')
    const rooms = db.collection('rooms')
    rooms.where({
      room: this.data.room
    }).get({
      success: function (res) {
        getApp().globalData.number = res.data.length
        console.log(getApp().globalData.number)
      }
    })
    playing.add({
      data: {
        room: this.data.room
      },
      success: function (res) {
        console.log(res)
      }
    })
    wx.redirectTo({
      url: '../onlinePlay/onlinePlay',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('again').where({
      room: getApp().globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
    this.data.room = options.value
    getApp().globalData.owner = true
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