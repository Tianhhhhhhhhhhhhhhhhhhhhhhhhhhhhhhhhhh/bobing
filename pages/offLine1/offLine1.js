// pages/offLine1/offLine1.js
const app = getApp();
Page({
  data: {
    lists: [{}, {}],
    value: ["player1", "player2"],
  },
  addList: function () {
    var lists = this.data.lists;
    var newData = {};
    if (this.data.lists.length <10) {
    lists.push(newData);
    this.data.value.push("player" + (this.data.value.length + 1))
    this.setData({
      lists: lists,
    })}
  },

  delList: function () {
    var lists = this.data.lists;
    if (this.data.lists.length > 2) {
      lists.pop();
      this.data.value.pop();
    }
    this.setData({
      lists: lists,
    })
  },
  bindKeyInput: function (e) {
    this.data.value[e.target.id] = e.detail.value
  },
  tap() {
    console.log(this.data.value)
    app.globalData.value = this.data.value
    app.globalData.index = 0
    console.log(app.globalData.value)
    wx.navigateTo({
      url: '../offLine2/offLine2',
    })
  }
})