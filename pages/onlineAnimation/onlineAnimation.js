// pages/onlineAnimation/onlineAnimation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.name)
    var dies = app.getDies()
    const db = wx.cloud.database()
    const res = db.collection('results')
    res.add({
      data: {
        room: app.globalData.room,
        name: app.globalData.name,
        dies: dies
      },
      success: function (res) {
        console.log(res)
      }
    })
    const watcher = res.where({
      room: app.globalData.room
    }).watch({
      onChange: function (snapshot) {
        console.log('snapshot', snapshot)
        app.globalData.onlineRes = snapshot.docs
        if (app.globalData.onlineRes.length == app.globalData.number) {
          console.log(app.globalData.onlineRes)
          wx.redirectTo({
            url: '../onlineResult/onlineResult',
          })
        }
      },
      onError: function (err) {
        console.error('the watch closed because of error', err)
      }
    })
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