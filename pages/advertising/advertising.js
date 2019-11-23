// pages/advertising/advertising.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: '../images/aa.jpg',
    newPic:'../images/bb.jpg',
    status:1
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
  // 调取前摄像头事件
  gainLeft: function () {
    var that = this;

    wx.chooseImage({

      count: 1, // 默认9 

      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 

      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有 

      success: function (res) {
        console.log(res.tempFiles[0].path)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 

        that.setData({

          tempFilePaths: res.tempFilePaths

        })

      }

    })
  },
gainRight:function(){
  var that = this;

  wx.chooseImage({

    count: 1, // 默认9 

    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 

    sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有 

    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
      console.log(res.tempFilePaths)
      that.setData({

        newPic: res.tempFilePaths

      })

    }

  })
},
  draw:function(e){
    wx.navigateTo({
      url: '/pages/Hall/Hall',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  }
})