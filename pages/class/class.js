//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (option) {

  },
  choose(){
    wx.chooseImage({
       count:1,
       sizeType:"original",
       sourceType:"album",
       success(res){
         console.log(res.tempFilePaths);
       },
       fail(){
         console.log("失败了");
       },
    })
  },
  choosecamer(){
    wx.chooseImage({
       count:1,
       sizeType:"camera",
       sourceType:"album",
       success(res){
         console.log(res.tempFilePaths);
       },
       fail(){
         console.log("失败了");
       },
    })
  },
  pic(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png','https://www.baidu.com/img/bd_logo1.png'] // 需要预览的图片http链接列表
    })
  },
  seve(){
    wx.saveImageToPhotosAlbum({
        filePath:"../../images/big-1.jpg",
        success(res){
           console.log(111);
        }
    })
  },
  luyin(){
     wx.startRecord({
       success(res){
           console.log(res.tempFilePath);
       }
     })
    setTimeout(function() {
    //结束录音
    wx.stopRecord()
     }, 1000)
  },
})
