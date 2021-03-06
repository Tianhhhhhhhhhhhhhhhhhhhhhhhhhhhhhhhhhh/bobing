// pages/onlineResult/onlineResult.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxIndex: 0,
    name: "",
    value: [{}],
    dies: []
  },
  play() {
    const db = wx.cloud.database()
    const watcher = db.collection('again').where({
      room: this.data.room
    }).watch({
      onChange: function (snapshot) {
        console.log('snapshot', snapshot)
        for (let index = 0; index < snapshot.docs.length; index++) {
          if (snapshot.docs[index].again) {
            wx.redirectTo({
              url: '../onlineWait/onlineWait',
            })
          }

        }
      },
      onError: function (err) {
        console.error('the watch closed because of error', err)
      }
    })
  },
  tapAgain() {
    const db = wx.cloud.database()
    db.collection('again').add({
      data: {
        room: app.globalData.room,
        play: true
      }
    })
    db.collection('rooms').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
    db.collection('playing').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
    db.collection('results').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.redirectTo({
      url: '../onlineBegin/onlineBegin',
    })
  },
  tapStop() {
    const db = wx.cloud.database()
    db.collection('rooms').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
    db.collection('playing').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    });
    db.collection('results').where({
      room: app.globalData.room
    }).remove({
      success: function (res) {
        console.log(res.data)
      }
    })
    db.collection('again').add({
      data: {
        room: app.globalData.room,
        play: false
      }
    })
    wx.redirectTo({
      url: '../begin/begin',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.play()
    this.setData({
      owner: app.globalData.owner
    })
    var temp = []
    var tempValue = []
    for (let index = 0; index < app.globalData.onlineRes.length; index++) {
      console.log(app.globalData.onlineRes[index].dies)
      temp.push(app.getScore(app.globalData.onlineRes[index].dies))
      app.globalData.onlineRes[index].dies.sort()
      for (let index2 = 0; index2 < 6; index2++) {
        console.log("index:", index, "index2:", index2)
        this.data.dies.push("../images/die" + app.globalData.onlineRes[index].dies[index2] + ".png")
      }
      tempValue.push(app.globalData.onlineRes[index].name)
    }
    app.globalData.res = temp
    app.globalData.value = tempValue
    console.log(this.data.dies)
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
    var n = ""
    if (resArr[app.globalData.res[this.data.maxIndex]] > 1) {
      for (let index = 0; index < app.globalData.res.length; index++) {
        if (app.globalData.res[this.data.maxIndex] == app.globalData.res[index]) {
          n += app.globalData.value[index] + " "
        }
      }
      this.setData({
        name: n,
      })
    } else {
      this.setData({
        name: app.globalData.value[this.data.maxIndex],
      })
    }
    this.setData({
      dies: this.data.dies
    })
    this.setData({
      value: app.globalData.value
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