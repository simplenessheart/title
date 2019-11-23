// pages/att_three/att_three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    pic_array: [
      { id: 0, name: '私家车' },
      { id: 1, name: '出租车' },
      { id: 2, name: '网约车' },
      { id: 3, name: '公家车' },
    ],
    hx_index:0
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
  //是否为新能源 返回1是新能源 2则相反
  gonew:function(e){
    console.log(e.target.dataset.num)
    if(e.target.dataset.num=='2'){
      e.target.dataset.num = 1
      this.setData({
        num: e.target.dataset.num
      })
    }else if(e.target.dataset.num=='1'){
      e.target.dataset.num=2
      this.setData({
        num: e.target.dataset.num
      })
    }
  },
  //选择器
   bindPickerChange_hx: function (e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
     this.setData({   //给变量赋值
     hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    },
    //返回上一页
  goback:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})