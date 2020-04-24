//index.js
//获取应用实例
const app = getApp()
var msg =app.globalData.message;
var fun = app.globalfun;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '自定义消息内容',
    id: 1,
    condition: true,
    flag: false,
    a: 3,
    b: 4,
    arr: [{}, {}, {}, {}],
    name: "mike",
    user: {
      name: "jack",
      age: 32,
      sex: "男",
      hobby: ["游戏", "视频", "篮球"]
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fun();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     console.log("onUnload");
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
    
  }
})