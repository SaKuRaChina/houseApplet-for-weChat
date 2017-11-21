// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogIn:false,
    curIndex:'0',
    unpayArr:{}
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://route.showapi.com/109-35?showapi_appid=47608&showapi_sign=e05500d79833406cb780be273921f925',
      data:{

      },
      success:function(e){
        console.log(e)
        that.setData({
          unpayArr: e.data.showapi_res_body.pagebean.contentlist
        });
        // console.log(that.data.unpayArr)
      }
    })
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
  onPullDownRefresh: function (e) {
    this.onLoad();
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

  // 选项卡点击事件
  onTabShow:function(e){
    var dataSetId = e.target.dataset.id;
    // console.log(e.target)
    // console.log(dataSetId)
    this.setData({
      curIndex: dataSetId
    })
  }
})