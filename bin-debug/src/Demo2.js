var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by 雷 on 2015/3/23.
 */
var Demo2 = (function (_super) {
    __extends(Demo2, _super);
    /**构造函数*/
    function Demo2() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }
    /**
     * load resource
     */
    Demo2.prototype.loadResource = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("demo2");
    };
    /**
     * when it loaded, it can be used.
     */
    Demo2.prototype.onResourceLoadComplete = function (event) {
        this.logo = new egret.Bitmap();
        this.logo.texture = RES.getRes("egretIcon");
        this.addChild(this.logo);
        this.logo.touchEnabled = true; //可点击
        this.logo.width = this.logo.height = 100; //设置尺寸
        //        this.logo.scaleX = this.logo.scaleY = 0.5;//设置缩放
        //        this.logo.rotation = 45;//旋转
        this.logo.skewX = 45; //斜切
        this.logo.anchorX = 0.5; //设置中心点的位置，实现围绕中心旋转
        this.logo.anchorY = 0.5; //同上
        this.startAnimation();
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes("icons.activity_10");
        bitmap.x = 100;
        bitmap.y = 100;
        this.addChild(bitmap);
    };
    Demo2.prototype.startAnimation = function () {
        var tw = egret.Tween.get(this.logo);
        tw.to({ x: 280, y: 0 }, 500).to({ x: 280, y: 300 }, 500).to({ x: 0, y: 300 }, 500).to({ x: 0, y: 0 }, 500);
        tw.call(this.startAnimation, this);
    };
    /**游戏启动后，会自动执行此方法*/
    Demo2.prototype.startGame = function () {
        this.loadResource();
    };
    return Demo2;
})(egret.DisplayObjectContainer);
Demo2.prototype.__class__ = "Demo2";
