// pages/out_money/out_money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:200.3,
    allmoney:''
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
  //跳转金钱明细页面
  gotoming:function(){
    wx.navigateTo({
      url: '../out_definite/out_definite',
    })
  },
  //全部提现
  outallmoney:function(){
    this.setData({
      outallmoney:this.data.money
    })
  }
})