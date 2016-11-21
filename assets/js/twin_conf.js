var tmax_options = {
		delay: 0,
		paused: false,
		onComplete: function() {
				console.log('animation is complete');
		},
		onCompleteScope: function() {
				console.log('animation sco0pe is complete');
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

var tmax_options_icons = {
		delay: 2,
		paused: false,
		tweens: [],
		stagger: 0,
		align: 'normal',
		useFrames: false,
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

		icons_animate_git = new TimelineMax (tmax_options_icons),
		icons_animate_twitter = new TimelineMax (tmax_options_icons),
		icons_animate_inst = new TimelineMax (tmax_options_icons),
		icons_animate_medium = new TimelineMax (tmax_options_icons),

		path = document.getElementById("han_d"),
		insta = document.getElementById("instagram_stroke"),
		git = document.getElementById("git_stroke"),
		twitter = document.getElementById("twitter_stroke"),
		medium = document.getElementById("medium_stroke");

tl
		.to(path, 2, {css:{'stroke-dashoffset': 0},	ease: Power2.easeInOut})
		.to(path, 1, {css:{'fill-opacity': 1}});

drow_words
		.staggerTo(".word_drow", 2, {css:{'stroke-dashoffset': 0}, ease: Power2.easeInOut})
		.staggerTo(".word_drow", 1 ,{css:{'fill-opacity': 1}});

icons_animate_inst
		.to(insta, .5, {css:{'fill-opacity': 1}});

icons_animate_git
		.to(git, .5, {css:{'fill-opacity': 1}});

icons_animate_twitter
		.to(twitter, .5, {css:{'fill-opacity': 1}});

icons_animate_medium
		.to(medium, .5, {css:{'fill-opacity': 1}});