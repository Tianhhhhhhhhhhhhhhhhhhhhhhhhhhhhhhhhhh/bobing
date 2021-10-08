// app.js
App({
  globalData: {
    value: [],
    dies: [],
    res: [],
    index: 0
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getDies() {
    // 投骰子 六个随机数
    var a = Math.floor(Math.random() * 6) + 1,
      b = Math.floor(Math.random() * 6) + 1,
      c = Math.floor(Math.random() * 6) + 1,
      d = Math.floor(Math.random() * 6) + 1,
      e = Math.floor(Math.random() * 6) + 1,
      f = Math.floor(Math.random() * 6) + 1,
      NumArr = [];
    NumArr.push(a, b, c, d, e, f);
    console.log(NumArr);
    return NumArr
  },
  getScore(NumArr) {
    // 计算重复元素个数
    var countNum = NumArr.reduce((obj, num) => {
      if (num in obj) {
        obj[num]++
      } else {
        obj[num] = 1
      }
      return obj
    }, {})
    var maxNum = 0,
      maxCount = 0;
    for (let index = 6; index > 0; index--) {
      if (countNum[index] > maxCount) {
        maxCount = countNum[index];
        maxNum = index;
      }
    }
    console.log(countNum);

    // 根据规则计算分数
    var score = 0,
      res = "";
    if (maxCount == 4) {
      if (maxNum == 4) {
        if (countNum[1] == 2) {
          console.log("插金花")
          res = "插金花"
          score = 45
        } else {
          console.log("四红")
          res = "四红"
          score = NumArr[0] + NumArr[1] + NumArr[2] + NumArr[3] + NumArr[4] + NumArr[5] - 5
        }
      } else {
        console.log("四红")
        res = "四红"
        score = 2 + maxNum;
      }
    } else if (maxCount == 5) {
      if (maxNum == 4 || maxNum == 1) {
        console.log("五红")
        res = "五红"
        score = 31 + maxNum
      } else {
        console.log("五子")
        res = "五子"
        score = 24 + maxNum
      }
    } else if (maxCount == 6) {
      if (maxNum == 4) {
        console.log("红六勃")
        res = "红六勃"
        score = 44
      } else if (maxNum == 1) {
        console.log("遍地锦")
        res = "遍地锦"
        score = 43
      } else {
        console.log("黑六勃")
        res = "黑六勃"
        score = 36 + maxNum
      }
    } else if (Object.keys(countNum).length == 6) {
      console.log("对堂")
      res = "对堂"
      score = 10
    } else if (countNum[4] == 3) {
      console.log("三红")
      res = "三红"
      score = 9
    } else if (countNum[4] == 2) {
      console.log("二举")
      res = "二举"
      score = 2
    } else if (countNum[4] == 1) {
      console.log("一秀")
      res = "一秀"
      score = 1
    } else {
      console.log("啥也不是")
      res = "啥也不是"
      score = 0
    }
    return score
  },
})