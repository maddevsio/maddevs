/**
 * Created by M1rotvorez on 12.08.16.
 */

$(function(){
		for(i=0;i<4;i++){
				$('.buzz_wrapper .text span').eq(0).clone().prependTo('.buzz_wrapper .text');
		}
		for(i=0;i<10;i++){
				$('.buzz_wrapper .scanline').eq(0).clone().appendTo('.buzz_wrapper');
		}
});