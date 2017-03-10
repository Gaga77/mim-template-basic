var app = (function app(){
    "use strict";

    var start, observer, dom, setupCSS;

    start = function start() {
        dom = {};
        dom.body = select('body');
        log('app is ready to rock!!!');
        setupCSS();
        observer();
        session2.exo2();

        if (select('.page.portfolio')){
            portfolio.createChart();
        }
    };

    observer = function observer() {
        window.onresize = setupCSS;
    };

    setupCSS = function setupCSS() {
        var css, width = window.innerWidth;
        if (width >= 320 && width < 550) {
            css='phone';
        } else if ( width >= 551 && width < 768) {
            css ='phablet';
        } else if (width >= 769 && width < 1080) {
            css="tablet";
        } else if ( width >= 1081 && width < 1280){
            css= 'laptop';
        } else {
            css="desktop";
        }

        dom.body.className = css;
    }

    return {
        start: start
    };

}());
