$(document).ready(function () {

});

/** Accordion 
****************************************/
$('.Accordion').each(function () {
	if (!$(this).hasClass('manualfn')) {
    var options = {
      item: '.item',
      target: '.target',
      control: '.target', // in this case the target is also acting as the control
      panel: '.panel',
      allowMultiple: true,
      attribute: 'data-status',
      expanded: 'expanded',
      contracted: 'contracted',
      prefix: 'Accordion-',
      transition: 'height .3s',
      transitionSupport: true,
      setFocus: 'none', // options: none, item, panel, target, control, first
      hashEnabled: false // use hash in URL to open accordion item
  };
  
  new Accordion('.Accordion', options);
		// if ($(this).hasClass('multiple')) {
		// 	defaultAcc = new Accordion($(this), {
		// 		allowMultiple: true,
		// 		panel: '.panel',
		// 		transition: 'height .0s',
		// 		transitionSupport: true,
		// 		setFocus: 'first'
		// 	});
		// } else {
		// 	var $name = $(this).attr('id'),
		// 			$item = $('#' + $name).find('> .item'),
		// 			$penel = $($item).find('> .panel'),
		// 			$target = $($item).find('> .target'),
		// 			$control = $($item).find('> .target');

		// 	defaultAcc = new Accordion($(this), {
		// 		allowMultiple: false,
		// 		item: $item,
		// 		panel: $penel,
		// 		target: $target,
		// 		control: $control,
		// 		prefix: $name,
		// 		transition: 'height .0s',
		// 		transitionSupport: true,
		// 		setFocus: 'first',
		// 		hashEnabled: true
		// 	});
		// }
	}
});
