// Hide loading overlay <div /> (with spinner) after page complete loading. After hiding,
//   <div /> will be removed, and for <body> removed css class 'noscroll'
let _loading_spinner = setInterval(function () {

	if (document.readyState === 'complete') {

		let $page_loading = document.getElementById('page_loading'),
			$body = document.body || document.getElementsByTagName('body')[0],
			speed = 400,
			delay = 200,
			$backColor = '#ffffff',
			$loadAnimation = '0'
			;

		if ((typeof $page_loading != 'undefined') && ($page_loading != null)) {

			setTimeout(function () {
				let transition = 'all ' + speed.toString() + 'ms ease-in-out',
					removeCssClass = function (obj, className) {
						obj.className = obj.className.replace(className, '').replace('  ', ' ');
					}
				;

				['-webkit-transition', '-moz-transition', 'transition'].forEach(function (prefix) {
					$page_loading.style[prefix] = transition;
				});

				$page_loading.style['opacity'] = $loadAnimation;
				$page_loading.style['-webkit-transform'] = $loadAnimation;
				$page_loading.style['background-color'] = $backColor;
				$page_loading.style['filter'] = 'alpha(opacity=0)';
				removeCssClass($body, 'noscroll');

				setTimeout(function () {
					$page_loading.parentNode.removeChild($page_loading);
				}, speed);

			}, delay);
		}

		clearInterval(_loading_spinner);
	}
}, 2);