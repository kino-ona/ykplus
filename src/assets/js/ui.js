$(document).ready(function () {
	headFixed();
});

function headFixed(){
	var $header = $(".header"),
		  headerH = $header.outerHeight();

	var lastSt = 0;
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if (st > 50) {
			$header.addClass('fixed');
		}else{
			$header.removeClass('fixed');
		}	

		if (st > lastSt) {
			$header.removeClass('show').addClass('hide')
		} else {
			$header.removeClass('hide').addClass('show')
		}

		lastSt = st;
	});
	$.fn.scrollStopped = function(callback) {
		var that = this, $this = $(that);
		$this.scroll(function(ev) {
			clearTimeout($this.data('scrollTimeout'));
			$this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
		});
	};
	$(window).scrollStopped(function(ev){
		if ($('.header').length > 0) {
			$('.header').removeClass('hide').addClass('show')
		}
	});
}



/** Accordion 
****************************************/
$('.ui-accordion').each(function () {
	if (!$(this).hasClass('manualfn')) {
		if ($(this).hasClass('multiple')) {
			new Accordion('.ui-accordion', {
				item: '.item',
				target: '.target',
				control: '.target',
				panel: '.panel',
				allowMultiple: true,
				attribute: 'data-status',
				expanded: 'expanded',
				contracted: 'contracted',
				prefix: 'Accordion-',
				transition: 'height .3s',
				transitionSupport: true,
				setFocus: 'none',
				hashEnabled: false
			});
		} else {
			new Accordion('.ui-accordion', {
				item: '.item',
				target: '.target',
				control: '.target',
				panel: '.panel',
				allowMultiple: false,
				attribute: 'data-status',
				expanded: 'expanded',
				contracted: 'contracted',
				prefix: 'Accordion-',
				transition: 'height .3s',
				transitionSupport: true,
				setFocus: 'none',
				hashEnabled: false
			});
		}
	}
});


/** Tab control 
****************************************/
var actvTabList = function(tabid, actNum){
	var basicTabs = new Tabs('#' + tabid);
	if(!actNum) actNum = 0;
	
	basicTabs.activate(actNum);
}
$('.tab_wrap').each(function(){  // default
	var tabIdx = $(this).attr('id');
	
	if(!$(this).hasClass('manualfn')){
		var basicTabs = new Tabs('#' + tabIdx);
	}	
});