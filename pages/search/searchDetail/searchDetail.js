// pages/search/searchDetail/searchDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      latitude: 116.422888,
      longitude: 39.90681,
      iconPath: "/images/order-img.jpg",
      width: 50,
      height: 50
    }],
    facilityItems: [
      { name: 'pc', value: '电脑', checked: 'true' },
      { name: 'pc', value: '电脑', checked: 'true' },
      { name: 'wc', value: '独立卫生间', checked: 'true' },
      { name: 'wind', value: '电吹风', checked: 'true' },
      { name: 'car', value: '停车位', checked: 'true' },
      { name: 'gas', value: '暖气', checked: 'true' },
      { name: 'ref', value: '冰箱', checked: 'true' },
      { name: 'mar', value: '超市', checked: 'true' },
      { name: 'bink', value: '银行' },
      { name: 'smo', value: '可吸烟' },
      { name: 'wash', value: '洗衣机' },
      { name: 'tel', value: '有线电视' },
      { name: 'pet', value: '可带宠物', checked: 'true' }
    ]
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
  // 联系房东
  connectHostFn:function(){
    wx.makePhoneCall({
      phoneNumber: "13401087732"
    })
  },
  toOrderFn:function(){
    wx.navigateTo({
      url: '/pages/search/searchDetail/orderNow/orderNow',
    })
  }
})