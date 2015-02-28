define(['./module'], function(directives) {
    'use strict';
    directives.directive('loadSrc', ['$timeout',
        function($timeout) {
            return {
                link: function(scope, element, attrs) {
                    var img, loadImage;
                    img = null;

                    loadImage = function() {

                        element[0].src = "http://www.minuotao.com/src/img/20130204080533696.jpg";

                        img = new Image();
                        img.src = attrs.loadSrc;
                        element.removeClass('animated fadeIn');

                        img.onload = function() {
                            $timeout(function() {
                                element[0].src = attrs.loadSrc;
                                element.addClass('animated fadeIn');
                            }, 100);
                        };
                    };

                    scope.$watch((function() {
                        return attrs.loadSrc;
                    }), function(newVal, oldVal) {
                        if (oldVal !== newVal) {
                            loadImage();
                        }
                    });
                }
            };
        }
    ]);
});