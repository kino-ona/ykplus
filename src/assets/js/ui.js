$(document).ready(function () {
	headFixed();
	headGnbMenu();

	if($('[role="dialog"]').length > 0) popupLayer();
	if($('.toggle_trigger').length > 0) toggleContent();
	if($('.datepicker').length > 0) datepickerControl();

});

function calenderHide() {
	$('.datepicker').datepicker('hide');
	$('.overlay-dimmed').remove()
}

/** Aria boolean
****************************************/
function toggleBool(props, attrName) {
	props.each(function() {
		$(this).attr(attrName, $(this).attr(attrName) == "false" ? "true" : "false");
	});
}


/** Overlay popup Set
****************************************/
var popupLayer = function() {
	$(document).on('click', '[aria-haspopup="dialog"]:not(".manual_fn")', function(e){
		var diaId = '#' + $(this).attr('aria-controls');
		openLayer(diaId);
		//console.log(diaId)
		e.preventDefault();
	});
	$(document).on('click', '[role="dialog"] .overlay_closer button, [role="dialog"] .btn_close', function(e){
		closeLayer('#' + $(this).closest('[role="dialog"]').attr('id'));
		e.preventDefault();
	});
}


/** Header Set
****************************************/
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
		if (st < 2) {
			$header.removeClass('hide').addClass('show')
		}

		if($('.header .dropdown_list').find('.item_box').hasClass('active')) {
			$('.header .dropdown_list').find('.dropdown_value').attr('aria-expanded', 'false');
			$('.header .dropdown_list').find('.item_box').removeClass('active');
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

function headGnbMenu(){
	$("#gnbmenubtn").click(function(e) {
		e.preventDefault();
		$('.gnb-menu').addClass('show');
		$(".header").addClass('on').find(".item_box").removeClass('active');
		$('body').addClass('noscroll');
	});
	$(".gnb-head .util .gnb_btn-close").click(function(e) {
		e.preventDefault();
		$('.gnb-menu').removeClass('show');
		$(".header").removeClass('on');
		$('body').removeClass('noscroll');
	});
	$.fn.scrollreset = function(callback) {
		var that = this, $this = $(that);
		$this.scroll(function(ev) {
			clearTimeout($this.data('scrollTimeout'));
			$this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
		});
	};
	$(window).scrollreset(function(ev){
		if ($('.header').hasClass('on')) {
			$('.header').removeClass('hide').removeClass('show');
		}
	});
}

/** Overlay popup Set
****************************************/


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
			if(!$('.ui-accordion').parents('.replyarea_wrap').length > 0) {
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
	}
});
function replyAccordion(){
	$('.replyarea_wrap .ui-accordion').find('.item').each(function () {
		$(this).find('.btn_all').click(function(){
			if($(this).parents('.item').find('.panel').hasClass('hide')){
				$(this).removeClass('hide')
				$(this).parents('.item').find('.panel').removeClass('hide')
			}else{
				$(this).addClass('hide')
				$(this).parents('.item').find('.panel').addClass('hide')
			}
		});
	});
}
function reviewAccordion(){
	$('.review_sec .ui-accordion').find('.item').each(function () {
		$(this).click(function(){
			var status = $(this).find('.target').attr('aria-expanded');
			$(this).siblings('.panel-status').attr('aria-expanded', status);
		});
	});
}


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

var openFixedBottom = function(target){
	var $target = $(target),
		  $opener = $('#' + $target.attr('aria-labelledby'));
	var fixedbtmH = $('.fixed_bottom').height();	

	currentPosition = $(window).scrollTop();

	toggleBool($opener, 'aria-pressed');
	$('body').addClass('noscroll');

	if($('[role="dialog"]:visible').length <= 1 && isOpen == false) {
		$('.contents_body').css('top',-currentPosition);
		isOpen = true
	}
	toggleBool($opener, 'aria-pressed');
	if(fixedbtmH > 0) {
		$target.addClass('show');
		$target.css('display', 'block')
		var delay = setTimeout(function () {
			$target.find('.inner_wrap').css({
				'bottom': fixedbtmH
			})
			clearTimeout(delay);
		}, 50);
	}
}
var closeFixedBottom = function(target){
	var $target = $(target),
		  $opener = $('#' + $target.attr('aria-labelledby'));
	
	$target.removeClass('show');
	$target.css({
		'display': 'none'
	})
	var delay = setTimeout(function () {
		$target.find('.inner_wrap').css({
			'bottom': '-100%'
		})
		clearTimeout(delay);
	}, 50);
	toggleBool($opener, 'aria-pressed');
	currentPosition = -(parseInt($('.contents_body').css('top')));	

	$('body').removeClass('noscroll').find('.contents_body').css({'position':'relative','top':0});
	$(window).scrollTop( currentPosition );
	isOpen = false;
}


