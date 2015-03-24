/**
 * Created by 雷 on 2015/3/23.
 */
class Demo2 extends egret.DisplayObjectContainer {

    /**test bitmap*/
    private logo:egret.Bitmap;

    /**
     * load resource
     */
    private loadResource():void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("demo2");
    }

    /**
     * when it loaded, it can be used.
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        this.logo = new egret.Bitmap();
        this.logo.texture = RES.getRes("egretIcon");
        this.addChild(this.logo);
        this.logo.touchEnabled = true;//可点击
        this.logo.width = this.logo.height = 100;//设置尺寸
//        this.logo.scaleX = this.logo.scaleY = 0.5;//设置缩放
//        this.logo.rotation = 45;//旋转
        this.logo.skewX = 45;//斜切
        this.logo.anchorX = 0.5;//设置中心点的位置，实现围绕中心旋转
        this.logo.anchorY = 0.5;//同上
        this.startAnimation();

        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes("icons.activity_10");
        bitmap.x = 100;
        bitmap.y = 100;
        this.addChild(bitmap);
    }

    private startAnimation():void {
        var tw = egret.Tween.get(this.logo);
        tw.to({x: 280, y: 0}, 500).to({x: 280, y: 300}, 500).to({x: 0, y: 300}, 500).to({x: 0, y: 0}, 500);
        tw.call(this.startAnimation, this);
    }

    /**构造函数*/
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }

    /**游戏启动后，会自动执行此方法*/
    public startGame():void {
        this.loadResource();
    }
}