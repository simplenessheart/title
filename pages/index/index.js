//index.js
import { userDetail } from '../../utils/authority.js'
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
     'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3884680839,842499940&fm=26&gp=0.jpg' ,
     'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3884680839,842499940&fm=26&gp=0.jpg',
     'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3884680839,842499940&fm=26&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 800,
    swiperCurrent: 0,
    type:'',
    status:2,
    userclass:1,
    userdata:app.data.user
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }},
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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log(app.data)
    this.setData({
      userdata:app.data.user
    })
    console.log(this.data.userdata)
    this.getUserDetail()

    if (this.data.status == 1) {
      this.setData({
        type: '未认证'
      })
    } else if (this.data.status == 2) {
      this.setData({
        type: '待审核'
      })
      console.log(this.data.type)
    } else if (this.data.status == 3) {
        if(this.data.userclass==1){
          this.setData({
            type: '专线用'
          })
        }
        if(this.data.userclass==2){
          this.setData({
            type: '里程用'
          })
        }
    }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserDetail:function(data){
    userDetail(data).then(response => {
      console.log(response)
      if (response.data.code == 200) {

      } else {
        wx.showToast({
          title: '纯文字弹窗',
          icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
          duration: 2000
        }) 
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  swiperChange(e) {
    let current = e.detail.current;
    // console.log(current, '轮播图')
    let that = this;
    that.setData({
      swiperCurrent: current,
    })
  },
  goaut: function (event) {
    if (this.data.status == 1) {
      wx.navigateTo({
        url: '../attestation/attestation',
      })
    } else if (this.data.status == 2) {
      wx.navigateTo({
        url: '../attestation/attestation',
      })
    } else if (this.data.status == 3) {
      wx.navigateTo({
        url: '/pages/advertising/advertising',
      })
    }
  },
  gotoout_money:function(){
    wx.navigateTo({
      url: '../out_money/out_money',
    })
  },
  gotomy:function(){
    wx.navigateTo({
      url: '../my/my',
    })
  },
  gotohall:function(){
    wx.navigateTo({
      url: '../hall/hall',
    })
  },
  gotoindent:function(){
    console.log('111')
    wx.navigateTo({
      url: '../indent/indent',
    })
  }
})

