"ui";
importClass(android.webkit.WebView);
importClass(android.webkit.ValueCallback);
importClass(android.webkit.WebChromeClient);
importClass(android.webkit.WebResourceResponse);
importClass(android.webkit.WebViewClient);
importClass(android.webkit.WebSettings);

//悬浮窗logo
importClass(java.lang.Runnable);
importClass(android.animation.ObjectAnimator)
importClass(android.animation.PropertyValuesHolder)
importClass(android.animation.ValueAnimator)
importClass(android.animation.AnimatorSet)
importClass(android.view.animation.AccelerateInterpolator)
importClass(android.view.animation.TranslateAnimation)
importClass(android.animation.ObjectAnimator)
importClass(android.animation.TimeInterpolator)
importClass(android.os.Bundle)
importClass(android.view.View)
importClass(android.view.Window)
importClass(android.view.Gravity)
importClass(android.graphics.Point)
importClass(android.content.IntentFilter)
importClass(android.content.Intent)

importClass(android.view.animation.AccelerateDecelerateInterpolator)
importClass(android.view.animation.AccelerateInterpolator)
importClass(android.view.animation.AnticipateInterpolator)
importClass(android.view.animation.AnticipateOvershootInterpolator)
importClass(android.view.animation.BounceInterpolator)
importClass(android.view.animation.CycleInterpolator)
importClass(android.view.animation.DecelerateInterpolator)
importClass(android.view.animation.LinearInterpolator)
importClass(android.view.animation.OvershootInterpolator)
importClass(android.view.animation.PathInterpolator)
importClass(android.widget.Button)
importClass(android.widget.ImageView)
importClass(android.widget.TextView)
// ---------web----------------------------------
ui.layout(
  '<webview id="web" h="*" w="*"  />'
);
ui.statusBarColor("#2196F3")
let web = ui.web;
let set = web.getSettings();

// 缩放
set.setDisplayZoomControls(false);
set.setSupportZoom(false);
set.setJavaScriptEnabled(true);

set.setUseWideViewPort(true);
set.setLoadWithOverviewMode(true);
set.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
set.setDomStorageEnabled(true);

web.setWebChromeClient(
  new JavaAdapter(WebChromeClient, {
    onJsPrompt: function (view, url, fnName, defaultValue, jsPromptResult) {
      console.log("接收到promtp: ", fnName, defaultValue);
      try {
        // threads.start(function () {
        //   eval("(" + fnName + ")()")
        //   // eval("(function(){log(10);log(20);})()")
        // })
        // fnName()
        // if (fnName == "aa") {
        //   threads.start(function () {
        //     log(menu)
        //     menu.close()
        //   })
        // }
        // log(JSON.parse(defaultValue))
        if (fnName == "onFloat") {
          threads.start(function () {
            floatUI.scripts = JSON.parse(defaultValue)
            floatUI.main()
          })
        }
      } catch (error) {
        console.trace(error);
      }
      jsPromptResult.confirm("ok");
      return true;
    },
  })
);

//加载html
web.loadUrl("http://192.168.0.103:8080/");



