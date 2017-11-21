// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogIn:false,
    cusItems:[
      { 'name': 'rent', 'value': '租客登录', 'checked': true },
      {'name': 'host', 'value': '房主登录' },
      {'name':'agent','value':'经纪人登录',"disabled":true}
    ],
    isapprove:true,
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
 //进入个人信息
  toMyInfoFn:function(){
    wx.navigateTo({
      url: '/pages/mine/myInfo/myInfo',
    })
  },
  toMyPassFn: function () {
    wx.navigateTo({
      url: '/pages/mine/myPass/myPass',
    })
  },
  toMyMsgFn: function () {
    wx.navigateTo({
      url: '/pages/mine/myMsg/myMsg',
    })
  },
  toMyHouseFn: function () {
    wx.navigateTo({
      url: '/pages/mine/myHouse/myHouse',
    })
  },
  toMyApproveFn: function () {
    wx.navigateTo({
      url: '/pages/mine/myApprove/myApprove',
    })
  }
})