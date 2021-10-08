// pages/onlineWait/onlineWait.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.room = options.value
    const db = wx.cloud.database()
    const watcher = db.collection('playing').where({
      room: this.data.room
    }).watch({
      onChange: function (snapshot) {
        console.log('snapshot', snapshot)
        if (snapshot.docChanges.length == 1) {
          const rooms = db.collection('rooms')
          rooms.where({ room: getApp().globalData.room }).get({
            success: function (res) {
              getApp().globalData.number = res.data.length
              console.log(getApp().globalData.number)
            }
          })
          wx.redirectTo({
            url: '../onlinePlay/onlinePlay',
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