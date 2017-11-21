// pages/mine/myHouse/addHouse/addHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    facilityItems: [
      { name: 'pc', value: '电脑'  },
      { name: 'pc', value: '电脑'},
      { name: 'wc', value: '独立卫生间' },
      { name: 'wind', value: '电吹风'},
      { name: 'car', value: '停车位', },
      { name: 'gas', value: '暖气' },
      { name: 'ref', value: '冰箱'},
      { name: 'mar', value: '超市'},
      { name: 'bink', value: '银行' },
      { name: 'smo', value: '可吸烟' },
      { name: 'wash', value: '洗衣机' },
      { name: 'tel', value: '有线电视' },
      { name: 'pet', value: '可带宠物' }
    ],
    typeIndex: 0,
    styleIndex: 0,
    rentIndex:0,
    bedIndex: 0,
    leastIndex: 0,
    invoiceIndex:0,
    houseTypeArr:[ '租房', '卖房'],
    houseStyleArr: ['两室一厅', '一室一厅','三室一厅','酒店式公寓'],
    houseRentArr: ['月租', '日租'],
    houseBedArr: ['大双人床', '单人床', '双人床'],
    houseLeastArr: ['1天', '2天','3天'],
    houseInvoiceArr: ['不提供', '可提供'],
    startTime:"14:00",
    overTime:"12:00",
    tempFilePaths:[],
    tempTopPaths:'',
    tempBottomPaths:'',
    tempOtherPaths:''
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
  bindTypeChangeFn:function(){

  },
  //房屋类型：
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  //房间格局：
  bindStyleChange: function (e) {
    this.setData({
      styleIndex: e.detail.value
    })
  },
  //租金方式：
  bindRentChange: function (e) {
    this.setData({
      rentIndex: e.detail.value
    })
  },
  //床型：
  bindBedChange: function (e) {
    this.setData({
      bedIndex: e.detail.value
    })
  },
  //入住时间：
  bindTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  //退房时间：
  bindOverTimeChange: function (e) {
    this.setData({
      overTime: e.detail.value
    })
  },
  //最少入住：
  bindLeastChange: function (e) {
    this.setData({
      leastIndex: e.detail.value
    })
  },
  //发票：
  bindInvoiceChange: function (e) {
    this.setData({
      invoiceIndex: e.detail.value
    })
  },
  //上传图片：
  addImgFn:function(){
    var that = this
    wx.chooseImage({
      count:6,
      success: function(res) {
        var tempFilePathsN = res.tempFilePaths
        that.setData({
          tempFilePaths: tempFilePathsN
        })
      },
    })
  },
  //上传首页照片
  addTopImg: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePathsN = res.tempFilePaths
        that.setData({
          tempTopPaths: tempFilePathsN
        })
      },
    })
  },
  //上传尾页照片：
  addBottomImg: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePathsN = res.tempFilePaths
        that.setData({
          tempBottomPaths: tempFilePathsN
        })
      },
    })
  },
  //上传其他页照片：
  addOtherImg: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePathsN = res.tempFilePaths
        that.setData({
          tempOtherPaths: tempFilePathsN
        })
      },
    })
  },
})