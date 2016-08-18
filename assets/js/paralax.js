/**
 * Created by M1rotvorez on 12.08.16.
 */

var $hand = $('#hand'),
		$red = $('#red');
$(document).ready(function() {
		$('#hend').css({
				'transition-duration': '.3s'
		});
});
$(window).on('mousemove', function(e) {
		var w = $(window).width(), //window width
				h = $(window).height(), //window height
				offsetX = 0.5 - e.pageX / w, //cursor position X
				offsetY = 0.5 - e.pageY / h; //cursor position Y
		$hand.each(function() {
				var $this = $(this),
						offsetLayer = 50,
						transformLayer = 'translateX(' + offsetX * (offsetLayer / 40)+ 'px) translateY(' + offsetY * (offsetLayer / 40) + 'px) rotateY('+ (offsetX * offsetLayer) +'deg) rotateX('+ (offsetY * 10) +'deg)' ;
				$this.css('transform', transformLayer);
				$('#hand').css({
						'transition-duration': '.0s'
				});
		});
});