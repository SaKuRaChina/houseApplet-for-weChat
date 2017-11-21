// pages/mine/myApprove/myApprove.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHostApprove:true,
    isFrontShow:true,
    isBackShow:true,
    tempFrontPaths: '',
    tempBackPaths:''
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
  //上传身份证正面
  idFrontShow:function(e){
    var that = this
    wx.chooseImage({
      success: function(res) {
        that.setData({
          tempFrontPaths:res.tempFilePaths,
          isFrontShow:false
        });

      },
    })
  },
  //上传身份证背面
  idBackShow: function (e) {
    var that = this
    wx.chooseImage({
      success: function (res) {
        that.setData({
          tempBackPaths: res.tempFilePaths,
          isBackShow: false
        });
      },
    })
  },
  //添加银行卡
  toAddCard:function(){
    wx.navigateTo({
      url: '/pages/mine/myApprove/changeBank/changeBank',
    })
  }
})