App({
  onLaunch:function(){
    console.log("小程序初始化成功！")
  },
  onShow:function(){
    console.log("onShow-小程序已经显示")
  },
  onHide:function(){
    console.log("监听小程序")
  },
  //维护全局数据
  globalData: {
    userInfo: {

    },
    message: "您好，我是哮田犬一族少族长"
  },
  //全局方法:globalfun
  globalfun: function () {
    console.log("globalfun")
  }

})