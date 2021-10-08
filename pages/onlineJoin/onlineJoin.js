// pages/onlineJoin/onlineJoin.js
var result = {};
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room: 0,
    name: ""
  },
  keyInputRoom(e) {
    this.setData({
      room: e.detail.value
    })
    wx.cloud.init()
    const db = wx.cloud.database()
    const rooms = db.collection('rooms')
    console.log(this.data.room)
    rooms.where({
      room: this.data.room
    }).get({
      success: function (res) {
        result = res
      }
    })
    console.log(result)
  },
  keyInputName(e) {
    this.data.name = e.detail.value
  },
  go() {
    wx.cloud.init()
    const db = wx.cloud.database()
    const rooms = db.collection('rooms')
    console.log(this.data.room)
    rooms.where({
      room: this.data.room
    }).get({
      success: function (res) {
        result = res
      }
    })
    console.log(result)
    var repeat = false
    var exit = false
    var full = false
    if (result.data.length != 0) {
      for (let index = 0; index < result.data.length; index++) {
        if (result.data[index].name == this.data.name) {
          wx.showToast({
            title: '这名儿不行',
            duration: 1000,
            mask: true,
            icon: 'none'
          })
          repeat = true
        }
      }
      console.log(parseInt(result.data[0].num))
      console.log(result.data.length)
      if (parseInt(result.data[0].num) == result.data.length) {
        full = true
        wx.showToast({
          title: '这房儿满了',
          duration: 1000,
          mask: true,
          icon: 'none'
        })
      }
      if (!repeat && !full) {
        rooms.add({
          data: {
            room: this.data.room,
            name: this.data.name,
            num: result.data[0].num
          },
          success: function (res) {
            console.log(res)
          }
        })
        app.globalData.room = this.data.room
        app.globalData.name = this.data.name
        wx.redirectTo({
          url: '../onlineWait/onlineWait?value=' + this.data.room,
        })
      }
    } else {
      wx.showToast({
        title: '这房儿不行',
        duration: 1000,
        mask: true,
        icon: 'none'
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