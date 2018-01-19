//logs.js
const util = require('../../utils/util.js');
const app =getApp();
Page({
  data: {
    logs: [],
    userInfor:{},
    dataLit:["测试","数据","我的","心情"],
    view: 'MINA',
    item:"20",
    percent:"20"
  },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      userInfor:app.globalData.userInfo.avatarUrl
    })
  },
  stare:function(){
      console.log(11);
  },
  tab(){
    this.setData({
      percent:80
    })
  }
})
