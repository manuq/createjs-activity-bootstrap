define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var createjs = require("easel");
    var Tween = require("tween");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        //Draw a square on screen.
        var canvas = document.getElementById('game');
        var stage = new createjs.Stage(canvas);
        var shape = new createjs.Shape();
        shape.graphics.beginFill('rgba(255,0,0,1)').drawRoundRect(0, 0, 120, 120, 10);
        stage.addChild(shape);
        stage.update();

    });

});
