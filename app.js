//app.js
App({
  onLaunch(options) {
    // Do something initial when launch.
    //console.log('app onLaunch')
  },
  onShow(options) {
    // Do something when show.
    //console.log('app onShow')
  },
  onHide() {
    // Do something when hide.
    //console.log('app onHide')
  },
  onError(msg) {
    //console.log(msg)
  },
  //定义全局对象
  GLOBAL_DATA: {
    baseUrl: 'http://t.yushu.im/v2/movie/'
  }
})