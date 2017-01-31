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
		title_animate = new TimelineMax(tmax_options_icons),

		path = document.getElementById("han_d"),
		first_title = document.getElementById("first_title"),
		insta = document.getElementById("instagram_stroke"),
		git = document.getElementById("git_stroke"),
		twitter = document.getElementById("twitter_stroke"),
		medium = document.getElementById("medium_stroke");

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

title_animate
		.to(first_title, .8, {css:{'opacity': 1}});


var mainLogoBlock = $(".logo, .social_links"),
		logo_header = document.getElementById("logo_header");

$(window).scroll(function(){
		mainLogoBlock.css("opacity", 1 - $(window).scrollTop() / (window.innerHeight - 310) );
		if (mainLogoBlock.css('opacity') <= 0.1){
				$(logo_header).fadeIn("slow");
		}else{
				$(logo_header).fadeOut("slow");
		}
});

$('#logo_header').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
});

var controller = new ScrollMagic.Controller();
var animateElem = document.getElementById("animate");
var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onEnter",
		offset: 100
		})
		.on("enter", function () {
		})
		.on("leave", function () {
		})
		.addIndicators()
		.addTo(controller);