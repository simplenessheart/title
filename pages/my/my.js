// pages/my/my.js
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

  },
  //跳转金额页面
  gotomaney:function(){
    wx.navigateTo({
      url: '../out_money/out_money',
    })
  },
  //跳转张贴记录
  gotorecord: function () {
    wx.navigateTo({
      url: '../record/record',
    })
  },
  //跳转关于
  gotoabout:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  //跳转个人详情
  gotouser:function(){
    wx.navigateTo({
      url: '../user/user',
    })
  }
})