/** toggle contents
****************************************/
var toggleContent = function() {
	$(document).on('click', '.toggle_trigger:not(".manual_fn")', function(e) {
		toggleControl(this);
	});
}

// tab pagination
$(document).ready(function() {
	if($('.tab-navigation .tab-row p').length > 0) tabposSet();
});
var tabposSet = function(){
	$('.tab-navigation').each(function() {
		var $tablist = $(this).find('.tab-row'),
				$tabWidth = $tablist.outerWidth(true);
		
		$(this).find('.tab-row p').each(function() {
			$(this).find('button').on('click', function(e){
				$tablist.find('button').attr('aria-selected', false);
				if(!$(this).attr('aria-selected', true)){
					var $element = $(this);
					$element.attr('aria-selected', true);
				}
				
				$tablist.find('button').removeClass('active');
				if(!$(this).hasClass('active')){
					var $element = $(this);
					$tablist.find('p').removeClass('active');
					$element.addClass('active');
					$element.parent('p').addClass('active');
				}
			});
		});

	});
}


/** default swiper function
****************************************/
function defaultSwipe(swipeId, $perView, $space){
	var setEle = $('#'+swipeId);
	
	if(setEle.length > 0) {
		var $id = eval(swipeId);
		if (!$perView) $perView = "auto";
		if (!$space) $space = 0;

		var defaultSwipe = new Swiper($id, {
			slidesPerView: $perView,
			spaceBetween: $space,
			speed: 400,
		});
	}
}


/** dropdown list
****************************************/
$(document).ready(function() {
	if( $('.dropdown_list').length > 0 ) { dropdownControl(); }
});
var dropdownControl = function () {
	$(".dropdown_list .btn_opener").off('click.dropdown').on('click.dropdown', function () {
		var $dropdown = $(this).closest('.dropdown_value'),
			$allDropdown = $('.dropdown_value[aria-expanded="true"]').not($dropdown);
		$dropdown.find('.btn_opener').removeClass('show');
		$allDropdown.removeClass('active');
		$dropdown.siblings('.item_list').removeClass('active');
		$allDropdown.attr('aria-expanded', 'false');

		if ($dropdown.attr('aria-expanded') == 'true') {
			$dropdown.attr('aria-expanded', 'false');
			$dropdown.siblings('.item_list').removeClass('active');
			$dropdown.siblings('.item_box').removeClass('active');
		} else {
			$dropdown.attr('aria-expanded', 'true');
			$dropdown.siblings('.item_list').addClass('active');
			$dropdown.siblings('.item_box').addClass('active');
			$dropdown.find('.btn_opener').addClass('show');
		}

		return false;
	});
}


/** click util popup
****************************************/
$(document).ready(function() {
	if( $('.click-util').length > 0 ) { clickUtilControl(); }
});
var clickUtilControl = function () {
	$('.click-util').unbind('click').bind('click',function(e){
		target = $(e.target);
		var p = $(target).position();
		var divWidth = $(this).siblings('.util-pop').width();
		var divTop 	= p.top + 25; //상단 좌표 
		var divLeft = p.left - divWidth ; //좌측 좌표 

		if($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).siblings('.util-pop').hide();
		} else {
			$(this).addClass('active')
			$(this).siblings('.util-pop').css({ 
				"z-index":'100',
				"top": divTop ,
				"left": divLeft
			}).show();
		}
	
		return false;
	});
}


/** youtube/video
****************************************/
function youtube_play_api(){
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$('.videoplay_area').each(function(i) {
		var control = $(this).find('.vplay_button');
		if($(this).find('iframe#youtube_video').length > 0) {
			control.click(function(){
				control.next('iframe#youtube_video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
				control.hide();
				$(this).parents('.videoplay_area').addClass('hide');
			});
		} 
		if($(this).find('video').length > 0) {
			control.click(function(){
				if(control.hasClass('pause')) {
					control.next('video').get(0).pause();
					control.removeClass('pause');
				}else{
					control.next('video').get(0).play();
					control.addClass('pause');
				}
			})
		}
	});
}

var lightboxClose = function () {
	$('#lightbox-overlay').removeClass('visible');
	$('body').removeClass('noscroll');

	$('#postgallerySwp').remove();
	$('.lightbox-overlay').append('<div id="postgallerySwp" class="swiper-container"><div class="swiper-wrapper"></div></div>');

}

var loadingshow = function () {
	$('.loadingBox').addClass('show');
	$('body').addClass('noscroll');
}
var loadinghide = function () {
	$('.loadingBox').removeClass('show');
	$('body').removeClass('noscroll');
}
