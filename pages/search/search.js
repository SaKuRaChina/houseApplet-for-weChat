// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/images/detailHouse.jpg",
      "/images/detailHouse.jpg",
      "/images/detailHouse.jpg",
      "/images/detailHouse.jpg"
    ],
    date1: "2016-08-09",
    date2:"2016-08-09",
    isDateClick:false,
    isAreaClick: false,
    isOrderClick: false,
    isSelectClick:false


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var day=new Date().getDay();
     var month= new Date().getMonth();
     var year= new Date().getFullYear()
    this.setData({
      date1: year + "-" + month + "-" + day,
      date2: year + "-" + month + "-" + day
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
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },

  // 入住时间点击事件
  isDateClickFn:function(){
    var that = this;
    if (that.data.isDateClick){
      that.setData({
        isDateClick:false
      })
    }else{
      that.setData({
        isDateClick: true,
        isAreaClick: false,
        isOrderClick: false,
        isSelectClick: false
      })
    }
  },

  // 入住区域点击事件
  isAreaClickFn: function () {
    var that = this;
    if (that.data.isAreaClick) {
      that.setData({
        isAreaClick: false
      })
    } else {
      that.setData({
        isAreaClick: true,
        isDateClick: false,
        isOrderClick: false,
        isSelectClick: false
      })
    }
  },

  // 入住排序点击事件
  isOrderClickFn: function () {
    var that = this;
    if (that.data.isOrderClick) {
      that.setData({
        isOrderClick: false
      })
    } else {
      that.setData({
        isOrderClick: true,
        isDateClick: false,
        isAreaClick: false,
        isSelectClick: false
      })
    }
  },

  // 入住筛选点击事件
  isSelectClickFn: function () {
    var that = this;
    if (that.data.isSelectClick) {
      that.setData({
        isSelectClick: false
      })
    } else {
      that.setData({
        isSelectClick: true,
        isDateClick: false,
        isAreaClick: false,
        isOrderClick: false
      })
    }
  }
})