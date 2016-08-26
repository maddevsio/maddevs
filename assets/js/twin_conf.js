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
		drow_words = new TimelineMax(tmax_options),
		path = document.getElementById("han_d"),
		insta = document.getElementById("instagram_stroke"),
		git = document.getElementById("git_stroke");

tl.to(path, 2, {css:{'stroke-dashoffset': 0},	ease: Power2.easeInOut})
	.to(git, .5, {css:{'fill-opacity': 1}})
	.to(path, 1, {css:{'fill-opacity': 1}});

drow_words.staggerTo(".word_drow", 2, {css:{'stroke-dashoffset': 0}, ease: Power2.easeInOut})
					.to(insta, .5, {css:{'fill-opacity': 1}})
					.staggerTo(".word_drow", 1 ,{css:{'fill-opacity': 1}});


