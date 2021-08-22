$(document).ready(function () {
	headFixed();

	if($('[role="dialog"]').length > 0) popupLayer();
	if($('.toggle_trigger').length > 0) toggleContent();
});
/** Aria boolean 
****************************************/
function toggleBool(props, attrName) {
	props.each(function() {
		$(this).attr(attrName, $(this).attr(attrName) == "false" ? "true" : "false");
	});
}

/** Pverlay popup Set
****************************************/
var popupLayer = function() {
	$(document).on('click', '[aria-haspopup="dialog"]:not(".manual_fn")', function(e){
		var diaId = '#' + $(this).attr('aria-controls');
		openLayer(diaId);
		e.preventDefault();
	});
	$(document).on('click', '[role="dialog"] .overlay_closer button, .btn_close', function(e){
		closeLayer('#' + $(this).closest('[role="dialog"]').attr('id'));
		e.preventDefault();
	});
}

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


/** Overlay Popup  
****************************************/
var currentPosition = 0;
var parentPop;
function setPopupCenter($target) {
	var center = 0,
		targetHeight = $target.find(".contents").height();
	if ($(window).height() < targetHeight) {
		$target.find(".contents").css('margin-top','0');
	} else {
		$target.find(".contents").css({
			"margin-top": ($(window).height() - targetHeight) / 2,
		});
	}
}
var isOpen = false;
var openLayer = function(target){
	var $target = $(target),
		$opener = $('#' + $target.attr('aria-labelledby'));

	currentPosition = $(window).scrollTop();
	$target.show();
	if($target.is('[class^="overlay-"]')){
		setPopupCenter($target)
	}
	$(window).resize(function() {
		if ($('[class^="overlay-"]').is(':visible')) {
			setPopupCenter($target);
		}
	});
	toggleBool($opener, 'aria-pressed');
	$('body').addClass('noscroll');

	if($('[role="dialog"]:visible').length <= 1 && isOpen == false) {
		$('.contents_body').css('top',-currentPosition);
		isOpen = true
	}
	if($('[role="dialog"]:visible').length > 1 && $('[role="dialog"]:visible').attr('class').indexOf('popup_') != -1) {
		parentPop = $('[role="dialog"]:visible').not(target).attr('id');
		var popPosition = $('#'+parentPop).find('.contents').scrollTop();
		$('#'+parentPop).css('oveflow','hidden');
		$('#'+parentPop).find('.contents').css({'position':'fixed','overflow':'hidden'});

	}
}
var closeLayer = function(target){
	var $target = $(target);
	var $opener = $('#' + $target.attr('aria-labelledby'));
	$target.hide();
	toggleBool($opener, 'aria-pressed');
	currentPosition = -(parseInt($('.contents_body').css('top')));
	if($('[role="dialog"]:visible').length < 1) {
		$('body').removeClass('noscroll').find('.contents_body').css({'position':'relative','top':0});
		$(window).scrollTop( currentPosition );
		isOpen = false;
	}
	if($('[role="dialog"]:visible').length >= 1 && $('[role="dialog"]:visible').attr('class').indexOf('popup_') != -1) {
		parentPop = $('[role="dialog"]:visible').not(target).attr('id');
		$('#'+parentPop).find('.contents').css({'position':'static','overflow':'scroll'});
	}
}
var popupControl = function(){
	$('[aria-haspopup="dialog"]').click(function(event){
		var $self = $(this);
		var $target = $( '#' + $self.attr('aria-controls') );
		toggleBool($self,'aria-pressed');
		openLayer($target);
		function closeNfocus() {
			$target.hide();
			$self.focus();
		}
		$(document).keyup(function(e) { // escape key event for work
			if (e.keyCode == 27) {
				closeNfocus();
			}
		});
		return false;
	});
	$('[role="dialog"] .overlay_closer button').click(function(){
		var $self = $(this);
		var $target = $self.parentsUntil('[role="dialog"]').parent("div[role='dialog']");
		var $opener = $( '#' + $target.attr('aria-labelledby') );
		closeLayer($target);
		toggleBool($opener,'aria-pressed');
		$(this).closest('[role="dialog"]').hide();
		$opener.focus();
	});
}

/** toggle contents
****************************************/
var toggleContent = function() {
	$(document).on('click', '.toggle_trigger:not(".manual_fn")', function(e) {
		toggleControl(this);
	});
}