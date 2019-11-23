// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:false,
    flag:true,
    address: '',
    address1: '',
    address2: ''
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
  formSubmit:function(e){
    var data=e.detail.value
    for (let key in data) {
      if(data[key]==''){
        // console.log('数据不完整')
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1000
        })
      }else{
        wx.navigateBack({
          delta: 1,
        })
      }
    }
  },
  bindKeyInput: function (e) {
    // console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },
  switch1Change: function (e) {
    this.setData({
      flag: !e.detail.value
    })
  },
  //跳转更换手机号页面
  gototel:function(){
    wx.navigateTo({
      url: '../tel/tel',
    })
  }
})