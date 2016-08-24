/**
 * Created by M1rotvorez on 12.08.16.
 */

var $hand = $('#hand');
var $container = $('.poster');

$container.on('mousemove', function(e) {
		var w = $(window).width() , //window width
				h = $(window).height(), //window height
				offsetX = 0.5 - e.pageX / w, //cursor position X
				offsetY = 0.5 - e.pageY / h; //cursor position Y
		$hand.each(function() {
				var $this = $(this),
						offsetLayer = 140,
						transformLayer = 'rotateY('+ (offsetX * offsetLayer) +'deg) rotateX('+ (offsetY * 30) +'deg)' ;
				$this.css({
								'transform' : transformLayer,
								'transition-duration': '.1s'
						}
				);
		});
});

$container.mouseout(function () {
		$hand.css({
				'transform': 'rotateY(0deg) rotateX(0deg)',
				'transition-duration': '.7s'
		})
});

$container.mouseenter(function () {
		$hand.css({
				'transition-duration': '.9s'
		})
});

var tmax_options = {
		delay: 0,
		paused: false,
		onComplete: function() {
				console.log('animation is complete');
		},
		onCompleteScope: function() {
				console.log('animation scope is complete');
		},
		tweens: [],
		stagger: 0,
		align: 'normal',
		useFrames: false,
		onStart: function() {
				console.log('on start called');
		},
		onStartScope: function() {
				console.log('on start scope called');
		},
		onUpdate: function() {
				console.log('on update called');
		},
		onUpdateScope: function() {
				console.log('on update scope called');
		},
		onRepeat: function() {
				console.log('on repeat called');
		},
		onRepeatScope: function() {
				console.log('on repeat scope called');
		},
		onReverseComplete: function() {
				console.log('on reverse complete');
		},
		onReverseCompleteScope: function() {
				console.log('on reverse complete scope called');
		},
		autoRemoveChildren: false,
		smoothChildTiming: false,
		repeat: 0,
		repeatDelay: 0,
		yoyo: false,
		onCompleteParams: [],
		onReverseCompleteParams: [],
		onStartParams: [],
		onUpdateParams: [],
		onRepeatParams: []
};

var tl = new TimelineMax(tmax_options),
		path = document.getElementById("han_d"),
		sky = document.getElementsByClassName('cb-intro');

tl.to(path, 2, {css:{'stroke-dashoffset': 0},	ease: Power2.easeInOut})
	.to(path, 1, {css:{'fill-opacity': 1}});
// 	.to(sky, .9, {css:{'opacity': '0.5'}});


var drow_words = new TimelineMax(tmax_options);

drow_words.staggerTo(".word_drow", 2, {css:{'stroke-dashoffset': 0},	ease: Power2.easeInOut})
					.staggerTo(".word_drow", 1 ,{css:{'fill-opacity': 1}});

