var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
  //banner: 'ca-app-pub-7061349157136298/7728721211',
   //interstitial: 'ca-app-pub-7061349157136298/8625077904',
   //   banner: 'ca-app-pub-3940256099942544/6300978111',  //test id
   // interstitial: 'ca-app-pub-3940256099942544/1033173712', // test id
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    //banner: 'ca-app-pub-7061349157136298/7733177375',
    //interstitial: 'ca-app-pub-7061349157136298/1865186299',
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    isTesting: false,
    autoShow: false,
  })
  admob.banner.prepare()

 // admob.interstitial.config({
 //   id: admobid.interstitial,
 //   isTesting: false,
 //   autoShow: false,
  //})
  //admob.interstitial.prepare()

  document.getElementById('showAd').disabled = true
  document.getElementById('showAd').onclick = function() {
    admob.interstitial.show()


   

  }

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  console.log(event)
  document.getElementById('showAd').disabled = false
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  console.log(event)

  admob.interstitial.prepare()
})


document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("c8e5d878-daff-4659-abaa-28acb58fc70f")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);