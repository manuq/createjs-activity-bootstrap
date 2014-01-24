requirejs.config({
    baseUrl: "lib",
    shim: {
        easel: {
            exports: 'createjs'
        },
        tween: {
            deps: ['easel'],
            exports: 'Tween'
        }
    },
    paths: {
        activity: "../js",
        easel: 'easeljs',
        tween: 'tweenjs'
    }
});

requirejs(["activity/activity"]);
