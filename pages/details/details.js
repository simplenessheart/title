// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/aa.jpg',
      '../images/bb.jpg',
      '../images/cc.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 800,
    swiperCurrent: 0,
    id:0,
    showModal:false,
    recipients:'',
    address: '',
    phone:''
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  preventTouchMove: function (e) {

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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goaut: function (event) {
    console.log(event)
  },
  swiperChange(e) {
    let current = e.detail.current;
    // console.log(current, '轮播图')
    let that = this;
    that.setData({
      swiperCurrent: current,
    })
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //张贴安装
  put(e){
    console.log(e.target.dataset.idx)
    let that = this
    that.setData({
      id: e.target.dataset.idx
    })
  },
  //线下邮寄
  offline(e){
   let that = this
    that.setData({
      id: e.target.dataset.idx
    })
  },
  //打开蒙版
  submit(){
    let that = this;
    that.setData({
      showModal: true,
    })
  },
  //关闭蒙版
  close(){
    let that = this;
    that.setData({
      showModal: false,
    })
  },
  //表单事件
  formSubmit: function (e) {
    console.log()
    let recipients = e.detail.value.recipients
    let phone = e.detail.value.phone
    let address = e.detail.value.address
    if (recipients == ''){
      wx.showToast({

        title: '收件人姓名不能为空',

        duration: 2000,

        icon: 'none'

      });
      return false;
      console.log(recipients)
    } 
    else if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))){
      wx.showToast({

        title: '请输入正确的手机号码',

        duration: 2000,

        icon: 'none'

      });
      return false;
    }
    else if (address == '') {
      wx.showToast({

        title: '收货地址不能为空',

        duration: 2000,

        icon: 'none'

      });
      return false;
    }
    else{
    

      wx.showToast({

        title: '提交成功',

        duration: 2000,

        icon: 'none'

      });
     
      let that = this;
      that.setData({
        recipients: recipients,
        phone:phone,
        address:address,
        showModal: false
      })
      console.log('收货人地址为'+ recipients)
      console.log('收货人手机为' + phone)
      console.log('收货人地址为' + address)
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})