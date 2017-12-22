var tmax_options = {
		delay: 0,
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

var tmax_options_icons = {
		delay: 1,
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
		icons_animate_linkidin = new TimelineMax (tmax_options_icons),
		icons_animate_youtube = new TimelineMax (tmax_options_icons),
		icons_animate_telegram = new TimelineMax (tmax_options_icons),
		icons_animate_facebook = new TimelineMax (tmax_options_icons),
		icons_animate_behance = new TimelineMax (tmax_options_icons),
		title_animate = new TimelineMax(tmax_options_icons),

		path = document.getElementById("han_d"),
		first_title = document.getElementById("first_title"),
		insta = document.getElementById("instagram_stroke"),
		git = document.getElementById("git_stroke"),
		twitter = document.getElementById("twitter_stroke"),
		medium = document.getElementById("medium_stroke"),
		slideshare = document.getElementById("slideshare"),
		telegram = document.getElementById("telegram"),
		behance = document.getElementById("behance"),
		youtube = document.getElementById("youtube-stroke");
		facebook = document.getElementById("facebook");
tl
		.to(path, 1, {css:{'stroke-dashoffset': 0},	ease: Power2.easeInOut})
		.to(path, 1, {css:{'fill-opacity': 1}});

drow_words
		.staggerTo(".word_drow", 1, {css:{'stroke-dashoffset': 0}, ease: Power2.easeInOut})
		.staggerTo(".word_drow", 1.5 ,{css:{'fill-opacity': 1}});

icons_animate_inst
		.to(insta, .5, {css:{'fill-opacity': 1}})
		.to(first_title, .9, {css:{'opacity': 1}} );

icons_animate_git
		.to(git, .5, {css:{'fill-opacity': 1}});

icons_animate_twitter
		.to(twitter, .5, {css:{'fill-opacity': 1}});

icons_animate_medium
		.to(medium, .5, {css:{'fill-opacity': 1}});

icons_animate_linkidin
		.to(slideshare, .5, {css:{'fill-opacity': 1}});

icons_animate_youtube
		.to(youtube, .5, {css:{'fill-opacity': 1}});

icons_animate_facebook
		.to(facebook, .5, {css:{'fill-opacity': 1}});

icons_animate_telegram
		.to(telegram, .5, {css:{'fill-opacity': 1}});

icons_animate_behance
		.to(behance, .5, {css:{'fill-opacity': 1}});

title_animate
		.to(first_title, .8, {css:{'opacity': 1}});

$('#logo_header').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
});

var controller = new ScrollMagic.Controller();

var tween_projects = TweenMax.to(".animate_project", .6, {paddingTop: 0, autoAlpha: 1, scale: 1});
var tween_using = TweenMax.to(".animate_using", .6, {paddingTop: 0, autoAlpha: 1, scale: 1});
var tween_participate = TweenMax.to(".animate_participate", .6, {paddingTop: 0, autoAlpha: 1, scale: 1});
var tween_logo = TweenMax.to("#logo_header", .6, { autoAlpha: 1});


var scene = new ScrollMagic.Scene({
		triggerElement: ".projects",
		triggerHook: "onEnter",
		offset: 120
		})
		.setTween(tween_projects)
		.addTo(controller);

var scene2 = new ScrollMagic.Scene({
		triggerElement: ".using",
		triggerHook: "onEnter",
		offset: 120
})
		.setTween(tween_using)
		.addTo(controller);

var scene3 = new ScrollMagic.Scene({
		triggerElement: ".participate",
		triggerHook: "onEnter",
		offset: 120
})
		.setTween(tween_participate)
		.addTo(controller);

controller.scrollTo(function (newpos) {
		TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});


var scene4 = new ScrollMagic.Scene({
		triggerElement: ".social_links",
		triggerHook: "onLeave"
})
		.setTween(tween_logo)
		.addTo(controller);
