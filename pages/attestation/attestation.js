// pages/attestation/attestation.js
var cityList = require('./cityList').cityList;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1: false,
    inputValue:"",
    flag:true,
    switch1Checked: false,
    switch2Checked: false,
    address:'',
    address1:'',
    address2:'',
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
  // import user from authod.js
  onHide: function () {
// user(resposne).then()
// //
//   export  function user(data){
//                 return                ajax('/api/user',data,psot)
//     }
   
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
  switch1Change:function(e){
    this.setData({
      flag:!e.detail.value
    })
  },
  //跳入下一页
gototwo:function(e){
  console.log(e)
  console.log(this.data.address)
  console.log(this.data.address1)
  console.log(this.data.address2)
//   if (this.data.inputValue===''){
// console.log('没有填写数据')
// }else{
//   wx.navigateTo({
//     url: '../att_two/att_two'　　// 页面 A
//   })
// }
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
       wx.navigateTo({
         url: '../att_two/att_two',
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
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })

  }
})