$(document).ready(function () {

});

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
